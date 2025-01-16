import { useState, useEffect } from "react";

const useActiveSection = (sectionIds, offset = 0) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset + 1; // Tambahkan 1px agar terhindar dari kesalahan deteksi

      let foundActiveSection = false;

      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // Deteksi apakah scrollPosition berada dalam range section
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionIds[i]);
            foundActiveSection = true;
            break;
          }
        }
      }

      // Jika tidak ada section yang aktif (misalnya di awal scroll), kosongkan activeSection
      if (!foundActiveSection) {
        setActiveSection("");
      }
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Jalankan fungsi sekali untuk memastikan active state di awal
    handleScroll();

    // Hapus event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useActiveSection;
