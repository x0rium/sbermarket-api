import * as axios from "axios"

export default (error: axios.AxiosError) => {
    return Promise.reject(error);
}