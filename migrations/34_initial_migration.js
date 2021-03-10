const Operations = artifacts.require("Operations");
//const SafeMath = artifacts.require("./lib/SafeMath");
//const IMakerDaoOracle = artifacts.require("./interfaces/IMakerDaoOracle");
// const ABIEncoderV2 = artifacts.require("./lib/ABIEncoderV2");

//const GlobalStore = artifacts.require("./wallet/GlobalStore");
//const LendingPoolToken = artifacts.require("./funding/LendingPoolToken");
//const PriceOracle = artifacts.require("./helper/PriceOracle");
//const DaiPriceOracle = artifacts.require("./oracle/DaiPriceOracle");
//const EthPriceOracle = artifacts.require("./oracle/EthPriceOracle");

//const FeedPriceOracle = artifacts.require("./oracle/FeedPriceOracle");

//const Ownable = artifacts.require("./lib/Ownable");



// module.exports = function(deployer) {
//  deployer.deploy(Operations);
 // deployer.deploy(Ownable)
 // deployer.autolink();  
//  deployer.link(Ownable, [Operations,SafeMath, IMakerDaoOracle,  GlobalStore,Operations, LendingPoolToken, PriceOracle, DaiPriceOracle, EthPriceOracle, FeedPriceOracle ]);

//deployer.deploy(Ownable);
//deployer.link(Ownable, Operations);

// Link LibA to many contracts
//deployer.link(Ownable, [Operations,SafeMath, IMakerDaoOracle,  GlobalStore, LendingPoolToken, PriceOracle, DaiPriceOracle, EthPriceOracle, FeedPriceOracle]);
//}
//}
 module.exports = function(deployer) {

 // deployer.deploy(Ownable)
 // deployer.autolink();
//  deployer.deploy(Operations); 
// deployer.link(Ownable, [Operations,SafeMath, IMakerDaoOracle,  GlobalStore,Operations, LendingPoolToken, PriceOracle, DaiPriceOracle, EthPriceOracle, FeedPriceOracle ]);
}
//module.exports = function(deployer) {
 // deployer.deploy(Ownable);
 // deployer.autolink();
//  deployer.deploy(Operations);
//};

//CONGRESS CODES HERE
// const Owned = artifacts.require("./Owned.sol");
// const Token = artifacts.require("./Token.sol");
// const TokenRecipient = artifacts.require("./TokenRecipient.sol");
// const Congress = artifacts.require("./Congress.sol");

//module.exports = (deployer) => {
    // Deploy library Owned, Token, and TokenRecipient
   // deployer.deploy(Owned);
   // deployer.deploy(Token);
    // Link Token to TokenRecipient before deploying Congress
  //  deployer.link(Token, TokenRecipient);
  //  deployer.deploy(TokenRecipient);
    // Link Owned and TokenRecipient to contract Congress before deploying Congress
   // deployer.link(Owned, Congress);
  //  deployer.link(TokenRecipient, Congress);
    // Deploy contract Congress
  //  deployer.deploy(Congress, 0, 0, 0);
//};

var Ownable = artifacts.require(".lib/Ownable.sol");
var Types = artifacts.require("./lib/Types.sol");
var IInterestModel = artifacts.require("./interfaces/IInterestModel.sol");
var IPriceOracle = artifacts.require("./interfaces/IPriceOracle.sol");
var ILendingPoolToken = artifacts.require("./interfaces/ILendingPoolToken.sol");


module.exports = function(deployer) {
  //deployer.deploy(SLib);
 // deployer.link(SLib, TLib);
 // deployer.deploy(Ownable);
 // deployer.link(Ownable, Operations);

//deployer.deploy(Types);
 // deployer.link(SLib, TLib);
  deployer.deploy(Types);
  deployer.link(Types, IInterestModel);
  deployer.link(Types, IPriceOracle);
  deployer.link(Types, ILendingPoolToken);
   deployer.link(Types, Operations);
  //deployer.link(Types, TInterface);

};