import { POST } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

async function singUpAPI({
  setIsFormLoading,
  setServerError,

  navigate,
  info,
}) {
  try {
    console.log(info);
    const { response, json } = await POST(`${BASE_URL}/api/auth/signup`, info);

    setIsFormLoading(false);
    console.log(response, json);

    if (json.email) {
      setServerError("");

      const { email } = json;

      localStorage.setItem("toConfirmUser", email);

      setTimeout(() => {
        return navigate("/authentication/confirmation");
      }, 1000);
    }

    if (response.status === 400) {
      setServerError(json.message);
      return;
    }
  } catch (err) {
    console.log(err);
  }
}

export default singUpAPI;
