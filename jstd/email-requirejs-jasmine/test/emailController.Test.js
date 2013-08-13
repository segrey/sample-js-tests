require(['controllers/emailController'], function (emailController) {

  describe("emailController", function() {
    it("should accept correct emails", function() {
      expect(emailController.validateEmail("a@b")).toBe(true);
    });
    it("should reject malformed emails", function() {
      expect(emailController.validateEmail("a")).toBe(false);
    });
  });

});
