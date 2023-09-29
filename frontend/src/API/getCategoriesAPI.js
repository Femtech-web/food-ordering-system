import { GET } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

export default async function getCategoryAPI(setAllCategories) {
  try {
    const { json } = await GET(`${BASE_URL}/api/categories`);
    setAllCategories(json.data);
  } catch (err) {
    console.log(err);
  }
}
