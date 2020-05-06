
import React , {Component} from 'react'
import './index.less'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
import {WindowsOutlined,InsertRowAboveOutlined,SolutionOutlined,BarChartOutlined,UserAddOutlined} from '@ant-design/icons';
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
                    <Menu.Item key="/home" icon={<WindowsOutlined />}>
                        <Link to='/home' style={{color:'rgba(255, 255, 255, 0.65)'}}>首页</Link>
                    </Menu.Item>
                    <SubMenu key="goods" icon={<InsertRowAboveOutlined />} title="商品">
                        <Menu.Item key="/category">
                            <Link to='/category'>品类管理</Link>
                        </Menu.Item>
                        <Menu.Item key="/product">
                            <Link to='/product'>商品管理</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/user" icon={<UserAddOutlined />}>
                        <Link to='/user' style={{color:'rgba(255, 255, 255, 0.65)'}}>用户管理</Link>
                    </Menu.Item>
                    <Menu.Item key="/role" icon={<SolutionOutlined />}>
                        <Link to='/role' style={{color:'rgba(255, 255, 255, 0.65)'}}>角色管理</Link>
                    </Menu.Item>
                    <SubMenu key="chars" icon={<BarChartOutlined />} title="图表">
                        <Menu.Item key="/charts/bar">
                            <Link to='/charts/bar'>柱状图</Link>
                        </Menu.Item>
                        <Menu.Item key="/charts/line">
                            <Link to='/charts/line'>折线图</Link>
                        </Menu.Item>
                        <Menu.Item key="/charts/pie">
                            <Link to='/charts/pie'>饼图</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }

}

export  default  LeftNav
