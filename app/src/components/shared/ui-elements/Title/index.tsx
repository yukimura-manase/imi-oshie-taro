import React from "react";
import styles from "./style.module.css";

import { Mochiy_Pop_One } from "next/font/google";

const Font = Mochiy_Pop_One({ subsets: ["latin"], weight: ["400", "400"] });

interface PropsType {
  title: string;
  subTitle: string;
}

const Title = (props: PropsType) => {
  const { title, subTitle } = props;

  return (
    <div className={styles.textBox}>
      {title && (
        <h1 className={Font.className + " " + styles.title}>{title}</h1>
      )}
      {subTitle && (
        <h2 className={Font.className + " " + styles.subTitle}>{subTitle}</h2>
      )}
    </div>
  );
};

export default Title;
