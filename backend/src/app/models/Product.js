const { Sequelize, Model } = require('sequelize');

class Product extends Model {
  static init(sequelize){
    super.init(
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true
        },
        
        salesman_id: Sequelize.STRING,
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        category: Sequelize.INTEGER,
        new_product: Sequelize.BOOLEAN,
        price: Sequelize.FLOAT
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Product;