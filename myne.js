// it's a global timing funtion

function time() {
    var time = new Date().toLocaleTimeString();
    document.write(time);
}

// setInterval(time, 1000);
// export default time;


// make a group of function in this style

// MyObject = {
//     abc: function(...) {...},
//     pqr: function(...) {...}
    // other functions...
// }


// setInterval(time, 1000);




// it's a validation function list

// number validation function 

function phonenumber(inputtxt) {
            
            var phoneno = /^\d{10}$/;
    if (inputtxt.value.match(phoneno))
            {
                return true;
                    }
                else
                    {
                    alert("message");
                    return false;
                    }
}
            
function phonenumber(inputtxt) {
    var phoneno 
}
// name validation function
// Email validation function
// password validation function 
// otp validation function 
