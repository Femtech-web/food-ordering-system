import updateOrderStateAPI from "../API/updateOrderStateAPI";
import { useNavigate } from "react-router-dom";
import { useStorage } from "../context/useStorage";

export default function useAdminOrderStateChart({
  orderId,
  makeRefresh,
  refreshState,
  states,
}) {
  const { token, setIsLoading } = useStorage();

  const navigate = useNavigate();

  let nextStep = states?.find((state) => state?.confirmed === false);

  const handleConfirmation = async (e, stateName) => {
    if (!e.target.disabled) {
      await updateOrderStateAPI({
        token,
        orderId,
        stateName,
        setIsLoading,
        navigate,
      });
      makeRefresh(!refreshState);
    }
    return;
  };

  return { handleConfirmation, nextStep };
}
