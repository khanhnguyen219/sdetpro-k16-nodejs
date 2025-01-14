/**
 * <18: Không bán!
 * 18 -> 55: Unlimited!
 * 56 ->: 2 chai.
 */


const readline = require('readline-sync');
let clientAge = readline.question("Your age:  ");

/**
 *  redundant logic: clientAge >= 18 && clientAge <= 55
 */

if (clientAge < 18) {
    console.log("Không bán!");
    if(clientAge <14){
        console.log("Calling 911");
    }
}else if (clientAge <= 55) {
    console.log("Unlimited!");
}else{
    console.log("2 chai.");
}

/**
 * &&:
 * ||
 */