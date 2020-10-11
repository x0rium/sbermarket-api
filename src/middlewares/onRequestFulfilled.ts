import * as axios from "axios";
import formData from "form-data";
import { Session } from "session";
import { Credentials } from "credentials";

export default (
  config: axios.AxiosRequestConfig,
  session: Session = null,
  credentials: Credentials
) => {
  if (config.url === "sessions") {
    config.auth = {
      username: credentials.email,
      password: credentials.password,
    };
  }
  if (session && session.access_token) {
    config.headers["Authorization"] = ` Token token=${session.access_token}`;
  }

  if (config.data instanceof formData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
};
