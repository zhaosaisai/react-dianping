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

> JUST FOR IMPROVMENT
