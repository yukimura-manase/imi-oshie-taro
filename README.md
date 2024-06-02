# 意味教え太郎 Web App

- 言葉に対して、その意味をわかりやすく、説明, 画像, 音声読み上げまでしてくれる

- #生成 AI オンラインハッカソン 4 by #protopedia に参加した際に開発したアプリ

## App 概要

1.

## 環境構築方法(初期 setup)

<br>

### 0. 前提条件

- API Key は .env に Set する

### 1. パッケージを install する

app ディレクトリに移動して、パッケージを install する

```bash
cd app/ && yarn install
```

### 2. Docker Image の Build & Docker Container の起動

Docker Image のビルド と コンテナの実行を実施します。

```bash
docker-compose up --build
```

### 3. Web ブラウザからアクセスする

http://localhost:3015/ にアクセスして App の起動を確認する
