
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [allData, setAllData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error("Cannot fetch data");
                }

                const data = await response.json();
                setAllData(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, [url]);

    return { allData, loading, error };
};

export default useFetch;
