import '../../assets/styles/login/loginScreen.css';
import { MailFilled, LockFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import { Form, message } from 'antd';
import Layout from '../../components/Layout';
import LoginInput from '../../components/login/LoginInput';
import LoginDivContent from '../../components/login/LoginDivContent';
import LoginButton from '../../components/login/LoginButton';
import { useLoginProvider } from '../../context/login/LoginProviderContext';

const LoginScreen: React.FC = () => {
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);
  const loginProvider = useLoginProvider();

  const onFinish = (values: any) => {
    const { email, password } = values;

    // Isto é um provider, estou fazendo um request para esse endpoint, onde passo email, e password para fazer login, nesse caso vai dar cair no catch, pois não tem um endpoint
    // Nesse exemplo, vai cair no catch, pois não tem um endpoint
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
    <Layout>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        className="login-form"
      >
        <LoginDivContent
          title="Entrar no jogo"
          padding="40px"
          fontSize="35px"
          contentStyle={{
            backgroundColor: 'rgba(160, 154, 154, 0.171)',
            borderRadius: '30px',
            backdropFilter: 'blur(4px)',
            border: '2px solid #8B4513',
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
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
              color: 'white',
            }}
          />
          <LoginInput
            name="password"
            type="password"
            placeholder="Digite sua senha..."
            rules={[
              { required: true, message: 'Por favor, insira sua senha!' },
            ]}
            showPassword={showPassword}
            onTogglePassword={handlePasswordToggle}
            icon={< LockFilled />}
            iconStyle={{
              color: 'white',
            }}
            eyeIconStyle={{
              color: 'white',
            }}
          />
          <Form.Item>
            <LoginButton
              buttonText="Logar"
              linkHref="register"
              linkText="Criar nova conta"
              style={{ marginTop: '12%' }}
              htmlType="submit"
            />
          </Form.Item>
        </LoginDivContent>
      </Form>
    </Layout>
  );
};

export default LoginScreen;
