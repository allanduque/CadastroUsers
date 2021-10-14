const User = require('../models/User')

module.exports={
    async index(req,res){
        const user = await User.findAll()
        
        return res.json(user)
    },

    async store(req,res){
        const{ name, email, document} = req.body

        const user = await User.create({name, email, document})
        
        return res.json(user)
    }, 
    async delete(req,res){
        const {user_id} = req.params

        const user = await User.findByPk(user_id)
        if(!user){
            return res.status(400).json({error: 'User not found'})
        }

        await User.destroy({
            where: {
              id: user_id
            }
          });
        return res.json({result: 'OK'})


    }
}