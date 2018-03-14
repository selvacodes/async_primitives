const fs = require("fs");

const util = require("util");

const readFileAsync = util.promisify(fs.readFile);

const packageJsonPath = `${process.cwd()}/package.json`;

const deps = x => x.dependencies;

console.log("package json path ", packageJsonPath);

//readFileAsync(packageJsonPath, "utf-8")
//.then(x => JSON.parse(x))
//.then(x => deps(x))
//.then(x => Object.keys(x))
//.then(console.log);

console.log("before");

readFileAsync(packageJsonPath, "utf-8")
  .then(JSON.parse)
  .then(deps)
  .then(Object.keys)
  .then(console.log);

console.log("after");
