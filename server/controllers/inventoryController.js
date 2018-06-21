const getInventory = (req, res) => {
  const db = req.app.get("db");

  db.inventory
    .getInventory()
    .then(inventory => {
      res.status(200).json(inventory);
      console.log(inventory);
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
      console.log(sportInventory);
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

module.exports = {
  getInventory,
  getInventoryForSport,
  getProduct
};
