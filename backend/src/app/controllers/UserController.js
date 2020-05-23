const User = require('../models/User');
const crypto = require('crypto');

class UserController {
  async store(req, res) {

    const { 
      name,
      email,
      cpf,
      password_hash,
      city,  
      state,
      address,
      address_number,
      address_complement,  
      district,	
      zip_code		
     } = req.body;

    const emailExists = await User.findOne({ where: { email} });

    if (emailExists){
      return res.status(400).json({ alerta: "Email já cadastrado em outra conta." });
    }

    const security_lock = 0;
    const status = true;

    const id = crypto.randomBytes(6).toString('HEX');

    console.log(id);

    const createUser = await User.create({
      id,
      name,
      email,
      cpf,
      password_hash,
      city,  
      state,
      address,
      address_number,
      address_complement,  
      district,	
      zip_code,
      security_lock,
      status
    });

    return res.status(201).json(createUser);
  }

  async index(req, res) {
    const userExists = await User.count();

    if(userExists == 0) {
      return res.status(400).json({ alerta: "Nenhum usuário cadastrado." });
    }

    const listUser = await User.findAll();

    return res.json(listUser);
  }

  async update(req, res) {
    const { id } = req.body;

    const userExists = await User.findByPk(id);

    if(userExists == null) {
      return res.status(400).json({ alerta: "Erro ao alterar. Conta de usuário não existe." });
    }

    const updateUser = await userExists.update( req.body );

    return res.json(updateUser);
  }

  async delete(req, res) {
    const userExists = await User.count({ where: {id: req.params.id } })

    if(userExists == 0) {
      return res.status(400).json({ alerta: "Falha ao excluir. O usuário não existe." });
    }

    const deleteUser = await User.destroy({ where: { id: req.params.id }});

    if(deleteUser){
      return res.status(201).json({alert: "Usuário deletado com sucesso."});
    }else{
      return res.status(201).json({alert: "Falha ao deletar usuário."});
    }
  }
}

module.exports = new UserController();