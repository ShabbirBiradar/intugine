const router = require("express").Router();
const verifyAuth = require("../../Validation/jwt");
const actions = require("../../actions/actions");

//get devlice list
router.get("/list/device", verifyAuth, async (req, res, next) => {
  const response = await actions
    .getDeviceList()
    .catch(e => res.status(403).send(e));
  res.status(200).send(response);
});

//get location list
router.get("/list/location", verifyAuth, async (req, res, next) => {
  const response = await actions
    .getLocation(req)
    .catch(e => res.status(403).send(e));
  res.status(200).send(response);
});
module.exports = router;
