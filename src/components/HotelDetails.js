import classes from "./HotelDetails.module.css";
import Button from "../UI/Button";
import hotelimg from "../Assets/pexels-amar-saleem-70441 (1).jpg";
import Card from "../UI/Card";
import { motion } from "framer-motion";
function HotelDetail(props) {
  return (
    <Card>
      <motion.div className={classes.detailsSection}>
        <div className={classes.hotelSection}>
          <div className={classes.imageSection}>
            <img src={hotelimg} alt="hotel-img"></img>
          </div>
          <div className={classes.hotelDescription}>
            <div className={classes.hotelName}>{props.name}</div>
            <div>{props.description}</div>
            <Button />
          </div>
        </div>
      </motion.div>
    </Card>
  );
}
export default HotelDetail;
