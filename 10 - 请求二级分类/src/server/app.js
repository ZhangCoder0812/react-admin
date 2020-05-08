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

        {id:1,parentID:0,title:'JavaScript权威指南(第6版)中文版',name:'韦德'},
        {id:2,parentID:0,title:'jQuery权威指南',name:'詹姆斯'},
        {id:3,parentID:0,title:'Web开发典藏大系',name:'杜兰特'},
        {id:4,parentID:0,title:'AngularJS权威教程',name:'罗斯'},
        {id:5,parentID:0,title:'HTML5 Canvas 游戏开发实战',name:'哈登'},
        {id:6,parentID:0,title:'深入浅出Node.js',name:'库里'},
        {id:7,parentID:0,title:'算法图解',name:'格林'},
        {id:8,parentID:0,title:'javascript设计模式与开发实践',name:'南斯'},
        {id:9,parentID:0,title:'Javascript 高效图形编程',name:'科比'},

        {id:12,parentID:1,title:'科学小博士文库',name:'罗志祥'},
        {id:12,parentID:1,title:'闪闪的红星',name:'李易峰'},
        {id:14,parentID:2,title:'小学生百自然度观察日记',name:'王源'},
        {id:15,parentID:2,title:'杨红樱校园小说',name:'易烊千玺'},
        {id:16,parentID:3,title:'格列佛游记',name:'谢娜'},
        {id:17,parentID:4,title:'假如答只有三天光明',name:'何炅'},
        {id:18,parentID:5,title:'绿野仙踪',name:'杜海涛'},
        {id:19,parentID:6,title:'叶圣陶作品选',name:'薛之谦'},
        {id:20,parentID:5,title:'林海雪原',name:'林俊杰'},
        {id:21,parentID:6,title:'中国少年报',name:'周杰伦'},
        {id:22,parentID:7,title:'神秘岛',name:'潘玮柏'},
        {id:23,parentID:8,title:'许三观知卖血记',name:'大张伟'}
    ]
    let parentID=req.query.parentID
    let result=data.filter(item=>item.parentID==parentID)
    res.send(result)
})

app.listen('5001' , res=>{
    console.log('启动成功！')
})
