import { useState } from "react";
import Title from "../UI/Title";
import classes from "./About.module.css";
import { motion } from "framer-motion";
function About() {
  const [desc, setDesc] = useState("");
  const sectionData = async () => {
    const response = await fetch(
      "https://landingpage-f89f0-default-rtdb.europe-west1.firebasedatabase.app/Sections.json"
    );
    const responseData = await response.json();
    if (response) {
      const description = responseData.About.Description;
      setDesc(description);
    }
  };
  sectionData();

  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      exit={{ scale: 0.8 }}
      viewport={{ once: false }}
      className={classes.aboutSection}
    >
      <Title className={classes.title} title="ABOUT" />
      <div className={classes.content}>
        <span>{desc}</span>
      </div>
    </motion.div>
  );
}
export default About;
