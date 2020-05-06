
import React , {Component} from 'react'
import memoryUtils from '../../utils/memoryUtils'
import {Redirect,Route , Switch} from 'react-router-dom'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const {   Footer, Sider, Content } = Layout;

class Admin extends Component{

    render (){
        const name = memoryUtils.user.name
        if(!name){
            return <Redirect to='/login' />
        }
        return (
            <Layout style={{height:'100%'}}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header />
                    <Content style={{backgroundColor:'#fff'}}>
                        <Switch>  {/* Switch 拿到当前的页面路由去匹配 找不到就执行Redirect */}
                            <Route path='/home' component={Home}></Route>
                            <Route path='/goods/category' component={Category}></Route>
                            <Route path='/goods/product' component={Product}></Route>
                            <Route path='/role' component={Role}></Route>
                            <Route path='/user' component={User}></Route>
                            <Route path='/charts/bar' component={Bar}></Route>
                            <Route path='/charts/line' component={Line}></Route>
                            <Route path='/charts/pie' component={Pie}></Route>
                            <Redirect to='/home' />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center',color:'#ccc'}}>上海采日能源科技有限公司</Footer>
                </Layout>
            </Layout>
         )
    }

}

export  default  Admin
