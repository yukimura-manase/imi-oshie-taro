"use client";

import Title from "@/components/shared/ui-elements/Title";
import SquarePhotoCard from "@/components/shared/ui-elements/image/SquarePhotoCard";
import Button from "@/components/shared/ui-elements/button/Button";
import { Loading } from "@/components/shared/ui-elements/loading/Loading";
import { useRouter } from "next/navigation";
import { useExplainChain } from "@/hooks/useExplainChain";
import { voiceInputStates } from "@/store/voiceInput";
import { useProxy } from "valtio/utils";
import { useEffect, useRef } from "react";

export default function Answer() {
  const router = useRouter();

  // 1. User からの質問の入力結果 (音声入力)
  const { transcript } = useProxy(voiceInputStates);
  console.log("Answer Page");
  console.log("transcript", transcript);

  // 2. Custom Hook を使って、回答の文章, 画像, 音声を生成する
  const { isLoading, description, image, audioData, audioUrl } =
    useExplainChain(transcript);

  // TODO: Test実行
  useEffect(() => {
    console.log("isLoading", isLoading);
    console.log("description", description);
    console.log("image", image);
    console.log("audioData", audioData);
    console.log("audioUrl", audioUrl);
  }, [isLoading, description, image, audioData, audioUrl]);

  // 音声再生用の ref
  const audioRef = useRef(null);
  useEffect(() => {
    console.log("audioData Updated");
    console.log("audioRef", audioRef);

    if (audioData && audioRef.current) {
      console.log("音声ファイルを再生する");

      // 音声ファイルを再生する
      // @ts-ignore
      audioRef.current.play();
    }
  }, [audioData]);

  return (
    <main>
      <Title title="意味教え太郎" subTitle="意味の説明, 画像生成, 音声合成" />
      {}
      <div>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              top: "150px",
            }}
          >
            <Loading />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <SquarePhotoCard
              src={image ?? ""}
              imgStyle={{
                width: "360px",
                height: "360px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                width: "90%",
                margin: "0 auto",
                height: "250px",
                overflow: "auto",
                backgroundColor: "#fff5ee",
                padding: "12px",
              }}
            >
              {description}
            </div>
            <div>
              <audio
                // ref={audioRef}
                controls
                src={audioUrl ? audioUrl : undefined}
                style={
                  {
                    // display: "none",
                  }
                }
              >
                {/* <source src={audioUrl ?? undefined} type="audio/mpeg" /> */}
              </audio>
            </div>

            <Button
              btnId="home-btn"
              text="戻る"
              callBack={() => router.push("/")}
            />
          </div>
        )}
      </div>
    </main>
  );
}
