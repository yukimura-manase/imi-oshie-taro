"use client";

import SquarePhotoCard from "@/components/shared/ui-elements/image/SquarePhotoCard";
import Button from "@/components/shared/ui-elements/button/Button";
import { Loading } from "@/components/shared/ui-elements/loading/Loading";
import { useRouter } from "next/navigation";

export default function Answer() {
  const router = useRouter();

  return (
    <main>
      <h1>意味教え太郎からの回答</h1>
      <h2>意味の説明, 画像生成, 音声合成</h2>
      <div>
        {/* 画像表示 */}
        <div>
          <SquarePhotoCard src="https://avatars.githubusercontent.com/u/78206917?v=4" />
        </div>
        {/* 文章表示 */}
        <div>
          <p>回答の文章</p>
          <Button
            btnId="home-btn"
            text="戻る"
            callBack={() => router.push("/")}
          />
        </div>
      </div>
    </main>
  );
}
