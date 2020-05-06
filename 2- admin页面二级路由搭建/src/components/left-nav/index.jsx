
import React , {Component} from 'react'
import './index.less'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;

class LeftNav extends Component{

    render (){
         return (
             <div className='left-nav'>
                 <Link to='/' className='left-nav-header'>
                         <img src={logo} alt=""/>
                         <h1>采日能源</h1>
                 </Link>
                 <Menu
                         defaultSelectedKeys={['1']}
                         defaultOpenKeys={['sub1']}
                         mode="inline"
                         theme="dark"
                     >
                         <Menu.Item key="1" icon={<PieChartOutlined />}>
                             <span>首页</span>
                         </Menu.Item>
                         <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                             <Menu.Item key="5">品类管理</Menu.Item>
                             <Menu.Item key="6">商品管理</Menu.Item>
                         </SubMenu>
                     </Menu>
             </div>
         )
    }

}

export  default  LeftNav
