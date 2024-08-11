import Api from '../api';

class LoginProvider {
  private api: Api;

  constructor() {
    this.api = new Api();
  }

  login(email: string, password: string) {
    return this.api.get(`/`, { email, password });
  }

  register(email: string, password: string, confirmpPassword: string) {
    return this.api.post(`/register`, { email, password, confirmpPassword });
  }
}

export default LoginProvider;
