import navbar from './navbar.js';
import tabLine from './tabLine.js';
import Validator from './validation.js';

document.addEventListener('DOMContentLoaded', () => {
  tabLine();
  navbar();
  Validator({
    form: '#form-1',
    errorSelector: '.form-message',
    rules: [
      Validator.isRequired('#fullname'),
      Validator.isEmail('#email'),
      Validator.isPhoneNumber('#phonenumber', 10),
      Validator.minLength('#message', 15),
    ],
  });
});
