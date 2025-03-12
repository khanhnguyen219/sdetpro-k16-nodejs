console.log('1. Chay toi nha thang Teo');
waitforResponse().then(goToCoffeShop);

function goToCoffeShop() {
    console.log('3. Chay toi quan cafe');
    
}

// Wrap an asynchronous function into a Promise
function waitforResponse() {
    return new Promise(wrapper)
}

function wrapper(resovle, reject) {
    setTimeout(() => {
        console.log('2. Teo oi, uong cafe khong ?');
        resovle();
    }, 1 * 1000);
}

