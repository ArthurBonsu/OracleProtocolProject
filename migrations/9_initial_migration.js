const ConstPriceOracle = artifacts.require("ConstPriceOracle");
const userAddress = "0x91796AA285Cc5770fEd2f1B496b411f5BE3ED9D4";
const units = 2;
module.exports = function(deployer) {
  deployer.deploy(ConstPriceOracle,userAddress, units );
};
