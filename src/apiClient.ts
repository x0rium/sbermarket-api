import { axiosConfig } from "./axiosConfig";
import axios from "axios";
import logger from "./logger";
import * as dotenv from "dotenv";
import onRequestFulfilled from "./middlewares/onRequestFulfilled";
import onRequestRejected from "./middlewares/onRequestRejected";
import onResponseRejected from "./middlewares/onResponseRejected";
import * as formData from "form-data";

class ApiClient {
  _axiosInstance;
  session: {
    access_token: string;
    expires_at: string;
    is_valid: boolean;
  };

  constructor() {
    dotenv.config();
    this.init();
  }

  private init() {
    this._axiosInstance = axios.create(axiosConfig);
    this._axiosInstance.interceptors.request.use((config) => {
      return onRequestFulfilled(config, this.session || null);
    }, onRequestRejected);
    this._axiosInstance.interceptors.response.use((response) => {
      return response;
    }, onResponseRejected);
  }

  /**
   * login action, use params from .env file
   * @return Boolean - if is valid return true, else false
   */
  async login(): Promise<Boolean> {
    const resp = await this._req("sessions", "POST", {});
    if (resp.session) {
      this.session = resp.session;
      return true;
    }
    throw "Problem with session, access token not valid, on login action";
  }

  public async getUser() {
    const email = process.env.email;
    return await this._req(`users/${email}`, "GET", {});
  }

  public async getStore(storeId: number) {
    return await this._req(`stores/${storeId}`, "GET", {});
  }

  public async getCurrentOrder() {
    return await this._req("orders/current", "GET", {});
  }

  public async getCategory(taxonId: number, storeId: number) {
    return await this._req(`taxons/${taxonId}?sid=${storeId}`, "GET", {});
  }

  public async getProduct(productId: number) {
    return await this._req(`products/${productId}`, "GET", {});
  }

  public async addToOrder(
    orderNumber: string,
    productId: number,
    quantity: number = 1
  ) {
    const form = new formData();
    form.append("line_item[order_number]", orderNumber);
    form.append("line_item[product_id]", productId);
    form.append("line_item[quantity]", quantity);
    return await this._req(`line_items`, "POST", form);
  }

  public async search(storeId, query: string, perPage = 20, page = 1) {
    return await this._req(
      `products?page=${page}&per_page=${perPage}&q=${query}&sid=${storeId}`,
      "GET",
      {}
    );
  }

  private async _req(url, method, data) {
    try {
      const response = await this._axiosInstance({ method, url, data });
      if (response.status === 200) {
        logger.info(`${method}::/${url}=>${response.status}`);
        return response.data;
      }
    } catch (e) {
      logger.info(`${method} :: ${url}=> `, e);
      return Promise.reject(e);
    }
  }
}

export default new ApiClient();
