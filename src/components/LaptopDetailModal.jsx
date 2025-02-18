import { FiMonitor, FiX } from "react-icons/fi";
import { FormatMoney } from "../utilities/FormatMoney";
import { IoBookmarks, IoBookmarksOutline } from "react-icons/io5";
import { MdMemory } from "react-icons/md";
import { BsGpuCard } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const LaptopDetailModal = ({
  isOpen,
  onClose,
  laptopData,
  addComparison,
  isLoading,
  handleBookmarkClick,
  isBookmarked,
}) => {
  if (!isOpen) return null;

  const { id, name, image, ram, memory, display, price, processor, gpu } =
    laptopData;

    

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`bg-primary rounded-lg w-full max-w-3xl relative border border-accent transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
          className="absolute rounded-sm -right-5 -top-4 text-white bg-red-600 hover:bg-red-500"
        >
          <FiX size={30} />
        </button>

        <div className="p-6">
          <div className="flex gap-x-4 items-center mb-4">
            <div className="aspect-video w-[48vh]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 w-full">
                <h1 className="text-2xl font-medium">{name}</h1>
                <p className="text-accent">{FormatMoney(price)}</p>
              </div>
              <div className="flex items-center gap-x-4">
                <button
                  className="text-primary bg-accent py-2 px-4 rounded-lg"
                  onClick={() =>
                    addComparison({ id, name, image, ram, memory, display })
                  }
                >
                  Add to Comparison
                </button>
                <button
                  onClick={handleBookmarkClick} 
                  className={`border border-accent text-accent p-2 rounded-lg ${isBookmarked ? "bg-accent text-primary" : ""}`}>
                  {isLoading ? (
                    <ImSpinner2 className="animate-spin text-xl" />
                  ) : isBookmarked ? (
                    <IoBookmarks size={20} />
                  ) : (
                    <IoBookmarksOutline size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto max-h-[40vh] custom-scrollbar space-y-5">
            <ComponentCard title={processor} icon={<MdMemory size={30} />} />
            <ComponentCard title={gpu} icon={<BsGpuCard size={30} />} />
            <ComponentCard title={ram} icon={<CgSmartphoneRam size={30} />} />
            <ComponentCard title={memory} icon={<FaDatabase size={30} />} />
            <ComponentCard title={display} icon={<FiMonitor size={30} />} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ComponentCard = ({ title, icon }) => {
  return (
    <div className="bg-accent bg-opacity-10 rounded-lg overflow-hidden">
      <div className="p-4 flex items-center justify-between cursor-pointer transition-colors duration-200 hover:bg-accent hover:bg-opacity-20">
        <div className="flex w-full justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-accent">{icon}</div>
            <h3 className="text-white text-sm">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopDetailModal;
