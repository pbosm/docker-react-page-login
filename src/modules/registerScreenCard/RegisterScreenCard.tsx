import '../../assets/styles/register/registerCard.css';
import React, { useState } from 'react';
import { Form, message } from 'antd';
import { MailFilled } from '@ant-design/icons';
import Layout from '../../components/Layout';
import LoginInput from '../../components/login/LoginInput';
import LoginButton from '../../components/login/LoginButton';
import LoginDivContent from '../../components/login/LoginCardContent';
import LoginImageCard from '../../components/login/LoginImageCard';
import LoginPassword from '../../components/login/LoginPassword';
import registerImg from '../../assets/image/img-register.png'
import { useLoginProvider } from '../../context/login/LoginProviderContext';

const RegisterScreenCard: React.FC = () => {
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
        <Layout backgroundImage={false} backgroundColor='#5180c1'>
            <LoginDivContent containerClassName='register' formContainerClassName='register'>
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    className="registerCard-form"
                >
                    <h1 className="text-center mb-5 p-1 mt-5">Criar nova conta</h1>
                    <LoginInput
                        name="email"
                        type="text"
                        placeholder="Digite seu email..."
                        rules={[
                            { required: true, message: 'Por favor, insira seu email!' },
                            { type: 'email', message: 'O email é inválido!' },
                        ]}
                        icon={<MailFilled />}
                        iconStyle={{ color: '#5180c1' }}
                        colorInput='black'
                    />
                    <LoginPassword
                        showPassword={showPassword}
                        showConfirmPassword={showConfirmPassword}
                        handlePasswordToggle={handlePasswordToggle}
                        handleConfirmPasswordToggle={handleConfirmPasswordToggle}
                        iconPassword='#5180c1'
                        colorInput='black'
                    />
                    <Form.Item style={{ textAlign: 'center' }}>
                        <LoginButton
                            buttonText="Criar nova conta"
                            showLinkDiv={false}
                            style={{ marginTop: '10%', width: '85%', height: '60px' }}
                            htmlType="submit"
                            buttonTextStyle={{ color: '#5180c1', fontSize: '20px' }}
                        />
                    </Form.Item>
                </Form>
                <LoginImageCard getImage={registerImg} side={true} />
            </LoginDivContent>
        </Layout>
    );
};

export default RegisterScreenCard;
