"use client";

import styles from "./style.module.css";
import Title from "@/components/shared/ui-elements/Title";
import Taro from "@/components/shared/ui-elements/Taro";
import VoiceInput from "@/components/shared/ui-parts/VoiceInput";
import Button from "@/components/shared/ui-elements/button/Button";
import { useRouter } from "next/navigation";

const Home = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <main className={styles.box}>
        <Title title="意味教え太郎" subTitle="意味教えアシスタント" />
        <Taro />
        <VoiceInput />
        <Button
          btnId="submit"
          text="AIに質問する"
          callBack={() => router.push("/answer")}
          wrapperStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            width: "170px",
            height: "35px",
            backgroundColor: "#59B9C6",
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        />
      </main>
    </>
  );
};

export default Home;
