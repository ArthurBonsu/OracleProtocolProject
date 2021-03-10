const Discount = artifacts.require("Discount");

module.exports = function(deployer) {
  deployer.deploy(Discount);
};
