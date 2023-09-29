import { POST } from "../utils/http";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

const contactAPI = async ({ info, e }) => {
  try {
    const { response } = await POST(`${BASE_URL}/api/contact`, info);

    if (response.status === 200) {
      e.target.reset();
    }
  } catch (err) {
    console.log(err);
  }
};

export default contactAPI;
