
import React , {Component} from 'react'
import './index.less'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
import menuList from '../../config/menuConfig'
const { SubMenu } = Menu;


class LeftNav extends Component{

    render (){
        return (
            <div className='left-nav'>
                <Link to='/home' className='left-nav-header'>
                    <img src={logo} alt=""/>
                    <h1>采日能源</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['/home']}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.getMeunNodes(menuList)
                    }
                </Menu>
            </div>
        )
    }
    getMeunNodes=(menuList)=>{
       return menuList.map(item=>{
            if(!item.children){
                return (
                    <Menu.Item key={item.key} >
                        <Link to={item.key} style={{color:'rgba(255, 255, 255, 0.65)'}}>{item.title}</Link>
                    </Menu.Item>
                )
            }else {
                return (
                    <SubMenu key={item.key}  title={item.title}>
                        {this.getMeunNodes(item.children)} {/*  递归渲染子菜单 */}
                    </SubMenu>
                )
            }
        })

        /*  reduce 实现

          return menuList.reduce((prev,item)=>{
            if(!item.children){
                prev.push((
                    <Menu.Item key={item.key} >
                        <Link to={item.key} style={{color:'rgba(255, 255, 255, 0.65)'}}>{item.title}</Link>
                    </Menu.Item>
                ))
            }else {
                prev.push((
                    <SubMenu key={item.key}  title={item.title}>
                        {this.getMeunNodes(item.children)}  {/!*递归渲染子菜单*!/}
                    </SubMenu>
                ))
            }
            return prev
        },[])

        */
    }


}

export  default  LeftNav
