
import React , {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './index.less'
import {reqWeather} from '../../api'
import {formateDate} from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import menuList from '../../config/menuConfig'
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

class Header extends Component{
    state={
        title:'',
        name:memoryUtils.user.name,
        currentTime:formateDate(Date.now()),
        weatherText:'晴',
        weatherImg:'https://cdn.heweather.com/img/plugin/190516/icon/c/300d.png'
    }
    render (){

        const {name,currentTime,weatherText,weatherImg} =this.state
        const title=this.getTitle()
        return (
             <div className='header'>
                 <div className='header-top'>
                     <span>欢迎，{name}</span>
                     <a href="###" onClick={this.logOut}>退出</a>
                 </div>
                 <div className='header-bottom'>
                     <div className='header-bottom-left'>{title}</div>
                     <div className='header-bottom-right'>
                          <span>{currentTime}</span>
                          <img src={weatherImg} alt=""/>
                          {weatherText}
                     </div>
                 </div>
             </div>
         )
    }

    componentDidMount() {
        reqWeather('beijing')
        this.getTime()
        this.getTitle()
    }
    componentWillUnmount(){
      clearInterval(this.intervalId)
    }
    getTime=()=>{
        this.intervalId = setInterval(()=>{
            const currentTime=formateDate(Date.now())
            this.setState({currentTime})
        },1000)
    }
    getTitle(){
        const {pathname}=this.props.location
        let title
        menuList.forEach(item=>{
            if(item.key===pathname){
                title=item.title
            }else if(item.children){
                const uuTitle=item.children.find(uu=>uu.key===pathname)
                if(uuTitle){
                    title=uuTitle.title
                }
            }
        })
        return title
    }
    logOut=()=>{
        Modal.confirm({
            title: '确认退出',
            icon: <ExclamationCircleOutlined />,
            okText: '确认',
            cancelText: '取消',
            onOk:()=>{
               storageUtils.removeUser()
               memoryUtils.user={}
               this.props.history.replace('/login')
            }
        });
    }

}

export  default withRouter(Header)
