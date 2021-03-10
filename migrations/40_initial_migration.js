const PriceOracleProxy = artifacts.require("PriceOracleProxy");

module.exports = function(deployer) {
  deployer.deploy(PriceOracleProxy);
};
