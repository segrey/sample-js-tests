var dep1 = require('test_dependency');

describe("simple spec", function() {
  it("spec name", function () {
    expect(dep1.uid).toBe(1);
  });
});
