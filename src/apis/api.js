import axios from "axios";

const api = axios.create({
    baseURL: "https://61b9880c38f69a0017ce60a3.mockapi.io"
});

export default api;