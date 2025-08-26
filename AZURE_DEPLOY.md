# Azure App Service デプロイ手順

## 🚀 デプロイ前の準備

### 1. ビルド設定の確認
```bash
# Azure用ビルド
npm run build:azure
```

### 2. 生成されるファイル
- `out/` フォルダに静的ファイルが生成されます
- このフォルダの内容をAzure App Serviceにデプロイします

## 📋 Azure App Service設定

### 1. アプリケーション設定
```
NODE_ENV = production
NEXT_PUBLIC_API_BASE_URL = https://your-backend-api.azurewebsites.net
NEXT_PUBLIC_FRONTEND_URL = https://your-frontend-app.azurewebsites.net
```

### 2. スタック設定
- **ランタイム**: Node.js 18 LTS
- **OS**: Windows または Linux
- **プラン**: Basic 以上（カスタムドメイン使用時）

### 3. デプロイ設定
- **デプロイ方法**: GitHub Actions または Azure CLI
- **ビルドコマンド**: `npm run build:azure`
- **出力フォルダ**: `out`

## 🔧 デプロイ後の確認

### 1. 動作確認
- [ ] ホームページが表示される
- [ ] ルーティングが正常に動作する
- [ ] 静的ファイル（CSS、JS、画像）が読み込まれる

### 2. トラブルシューティング
- **404エラー**: `web.config`の設定を確認
- **ルーティングエラー**: SPAルールが正しく設定されているか確認
- **静的ファイルエラー**: MIMEタイプ設定を確認

## 📁 ファイル構成
```
frontend/
├── out/                    # ビルド出力（デプロイ対象）
├── web.config             # Azure IIS設定
├── next.config.js         # Next.js設定
└── package.json           # 依存関係とスクリプト
```

## 🎯 重要なポイント

1. **静的エクスポート**: `output: 'export'` で静的ファイルを生成
2. **SPAルーティング**: `web.config`でクライアントサイドルーティングを有効化
3. **環境変数**: Azure App Serviceの設定で本番環境の値を設定
4. **キャッシュ設定**: 静的ファイルの適切なキャッシュ設定

## 🔄 GitHub連携（既に完了済み）

- GitHubリポジトリとAzure App Serviceが連携済み
- コードの変更が自動的にデプロイされる
- ビルドエラーがある場合はGitHub Actionsで確認可能
