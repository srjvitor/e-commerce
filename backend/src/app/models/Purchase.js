const { Sequelize, Model } = require('sequelize');

class Purchase extends Model {
  static init(sequelize){
    super.init(
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true
        },

        seller_id: Sequelize.STRING,
        purchaser_id: Sequelize.STRING,
        product_id: Sequelize.STRING,
        status: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Purchase;