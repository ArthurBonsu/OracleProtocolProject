const AssemblyCall = artifacts.require("./lib/AssemblyCall");

module.exports = function(deployer) {
  deployer.deploy(AssemblyCall);
};
