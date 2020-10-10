import apiClient from "../src/apiClient";
import logger from "../src/logger";

apiClient.login().then((isValid) => {
  if (!isValid) return false;
  apiClient.getUser().then((data) => {
    logger.info(data);
  });

  apiClient.getCurrentOrder().then((data) => {
    logger.info(data);
  });
});
