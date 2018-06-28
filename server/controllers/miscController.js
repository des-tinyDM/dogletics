const getSportInfo = (req, res) => {
  const db = req.app.get("db");
  const { sport } = req.query;

  db.sport
    .getSportInfo(sport)
    .then(sportInfo => {
      res.status(200).json(sportInfo);
      console.log(`sportInfo`, sportInfo);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};
module.exports = {
  getSportInfo
};
