const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
    create: async (req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };

            const response = await ServiceModel.create(service);

            res.status(201).json({ res, msg: "Serviço criado com sucesso!"});
        }catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro ao criar o serviço."});
        }
    },

getAll: async (req, res) =>  {
    try {
        const services = await ServiceModel.find();

      res.json(services);
    } catch (error) {
        console.log(error);
    }
  },  
  get: async (req, res) => {
    try {
        const id = req.params.id;
        const service = await ServiceModel.findById(id);

        res.json(service);
    } catch (error) {
        
    }
  }
};

module.exports = serviceController;