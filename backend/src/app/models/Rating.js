const { Sequelize, Model } = require('sequelize');

class Rating extends Model {
  static init(sequelize){
    super.init(
      {
        user_id: Sequelize.STRING,  
        product_id: Sequelize.STRING,  
        stars: Sequelize.INTEGER,  
        comment: Sequelize.STRING,  
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Rating;