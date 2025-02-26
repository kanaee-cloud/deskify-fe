import { useState, useEffect } from "react";
import { toast, Bounce } from "react-toastify";

const useComparisons = () => {
  const [comparisons, setComparisons] = useState([]);
  const MAX_COMPARISONS = 2;

  useEffect(() => {
    const savedComparisons = JSON.parse(localStorage.getItem("comparisons")) || [];
    setComparisons(savedComparisons);
  }, []);

  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Bounce,
    style: { 
      fontFamily: "Lexend, sans-serif", 
      fontSize: "16px",
      background: '#E3B951',
      color: '#212529'
    },
    onClick: () => {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    },
  };

  const addComparison = (laptop) => {
    const savedComparisons = JSON.parse(localStorage.getItem("comparisons")) || [];
    const isAlreadyAdded = savedComparisons.some(
      (item) => String(item.id) === String(laptop.id)
    );

    if (isAlreadyAdded) {
      toast(`${laptop.name} already in comparisons`, toastConfig);
      return;
    }

    if (savedComparisons.length >= MAX_COMPARISONS) {
      toast("You can only add two laptop", toastConfig);
      return;
    }

    const updatedComparisons = [...savedComparisons, laptop];
    localStorage.setItem("comparisons", JSON.stringify(updatedComparisons));
    setComparisons(updatedComparisons);
    toast("Laptop Added to Comparison", toastConfig);
  };

  const removeComparison = (id) => {
    const updatedComparisons = comparisons.filter((laptop) => laptop.id !== id);
    localStorage.setItem("comparisons", JSON.stringify(updatedComparisons));
    setComparisons(updatedComparisons);
    toast("Laptop Deleted from Comparison", toastConfig);
  };

  return { comparisons, addComparison, removeComparison };
};

export default useComparisons;