# code-planner

1. Node.jsをインストールしてください。
2. npm run setupを実行してください。

Node-REDを利用する場合は、npm run node-redを実行してください。  
Jupyter Labを利用する場合は、npm run win-jupyterを実行してください。  
(Windows環境のみ動作確認、Python環境が必要)  

## デスクトップアプリケーションの実行

npm run appを実行してください。  

## Node-Creater

Node-RED用のノードを作成するためのプログラムです。  
必要なファイルを生成します。  

## Windowsの場合

### Node-RED MCUの環境構築

**!!! 関連ファイルを一度削除しないと動作しない場合があります !!! ** 
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
code-plannerの内部ではなく、Cドライブ直下に構築します。  
バージョンが異なる場合は、windows/mcu-setup.batのバージョンを変更してください。  

#### Moddable

**!!! npm runコマンドを実行する前に、npm run win-cmdを実行してください !!!  **
Visual Studio 2022のx86コマンドプロンプトが起動します。  
npm run win-mcu-setupでmoddableのビルドが行われます。  
npm run win-helloでhello worldサンプルが実行されます。  

### Jupyter Lab

npm run win-jupyterを実行すると起動します。  
アプリ内でログインが必要な場合は、tokenを入力してください。  
CLIに表示されるURLのクエリに含まれます。  
例：http://localhost:8888/lab?token=...  
