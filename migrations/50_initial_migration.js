const TestSafeERC20 = artifacts.require("TestSafeERC20");

module.exports = function(deployer) {
  deployer.deploy(TestSafeERC20);
};
