const accountId = 123456;
let accountEmail = "bh@business.com";
var accountPassword = "12345";
let accountState;
/*
Prefer not to use var due to block and functional scope.
*/
accountCity = "Pune";

// accountId = 12; // const can not be assigned twice.

accountEmail = "hb@bus.com";
accountPassword = "212112";
accountCity = "Nashik";


console.log(accountId);
console.table([accountId, accountEmail, accountPassword,  accountCity, accountState]);
