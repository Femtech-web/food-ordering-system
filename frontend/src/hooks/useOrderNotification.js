import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useStorage } from "../context/useStorage";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

export default function useOrderNotification() {
  const [actualizationCount, setActualizationCount] = useState(0);
  const [orderActualizationMessage, setOrderActualizationMessage] =
    useState("");
  const [newOrdersCount, setNewOrdersCount] = useState(0);
  const [socket, setSocket] = useState(null);
  const { currentUser, isLogin } = useStorage();
  const closeActualizationNotification = () => {
    setActualizationCount(0);
  };
  const closeNewOrderNotification = () => {
    setNewOrdersCount(0);
  };
  useEffect(() => {
    if (isLogin) {
      const ENDPOINT = BASE_URL;
      const socket = io.connect(ENDPOINT);
      console.log(currentUser)
      socket.auth = {
        userId: currentUser?._id,
        userRole: currentUser?.roles[0].name,
      };

      socket.on("connect", () => {
        console.log("user connected");
        setSocket(socket);
      });

      return () => socket.disconnect();
    }
  }, [isLogin]);

  if (socket) {
    socket?.on("newOrder", () => {
      setNewOrdersCount(newOrdersCount + 1);
    });

    socket?.on("orderActualization", (order) => {
      const lastUpdateState = [...order.states]
        .reverse()
        .find((state) => state.confirmed === true);

      setActualizationCount(setActualizationCount + 1);
      setOrderActualizationMessage(`Order ${lastUpdateState.name}`);
    });
  }

  return {
    newOrdersCount,
    actualizationCount,
    orderActualizationMessage,
    closeActualizationNotification,
    closeNewOrderNotification,
  };
}
