const Product = require('../models/Product');
const crypto = require('crypto');

class ProductController {
  async store(req, res) {

    const { 
      id_salesman,
      name,
      description,
      category,
      new_product,
      price
     } = req.body;

    const id = crypto.randomBytes(6).toString('HEX');

    console.log(id);

    const productRegister = await Product.create({
      id,
      id_salesman,
      name,
      description,
      category,
      new_product,
      price
    });

    return res.status(201).json(productRegister);
  }

  async index(req, res) {
    const productExists = await Product.count();

    if(productExists == 0) {
      return res.status(400).json({ alerta: "Nenhum produto cadastrado." });
    }

    const listProducts = await Product.findAll();

    return res.json(listProducts);
  }

  async update(req, res) {
    const { id } = req.body;

    const productExists = await User.findByPk(id);

    if(productExists == null) {
      return res.status(400).json({ alerta: "Erro ao alterar. O produto não existe." });
    }

    const updateProduct = await userExists.update( req.body );

    return res.json(updateProduct);
  }

  async delete(req, res) {
    const productExists = await Product.count({ where: {id: req.params.id } })

    if(productExists == 0) {
      return res.status(400).json({ alerta: "Falha ao excluir. O produto não existe." });
    }

    const deleteProduct = await Product.destroy({ where: { id: req.params.id }});

    if(deleteProduct){
      return res.status(201).json({alert: "produto deletado com sucesso."});
    }else{
      return res.status(201).json({alert: "Falha ao deletar produto."});
    }
  }
}

module.exports = new ProductController();