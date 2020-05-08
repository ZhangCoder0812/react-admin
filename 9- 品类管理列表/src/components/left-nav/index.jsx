
import React , {Component} from 'react'
import './index.less'
import logo from '../../assets/images/logo.png'
import {Link,withRouter} from 'react-router-dom'
import { Menu } from 'antd';
import menuList from '../../config/menuConfig'
const { SubMenu } = Menu;


class LeftNav extends Component{

    render (){
        /*
          获取当前路由,只有在路由组件中才有location
          withRouter  高阶组件
          包装非路由组件  返回一个组件
          新的组件向非路由组件传递三个参数： location,hidtory,match
        */
        const path = this.props.location.pathname
        return (
            <div className='left-nav'>
                <Link to='/home' className='left-nav-header'>
                    <img src={logo} alt=""/>
                    <h1>采日能源</h1>
                </Link>
                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={[this.openKey]}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.meunNodes
                    }
                </Menu>
            </div>
        )
    }
    // 在第一次render 之前执行  只执行一次 用来为第一次render渲染准备数据 不能放异步数据
    componentWillMount() {
        this.meunNodes=this.getMeunNodes(menuList)
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
                // 查找当前路由与之匹配的二级路由
                const path = this.props.location.pathname
                const uu=item.children.find(uu=>uu.key===path)
                if(uu){
                    this.openKey=item.key
                }
                return (
                    <SubMenu key={item.key}  title={item.title}>
                        {this.getMeunNodes(item.children)} {/*  递归渲染子菜单 */}
                    </SubMenu>
                )
            }
        })
    }


}


export  default  withRouter(LeftNav)
