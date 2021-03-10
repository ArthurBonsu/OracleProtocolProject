const LendingPool = artifacts.require("LendingPool");

module.exports = function(deployer) {
  deployer.deploy(LendingPool);
};
