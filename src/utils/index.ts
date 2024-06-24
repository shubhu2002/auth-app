import axios from "axios";

export const apiInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://auth-app-server-lf13.onrender.com/api/auth/user"
      : "http://localhost:8000/api/auth/user",
});
