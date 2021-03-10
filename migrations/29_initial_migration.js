const OperationsComponent = artifacts.require("./components/OperationsComponent.sol");

module.exports = function(deployer) {
  deployer.deploy(OperationsComponent);
};
