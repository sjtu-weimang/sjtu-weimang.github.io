import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../store/modules/user';
import { useNavigate } from 'react-router-dom';
const App = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        //触fa异步action fectchLogin
        // await dispatch(fetchLogin(values));
        //跳转到登录页面
        navigate('/');
        //提示用户
        message.success('登录成功');

    };
    const divStyle =
    {
        textAlign: 'center',
        margin: "20px auto",
        fontSize: "20px",
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            style={{
                backgroundColor: '#f0f2f5',
                width: '500px',
                padding: '20px',
                margin: '200px auto',
                borderRadius: '10px',
            }}
        >   <div className='title' style={divStyle}>管理员登录</div>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="#">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Button type="primary" htmlType="submit" className="login-form-button"
                    style={{ alignItems: 'center', justifyContent: 'center' }}>
                    登录
                </Button>
                Or <a href="#">register now!</a>
            </Form.Item>
        </Form>
    );
};
export default App;