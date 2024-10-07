import { IAuthData } from './authData';

export function product(a: number, b: number): number {
  return a * b;
}
export function usernameLowerCase(username: string) {
  return username.toLowerCase();
}

export function authenticateUser(
  username: string,
  password: string
): IAuthData {
  const authStatus = username === 'deveLOPER' && password === 'dev';
  return {
    usernameToLower: username.toLowerCase(),
    usernameCharacters: username.split(''),
    userDetails: {},
    isAuthenticated: authStatus,
  };
}
/* istanbul ignore next */
export class UserNameToLowercase {
  public toLower(username: string) {
    if (username === '') {
      throw new Error('Invald username sorry!');
    }
    return username.toLowerCase();
  }
}
