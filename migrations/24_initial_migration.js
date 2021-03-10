const Decimal = artifacts.require("./lib/Decimal.sol");

module.exports = function(deployer) {
  deployer.deploy(Decimal);
};
