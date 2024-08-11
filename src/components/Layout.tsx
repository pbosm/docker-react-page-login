import React, { ReactNode } from 'react';
import bgImage from '../assets/image/castle1.png';
import Logo from './Logo';

interface LayoutProps {
  children: ReactNode;
  backgroundImage?: string | false;
  backgroundColor?: string | false;
}

const Layout: React.FC<LayoutProps> = ({ children, backgroundImage, backgroundColor = false }) => {
  const layoutStyle: React.CSSProperties = {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundImage: backgroundImage === false ? 'none' : `url(${backgroundImage || bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: backgroundColor === false ? 'transparent' : backgroundColor,
    position: 'relative',
  };

  return (
    <div className='layout' style={layoutStyle}>
      <Logo />
      {children}
    </div>
  );
};

export default Layout;
