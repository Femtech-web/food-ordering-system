import { DELETE } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

async function deleteOrderAPI({ token, id }) {
  try {
    await DELETE(`${BASE_URL}/api/orders/${id}`, token);
  } catch (err) {
    console.log(err);
  }
}

export default deleteOrderAPI;
