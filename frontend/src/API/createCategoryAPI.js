import { POST } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

async function createCategoryAPI({ token, info, onSuccess }) {
  try {
    const { json } = await POST(`${BASE_URL}/api/categories`, info, token);

    if (json.category) {
      return onSuccess(json);
    }
  } catch (err) {
    console.log(err);
  }
}
export default createCategoryAPI;
