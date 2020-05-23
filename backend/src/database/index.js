const Sequelize = require('sequelize');

const dataBaseConfig = require('../config/database');
const User = require('../app/models/User');
const Product = require('../app/models/Product');
const Purchase = require('../app/models/Purchase');
const Rating = require('../app/models/Rating');
const Product_image = require('../app/models/Product-image');

const models = [User, Product, Purchase, Rating, Product_image];

class dataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models.map(model => model.init(this.connection));
    //models.map(model => model.associate && model.associate(this.connection.models));
  }
}

module.exports = new dataBase();