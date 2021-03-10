const Consts = artifacts.require("Consts");

module.exports = function(deployer) {
  deployer.deploy(Consts);
};
