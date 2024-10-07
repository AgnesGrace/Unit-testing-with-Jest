import {
  UserNameToLowercase,
  authenticateUser,
  product,
  usernameLowerCase,
} from '../app/BasicUtils';

describe('BasicUtils test suite', () => {
  it('returns the product of 3 and 2', () => {
    //arrange
    const sut = product;
    //acting
    const actual = sut(3, 2);
    //asserting
    expect(actual).toBe(6);
    expect(actual).toEqual(6);
    expect(actual).toBeLessThan(9);
    expect(actual).toBeGreaterThan(5);
  });
  it('returns the product of 10 and 5', () => {
    //arrange
    const sut = product;
    //acting
    const actual = sut(10, 5);
    //asserting
    expect(actual).toBe(50);
  });
  it.each([
    [2, 3, 6],
    [0, 7, 0],
    [10, 10, 100],
    [2, 2, 4],
  ])(
    'test!! should return the product of %i and %i as %i',
    (a, b, expected) => {
      const actual = product(a, b);
      expect(actual).toEqual(expected);
    }
  );
  it.each([
    { input: 'AugustiNE', expected: 'augustine' },
    { input: 'beauTY', expected: 'beauty' },
    { input: 'BOB', expected: 'bob' },
  ])(
    '$input to lowercase should be $expected from parameterized testing ',
    ({ input, expected }) => {
      const actual = usernameLowerCase(input);
      expect(actual).toBe(expected);
    }
  );

  describe('Authentication test suite', () => {
    it('return the lower case of a valid user', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.usernameToLower).toBe('developer');
    });
    it('return the username characters of a valid user', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.usernameCharacters).toEqual([
        'd',
        'e',
        'v',
        'e',
        'L',
        'O',
        'P',
        'E',
        'R',
      ]);
    });
    it('return the username characters of a valid user', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.usernameCharacters).toEqual(
        expect.arrayContaining(['L', 'O', 'P', 'E', 'R', 'd', 'e', 'v', 'e'])
      );
    });
    it('return the user details in form of an object', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.userDetails).toEqual({});
    });
    it('return the user details in form of an object', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.userDetails).toBeDefined();
      expect(actual.userDetails).not.toBeUndefined();
      expect(actual.userDetails).toBeTruthy();
      expect(actual.userDetails).not.toBeFalsy();
    });
    it('return return the right boolean', () => {
      const sut = authenticateUser;
      const actual = sut('deveLOPER', 'dev');
      expect(actual.isAuthenticated).toBeTruthy();
    });
  });
  describe('usernameToLowercase test suite', () => {
    //setup
    let sut: UserNameToLowercase;
    beforeEach(() => {
      sut = new UserNameToLowercase();
    });
    it('returns the lower case of a valid username', () => {
      const actual = sut.toLower('Bob');
      console.log('i am the main test');
      expect(actual).toBe('bob');
    });
    it('throws an error for an invalid username', () => {
      expect(() => sut.toLower('')).toThrow();
      expect(() => sut.toLower('')).toThrowError('Invald username sorry!');
    });
    it('throws an error for an invalid username', () => {
      function handleError() {
        const actual = sut.toLower('');
      }
      expect(handleError).toThrow();
    });
    it.todo('test for a valid password');
  });
});
