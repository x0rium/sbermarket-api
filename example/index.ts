import sbermarketApi from "../src/apiClient";
import dotenv from "dotenv";

dotenv.config();
const credentials = {
  email: process.env.email,
  password: process.env.password,
};
const apiClient = new sbermarketApi(credentials);
apiClient.login().then((isValid) => {
  if (!isValid) return false;
  apiClient.getUser().then((data) => {
    console.log(data);
  });

  apiClient.getCurrentOrder().then((data) => {
    console.log(data);
  });

  apiClient.getStore(251).then((data) => {
    console.log(data.store.location);
  });
});
