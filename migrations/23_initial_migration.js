const SafeMath = artifacts.require("./lib/SafeMath");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
};
