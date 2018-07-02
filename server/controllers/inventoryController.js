const getInventory = (req, res) => {
  const db = req.app.get("db");
  const { limit, offset } = req.query;
  db.inventory
    .getInventory(limit, offset)
    .then(inventory => {
      res.status(200).json(inventory);
      // console.log(inventory);
    })
    .catch(err => {
      res.status(500).json(err);
      console.log(err);
    });
};
const getInventoryForSport = (req, res) => {
  const db = req.app.get("db");
  const { sport } = req.query;
  db.inventory
    .getSportInventory(sport)
    .then(sportInventory => {
      // console.log(sportInventory);
      res.status(200).json(sportInventory);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

const getProduct = (req, res) => {
  const db = req.app.get("db");
  const { id } = req.query;

  db.inventory
    .getProduct(id)
    .then(product => {
      console.log(product);
      res.status(200).json(product);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

const getCategories = (req, res) => {
  const db = req.app.get("db");

  db.inventory
    .getCategories()
    .then(categories => {
      res.status(200).json(categories);
      console.log(categories);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = {
  getInventory,
  getInventoryForSport,
  getProduct,
  getCategories
};
