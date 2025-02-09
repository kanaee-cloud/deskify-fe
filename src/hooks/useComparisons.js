import { useState, useEffect } from "react";
// import Swal from 'sweetalert2'
import { toast, Bounce } from "react-toastify";

const useComparisons = () => {
  const [comparisons, setComparisons] = useState([]);
  const MAX_COMPARISONS = 2;

  useEffect(() => {
    const savedComparisons =
      JSON.parse(localStorage.getItem("comparisons")) || [];
    setComparisons(savedComparisons);
  }, []);

  const addComparison = (laptop) => {
    const savedComparisons =
      JSON.parse(localStorage.getItem("comparisons")) || [];
    const isAlreadyAdded = savedComparisons.some(
      (item) => item.id === laptop.id
    );

    if (isAlreadyAdded) {
      toast(`${laptop.name} already in comparisons`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: { fontFamily: "Lexend, sans-serif", fontSize: "16px" },
        onClick: () => {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
      });
      return;
    }

    if (savedComparisons.length >= MAX_COMPARISONS) {
      toast("You can only add two laptop", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        style: { fontFamily: "Lexend, sans-serif", fontSize: "16px" },
        onClick: () => {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
      });
      return;
    }

    const updatedComparisons = [...savedComparisons, laptop];
    localStorage.setItem("comparisons", JSON.stringify(updatedComparisons));
    setComparisons(updatedComparisons);
    toast("Laptop Added to Comparison", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      style: { fontFamily: "Lexend, sans-serif", fontSize: "16px" },
      onClick: () => {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
    });
  };

  const removeComparison = (id) => {
    const updatedComparisons = comparisons.filter((laptop) => laptop.id !== id);
    localStorage.setItem("comparisons", JSON.stringify(updatedComparisons));
    setComparisons(updatedComparisons);
    toast("Laptop Deleted from Comparison", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      style: { fontFamily: "Lexend, sans-serif", fontSize: "16px" },
      onClick: () => {
        setTimeout(() => {
          window.location.reload();
        }, 2000)
      }
    });
  };

  return { comparisons, addComparison, removeComparison };
};

export default useComparisons;
