const Types = artifacts.require("./lib/Types");

module.exports = function(deployer) {
  deployer.deploy(Types);
};
