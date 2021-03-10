const OrderParam = artifacts.require("OrderParam");

module.exports = function(deployer) {
  deployer.deploy(OrderParam);
};
