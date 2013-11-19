describe("Person", function () {
  it("calls the sayHello() function", function () {
    var fakePerson = new Person();
    spyOn(fakePerson, "sayHello");
    fakePerson.helloSomeone("world");
    expect(fakePerson.sayHello).toHaveBeenCalled();
  });

  describe("WorldPerson", function () {
    it("greets the world", function () {
      var fakePerson = new Person();
      spyOn(fakePerson, "helloSomeone");
      fakePerson.helloSomeone("world");
      expect(fakePerson.helloSomeone).toHaveBeenCalledWith("world");
    });
    xit("calls undefined method", function () {
      undefinedMethod();
    });
  });
});

describe("hasOwnProperty", function() {

  it("should be available", function () {
    expect(Object.prototype.hasOwnProperty).toBeDefined();
  });

});

//anotherUndefinedMethod();
