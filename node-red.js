var http = require('http');
var express = require("express");
var RED = require("node-red");

// Expressアプリケーションの生成
var app = express();

// 静的コンテンツのルートを追加
app.use("/",express.static("public"));

// サーバの生成
var server = http.createServer(app);

// 設定オブジェクトの生成 - 他のオプションについてはデフォルトの 'settings.js' ファイルを参照してください
var settings = {
    httpAdminRoot:"/red",
    httpNodeRoot: "/api",
    userDir:"./.node-red/",
    editorTheme: {
        projects: {
            enabled: true
        }
    },
    functionGlobalContext: { }    // グローバルコンテキストを有効化
};

// サーバと設定とランタイムの初期化
RED.init(server,settings);

// エディタUIのルートを '/red' に指定
app.use(settings.httpAdminRoot,RED.httpAdmin);

// HTTP node UIのルートを '/api' に指定
app.use(settings.httpNodeRoot,RED.httpNode);

server.listen(8000);

// ランタイム起動
RED.start();
