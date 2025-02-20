import { FiMonitor, FiX } from "react-icons/fi";
import { FormatMoney } from "../utilities/FormatMoney";
import { IoBookmarks, IoBookmarksOutline } from "react-icons/io5";
import { MdMemory } from "react-icons/md";
import { BsGpuCard } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";

const LaptopDetailModal = ({
  isOpen,
  onClose,
  laptopData,
  addComparison,
  isLoading,
  handleBookmarkClick,
  isBookmarked,
}) => {
  if (!laptopData) return null;

  const { id, name, image, ram, memory, display, price, processor, gpu } =
    laptopData;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.15 } },
    exit: { opacity: 0, transition: { duration: 0.15, delay: 0.1 } }
  };

  const modalVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 10 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 30,
        stiffness: 400,
        mass: 0.8
      }
    },
    exit: { 
      scale: 0.98,
      opacity: 0,
      y: 10,
      transition: { 
        duration: 0.15
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-primary rounded-lg w-full max-w-3xl relative border border-accent"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              onClick={onClose}
              className="absolute rounded-sm -right-5 -top-4 text-white bg-red-600 hover:bg-red-500"
            >
              <FiX size={30} />
            </motion.button>

            <div className="p-6">
              <div className="flex gap-x-4 items-center mb-4">
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="aspect-video w-[48vh]"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.2, delay: 0.15 }}
                  className="flex flex-col items-start"
                >
                  <div className="mb-4 w-full">
                    <h1 className="text-2xl font-medium">{name}</h1>
                    <p className="text-accent">{FormatMoney(price)}</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.1 }}
                      className="text-primary bg-accent py-2 px-4 rounded-lg"
                      onClick={() =>
                        addComparison({ id, name, image, ram, memory, display })
                      }
                    >
                      Add to Comparison
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.1 }}
                      onClick={handleBookmarkClick}
                      className={`border border-accent text-accent p-2 rounded-lg ${
                        isBookmarked ? "bg-accent text-primary" : ""
                      }`}
                    >
                      {isLoading ? (
                        <ImSpinner2 className="animate-spin text-xl" />
                      ) : isBookmarked ? (
                        <IoBookmarks size={20} />
                      ) : (
                        <IoBookmarksOutline size={20} />
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.2, delay: 0.2 }}
                className="flex-1 overflow-y-auto max-h-[40vh] custom-scrollbar space-y-3"
              >
                {[
                  { title: processor, icon: <MdMemory size={30} />, delay: 0.25 },
                  { title: gpu, icon: <BsGpuCard size={30} />, delay: 0.3 },
                  { title: ram, icon: <CgSmartphoneRam size={30} />, delay: 0.35 },
                  { title: memory, icon: <FaDatabase size={30} />, delay: 0.4 },
                  { title: display, icon: <FiMonitor size={30} />, delay: 0.45 }
                ].map((item, index) => (
                  <ComponentCard 
                    key={index}
                    title={item.title} 
                    icon={item.icon} 
                    delay={item.delay}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ComponentCard = ({ title, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.2,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="bg-accent mr-4 bg-opacity-10 rounded-lg overflow-hidden"
    >
      <div className="p-4 flex items-center justify-between cursor-pointer transition-colors duration-200 hover:bg-accent hover:bg-opacity-20">
        <div className="flex w-full justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-accent">{icon}</div>
            <h3 className="text-white text-sm">{title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LaptopDetailModal;