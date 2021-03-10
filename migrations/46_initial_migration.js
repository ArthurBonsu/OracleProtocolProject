const StableCoinInterestModel = artifacts.require("StableCoinInterestModel");

module.exports = function(deployer) {
  deployer.deploy(StableCoinInterestModel);
};
