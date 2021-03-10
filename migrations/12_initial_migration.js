const Decimal = artifacts.require("Decimal");

module.exports = function(deployer) {
  deployer.deploy(Decimal);
};
