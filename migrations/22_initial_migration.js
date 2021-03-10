const Requires = artifacts.require("./lib/Requires");

module.exports = function(deployer) {
  deployer.deploy(Requires);
};
