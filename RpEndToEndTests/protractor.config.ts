exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",

  multiCapabilities: [
    {
      shardTestFiles: true,
      maxInstances: 1,
      sequential: true,
      browserName: "chrome",

      chromeOptions: {
        excludeSwitches: ["enable-automation"],
        useAutomationExtension: false,
        args: ["incognito"],
      },
    },
  ],

  jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 1440000,
  },

  specs: ["./specs/**/spec3.ts"],

  suites: {
    staging: ["./specs/**/specST1.ts"],
    prod: ["./specs/**/specPR1.ts", "./specs/**/specPR2.ts"],
    Full: ["./specs/**/*.ts"],
  },

  directConnect: false,
  framework: "jasmine2",

  onPrepare: function () {
    require("./node_modules/ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"), // Relative path of tsconfig.json file
    });

    const jasmineReporters = require("./node_modules/jasmine-reporters");
    const HtmlReporter = require("./node_modules/protractor-beautiful-reporter");

    const junitReporter = new jasmineReporters.JUnitXmlReporter({
      consolidateAll: false,
      savePath: "./TestResults",
    });
    const reporter = new HtmlReporter({
      baseDirectory: "BeautifulReporter",
      docTitle: "RpEndToEndTests-Results",
      docName: "RpEndToEndTests-Report.html",
    }).getJasmine2Reporter();

    jasmine.getEnv().addReporter(reporter);
    jasmine.getEnv().addReporter(junitReporter);
  },
};
