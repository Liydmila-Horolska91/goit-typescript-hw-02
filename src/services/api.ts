import axios from "axios";
import { FetchImagesResponse } from "../types";

  const BASE_URL = "https://api.unsplash.com";
  const ACCESS_KEY = "zWLS8SpS6NPXAi4tIlNkpdZT0cYh6v3gil4UX5juhSY";
  export const fetchImages = async (
  page: number,
  query: string
): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      orientation: "landscape",
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return response.data;
};