import { POST } from "../utils/http";
async function resetPasswordAPI({
  setIsFormLoading,
  setServerError,
  info,
  token,
  navigate,
}) {
  try {
    setIsFormLoading(true);

    const { response, json } = await POST(
      `/api/auth/resetPassword/${token}`,
      info
    );

    setIsFormLoading(false);

    if (response.status >= 400) {
      setServerError(json.message);
      return;
    } else {
      return navigate("/authentication/login");
    }
  } catch (err) {
    console.log(err);
  }
}

export default resetPasswordAPI;
