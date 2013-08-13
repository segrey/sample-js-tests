require(['src/Greeter'],
    function (Greeter) {
        TestCase("GreeterTest", {
            "test greet": function() {
                var greeter = new Greeter();
                assertEquals("Hello World!", greeter.greet("World"));
            },
            "test greet null": function() {
                var greeter = new Greeter();
                assertNull(greeter.greet(null));
            }
        });
    }
);
