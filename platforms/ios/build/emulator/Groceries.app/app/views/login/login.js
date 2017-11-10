var frameModule = require("ui/frame");

exports.loaded = function() {
    console.log("Hello");
}

exports.signIn = function() {
    alert("Signin in");
}

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};