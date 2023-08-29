import classes from "./BackgroundImage.module.css";
import BookRooms from "./BookRooms";
import { motion, useScroll, useTransform } from "framer-motion";
function BGImage() {
  const { scrollY } = useScroll();
  const opacityImg = useTransform(
    scrollY,
    [0, 200, 300, 500, 600],
    [1, 0.9, 0.7, 0.5, 0]
  );
  return (
    <motion.div style={{ opacity: opacityImg }} className={classes.background}>
      <BookRooms />
    </motion.div>
  );
}
export default BGImage;
