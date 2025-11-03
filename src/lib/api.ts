import axios from "axios";

export const apiBaseurl = process.env.NEXT_PUBLIC_API_URL || "https://apiprod.edgenroots.com";

export const api = axios.create({
  baseURL: `${apiBaseurl}/api/v1`,
});
