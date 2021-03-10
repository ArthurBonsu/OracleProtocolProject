const Transfer = artifacts.require("./lib/Transfer");

module.exports = function(deployer) {
  deployer.deploy(Transfer);
};
