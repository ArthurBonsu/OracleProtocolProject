const MultiSigWalletWithTimelock = artifacts.require("MultiSigWalletWithTimelock");

module.exports = function(deployer) {

var  _owners=["0xCF63d8F30683Cb370406CA8910393bC0D476f7F0"];
var  _required ="1";
  deployer.deploy(MultiSigWalletWithTimelock, _owners, _required);
};
