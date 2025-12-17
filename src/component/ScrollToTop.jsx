import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.6;

      if (window.scrollY > threshold) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      className="scroll-to-top"
      onClick={scrollTop}
      aria-label="Scroll to top"
    >
      <MdKeyboardArrowUp />
    </button>
  );
};

export default ScrollToTop;
