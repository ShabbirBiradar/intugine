const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send({ message: "Access Denied!" });
  try {
    const verfied = jwt.verify(token, process.env.TOKEN_SCRET);
    req.user = verfied;
    next();
  } catch (error) {
    res.status(400).send({ message: "In valid Token" });
  }
};
