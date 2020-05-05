
import React , {Component} from 'react'
import memoryUtils from '../../utils/memoryUtils'
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

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
                    <Content style={{backgroundColor:'#fff'}}>Content</Content>
                    <Footer style={{textAlign:'center',color:'#ccc'}}>上海采日能源科技有限公司</Footer>
                </Layout>
            </Layout>
         )
    }

}

export  default  Admin