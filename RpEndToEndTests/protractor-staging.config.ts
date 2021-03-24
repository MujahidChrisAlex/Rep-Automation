const dataBbStaging = require("./bb-data.ts");
const dataRlStaging = require("./rl-data.ts");
const dataGkStaging = require("./gk-data.ts");
const defaultConfigStaging = require("./protractor.config.ts");

let stagingConfig = {
  specs: [
    "./specs/burtsbees/spec.ts",
    "./specs/burtsbees/spec1.ts",
    "./specs/burtsbees/spec2.ts",
    "./specs/burtsbees/spec3.ts",
    "./specs/burtsbees/spec4.ts",
    "./specs/burtsbees/spec5.ts",
    "./specs/burtsbees/spec6.ts",
    "./specs/burtsbees/spec7.ts",
    "./specs/burtsbees/spec8.ts",
  ],
  params: {
    bbData: dataBbStaging.bbDataStaging,
    rlData: dataRlStaging.rlDataStaging,
    gkData: dataGkStaging.gkDataStaging,
  },
};

exports.config = Object.assign(defaultConfigStaging.config, stagingConfig);
