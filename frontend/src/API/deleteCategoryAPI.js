import { DELETE } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

export default async function deleteCategoryAPI({ categorySelectId, token }) {
  try {
    const { response } = await DELETE(
      `${BASE_URL}/api/categories/${categorySelectId}`,
      token,
    );
    if (response.status === 403 || response.status === 401) {
      alert("Administrator role is required");
    }
  } catch (err) {
    console.log(err);
  }
}
