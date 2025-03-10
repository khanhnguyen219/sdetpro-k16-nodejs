console.log('1. Chay toi nha thang Teo');
setTimeout(callbackFunction.bind({age: 18}, "Tun"), 5 * 1000);
console.log('3. Chay toi quan cafe');

function callbackFunction(name) {
    console.log(this.age);
    console.log(`2. ${name} oi, uong cafe ko ?`);
}

