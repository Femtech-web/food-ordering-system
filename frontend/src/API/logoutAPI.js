import { GET } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

async function logoutAPI(onSuccess, onError, info, setIsSuccessfullySend) {
  try {
    const { json } = await GET(`${BASE_URL}/api/auth/logout`);
    // const { response } = await POST(`${BASE_URL}/api/newsletter`, info);
    console.log(json);

    if (json.status === 200) {
      setIsSuccessfullySend(true);

      setTimeout(() => {
        setIsSuccessfullySend(false);
      }, 3000);
    }

    if (json.status === 500)
      alert(
        "I'm sorry, there was a server error and the session couldn't be closed.",
      );

    return onSuccess(json);
  } catch (err) {
    console.log(err);
    onError(err);
  }
}

export default logoutAPI;
