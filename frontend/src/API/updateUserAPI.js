import usersAPI from "./usersAPI";
import { PUT } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

async function uploadUserAPI({
  setFormIsLoading,
  setIsEditing,
  setServerError,
  info,
  setAllUsers,
  token,
  id,
}) {
  try {
    setFormIsLoading(true);

    const { response, json } = await PUT(
      `${BASE_URL}/api/users/role/${id}`,
      info,
      token,
    );

    setFormIsLoading(false);
    if (response.status === 200) {
      await usersAPI({ setAllUsers, token });
      setServerError("");
      setIsEditing(false);
    }

    if (response.status === 403) return alert("Administrator role is required");

    setServerError(json.message);
  } catch (err) {
    console.log(err);
  }
}

export default uploadUserAPI;
