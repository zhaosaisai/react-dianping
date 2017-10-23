# react-dianping
:dolls: Create dianping app use react

## DEMO

<div style="display:inline-block;">![](http://ww1.sinaimg.cn/large/006FmM8yly1fksjbjew93j30860f8goi.jpg)</div>
<div style="display:inline-block;">![](http://ww1.sinaimg.cn/large/006FmM8yly1fksjbwjz1ij308o0f7t91.jpg)</div>
<div style="display:inline-block;">![](http://ww1.sinaimg.cn/large/006FmM8yly1fksjc6p51sj308k0fc0sx.jpg)</div>
<div style="display:inline-block;">![](http://ww1.sinaimg.cn/large/006FmM8yly1fksjchb14hj308h0f540s.jpg)</div>

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

> JUST FOR IMPROVMENT