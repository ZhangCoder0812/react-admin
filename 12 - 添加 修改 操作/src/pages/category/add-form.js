
import React , {Component} from 'react'

import { Form, Select , Input, Button } from 'antd';


const { Option } = Select;

class AddForm extends Component{

    render (){

        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className='User'>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="分类"
                        name="title"
                        rules={[{ required: true, message: '请选择分类！' }]}
                    >
                        <Select >
                            <Option value="家电">家电</Option>
                            <Option value="电脑">电脑</Option>
                            <Option value="图书">图书</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="名称"
                        name="password"
                        rules={[{ required: true, message: '请输入名称！' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export  default  AddForm
