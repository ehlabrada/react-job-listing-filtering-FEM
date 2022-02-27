import { useEffect, useState } from "react";
import axios from "axios";

const useFetchJobs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3500/jobs");
        // console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return { data, loading, error };
};

export default useFetchJobs;
