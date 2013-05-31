// 2 tests - okay is always true and equals (assert)
test("a basic test example", function() {
  ok( true, "this test is fine" );
  var value = "hello";
  equal( value, "hello", "We expect value to be hello" );
});

// 2 tests - equals and one with more debug
test("a test", function() {
  var actual = 1;
  equal(actual, 1);
  equal(actual, 0, "this message is added to the assertion result, useful for debugging");
});

test("test", function () {
  ok(true);
});

test("deepEqual test", function () {
  var obj = { foo:"bar" };
  deepEqual(obj, { foo:"bar1" }, "Two objects can be the same in value");
});

test("equal test", function () {
  equal(0, 0, "Zero; equal succeeds");
  equal("", 0, "Empty, Zero; equal succeeds");
  equal("", "", "Empty, Empty; equal succeeds");
  equal(0, 0, "Zero, Zero; equal succeeds");
  equal("three", 3, "Three, 3; equal fails");
  equal(null, false, "null, false; equal fails");
});
