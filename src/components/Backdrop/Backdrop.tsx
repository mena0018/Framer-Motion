import { motion } from "framer-motion";
import { ReactNode } from "react";

type BackdropTypes = {
  children: ReactNode;
  onClick: () => void;
};

const Backdrop = ({ children, onClick }: BackdropTypes) => {
  return (
    <motion.div
      className="w-full h-full absolute top-0 left-0 flex items-center justify-center overflow-hidden"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
