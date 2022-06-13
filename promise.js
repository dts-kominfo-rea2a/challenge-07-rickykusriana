const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (data) => {
  let ixx = await promiseTheaterIXX();
  let vgc = await promiseTheaterVGC();
  let margeData = ixx.concat(vgc);
  let resultData = 0;
  margeData.map(x => x.hasil === data && (resultData += 1) )
  return resultData
};

module.exports = {
  promiseOutput,
};
