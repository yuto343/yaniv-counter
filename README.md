# Yaniv-Counter

トランプゲーム「ヤニブ」の点数を記録するためのアプリ。

- https://apps.apple.com/jp/app/yaniv-counter/id1615501749

## リリースバージョン管理

[standard-version](https://github.com/conventional-changelog/standard-version#can-i-use-standard-version-for-additional-metadata-files-languages-or-version-files)によるバージョン管理をしているので、コミットごとに

```
	yarn release:patch
```

```
	yarn release:minor
```

```
	yarn release:major
```

のどれかを叩く。

updator には[standard-version-expo](https://github.com/expo-community/standard-version-expo)を使っている。

- 参考 : https://dev.to/bycedric/simplify-expo-releases-with-standard-version-2f4o

## 確認・ビルド・配信

開発サーバー立ち上げ

```
yarn start
```

配信前,=、内部テスト用のプレビュービルドは

```
yarn build:preview
```

配信するための本番用の App Store 配信ビルドが

```
yarn build:ios
```

## 開発時の注意

- npm ではなく yarn を使う。
  - expo install が yarn を使っているため、それに合わせている。
