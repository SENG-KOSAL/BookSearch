import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi, FiBook } from "react-icons/fi";

const Example = () => {
  return (
    <section className="grid place-content-center p-12">
      <FloatingBook />
    </section>
  );
};

const FloatingBook = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-orange-500"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-72 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <BookScreen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const BookScreen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <FiBook className="text-orange-500 text-6xl" />
      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-orange-500 backdrop-blur">
        Open Book
      </button>
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-orange-500" />
    </div>
  );
};

export default Example;
