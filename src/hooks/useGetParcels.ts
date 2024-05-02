import { useEffect, useRef, useState } from "react";
import { ArticleType, getParcels } from "../services/apiParcels";
import { useSearchParams } from "react-router-dom";
import { MAX_DISPLAY_PARCELS } from "../helpers/constants";

export function useGetParcels() {
  const [parcels, setParcels] = useState<ArticleType[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    async function getProducts() {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);
      try {
        const data = await getParcels(abortControllerRef.current?.signal);

        if (page === 1) {
          setParcels(data.slice(0, MAX_DISPLAY_PARCELS));
        } else {
          setParcels(
            data.slice(
              MAX_DISPLAY_PARCELS * (page - 1),
              MAX_DISPLAY_PARCELS * page
            )
          );
        }

        setCount(data.length);
      } catch (error: any) {
        if (error.name === "AbortError") {
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, [page]);

  return { data: { parcels, count }, isLoading, error };
}
