define("src/Greeter", function() {
    function Greeter() { }

    Greeter.prototype.greet = function(name) {
        return "Hello " + name + "!";
    };
    return Greeter;
});
