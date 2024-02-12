const accountId = 144553
let accountEmail = "anuj@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //Not Allowed

accountEmail = "hc@hc.com"
accountPassword = "21222112"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and funcitonal scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])