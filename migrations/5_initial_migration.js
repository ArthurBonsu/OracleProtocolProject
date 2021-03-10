const BalancePath = artifacts.require("BalancePath");

module.exports = function(deployer) {
  deployer.deploy(BalancePath);
};
