# 意味教え太郎 Web App

- 言葉に対して、その意味をわかりやすく説明, 画像生成, 音声読み上げまでしてくれる

- [#生成 AI オンラインハッカソン 4 by #protopedia](https://mashupawards.connpass.com/event/318385/) に参加した際に開発したアプリ

## App 概要

1. 言葉に対して、その意味をわかりやすく説明, 画像生成, 音声読み上げまでしてくれる

[![「パパ活」ってなあに？ 子供向け学習アシスタント「意味教え太郎」に聞いてみた！](./img/Youtube.png)](https://www.youtube.com/watch?v=kil0ps5cBzY&t=1s)

<div style="display: flex; gap:12px;">
  <img src="./img/imiOshieTaro-query.png" width="300px" >
  <img src="./img/answer-cat.png" width="300px" >
</div>

## 環境構築方法(初期 setup)

<br>

### 0. 前提条件

- API Key は .env に Set する

### 1. パッケージを install する

app ディレクトリに移動して、パッケージを install する

```bash
cd app/ && yarn install
```

### 2. .env ファイルの作成

1. `app/.env.example` を Copy して、`.env`ファイルを作成してください。

2. `NEXT_PUBLIC_OPEN_AI_API_KEY` に OpenAI の API Key を Set します。

```bash: .env
# OpenAI API key
NEXT_PUBLIC_OPEN_AI_API_KEY=your-openai-api-key

# VOICE VOX API URL
VOICE_VOX_API_URL=http://localhost:50021
```

### 3. Docker Image の Build & Docker Container の起動

1. Docker Image のビルド と コンテナの実行を実施します。

```bash
docker-compose up --build
```

2. VOICE-VOX Container を立ち上げる

```bash
cd voice-vox

docker compose up
```

### 4. Web ブラウザからアクセスする

http://localhost:3015/ にアクセスして App の起動を確認する
