//to declare all urls in the project at one place

export const localhost= "http://localhost:3000";

export const BASE_URL = "https://capstone-backend-orcg.onrender.com" || localhost;
const urlConfig = {
  LOGIN_URL : BASE_URL + "/api/auth/login",
  SIGNUP_URL : BASE_URL + "/api/auth/signup",
  ALL_PRODUCT_URL : BASE_URL + "/api/product",
  PRODUCT_CATEGORIES_URL : BASE_URL + "/api/product/categories"
}

export default urlConfig;

