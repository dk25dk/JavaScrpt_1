const account_Id = 1123357 // can not be change const variables
let accountEmail = 'dilip123@gmail.com'
var accountPassword = "12234"
accountCity = "jharkhand"

console.table([account_Id, accountEmail, accountPassword, accountCity])
accountEmail = 'dilip12dk@gmail.com'
accountPassword = '123456'
accountCity = 'Dhanbad'

/*
 Prefer not to use var 
  because od issue in block scope function scope
*/



console.table([account_Id, accountEmail, accountPassword, accountCity])