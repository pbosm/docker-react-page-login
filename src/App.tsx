import React from 'react';
import { Layout } from 'antd';
import AppRoutes from '../src/router/router';
import '../src/assets/styles/global.css';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Header className='header' style={{display: 'none'}}>
        {/*
        Componente header/navbar
        */}
        {/* Adicione o conteúdo do header aqui */}
      </Header>
      <Content className='content'>
        <AppRoutes />
      </Content>
      <Footer className='footer' style={{display: 'none'}}>
        {/*
        Componente footer
        */}
        {/* Adicione o conteúdo do footer aqui */}
      </Footer>
    </Layout>
  );
};

export default App;
