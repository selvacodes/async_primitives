const fs = require("fs");

const packageJsonPath = `${process.cwd()}/package.json`;

const deps = x => x.dependencies;

console.log("package json path ", packageJsonPath);

//console.log("before");
fs.readFile(packageJsonPath, "utf-8", function(err, data) {
  const parsed = JSON.parse(data);
  const dependenciesWithVersion = deps(parsed);
  const depsList = Object.keys(dependenciesWithVersion);
  console.log(depsList);
});
//console.log("after");

const readFileAsync = function(filePath, format) {
  return new Promise((resolve, reject) => {
    fs.readFile(packageJsonPath, "utf-8", function(err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

console.log("before");

readFileAsync(packageJsonPath, "utf-8")
  .then(JSON.parse)
  .then(deps)
  .then(Object.keys)
  .then(console.log);

console.log("after");
