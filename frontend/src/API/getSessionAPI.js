import { GET } from "../utils/http";

const BASE_URL = import.meta.env.VITE_BASE_URL;

async function getSessionAPI(onSuccess, onError) {
  try {
    const { json } = await GET(`${BASE_URL}/api/auth/session`);
    if (json.token) {
      return onSuccess(json);
    }
    onError(json);
  } catch (err) {
    console.log(err);
    onError(err);
  }
}

export default getSessionAPI;
