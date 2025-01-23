import { useEffect, useState } from "react";
import api from "../api/api";

const usePackages = (initialPage = 1) => {
  const [packages, setPackages] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await api.get(`/packages?page=${page}`);
        const data = response.data;

        console.log(data)
        setPackages(data.packages || []);
        setTotalPages(data.totalPages || 4);
      } catch (err) {
        setError("failed to fetch packages");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPackages();
  }, [page]);

  const nextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return {
    packages,
    page,
    totalPages,
    isLoading,
    error,
    nextPage,
    prevPage
  }
};

export default usePackages;
