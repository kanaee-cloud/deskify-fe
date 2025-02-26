import { useState, useEffect } from "react";
import { toast, Bounce } from "react-toastify";

const useLocalPackage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const savedPackages = JSON.parse(localStorage.getItem("packages")) || [];
    setPackages(savedPackages);
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
      background: '#E3B951', // primary color
      color: '#212529 ',     // accent color
    },
    onClick: () => {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    },
  };

  const addPackages = (desk) => {
    const savedPackages = JSON.parse(localStorage.getItem("packages")) || [];
    const isAlreadyAdded = savedPackages.some(
      (item) => String(item.id) === String(desk.id)
    );

    if (isAlreadyAdded) {
      toast(`${desk.tier} already in comparisons`, toastConfig);
      return;
    }

    const updatedPackages = [...savedPackages, desk];
    localStorage.setItem("packages", JSON.stringify(updatedPackages));
    setPackages(updatedPackages);
    toast("Packages Added to Bookmark", toastConfig);
  };

  const removePackages = (id) => {
    const updatedPackages = packages.filter((desk) => desk.id !== id);
    localStorage.setItem("packages", JSON.stringify(updatedPackages));
    setPackages(updatedPackages);
    toast("Packages Deleted from Bookmark", toastConfig);
  };

  return { packages, addPackages, removePackages };
};

export default useLocalPackage;