# react-dianping
:dolls: Create dianping app use react

## DEMO

![](https://github.com/2json/react-dianping/blob/master/resources/d1.png)    ![](https://github.com/2json/react-dianping/blob/master/resources/d2.png)

![](https://github.com/2json/react-dianping/blob/master/resources/d3.png)
![](https://github.com/2json/react-dianping/blob/master/resources/d4.png)

## ENVIRONMENT

```json
"scripts": {
    "dev": "node server.js",
    "remove:build": "rm -rf ./build",
    "clean:build": "yarn run remove:build && mkdir build",
    "build": "yarn run remove:build && NODE_ENV=production ./node_modules/.bin/webpack --progress --colors",
    "production": "yarn run build && cd build && python -m SimpleHTTPServer",
    "tree": "tree -I 'vedio|node_modules|.git|.vscode|docs' ./"
  }
```

## HOW

```bash
git clone https://github.com/2json/react-dianping.git

cd react-dianping

# run dev
yarn run dev

# preview for production (depend on python)
yarn run production

# build for production
yarn run build
```

## TREE

```bash
├── README.md
├── index.html
├── package.json
├── postcss.config.js
├── resources
│   ├── d1.png
│   ├── d2.png
│   ├── d3.png
│   └── d4.png
├── server
│   ├── index.js
│   ├── mock
│   │   ├── ad.js
│   │   ├── comment.js
│   │   ├── detailinfo.js
│   │   └── list.js
│   └── out.log
├── server.js
├── src
│   ├── components
│   │   ├── BuyAndStore
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── Category
│   │   │   ├── category.js
│   │   │   ├── icon
│   │   │   │   ├── SPA.png
│   │   │   │   ├── chongwu.png
│   │   │   │   ├── dianying.png
│   │   │   │   ├── dujiachuxing.png
│   │   │   │   ├── gouwu.png
│   │   │   │   ├── huochejipiao.png
│   │   │   │   ├── huoguo.png
│   │   │   │   ├── jianshenyundong.png
│   │   │   │   ├── jiazhuang.png
│   │   │   │   ├── jiehun.png
│   │   │   │   ├── jingdian.png
│   │   │   │   ├── jiuba.png
│   │   │   │   ├── jiudian.png
│   │   │   │   ├── ktv.png
│   │   │   │   ├── liren.png
│   │   │   │   ├── meifa.png
│   │   │   │   ├── meishi.png
│   │   │   │   ├── qinzi.png
│   │   │   │   ├── quanbufenlei.png
│   │   │   │   ├── ribencai.png
│   │   │   │   ├── shaokao.png
│   │   │   │   ├── shenghuofuwu.png
│   │   │   │   ├── waimai.png
│   │   │   │   ├── xiaochikuaican.png
│   │   │   │   ├── xican.png
│   │   │   │   ├── xuexipeixun.png
│   │   │   │   ├── xuixianyule.png
│   │   │   │   ├── zhoubianyou.png
│   │   │   │   ├── zizhucan.png
│   │   │   │   └── zuliaoanmo.png
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── CityHeader
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── CityList
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── Comment
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── CurrentCity
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── DetailInfo
│   │   │   ├── index.jsx
│   │   │   ├── placeholder.png
│   │   │   └── style.scss
│   │   ├── HomeAd
│   │   │   ├── images
│   │   │   │   ├── banjia.png
│   │   │   │   ├── car.png
│   │   │   │   ├── paino.png
│   │   │   │   ├── summer.png
│   │   │   │   ├── travel.png
│   │   │   │   └── video.png
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── HomeHeader
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── List
│   │   │   ├── images
│   │   │   │   ├── chuanchuan.png
│   │   │   │   ├── cloth.png
│   │   │   │   ├── hanbao.png
│   │   │   │   ├── marry.png
│   │   │   │   └── zizhu.png
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── LoadMore
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── Login
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── Order
│   │   │   ├── images
│   │   │   │   ├── chuanchuan.png
│   │   │   │   ├── cloth.png
│   │   │   │   ├── hanbao.png
│   │   │   │   ├── marry.png
│   │   │   │   └── zizhu.png
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── SearchHeader
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── SearchInput
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   ├── Star
│   │   │   ├── index.jsx
│   │   │   └── style.scss
│   │   └── UserInfo
│   │       ├── index.jsx
│   │       └── style.scss
│   ├── config
│   │   └── localStorageKeys.js
│   ├── containers
│   │   ├── 404.jsx
│   │   ├── City
│   │   │   └── index.jsx
│   │   ├── Detail
│   │   │   ├── index.jsx
│   │   │   └── pages
│   │   │       ├── Buy.jsx
│   │   │       ├── Comment.jsx
│   │   │       └── Info.jsx
│   │   ├── Home
│   │   │   ├── index.jsx
│   │   │   └── pages
│   │   │       ├── Ad.jsx
│   │   │       └── List.jsx
│   │   ├── Login
│   │   │   └── index.jsx
│   │   ├── Search
│   │   │   ├── index.jsx
│   │   │   └── pages
│   │   │       └── List.jsx
│   │   ├── User
│   │   │   ├── index.jsx
│   │   │   └── pages
│   │   │       ├── Order.jsx
│   │   │       └── order.js
│   │   └── index.jsx
│   ├── index.js
│   ├── redux
│   │   ├── actions
│   │   │   └── index.js
│   │   ├── constants
│   │   │   └── index.js
│   │   ├── reducers
│   │   │   ├── index.js
│   │   │   ├── store.js
│   │   │   └── userinfo.js
│   │   └── store
│   │       └── index.js
│   ├── router
│   │   └── routerConfig.js
│   ├── static
│   │   ├── css
│   │   │   ├── common.scss
│   │   │   └── font.css
│   │   └── fonts
│   │       ├── icomoon.eot
│   │       ├── icomoon.svg
│   │       ├── icomoon.ttf
│   │       └── icomoon.woff
│   └── util
│       └── localStorage.js
├── webpack.config.js
└── yarn.lock
```

> JUST FOR IMPROVMENT
