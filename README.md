# code-planner

1. [Node.js](https://nodejs.org/en)をインストールしてください。
2. `npm run setup`を実行してください。

Node-REDを利用する場合は、`npm run node-red`を実行してください。  
Jupyter Labを利用する場合は、`npm run win-jupyter`を実行してください。  
(Windows環境のみ動作確認、Python環境が必要)  

それぞれコマンドプロンプトが起動します。閉じると終了します。  
コマンドはpackage.jsonのscriptsに用意しています。  

## デスクトップアプリケーションの実行

`npm run app`を実行してください。  

## Windowsの場合

### Node-RED MCUの環境構築

**関連ファイルを一度削除しないと動作しない場合があります！** 
- C:\homeフォルダ : Node-REDのフローが保存されています
- C:\Espressif : frameworksのバージョンが異なる場合は一度削除してください
- C:\pjt\moddable : Moddableの環境が構築されます

#### 環境変数

検索欄の「環境変数を編集」から設定してください。  
IDF_PATH => C:\Espressif\frameworks\esp-idf-v5.1.2  
IDF_TOOLS_PATH => C:\Espressif  
MODDABLE => C:\pjt\moddable  

#### ESP-IDF

インストール：<https://dl.espressif.com/dl/esp-idf/?idf=5.1.2>  
インストール先はC:\Espressifにしてください。  

動作確認環境：esp-idf-v5.1.2、Offline Installer  
バージョンが異なる場合は、windows/mcu-setup.batのバージョンを変更してください。  

#### Moddable

Visual Studio 2022のx86 Native Tools Command Prompt for VS 2022が必要です。  
**npm runコマンドを実行する前に、`npm run win-cmd`を実行してください！**  
Visual Studio 2022のx86コマンドプロンプトが起動します。  
`npm run win-mcu-setup`でmoddableのビルド、ESP-IDFのセットアップが行われます。  
`npm run win-mcu-hello`でhello worldサンプルが実行されます。  

### Jupyter Lab

`npm run win-jupyter`を実行すると起動します。  
アプリ内でログインが必要な場合は、tokenを入力してください。  
CLIに表示されるURLのクエリに含まれます。  
例：http://localhost:8888/lab?token=...  

## Node-Creater(未実装)

Node-RED用のノードを作成するためのプログラムです。  
必要なファイルを生成します。  

## VOICEVOX

音声合成にはVOICEVOXを利用しています。
<https://voicevox.hiroshiba.jp/>
