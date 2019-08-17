/*服务器代码*/
const express = require("express");
const {mock} = require("mockjs");

const app = express();

//处理图组性情也的数据请求
app.get("/api/detail/picGroup_detail",(req,res)=>{
    let data = mock({
        code: 0,
        msg: 'ok',
        data : {
            title:"这是图组的标题",
            'img|3':[
                    {
                        'id|+1': 1,
                        url: '@image(320x440, @color)'
                    }
                ]
        }
    });
    res.json(data);
})




app.listen(9000,(err)=>{
    if(err){
        console.log("启动失败")
    }else{
        console.log("启动成功")
    }
})
