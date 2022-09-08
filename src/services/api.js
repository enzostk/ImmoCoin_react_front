import axios from "axios";
import Cookies from "js-cookie";

const apiUrl = "https://immocoin-rails.herokuapp.com";
const API = axios.create({ baseURL: apiUrl });
const API2 = axios.create({ baseURL: apiUrl });

API.interceptors.request.use(({ headers, ...config }) => ({
  ...config,
  headers: {
    ...headers,
    "Content-Type": "application/json",
    Authorization: `Bearer ${headers.Authorization || Cookies.get("token")}`,
  },
}));

export default class APIManager {
  static async registerUser(email, password) {
    const response = await API.post("/users", {
      user: { email: email, password: password },
    });
    const jwt = response.headers.authorization.slice(7);
    Cookies.set("token", jwt);
    return response.data;
  }
  static async loginUser(email, password) {
    const response = await API2.post(
      "/users/sign_in",
      { user: { email: email, password: password } },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.headers.authorization.slice(7));
    const jwt = response.headers.authorization.slice(7);
    Cookies.set("token", jwt);
    return response.data;
  }

  static async logoutUser() {
    const response = await API.delete("/users/sign_out");
    Cookies.remove("token");
    return response.data;
  }
  static async resetPasswordUser(userToken, newPassword) {
    const response = await API2.patch("/users/password", {
      user: {
        reset_password_token: userToken,
        password: newPassword
      },
    });
    return response.data;
  }
}
