const ExternalFunctions = artifacts.require("ExternalFunctions");


var GlobalStore = artifacts.require("./GlobalStore.sol");
var Exchange = artifacts.require("./exchange/Exchange.sol");
var Relayer = artifacts.require("./exchange/Relayer.sol");
var LendingPool = artifacts.require("./funding/LendingPool.sol");
var CollateralAccounts = artifacts.require("./funding/CollateralAccounts.sol");

var BatchActions = artifacts.require("./funding/BatchActions.sol");
var Auctions = artifacts.require("./funding/Auctions.sol");
var Transfer = artifacts.require("./lib/Transfer.sol");
var Types = artifacts.require("./lib/Types.sol");
var Consts = artifacts.require("./lib/Consts.sol");

var Requires = artifacts.require("./lib/Requires.sol");
var SafeMath = artifacts.require("./lib/SafeMath.sol");
var IStandardToken = artifacts.require("./interfaces/IStandardToken.sol");

var Store = artifacts.require("./lib/Store.sol");
var Events = artifacts.require("./lib/Events.sol");
var Decimal = artifacts.require("./lib/Decimal.sol");
var SafeERC20 = artifacts.require("./lib/SafeERC20.sol");
var EIP712 = artifacts.require("./lib/EIP712.sol");
var Signature = artifacts.require("./lib/Signature.sol");
var Ownable = artifacts.require(".lib/Ownable.sol");

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

 // Linking Batch Actions


 deployer.deploy(BatchActions);
 deployer.link(LendingPool, BatchActions);
 deployer.link(Store, BatchActions);
  deployer.link(SafeMath, BatchActions);
   deployer.link(Requires, BatchActions);
    deployer.link(Transfer, BatchActions);
     deployer.link(Events, BatchActions);
  deployer.link(BatchActions, IStandardToken);
 deployer.link(BatchActions, ExternalFunctions);

 
 // Linking Types Auctions


deployer.deploy(Auctions);
deployer.link(Store,Auctions );
deployer.link(Types,Auctions );
deployer.link(Events,Auctions );
deployer.link(Decimal,Auctions );
deployer.link(SafeMath,Auctions );
deployer.link(Transfer,Auctions );
deployer.link(LendingPool,Auctions );
deployer.link(CollateralAccounts,Auctions );

deployer.link(Auctions, IStandardToken);
deployer.link(Auctions, ExternalFunctions);

 
 // Linking  Transfer

  deployer.deploy(Transfer);

deployer.link(Events, Transfer);
deployer.link(SafeMath, Transfer);
deployer.link(SafeERC20, Transfer);
deployer.link(Consts, Transfer);
deployer.link(Store, Transfer);
deployer.link(Types, Transfer);
deployer.link(Requires, Transfer);
deployer.link(CollateralAccounts, Transfer);

  deployer.link(Transfer, IStandardToken);
 deployer.link(Transfer, ExternalFunctions);
 
 
// Linking Types
deployer.deploy(Types);


 
deployer.link(SafeMath, Types);
deployer.link(EIP712, Types);
deployer.link(Consts, Types);
deployer.link(Store, Types);
deployer.link(Signature, Types);
deployer.link(Decimal, Types);

deployer.link(Types, IInterestModel);
deployer.link(Types, IPriceOracle);
deployer.link(Types, ILendingPoolToken);
  deployer.link(Types, IStandardToken);
 deployer.link(Types, ExternalFunctions);


// Linking Consts
 deployer.deploy(Consts);

 deployer.link(Consts, IStandardToken);
 deployer.link(Consts, ExternalFunctions);

// Linking Requires


deployer.deploy(Requires);
deployer.link(Store, Requires);
deployer.link(Consts, Requires);
deployer.link(Decimal, Requires);
deployer.link(IStandardToken, Requires);
deployer.link(CollateralAccounts, Requires);

  deployer.link(Requires, IStandardToken);
 deployer.link(Requires, ExternalFunctions);


//Linking SafeMath

  deployer.link(SafeMath);
  
   deployer.link(SafeMath, IStandardToken);
 deployer.link(SafeMath, ExternalFunctions);

 // Linking Exchange


deployer.deploy(Exchange);
deployer.link(Relayer, Exchange);
deployer.link(Discount, Exchange);
deployer.link(SafeMath, Exchange);
deployer.link(Signature, Exchange);
deployer.link(Store, Exchange);
deployer.link(Types, Exchange);
deployer.link(Transfer, Exchange);
deployer.link(Events, Exchange);
deployer.link(Consts, Exchange);

  deployer.link(Exchange, IStandardToken);
 deployer.link(Exchange, ExternalFunctions);


 //Linking Relays


deployer.deploy(Relayer);
deployer.link(Store, Relayer);
deployer.link(Events, Relayer);


  deployer.link(Relayer, IStandardToken);
 deployer.link(Relayer, ExternalFunctions);

 // Linking ExternalFunctions 
  
   deployer.link(BatchActions, ExternalFunctions);
 deployer.link(Auctions, ExternalFunctions);
 deployer.deploy(ExternalFunctions);

  //deployer.link(Types, TInterface);

};



