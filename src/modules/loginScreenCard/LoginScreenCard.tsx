import '../../assets/styles/login/loginScreenCard.css';
import React, { useState } from 'react';
import { Form, message } from 'antd';
import { MailFilled, LockFilled } from '@ant-design/icons';
import Layout from '../../components/Layout';
import LoginInput from '../../components/login/LoginInput';
import LoginButton from '../../components/login/LoginButton';
import LoginDivContent from '../../components/login/LoginCardContent';
import LoginImageCard from '../../components/login/LoginImageCard';
import { useLoginProvider } from '../../context/login/LoginProviderContext';

const LoginScreenCard: React.FC = () => {
    const [form] = Form.useForm();
    const [showPassword, setShowPassword] = useState(false);
    const loginProvider = useLoginProvider();

    const onFinish = (values: any) => {
        const { email, password } = values;

        loginProvider.login(email, password)
          .then(response => {
            message.success('Login realizado com sucesso!');
            console.log(response.data);
          })
          .catch(error => {
            message.error('Falha ao realizar o login.');
            console.error(error);
          });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log(errorInfo);
        message.error('Falha ao realizar o login.');
    };

    const handlePasswordToggle = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <Layout backgroundImage={false} backgroundColor='#5180c1'>
            <LoginDivContent title="Login">
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    className="login-form"
                >
                    <h1 className="text-center mb-5 p-1">Login</h1>
                    <LoginInput
                        name="email"
                        type="text"
                        placeholder="Digite seu email..."
                        rules={[
                            { required: true, message: 'Por favor, insira seu email!' },
                            { type: 'email', message: 'O email é inválido!' },
                        ]}
                        icon={< MailFilled />}
                        iconStyle={{
                            color: '#5180c1',
                        }}
                        colorInput='black'
                    />
                    <LoginInput
                        name="password"
                        type="password"
                        placeholder="Digite sua senha..."
                        rules={[
                            { required: true, message: 'Por favor, insira sua senha!' },
                        ]}
                        icon={< LockFilled />}
                        iconStyle={{
                            color: '#5180c1',
                        }}
                        eyeIconStyle={{
                            color: 'grey',
                            fontSize: '15px'
                        }}
                        colorInput='black'
                        showPassword={showPassword}
                        onTogglePassword={handlePasswordToggle}
                    />
                    <Form.Item style={{ textAlign: 'center' }}>
                        <LoginButton
                            buttonText="Logar"
                            linkHref="registerscreencard"
                            linkText="Criar nova conta"
                            style={{ marginTop: '20%', marginBottom: '5%', width: '85%', height: '60px' }}
                            htmlType="submit"
                            buttonTextStyle={{ color: '#5180c1', fontSize: '20px' }}
                            linkStyle={{ color: '#5180c1', marginBottom: '50px', margin: '50px' }}
                        />
                    </Form.Item>
                </Form>
                <LoginImageCard />
            </LoginDivContent>
        </Layout>
    );
};

export default LoginScreenCard;
