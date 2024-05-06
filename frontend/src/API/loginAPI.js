import usersAPI from "./usersAPI";

import { POST } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

async function loginAPI({
  info,
  setIsLoading,
  setServerError,
  setIsLogin,
  setToken,
  setIsAdmin,
  navigate,
  setCurrentUser,
  setAllUsers,
  setIsFormLoading,
  setIsModerator,
}) {
  try {
    setIsFormLoading(true);

    const { json } = await POST(`${BASE_URL}/api/auth/login`, info);
    console.log(json);

    setIsFormLoading(false);

    if (json.user) {
      setServerError("");

      setIsLoading(true);
      const { token, roles, user } = json;

      await setToken(token);

      setCurrentUser(user);

      setIsLogin();

      if (roles[0].name === "admin") {
        setIsAdmin(true);

        await usersAPI({ setAllUsers, token });

        localStorage.setItem("foodieLoggedIn", JSON.stringify(true));
        localStorage.setItem("foodie-current-user", JSON.stringify(user));
        localStorage.setItem("foodie-token", JSON.stringify(token));
        localStorage.setItem("foodie-admin", JSON.stringify(true));
        setIsLoading(false);

        return navigate("/dashboard/orders");
      }
      if (roles[0].name === "moderator") {
        setIsModerator(true);

        localStorage.setItem("foodieLoggedIn", JSON.stringify(true));
        localStorage.setItem("foodie-current-user", JSON.stringify(user));
        localStorage.setItem("foodie-token", JSON.stringify(token));
        localStorage.setItem("foodie-moderator", JSON.stringify(true));
        setIsLoading(false);
        return navigate("/dashboard/myProducts");
      }

      localStorage.setItem("foodieLoggedIn", JSON.stringify(true));
      localStorage.setItem("foodie-current-user", JSON.stringify(user));
      localStorage.setItem("foodie-token", JSON.stringify(token));
      setIsLoading(false);
      return navigate("/menu");
    }

    setServerError(json.message);
  } catch (err) {
    console.log(err);

    setIsLoading(false);
    setServerError("An error has occurred on the server. Please try again.");
  }
}
export default loginAPI;
