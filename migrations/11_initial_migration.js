const DaiPriceOracle = artifacts.require("DaiPriceOracle");
const minimumPrice = 2;
const maximumPrice =10;
module.exports = function(deployer) {
  deployer.deploy(DaiPriceOracle, minimumPrice, maximumPrice );
};
