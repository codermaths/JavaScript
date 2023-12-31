
function callbackExample(name, callback) {
    console.log(callback(name));
}

callbackExample("Usman Muhammad", function(name) {
    return "Hello " + name;
});