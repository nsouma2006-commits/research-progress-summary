# Research Progress Summary

研究メモや実験結果から、正確で読みやすい研究進捗報告を作成する Agent Skill です。

## 主な用途

- 週次の研究進捗まとめ
- 指導教員への報告
- 前回報告との差分整理
- 実験結果の「事実」と「考察」の分離
- 次回までのタスク整理

## ディレクトリ構成

```text
research-progress-summary/
├── SKILL.md
├── README.md
├── LICENSE
├── assets/
│   └── progress-input-template.md
├── examples/
│   ├── sample-input.md
│   └── sample-output.md
└── references/
    ├── quality-checklist.md
    └── report-template.md
```

## 使い方

Skillを利用するエージェントのSkillsディレクトリに、このフォルダーを配置してください。

呼び出し例:

```text
この研究メモから、今週の研究進捗をまとめて。
事実と考察を分け、次回までのタスクも優先順位付きで示して。
```

入力用テンプレートは `assets/progress-input-template.md` にあります。

## 設計方針

- 入力にない内容を捏造しない
- 事実、考察、仮説、予定を分離する
- 数値、単位、実験条件を保持する
- 前回報告がある場合は差分を明示する
- 問題点だけで終わらず、次の行動まで整理する

## License

MIT License
