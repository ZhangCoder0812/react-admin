import axios from 'axios'
import {message } from 'antd';

export default function ajax(url,data={},type='get') {
    url='http://localhost:5001'+url
    return new Promise((reslove,reject)=>{
        let promise
        if(type==='get'){
            promise = axios.get(url,{params:data})
        }else {
            promise = axios.post(url,data)
        }
        promise.then(res=>{
            reslove(res)
        }).catch(err=>{
            message.success('请求失败！')
        })

    })
}
