const { Device, Status } = require("../model/Collections");

function getDeviceList() {
  return new Promise(async (resolve, rejects) => {
    const deviceList = await Device.find().catch(e => rejects(e));
    resolve(deviceList);
  });
}

function getLocation(req) {
  return new Promise(async (resolve, rejects) => {
    let page = req.query.page ? parseInt(req.query.page) : 1;
    let device = req.query.device;
    console.log("parameter: ", req.query);
    const LocationList = await Status.find({ device })
      .limit(page==0 ? 500 : 10)
      .skip(10 * page)
      .catch(e => rejects(e));
    resolve(LocationList);
  });
}

module.exports.getDeviceList = getDeviceList;
module.exports.getLocation = getLocation;
