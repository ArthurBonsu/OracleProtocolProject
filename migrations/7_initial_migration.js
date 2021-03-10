const CollateralAccounts = artifacts.require("CollateralAccounts");

module.exports = function(deployer) {
  deployer.deploy(CollateralAccounts);
};
