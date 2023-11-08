const accountId = 144553 // can't be changed
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 123 // error can not be changed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId) ;
console.table([accountId,accountEmail,accountPassword,accountCity])

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/ 

let accountState ; // if we try to print it, it will show undefined