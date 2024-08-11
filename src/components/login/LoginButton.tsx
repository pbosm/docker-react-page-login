import React from 'react';
import { Button } from 'antd';

interface LoginButtonProps {
  onClick?: () => void;
  linkHref?: string;
  linkText?: string;
  buttonText?: string;
  buttonType?: 'default' | 'primary' | 'dashed' | 'link' | 'text';
  showLinkDiv?: boolean;
  style?: React.CSSProperties;
  htmlType?: 'button' | 'submit' | 'reset';
  linkStyle?: React.CSSProperties;
  buttonTextStyle?: React.CSSProperties;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  onClick,
  linkHref,
  linkText,
  buttonText,
  buttonType = 'primary',
  showLinkDiv = true,
  style = {},
  htmlType = 'button',
  linkStyle = {},
  buttonTextStyle = {},
}) => {
  return (
    <div>
      <Button
        className='buttonLogin'
        type={buttonType}
        onClick={onClick}
        style={style}
        htmlType={htmlType}
      >
        <span style={buttonTextStyle}>{buttonText}</span>
      </Button>
      {showLinkDiv && (
        <div className='mt-2'>
          <a href={linkHref} style={{ textTransform: 'uppercase', color: 'white', fontSize: '13px', ...linkStyle }}>
            {linkText}
          </a>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
