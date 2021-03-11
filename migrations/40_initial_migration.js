const PriceOracleProxy = artifacts.require("PriceOracleProxy");

  const  _asset = '0x06Da25591CdF58758C4b3aBbFf18B092e4380B65';
  const  _decimal = '2';
  const  _sourceOracleAddress = '0x9326BFA02ADD2366b30bacB125260Af641031331';
  const  _sourceAssetAddress = '0xBD49b821B60794B862aAABA44CC73084d6F23928';
  const  _sourceAssetDecimal = '2';

module.exports = function(deployer) {

  deployer.deploy(PriceOracleProxy,_asset, _decimal, _sourceOracleAddress, _sourceAssetAddress,_sourceAssetDecimal   );
};
