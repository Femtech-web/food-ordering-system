import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStorage } from "../context/useStorage";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

export default function useDashboardOrderDetails() {
  const { setIsLoading, token, isLoading } = useStorage();

  let navigate = useNavigate();
  let { orderID } = useParams();

  const [thisOrder, setThisOrder] = useState({});
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchOrder = async () => {
      try {
        const headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Authorization", `Bearer ${token}`);

        const setting = {
          method: "GET",
          headers: headers,
          signal,
        };

        let res = await fetch(`${BASE_URL}/api/orders/${orderID}`, setting);

        if (res.status === 404) {
          setIsLoading(false);
          return navigate("/notFound");
        }
        let json = await res.json();
        setThisOrder(json.data);

        setIsLoading(false);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch Canceled: caught abort");
        } else {
          console.log(err);
          for (let i = 0; i < 6; i++) {
            fetchOrder();
          }
        }
      }
    };

    fetchOrder();

    return () => {
      controller.abort();
    };
  }, [orderID, isRefreshing]);

  return { thisOrder, isRefreshing, setIsRefreshing, isLoading };
}
