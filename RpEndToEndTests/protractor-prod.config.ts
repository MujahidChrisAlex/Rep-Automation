const dataBb = require("./bb-data.ts");
const dataRl = require("./rl-data.ts");
const dataGk = require("./gk-data.ts");
const defaultConfig = require("./protractor.config.ts");

let prodConfig = {
  specs: [
    "./specs/burtsbees/spec.ts",
    "./specs/burtsbees/spec2.ts",
    "./specs/burtsbees/spec3.ts",
    "./specs/burtsbees/spec4.ts",
    "./specs/burtsbees/spec5.ts",
    "./specs/renewlife/spec.ts",
    "./specs/renewlife/spec1.ts",
    "./specs/renewlife/spec2.ts",
    "./specs/renewlife/spec3.ts",
    "./specs/renewlife/spec4.ts",
    "./specs/renewlife/spec5.ts",
  ],
  params: {
    bbData: dataBb.bbDataProd,
    rlData: dataRl.rlDataProd,
    gkData: dataGk.gkDataProd,
  },
};

exports.config = Object.assign(defaultConfig.config, prodConfig);
