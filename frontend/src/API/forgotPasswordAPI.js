import { POST } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

async function forgotPasswordAPI({
  setIsFormLoading,
  setServerError,
  info,
  setIsModalOpen,
}) {
  try {
    setIsFormLoading(true);

    const { response, json } = await POST(
      `${BASE_URL}/api/auth/forgotPassword`,
      info,
    );

    setIsFormLoading(false);

    if (response.status >= 400) {
      setServerError(json.message);
      return;
    }

    setIsModalOpen(false);
    return;
  } catch (err) {
    console.log(err);
  }
}

export default forgotPasswordAPI;
