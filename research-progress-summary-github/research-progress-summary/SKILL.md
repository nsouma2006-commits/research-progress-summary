---
name: research-progress-summary
description: Research notes, experiment results, observations, issues, and prior reports are transformed into an accurate research progress summary. Use when the user asks to summarize weekly progress, compare with a previous report, separate facts from interpretation, prepare an adviser update, or identify next actions.
license: MIT
metadata:
  author: nishitani
  version: "1.0.0"
---

# Research Progress Summary

研究メモ、実験結果、観察記録、指導コメント、前回報告を整理し、研究進捗を正確かつ読みやすくまとめる。

## When to use

次の依頼で使用する。

- 「研究進捗をまとめて」
- 「今週やったことを週報にして」
- 「前回からの進展と残課題を整理して」
- 「実験結果を事実と考察に分けて」
- 「指導教員への報告文を作って」
- 「次回までのタスクを優先順位付きで出して」

## Inputs

利用可能な情報だけを使う。

- 日々の研究メモ
- 実験条件、測定値、観察結果
- 実装、調査、分析の記録
- 発生した問題と試した対策
- 指導教員や共同研究者からのコメント
- 前回の進捗報告
- 関連するファイル、図表、URL

## Workflow

1. 依頼の用途を判定する。指定がなければ「標準の研究進捗報告」とする。
2. 入力を「実施内容」「客観的結果」「考察」「課題」「予定」に分類する。
3. 前回報告がある場合は、新規、変更、継続、未完了を抽出する。
4. 数値、単位、実験条件、固有名詞を原文と照合する。
5. `references/report-template.md` に従って報告を構成する。
6. 次の行動を、具体性と優先順位が分かる形にする。
7. `references/quality-checklist.md` で最終確認する。

## Output modes

依頼に応じて次のモードを選ぶ。

- **standard**: 研究進捗の完全版
- **brief**: 指導教員への短い報告
- **weekly**: 週報形式
- **comparison**: 前回報告との差分中心
- **lab-note**: 再現性を重視した研究ノート形式

指定がない場合は `standard` を使用する。

## Required output structure

原則として、次の順序で出力する。

1. 今回の要約
2. 実施したこと
3. 得られた結果
4. 考察
5. 課題・問題点
6. 次に行うこと
7. 前回からの変更点

該当情報がない節は、内容を推測せず「情報なし」または「要確認」と記載する。短文依頼では、空の節を省略してもよい。

## Accuracy rules

- 入力にない結果、理由、数値、引用を作らない。
- 事実、解釈、仮説、予定を混同しない。
- 数値、単位、試料名、条件を勝手に変更しない。
- 因果関係が確認できない場合は断定しない。
- 進展が少なくても誇張しない。
- 不明点は「不明」「要確認」と明示する。
- 推測を含める場合は「可能性」「仮説」と表示する。
- 未公開情報や個人情報を不必要に外部向け文書へ含めない。

## Writing style

- 日本語で、簡潔かつ客観的に書く。
- 一文を長くしすぎない。
- 結論のない作業列挙を避け、結果との関係を示す。
- 箇条書きと短い段落を使い分ける。
- 専門用語は入力の表記を維持する。
- 次の行動は「動詞 + 対象 + 完了条件」を意識する。

## References

- 報告形式: `references/report-template.md`
- 品質確認: `references/quality-checklist.md`
- 入力フォーム: `assets/progress-input-template.md`
- 入出力例: `examples/sample-input.md`, `examples/sample-output.md`
