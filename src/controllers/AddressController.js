const Address = require('../models/Address')
const User = require('../models/User')


module.exports={
    
    async index(req,res){
        const{ user_id} = req.params

        const user = await User.findByPk(user_id,{ 
            include:{ association: 'addresses'}
        })
        if(!user){
            return res.status(400).json({error: 'User not found'})
        }
        
        return res.json(user)
    },

    async store(req,res){
        const{ user_id} = req.params
        const {zipcode, street, number} = req.body

        const user = await User.findByPk(user_id)
        if(!user){
            return res.status(400).json({error: 'User not found'})
        }

        const address = await Address.create({user_id,zipcode, street, number})
        return res.json(address)
    }, 

    async delete(req,res){
        const {address_id} = req.params

        const address = await Address.findByPk(address_id)
        if(!address){
            return res.status(400).json({error: 'Address not found'})
        }

        await Address.destroy({
            where: {
              id: address_id
            }
          });
        return res.json({result: 'OK'})


    }
}