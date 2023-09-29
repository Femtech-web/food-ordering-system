import usersAPI from "./usersAPI";
import { PUT } from "../utils/http";

async function UploadProfileAPI({
  setFormIsLoading,
  setIsSuccessfullySend,
  setServerError,
  info,
  isAdmin,
  setAllUsers,
  token,
  setCurrentUser,
  navigate,
}) {
  try {
    setFormIsLoading(true);
    setServerError("");

    const { json } = await PUT(`/api/users/me`, info, token);

    setFormIsLoading(false);

    if (json.user) {
      isAdmin && (await usersAPI({ token, setAllUsers }));

      setCurrentUser(json.user);

      setIsSuccessfullySend(true);
      setTimeout(() => {
        setIsSuccessfullySend(false);

        navigate("/myAccount/myProfile");
      }, 3000);

      return;
    }

    setServerError(json.message);
  } catch (err) {
    console.log(err);
  }
}

export default UploadProfileAPI;
