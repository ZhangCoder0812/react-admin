import jsonp from 'jsonp'
import ajax from './ajax'

export function goLogin(username,password) {
    return ajax('/login',{username,password},'post')
}


export function getCategory(parentID) {
    return ajax('/category',{parentID},'get')
}



export function reqWeather (city){
    const key='bdfd2a48d5b74aba8d8f066d5023a588'
    const url=`https://free-api.heweather.net/s6/weather/now?location=${city}&key=${key}`
    jsonp(url,{},(err,data)=>{
        console.log(err)
        console.log(data)
    })

}
