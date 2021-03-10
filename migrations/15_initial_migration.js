const EIP712 = artifacts.require("EIP712");

module.exports = function(deployer) {
  deployer.deploy(EIP712);
};
