import { useState } from 'react';
import api from '../api/api';

const usePackageDetail = () => {
  const [packageDetail, setPackageDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPackageDetail = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.get(`/packages/${id}`);
      setPackageDetail(response.data);
    } catch (err) {
      setError("Failed to fetch package details");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    packageDetail,
    isLoading,
    error,
    fetchPackageDetail
  };
};

export default usePackageDetail;