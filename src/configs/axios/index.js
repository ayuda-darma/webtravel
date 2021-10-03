import axios from "axios";

import errorResponseHandler from "./errorResponseHandler";

const instance = axios.create({
    baseURL: `https://admin-relacation.herokuapp.com/api/v1/member`,
});

instance.interceptors.response.use(
    (response) => response,
    errorResponseHandler
);

export default instance;
