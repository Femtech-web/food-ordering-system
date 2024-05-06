import { POST } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

const accountConfirmationAPI = async ({
  setIsSuccessfullySend,
  setIsRequestLoading,
  navigate,
}) => {
  setIsRequestLoading(true);

  const info = { id: localStorage.getItem("toConfirmUser") };

  try {
    const { response } = await POST(`${BASE_URL}/api/auth/confirmation`, {
      email: info,
    });
    console.log(response);

    setIsRequestLoading(false);

    if (response.status === 200) {
      setIsSuccessfullySend(true);
      localStorage.removeItem("toConfirmUser");
      setTimeout(() => {
        setIsSuccessfullySend(false);
        navigate("/menu");
      }, 3000);
    }
  } catch (err) {
    console.log(err);
  }
};

export default accountConfirmationAPI;
