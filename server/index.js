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

router.get('/api/detail/:id', async function (ctx) {
    console.log('详情页 - 商户信息')

    const params = ctx.params
    const id = params.id

    console.log('商户id: ' + id)

    ctx.body = require('./mock/detailinfo')
})

router.get('/api/detail/comment/:id/:page', async function(ctx) {
    console.log(ctx.params.page, ctx.params.id)
    ctx.body = require('./mock/comment')
})


router.get('*', async function(ctx) {
    ctx.body = 'Thank You'
})

app.use(router.routes())
   .use(router.allowedMethods())
   .listen(8089, () => {
       console.log('Server porting on 8089')
   })