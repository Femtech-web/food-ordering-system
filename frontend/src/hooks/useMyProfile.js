import { useStorage } from "../context/useStorage";
import { useCartStorage } from "../context/cart_context/useCartStorage";
import logoutAPI from "../API/logoutAPI";

export default function useMyProfile() {
  const { currentUser, setIsAdmin, setIsModerator, setToken, setIsNotLogin, setCurrentUser } =
    useStorage();
  const { resetTotalCost, emptyCart } = useCartStorage();
  const onSuccess = () => {
    localStorage.clear();
    emptyCart();
    setIsNotLogin();
    setToken("");
    setIsAdmin(false);
    setIsModerator(false);
    resetTotalCost();
    setCurrentUser({});
  };
  const onError = () => {
    window.alert(
      "I'm sorry, there was a server error and the session couldn't be closed."
    );
  };
  const handleLogout = async () => {
    await logoutAPI(onSuccess, onError);
  };
  return { handleLogout, currentUser };
}
