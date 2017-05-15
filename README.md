# React Generator

使用React + Material UI + Mobx實作React 程式碼產生器
只要修改左側名稱及Lifecycle，右邊會即時顯示React程式碼
讓您快速了解React程式結構

[DEMO](https://reactmaker.github.io/react_generator/#/)

## 特色

* [react](https://github.com/facebook/react)
* [react-router 3](https://github.com/rackt/react-router)
* [webpack 2](https://github.com/webpack/webpack)
* [babel stage-0 ](https://github.com/babel/babel)
* [eslint](http://eslint.org)
* [Material UI](http://www.material-ui.com/)
* [Mobx](https://github.com/mobxjs/mobx)

## 需求配置
* node `^4.5.0`
* npm `^3.0.0`

## 開始

先確定好安裝了 node 4.5 以上的版本，接著就可以輸入以下指令

```bash
$ git clone https://github.com/ReactMaker/react_generator
$ cd react_generator
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

如果一切成功，就會看到以下畫面，並且瀏覽器會打開的範例頁面

![Imgur](http://i.imgur.com/14aROBn.png)
![Imgur](https://i.imgur.com/x1OZfVs.png)

開發當中最常用到的是 `npm start` 指令，我們還有一些其他的指令要介紹給你知道

| `npm run <script>` | 說明                                                                         |
|--------------------|------------------------------------------------------------------------------|
| `start`            | 啟動網站在 8000 port                                                         |
| `dist`             | 編譯整個網站成品到 dist 資料夾下                                             |
| `lint`             | 檢查所有的 js 檔案有沒有符合 coding style                                    |
| `lint:fix`         | 檢查所有的 js 檔案有沒有符合 coding style ，如果是一些簡單的錯誤就會嘗試修復 |

