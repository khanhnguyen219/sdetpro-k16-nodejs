let teo = {
    name: "Teo",
    age: 18,
    // Nested object
    bankAccount:{
        checking:{
            
            accountNumber: '123',
        },
        saving:{

            accountNumber: '321',
        }
    }
}


// Shallow copy
// let tun = {...teo};
// tun.name = "Tun";
// tun.bankAccount.accountNumber = '124';


// Shallow copy - handle for nested obj as well
let ti = JSON.parse(JSON.stringify(teo));
ti.bankAccount.checking.accountNumber = '9999';

console.log(teo);
console.log(ti);

console.log(Object.keys(teo));
console.log(Object.values(teo));
console.log(Object.entries(teo));

