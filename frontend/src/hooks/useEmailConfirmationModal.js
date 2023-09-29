import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStorage } from "../context/useStorage";
import accountConfirmationAPI from "../API/accountConfirmationAPI";

export default function useEmailConfirmationModal() {
  const { setIsSuccessfullySend } = useStorage();

  const navigate = useNavigate();

  const [isRequestLoading, setIsRequestLoading] = useState(false);

  const sendConfirmationEmail = async () => {
    await accountConfirmationAPI({
      setIsRequestLoading,
      setIsSuccessfullySend,
      navigate,
    });
  };
  return { isRequestLoading, sendConfirmationEmail };
}
