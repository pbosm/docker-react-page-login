import '../../assets/styles/register/register.css';
import { UserOutlined, MailFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import { Form, message } from 'antd';
import Layout from '../../components/Layout';
import LoginInput from '../../components/login/LoginInput';
import LoginDivContent from '../../components/login/LoginDivContent';
import LoginButton from '../../components/login/LoginButton';
import LoginPassword from '../../components/login/LoginPassword';
import { useLoginProvider } from '../../context/login/LoginProviderContext';

const Register: React.FC = () => {
    const [form] = Form.useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const loginProvider = useLoginProvider();

    const onFinish = (values: any) => {
        const { email, password, confirmPassword } = values;

        loginProvider.register(email, password, confirmPassword)
            .then(response => {
                message.success('registrado com sucesso!');
                console.log(response.data);
            })
            .catch(error => {
                message.error('Falha ao realizar o registro.');
                console.error(error);
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log(errorInfo);
        message.error('Falha ao criar conta.');
    };

    const handlePasswordToggle = () => {
        setShowPassword(prev => !prev);
    };

    const handleConfirmPasswordToggle = () => {
        setShowConfirmPassword(prev => !prev);
    };

    return (
        <Layout>
            <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="register-form"
            >
                <LoginDivContent
                    title="Criar uma conta"
                    padding="20px"
                    fontSize="35px"
                    contentStyle={{
                        backgroundColor: 'rgba(160, 154, 154, 0.171)',
                        borderRadius: '30px',
                        backdropFilter: 'blur(4px)',
                        border: '2px solid #8B4513',
                        width: '100%',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontSize: "35px"
                    }}
                >
                    <LoginInput
                        name="name"
                        type="text"
                        placeholder="Digite seu nome de usuário..."
                        rules={[
                            { required: true, message: 'Por favor, insira seu nome!' },
                        ]}
                        icon={< UserOutlined />}
                        iconStyle={{
                            color: 'white',
                        }}
                    />
                    <LoginInput
                        name="email"
                        type="text"
                        placeholder="Digite seu email..."
                        rules={[
                            { required: true, message: 'Por favor, insira seu email!' },
                            { type: 'email', message: 'O email é inválido!' },
                        ]}
                        icon={< MailFilled />}
                    />
                    <LoginPassword
                        showPassword={showPassword}
                        showConfirmPassword={showConfirmPassword}
                        handlePasswordToggle={handlePasswordToggle}
                        handleConfirmPasswordToggle={handleConfirmPasswordToggle}
                    />
                    <Form.Item>
                        <LoginButton
                            buttonText="Criar conta"
                            showLinkDiv={false}
                            style={{ marginTop: '8%' }}
                            htmlType="submit"
                        />
                    </Form.Item>
                </LoginDivContent>
            </Form>
        </Layout>
    );
};

export default Register;
