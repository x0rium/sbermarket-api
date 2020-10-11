import sbermarketApi from "../src/apiClient";
import logger from "../src/logger";
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
    logger.info(data);
  });

  apiClient.getCurrentOrder().then((data) => {
    logger.info(data);
  });

  apiClient.getStore(251).then((data) => {
    logger.info(data.store.location);
  });
});
