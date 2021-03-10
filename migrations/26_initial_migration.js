const Events = artifacts.require("./lib/Events");

module.exports = function(deployer) {
  deployer.deploy(Events);
};
