const { Sequelize, Model } = require('sequelize');

class User extends Model {
  static init(sequelize){
    super.init(
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true
        },

        name: Sequelize.STRING,
        email: Sequelize.STRING,   
        email: Sequelize.STRING,  
        password_hash: Sequelize.STRING,  

        city: Sequelize.STRING,  
        state: Sequelize.STRING, 

        address: Sequelize.STRING,  
        address_number: Sequelize.INTEGER,  
        address_complement: Sequelize.STRING,  
        district: Sequelize.STRING,  

        security_lock: Sequelize.INTEGER,  
        status: Sequelize.BOOLEAN
      },
      {
        sequelize
      }
    );
  }
}

module.exports = User;