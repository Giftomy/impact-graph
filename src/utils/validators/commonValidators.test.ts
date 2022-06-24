import { assert } from 'chai';
import { validateEmail } from './commonValidators';

describe('validateEmail() test cases', validateEmailTestCases);

function validateEmailTestCases() {
  it('should return true for valid email', () => {
    assert.isTrue(validateEmail('mamad@giftomy.xyz'));
  });

  it('should return false for invalid email', () => {
    assert.isFalse(validateEmail('mamad'));
  });
  it('should return true for invalid email', () => {
    assert.isFalse(validateEmail('mamad @ giftomy.xyz'));
  });
  it('should return true for invalid email', () => {
    assert.isFalse(validateEmail('mamad@'));
  });
}
