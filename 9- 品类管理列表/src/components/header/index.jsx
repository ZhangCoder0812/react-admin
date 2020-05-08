
import React , {Component} from 'react'
import './index.less'
import {reqWeather} from '../../api'


class Header extends Component{

    render (){
         return (
             <div className='header'>
                 <div className='header-top'>
                     <span>欢迎，admin</span>
                     <a href="javascript;">退出</a>
                 </div>
                 <div className='header-bottom'>
                     <div className='header-bottom-left'>首页</div>
                     <div className='header-bottom-right'>
                          <span>2020-05-06 13:18</span>
                          <img src="https://cdn.heweather.com/img/plugin/190516/icon/c/300d.png" alt=""/>
                     </div>
                 </div>
             </div>
         )
    }

    componentDidMount() {
        reqWeather('beijing')
    }

}

export  default  Header
