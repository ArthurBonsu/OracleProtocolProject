const Consts = artifacts.require("./lib/Consts");

module.exports = function(deployer) {
  deployer.deploy(Consts);
};
