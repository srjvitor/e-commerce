const Rating = require('../models/Rating');

class RatingController {
  async store(req, res) {

    const ratingRegister = await Rating.create(req.body);

    return res.status(201).json(ratingRegister);
  }

  async index(req, res) {
    const ratingExists = await Rating.count({ where: {product_id: req.query.product_id }});

    if(ratingExists == 0) {
      return res.status(400).json({ alerta: "Este produto ainda não foi avaliado." });
    }

    const productRatings = await Rating.findAll({ where: {product_id: req.query.product_id }});

    return res.json(productRatings);
  }
}

module.exports = new RatingController();