/**
 * 1. Send request -> get response | Asynchronous
 * 2. Process the response | Asynchronous
 * 3. Validate the response | Asynchronous
 */

// Callback hell
const url = 'https://jsonplaceholder.typicode.com/posts/1';

sendRequest(url, function(response) {
    // {status: 200}
    processResponse(response, function(statusCode) {
        // {200}
        validateResponse(statusCode);
        console.log('Done');
    });
});

// Mimic Asynchronous
function sendRequest(url, callbackFn) {
    console.log(`1. Sending request to the endpoint ${url}...`);
    setTimeout(function () {
        callbackFn({ status: 200 });
    }, 2 * 1000);
}

// Mimic Asynchronous
function processResponse(response, callbackFn) {
    console.log(`2. Processing response....`);
    setTimeout(function () {
        callbackFn(response.status);
    }, 3 * 1000);
}

// Mimic Asynchronous
function validateResponse(responseStatus) {
    console.log(`3. Validating response....`);
    if (responseStatus === 200) {
        console.log('Response is valid');
    } else {
        console.error('Response is invalid');
    }
}

// Ví dụ minh hoạ callback và timeout

// Bước 1: Đun nước
function boilWater(callback) {
    console.log("1. Bắt đầu đun nước...");
    setTimeout(() => {
      callback("Nước sôi!");
    }, 2000);
  }
  
  // Bước 2: Cho mì vào nồi
  function addNoodles(waterStatus, callback) {
    console.log("2. Đang chờ nước sôi...");
    setTimeout(() => {
      if (waterStatus === "Nước sôi!") {
        callback("Mì đã chín!");
      }
    }, 3000);
  }
  
  // Bước 3: Thưởng thức
  function enjoyDish(noodleStatus) {
    console.log("3. " + noodleStatus);
    console.log("🍜 Mời cả nhà ăn mì!");
  }
  
  // Thực hiện quy trình
  boilWater(function (waterStatus) {
    addNoodles(waterStatus, function (noodleStatus) {
      enjoyDish(noodleStatus);
    });
  });