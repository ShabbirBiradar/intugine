const router = require("express").Router();
const jwt = require("jsonwebtoken");

let loginCreden = {
  email: "test@gmail.com",
  password: "password"
};

//Login

router.post("/login", async (req, res, next) => {
  const user = loginCreden.email === req.body.email ? true : false;
  console.log(req.body)
  if (!user)
    return res.status(400).send({ message: "Email or Password not maching!" });
  const password = loginCreden.password === req.body.password ? true : false;
  if (!password)
    return res.status(400).send({ message: "Invalid Credenatials!" });

  const token = await jwt.sign(
    { email: loginCreden.email },
    process.env.TOKEN_SCRET,
    {
      expiresIn: "1h"
    }
  );
  res.status(200).send(token);
});

module.exports = router;
