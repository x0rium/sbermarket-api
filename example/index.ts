import sbermarketApi from "../src/apiClient";
import dotenv from "dotenv";

dotenv.config();
const credentials = {
  email: process.env.email,
  password: process.env.password,
  latitude: parseFloat(process.env.latitude),
  longitude: parseFloat(process.env.longitude),
};
const apiClient = new sbermarketApi(credentials);
apiClient.login().then((isValid) => {
  if (!isValid) return false;
  // apiClient.getUser().then((data) => {
  //   console.log(data);
  // });

  // apiClient.getCurrentOrder().then((data) => {
  //   console.log(data);
  // });

  // apiClient.getStore(251).then((data) => {
  //   console.log(data.store.location);
  // });

  // apiClient.search(251, "икра").then((data) => {
  //   console.log(data);
  // });

  apiClient.getCategories(251).then((data) => {
    console.log(data);
  });
});
