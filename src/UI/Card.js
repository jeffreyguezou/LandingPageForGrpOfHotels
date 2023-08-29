import classes from "./Card.module.css";
import { motion, AnimatePresence } from "framer-motion";
function Card(props) {
  return (
    <AnimatePresence>
      {" "}
      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        exit={{ scale: 1 }}
        className={classes.card}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}
export default Card;
