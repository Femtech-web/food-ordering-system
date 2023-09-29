import { PUT } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

export default async function updateOrderState({
  token,
  orderId,
  stateName,
  setIsLoading,
}) {
  try {
    setIsLoading(true);
    const info = { state: stateName };

    await PUT(`${BASE_URL}/api/orders/${orderId}`, info, token);
    setIsLoading(false);
  } catch (err) {
    console.log(err);
  }
}
