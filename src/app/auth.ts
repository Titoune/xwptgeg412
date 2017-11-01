import { JwtHelper } from 'angular2-jwt';

export class Auth {
  jwtHelper: JwtHelper = new JwtHelper();

  constructor() {

  }

  private decodeJwt() {
    try {
      return this.jwtHelper.decodeToken(localStorage.getItem('jwt'));
    } catch (e) {
      return null;
    }
  }

  public isTokenExpired() {
    try {
      return this.jwtHelper.isTokenExpired(localStorage.getItem('jwt'));
    } catch (e) {
      return true;
    }
  }


  public destroyJwt() {
    localStorage.removeItem('jwt');
  }

  public getJwt() {
    return this.decodeJwt();
  }

  public getAuthUser() {

    let payloads = this.decodeJwt();
    if (!payloads || !payloads.user) {
      return null;
    } else {
      return payloads.user;
    }
  }

  public isAuthorized() {
    let payloads = this.getJwt();

    if(!payloads) {
      return false;
    }else{
      return true;
    }
  }

}
