
import React , {Component} from 'react'
import { Form, Input,message, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
import logo from './images/logo.png'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

class Login extends Component{

    render (){
         return (
             <div className='login'>
                 <header className='login-header'>
                     <img src={logo} alt="logo"/>
                     <h1>后台管理系统</h1>
                 </header>
                 <section className='login-content'>
                     <h2>用户登录</h2>
                     <Form
                         name="normal_login"
                         className="login-form"
                         onFinish={this.onFinish}
                     >
                         <Form.Item name="username">
                             <Input
                                 prefix={<UserOutlined className="site-form-item-icon" />}
                                 placeholder="Username"
                             />
                         </Form.Item>
                         <Form.Item name="password">
                             <Input
                                 prefix={<LockOutlined className="site-form-item-icon" />}
                                 type="password"
                                 placeholder="Password"
                             />
                         </Form.Item>

                         <Form.Item>
                             <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                         </Form.Item>
                     </Form>
                 </section>
             </div>
         )
    }

    onFinish=(values)=>{
       const {username,password} =values
       if(username&&password) {
           message.success('登录成功！')
           memoryUtils.user.name=username
           storageUtils.saveUser(username)
           // replace 不能回退到上一页 push可以回退到上一页
           this.props.history.replace('/')
       }else {
           message.error('请输入用户名或密码！');
       }

    }

}

export  default  Login