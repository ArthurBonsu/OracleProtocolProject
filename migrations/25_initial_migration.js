const Store = artifacts.require("./lib/Store");

module.exports = function(deployer) {
  deployer.deploy(Store);
};
