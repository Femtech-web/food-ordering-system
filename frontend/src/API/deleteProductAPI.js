import { DELETE, GET } from "../utils/http";


const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

async function deleteProductAPI(token, id, setProducts) {
  const deleteConfirmation = window.confirm(
    "The product will be deleted from the database. Are you sure?" 
  );

  if (deleteConfirmation) {
    try {
      const { response } = await DELETE(
        `${BASE_URL}/api/categories/${id}`,
        token
      );
      if (response.status === 403 || response.status === 401) {
        alert("Administrator role is required" );
      }
      // const { response } = await DELETE(`/api/products/${id}`, token);

      if (response.status === 204) {
        const { json } = await GET(`${BASE_URL}/api/products?page=1&limit=6`, token);

        setProducts(json.data);
      }

      if (response.status === 403)
        return alert("Administrator role is required" );
    } catch (err) {
      console.log(err);
    }
  } else {
    return;
  }
}

export default deleteProductAPI;
