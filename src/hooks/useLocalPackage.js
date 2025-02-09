import { useState, useEffect } from "react";
import { toast, Bounce } from "react-toastify";

const useLocalPackage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const savedPackages = JSON.parse(localStorage.getItem("packages")) || [];
    setPackages(savedPackages);
  }, []);

  const addPackages = (desk) => {
    const savedPackages = JSON.parse(localStorage.getItem("packages")) || [];
    const isAlreadyAdded = savedPackages.some(
      (item) => String(item.id) === String(desk.id)
    );

    if (isAlreadyAdded) {
      toast(`${desk.tier} already in comparisons`, {
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

    const updatedPackages = [...savedPackages, desk];
    localStorage.setItem("packages", JSON.stringify(updatedPackages));
    setPackages(updatedPackages);
    toast("Packages Added to Bookmark", {
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

  const removePackages = (id) => {
    const updatedPackages = packages.filter((desk) => desk.id !== id);
    localStorage.setItem("packages", JSON.stringify(updatedPackages));
    setPackages(updatedPackages);
    toast("Packages Deleted from Bookmark", {
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

  return { packages, addPackages, removePackages };
};

export default useLocalPackage;
