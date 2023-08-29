import { useState } from "react";
import Title from "../UI/Title";
import classes from "./About.module.css";
import { motion } from "framer-motion";
function Events() {
  const [eventDesc, setEventDesc] = useState("");
  const sectionData = async () => {
    const response = await fetch(
      "https://landingpage-f89f0-default-rtdb.europe-west1.firebasedatabase.app/Sections.json"
    );
    const responseData = await response.json();
    if (response) {
      const events = responseData.Events.Description;
      setEventDesc(events);
    }
  };
  sectionData();
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 2 }}
      viewport={{ once: false }}
      className="eventSection"
    >
      <Title className={classes.title} title="EVENTS" />
      <div className={classes.content}>
        <span>{eventDesc}</span>
      </div>
    </motion.div>
  );
}
export default Events;
