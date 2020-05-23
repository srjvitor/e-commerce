const Purchase = require('../models/Purchase');
const User = require('../models/User');
const crypto = require('crypto');

class PurchaseController {
  async store(req, res) {

    const {
      seller_id,
	    purchaser_id,
      product_id,
    } = req.body;

    const id = crypto.randomBytes(6).toString('HEX');
    const status = 1;

    const createPurchase = await Purchase.create({
      id,
      seller_id,
	    purchaser_id,
      product_id,
      status
    });

    return res.status(201).json(createPurchase);
  }

  async index(req, res) {
    const purchaserExists = await Purchase.count({ where: { purchaser_id: req.query.purchaser_id } });

    if(purchaserExists == 0) {
      return res.status(400).json({ alerta: "Nenhuma compra realizada." });
    }

    const listPurchases = await Purchase.findAll({
      attributes: [
        'seller_id',
        'purchaser_id',
        'product_id',
        'status',
        'created_at',
        'updated_at'
      ],  
    });

    return res.json(listPurchases);
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

module.exports = new PurchaseController();