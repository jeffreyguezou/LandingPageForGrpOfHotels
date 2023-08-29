import { useState } from "react";
import classes from "./Button.module.css";
import { motion } from "framer-motion";
function Button() {
  const [isBtnHover, setIsBTnHover] = useState(false);
  let styleClass = isBtnHover ? "bookBtnHovered" : "bookBtn";
  const btnHoverHandler = () => {
    setIsBTnHover(true);
  };
  const btnRemoveHoverHandler = () => {
    setIsBTnHover(false);
  };
  return (
    <div className={classes.btnSection}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
        onMouseEnter={btnHoverHandler}
        onMouseLeave={btnRemoveHoverHandler}
        className={styleClass}
      >
        Explore
      </motion.button>
    </div>
  );
}
export default Button;
