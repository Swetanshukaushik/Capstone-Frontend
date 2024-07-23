//to declare all urls in the project at one place

// const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3001";

const BASE_URL = "http://localhost:3000" || "http://localhost:3001";
const urlConfig = {
    LOGIN_URL : BASE_URL + "/api/userManagement/login",
    SIGNUP_URL : BASE_URL + "/api/userManagement/signup",
    ALL_PRODUCT_URL : BASE_URL + "/api/product"
}

export default urlConfig;

