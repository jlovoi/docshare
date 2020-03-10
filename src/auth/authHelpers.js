import decode from "jwt-decode";

export default class AuthHelperMethods {
  constructor(domain) {
    this.domain = "http://64.227.25.114:8000";
  }

  login = (username, password) => {
    return this.fetch(`${this.domain}/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    }).then(res => {
      this.setToken(res.token);
      return Promise.resolve(res);
    });
  };

  loggedIn = () => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  };

  isTokenExpired = token => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      console.error("expired token check failed!");
      return false;
    }
  };

  setToken = token => {
    localStorage.setItem("token", token);
  };

  getToken = () => {
    return localStorage.getItem("token");
  };

  logout = () => {
    localStorage.removeItem("token");
  };

  getConfirm = () => {
    let answer = decode(this.getToken());
    return answer;
  };

  fetch = (url, options) => {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (this.loggedIn()) {
      headers["Authorization"] = "Bearer " + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(async response => {
        if (response.ok) {
          const json = await response.json();
          return json;
        }
        return response;
      });
  };

  _checkStatus = response => {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      return response;
    } else {
      return { ok: false, status: 401 };
    }
  };
}
