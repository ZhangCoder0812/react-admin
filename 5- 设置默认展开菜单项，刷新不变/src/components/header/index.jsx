
import React , {Component} from 'react'
import './index.less'

class Header extends Component{

    render (){
         return (
             <div className='header'>
                 <div className='header-top'>
                     <span>欢迎，admin</span>
                     <a href="javascript;">退出</a>
                 </div>
                 <div className='header-bottom'>

                 </div>
             </div>
         )
    }

}

export  default  Header
