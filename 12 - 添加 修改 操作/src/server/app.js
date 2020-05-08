let express = require('express')
let app= express()

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});


app.post('/login',(req,res)=>{
    res.send('ok')
})

app.get('/category',(req,res)=>{
    let data=[

        {id:1,parentID:0,title:'家电',categoryId:1},
        {id:2,parentID:0,title:'图书',categoryId:2},
        {id:3,parentID:0,title:'电脑',categoryId:3},

        {id:4,parentID:1,title:'格力空调'},
        {id:5,parentID:1,title:'海尔空调'},
        {id:6,parentID:1,title:'海信空调'},
        {id:7,parentID:1,title:'美的空调'},
        {id:8,parentID:2,title:'javascript设计模式与开发实践'},
        {id:9,parentID:2,title:'深入浅出Node.js'},
        {id:10,parentID:2,title:'Web开发典藏大系'},
        {id:11,parentID:2,title:'jQuery权威指南'},
        {id:12,parentID:3,title:'华为电脑'},
        {id:13,parentID:3,title:'小米电脑'},
        {id:14,parentID:3,title:'苹果电脑'},
        {id:15,parentID:3,title:'联想电脑'},

    ]
    let parentID=req.query.parentID
    let result=data.filter(item=>item.parentID==parentID)
    res.send(result)
})

app.listen('5001' , res=>{
    console.log('启动成功！')
})
