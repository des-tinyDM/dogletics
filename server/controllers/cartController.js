let current_cart = null;

const getCart = (req, res) => {
  const db = req.app.get("db");
  // console.log(req.user.id)

  db.cart
    .getCart(req.user.id)
    .then(cart => {
      current_cart = cart[0].cart_id;
      console.log(`current cart:`, current_cart);
      res.status(200).json(cart);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

addToCart = (req, res) => {
  const db = req.app.get("db");
  const { item_id } = req.body;
  console.log(item_id);

  console.log(`current cart in addToCart:`, current_cart);
  current_cart === null
    ? db.cart
        .addToNewCart(req.user.id, item_id)
        .then(newCart => {
          db.cart
            .getCart(req.user.id)
            .then(cart => {
              console.log(`added item:`, newCart, `full cart:`, cart);
              res.status(200).json(cart);
            })
            .catch(err => {
              res.status(500).json(err);
              console.log(err);
            });
        })
        .catch(err => {
          res.status(500).json(err);
          console.log(err);
        })
    : db.cart
        .addToExistingCart(item_id, current_cart)
        .then(newCart => {
          db.cart
            .getCart(req.user.id)
            .then(cart => {
              console.log(`added item:`, newCart, `full cart:`, cart);
              res.status(200).json(cart);
            })
            .catch(err => {
              res.status(500).json(err);
              console.log(err);
            });
        })
        .catch(err => {
          res.status(500).json(err);
          console.log(err);
        });
};

const updateQty = (req, res) => {
  const { cart_id, item_id, quantity } = req.body;
  console.log(req.body);
  const db = req.app.get("db");

  quantity === 0
    ? console.log("remove")
    : db.cart
        .updateQty(cart_id, item_id, quantity)
        .then(cart => {
          res.status(200).json(cart);
          console.log(cart[0]);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
};

const removeFromCart = (req, res) => {};
module.exports = {
  getCart,
  addToCart,
  updateQty
};
