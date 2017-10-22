const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// create route
router.get('/api/ads', async function (ctx){
    ctx.body = require('./mock/ad')
})

router.get('/api/list/:city/:page', async function (ctx){
    console.log(`You are requesting ${ctx.params.city}/${ctx.params.page} \n`)
    ctx.body = require('./mock/list')
})

router.get('/api/list/:city/:type/:keyword/:page', async function (ctx){
    console.log(`You are requesting ${ctx.params.city}/${ctx.params.type}/${ctx.params.keyword}/${ctx.params.page} \n`)
    ctx.body = require('./mock/list')
})


router.get('*', async function(ctx) {
    ctx.body = 'Thank You'
})

app.use(router.routes())
   .use(router.allowedMethods())
   .listen(8089, () => {
       console.log('Server porting on 8089')
   })