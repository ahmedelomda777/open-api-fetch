import createClient from "openapi-fetch";
import { paths } from "../types/v1";

export const client = createClient<paths>({ baseUrl: "https://dummyjson.com/products" });
