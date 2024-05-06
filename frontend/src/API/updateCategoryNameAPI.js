import { PUT } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

export default async function updateCategoryNameAPI({
  categorySelectId,
  info,
  onSuccess,
  token,
}) {
  try {
    console.log(categorySelectId, info, token);
    const { json } = await PUT(
      `${BASE_URL}/api/categories/${categorySelectId}`,
      info,
      token,
    );

    if (json.category) {
      return onSuccess(json);
    }
  } catch (err) {
    console.log(err);
  }
}
