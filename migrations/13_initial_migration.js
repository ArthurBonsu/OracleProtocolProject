const DefaultInterestModel = artifacts.require("DefaultInterestModel");

module.exports = function(deployer) {
  deployer.deploy(DefaultInterestModel);
};
