const LendingPoolToken = artifacts.require("LendingPoolToken");

const tokenName = "ArthurToken";
const tokenSymbol = "$";
const tokenDecimals = "18";
module.exports = function(deployer) {
  deployer.deploy(LendingPoolToken,tokenName,tokenSymbol,tokenDecimals);
};
