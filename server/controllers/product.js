const { User, Product, UserProduct } = require('../models');

class ProductController {
  static getItems(_, res, next) {
    Product.findAll().then((items) => {
      res
        .status(201)
        .json({
          message: 'Successfully get all items!',
          items,
        })
        .catch(next);
    });
  }

  static buyItems(req, res, next) {
    const ProductId = req.params.id;
    const { UserId } = req;

    const struct = {
      UserId,
      ProductId,
    };

    UserProduct.create(struct)
      .then((success) => {
        res.status(201).json({
          message: 'Successfully bought item!',
          success,
        });
      })
      .catch(next);
  }

  static shoppingCart(req, res, next) {
    const { UserId } = req;

    UserProduct.findAll({
      where: {
        UserId,
      },
      include: [User, Product],
    })
      .then((cart) => {
        res.status(200).json({
          message: 'Successfully retrieve shopping cart!',
          cart,
        });
      })
      .catch(next);
  }

  static cleanCart(req, res, next) {
    const { UserId } = req;

    UserProduct.destroy({
      where: {
        UserId,
      },
    })
      .then((deleted) => {
        res.status(201).json({
          message: 'Successfully deleted cart!',
          deleted,
        });
      })
      .catch(next);
  }
}

module.exports = ProductController;
