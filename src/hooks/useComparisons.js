import { useState, useEffect } from "react";
import Swal from 'sweetalert2'

const useComparisons = () => {
  const [comparisons, setComparisons] = useState([]);
  const MAX_COMPARISONS = 2;

  useEffect(() => {
    const savedComparisons = JSON.parse(localStorage.getItem("comparisons")) || [];
    setComparisons(savedComparisons);
  }, []);

  const addComparison = (laptop) => {
    const savedComparisons = JSON.parse(localStorage.getItem("comparisons")) || [];
    const isAlreadyAdded = savedComparisons.some((item) => item.id === laptop.id);
    
    if (isAlreadyAdded) {
      alert(`${laptop.name} is already in comparison!`);
      return;
    }
    
    if (savedComparisons.length >= MAX_COMPARISONS) {
      alert("You can only compare up to two laptops!");
      return;
    }

    const updatedComparisons = [...savedComparisons, laptop];
    localStorage.setItem("comparisons", JSON.stringify(updatedComparisons));
    setComparisons(updatedComparisons);
    Swal.fire({
      title: `${laptop.name} added to comparison!`,
      icon: "success",
    }).then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };


  const removeComparison = (id) => {
    const updatedComparisons = comparisons.filter((laptop) => laptop.id !== id);
    localStorage.setItem("comparisons", JSON.stringify(updatedComparisons));
    setComparisons(updatedComparisons);
    Swal.fire({
      title: `removed`,
      icon: "success",
    }).then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };

  return { comparisons, addComparison, removeComparison };
};

export default useComparisons;
