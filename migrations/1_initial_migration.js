const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {

  const userAddress = 0x91796AA285Cc5770fEd2f1B496b411f5BE3ED9D4;
  deployer.deploy(Migrations);
};
// 0x91796AA285Cc5770fEd2f1B496b411f5BE3ED9D4