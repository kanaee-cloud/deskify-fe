import { useState, useEffect } from "react";
import { toast, Bounce } from "react-toastify";

const useLocalLaptop = () => {
  const [laptop, setLaptop] = useState([]);

  useEffect(() => {
    const savedLaptop = JSON.parse(localStorage.getItem("laptop")) || [];
    setLaptop(savedLaptop);
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
      color: '#212529 '
    },
    onClick: () => {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    },
  };

  const addLaptop = (device) => {
    const savedLaptop = JSON.parse(localStorage.getItem("laptop")) || [];
    const isAlreadyAdded = savedLaptop.some(
      (item) => String(item.id) === String(device.id)
    );

    if (isAlreadyAdded) {
      toast(`${device.name} already in bookmark`, toastConfig);
      return;
    }

    const updatedLaptop = [...savedLaptop, device];
    localStorage.setItem("laptop", JSON.stringify(updatedLaptop));
    setLaptop(updatedLaptop);
    toast("Laptop Added to Bookmark", toastConfig);
  };

  const removeLaptop = (id) => {
    const updatedLaptop = laptop.filter((device) => device.id !== id);
    localStorage.setItem("laptop", JSON.stringify(updatedLaptop));
    setLaptop(updatedLaptop);
    toast("Laptop Deleted from Bookmark", toastConfig);
  };

  return { laptop, addLaptop, removeLaptop };
};

export default useLocalLaptop;