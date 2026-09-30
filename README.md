# Research Progress Summary

研究メモ、実験結果、前回報告を、**情報を勝手に足さず**、全体像がすぐにつかめる研究進捗報告へ変換するオープンなテキストベースのSkillです。

> 読む量を減らしても、研究記録が持つ根拠は減らさない。

## 使い方

AIに、このリポジトリのリンクと資料を渡します。

```text
https://github.com/n.souma2006/research-progress-summary
このSkillを使って、添付した研究メモから完全版の研究進捗報告を作成してください。
事実、考察、仮説、予定を分け、前回報告がある場合は差分も整理してください。
```

## このページのリンクを渡されたAIへ

作業前に、次の3ファイルを**すべて**読んでください。手順、報告形式、根拠の決まりの3つで1つの型です。フォルダーを読めない環境では、このリポジトリを取得し、同じ3ファイルを読みます。

1. `SKILL.md`
2. `references/report-format.md`
3. `references/evidence-rules.md`

- 簡略版やサンプル版にせず、根拠台帳を全文載せます。
- 入力にない内容は足しません。
- ファイルを作れる環境では `.md` ファイルとして保存し、保存先を伝えます。
- Node.jsを実行できる場合は、出力後に次を実行し、不合格なら修正します。

```bash
node scripts/check-output.mjs output.md source.md
```

## 概要

Research Progress Summaryは、研究ノート、実験結果、調査記録、長いAI出力、前回報告などを、情報の由来を失わずに研究進捗報告へ変換します。

## 仕組み

1. **根拠台帳**: 報告を書く前に、入力内の情報を種類、原文、出典位置とともに一覧化します。
2. **分類**: 実施内容、条件、客観的結果、考察・仮説、問題、次の予定、コメントに分けます。
3. **報告構成**: 要約、実施事項、結果、考察、課題、次の行動、前回との差分の順で整理します。
4. **トレーサビリティ**: 本文の主要記述に台帳IDを結び付け、入力と照合できるようにします。
5. **検証**: スクリプトで必須見出し、台帳ID、数値の保持を確認します。

第一のルールは、ほかのすべてに優先します。**入力資料に記載されていないものは認めません。** 数値、単位、日付、担当、原因、判断、優先度、完了条件を補いません。

## ファイル

- `SKILL.md`: 実行手順
- `references/report-format.md`: 報告の構成と部品
- `references/evidence-rules.md`: 根拠の扱いと禁止事項
- `scripts/check-output.mjs`: 出力を入力資料と照合
- `scripts/validate.mjs`: Skill自身の構成を検証
- `examples/`: 架空の入出力例
- `assets/`: 研究メモ入力テンプレート
- `docs/`: 設計方針と評価手順

## それを使う

### フォルダーを読めるAI

このリポジトリ全体を渡し、`SKILL.md` の手順に従うよう依頼します。

### チャットAI

リポジトリへのリンクと研究資料を渡し、上記3ファイルを先に読むよう依頼します。

```text
Research Progress Summaryを使って、この研究メモから完全版の進捗報告を作ってください。
根拠台帳を作り、事実、考察、仮説、予定を分離してください。
前回報告がある場合は、新規、変更、継続、完了、未完了を示してください。

Node.jsが実行できる場合は結果を確認してください。
node scripts/check-output.mjs output.md source.md
```

## 検証と評価

Skillファイルを検証します。

```bash
node scripts/validate.mjs
```

出力例を確認します。

```bash
node scripts/check-output.mjs examples/sample-output.md examples/sample-input.md
```

評価手順は `docs/eval-protocol.md` を参照してください。

## バージョン管理

Gitタグ `vX.Y.Z` をリリースバージョンとして使用します。変更内容は `CHANGELOG.md` に記録します。

## ライセンス

MIT License
