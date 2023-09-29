import { GET } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

async function getUsers({ token, setAllUsers }) {
  try {
    const { json } = await GET(`${BASE_URL}/api/users`, token);

    setAllUsers(json);
    localStorage.setItem('foodie-allUsers', JSON.stringify(json));
  } catch (err) {
    console.log(err);
  }
}

export default getUsers;
