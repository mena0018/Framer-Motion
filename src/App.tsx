import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const close = () => setIsOpened(false);
  const open = () => setIsOpened(true);

  return (
    <div className="h-full bg-slate-900 font-mono">
      <h1
        className="text-center text-transparent text-2xl sm:text-4xl xl:text-5xl text-bold uppercase py-10 
                   bg-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
      >
        Framer Motion / React
      </h1>
      <div className="flex flex-col items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => (isOpened ? close() : open())}
          className="bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-6 
                    rounded-md text-white text-lg font-bold cursor-pointer"
        >
          Open Modal
        </motion.button>

        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {isOpened && <Modal text="Drag Me" handleClose={close} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
