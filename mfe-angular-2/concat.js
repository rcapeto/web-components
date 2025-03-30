var concat = require("concat-files");

const projectName = "mfe-angular-2";
const files = ["main.js", "polyfills.js", "runtime.js"].reverse();

concat(
  files.map((file) => `./dist/${projectName}/${file}`),
  `./dist/${projectName}/web-component.js`,
  function (err) {
    if (err) throw err;
    console.log("done");
  }
);
