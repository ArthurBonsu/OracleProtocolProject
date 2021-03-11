const TestToken = artifacts.require("TestToken");

module.exports = function(deployer) {

      
        var  _name = "SolarToken";
        var  _symbol = "SOL";
        var _decimals = 2

  deployer.deploy(TestToken,_name,_symbol, _decimals );
};
