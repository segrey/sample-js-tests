define('controllers/emailController', function() {
  return {
    validateEmail: function (email) {
      return email.indexOf('@') >= 0;
    }
  };
});
