import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";

type ModalTypes = {
  text: string;
  handleClose: () => void;
};

const Modal = ({ text, handleClose }: ModalTypes) => {
  const dropIn = {
    hidden: {
      y: "-50vh",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: "0",
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 500,
      },
    },
    exit: {
      y: "50vh",
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="h-1/2 max-h-80 w-11/12 max-w-lg 
                   flex flex-col items-center justify-center
                   m-auto rounded-md text-2xl sm:text-4xl text-white
                   bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900
                  "
        onClick={(e) => e.stopPropagation()}
        drag
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {text}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
