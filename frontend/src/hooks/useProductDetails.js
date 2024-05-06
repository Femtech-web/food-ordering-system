import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useStorage } from "../context/useStorage";
import { useCartStorage } from "../context/cart_context/useCartStorage";

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

export default function useProductDetails() {
  const { setIsLoading, isLoading } = useStorage();
  const { cartProducts } = useCartStorage();

  let location = useLocation();
  let navigate = useNavigate();
  let search = new URLSearchParams(location.search);

  let goBackPath = search.get("from");

  const [isLoaded, setIsLoaded] = useState(false);
  const [thisProductInfo, setThisProductInfo] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProducts = async () => {
      try {
        let res = await fetch(`${BASE_URL}/api/products/${productId}`, {
          signal,
        });

        if (res.status === 404) {
          setIsLoading(false);
          return navigate("/notFound");
        }
        let json = await res.json();

        setThisProductInfo(json.data);
        setIsLoading(false);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch Canceled: caught abort");
        } else {
          console.log(err);
          for (let i = 0; i < 6; i++) {
            fetchProducts();
          }
        }
      }
    };
    fetchProducts();

    return () => {
      controller.abort();
    };
  }, [productId]);

  let isInShoppingCart = cartProducts.find(
    (product) => product.info._id === thisProductInfo?._id,
  )
    ? true
    : false;

  return {
    isInShoppingCart,
    isLoaded,
    thisProductInfo,
    goBackPath,
    setIsLoaded,
    isLoading,
  };
}
