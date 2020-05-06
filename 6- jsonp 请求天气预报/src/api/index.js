
import jsonp from 'jsonp'

export const reqWeather  = (city) =>{
    const key='bdfd2a48d5b74aba8d8f066d5023a588'
    const url=`https://api.heweather.net/s6/weather/now?location=${city}&key=${key}`
    console.log(url);
    jsonp(url,{},(err,data)=>{
        console.log(err)
        console.log(data)
    })

}


