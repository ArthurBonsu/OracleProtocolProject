const GlobalStore = artifacts.require("./lib/GlobalStore");

module.exports = function(deployer) {
  deployer.deploy(GlobalStore);
};
