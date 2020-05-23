const { Sequelize, Model } = require('sequelize');

class Product_image extends Model {
  static init(sequelize){
    super.init(
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true
        },
        
        product_id: Sequelize.STRING,
        name: Sequelize.STRING,
        src: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Product_image;