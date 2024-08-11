import React from 'react';
import { Form } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

interface LoginInputProps {
  name: string;
  type: string;
  placeholder: string;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  rules?: any[];
  width?: string;
  icon?: React.ReactNode; 
  iconStyle?: React.CSSProperties;
  eyeIconStyle?: React.CSSProperties;
  colorInput?: string;
  style?: React.CSSProperties;
}

const LoginInput: React.FC<LoginInputProps> = ({
  name,
  type,
  placeholder,
  showPassword,
  onTogglePassword,
  rules,
  width = '100%',
  icon, 
  iconStyle,
  eyeIconStyle,
  colorInput = 'white',
  style = {},
}) => {
  const isPassword = type === 'password';

  return (
    <Form.Item
      name={name}
      rules={rules}
      className="mb-4"
    >
      <div style={{ position: 'relative', width: width }}>
        {icon && (
          <div
            className='iconInput'
            style={{
              fontSize: '20px',
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              ...iconStyle
            }}
          >
            {icon}
          </div>
        )}
        <input
          type={isPassword ? (showPassword ? 'text' : 'password') : 'text'}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '12px 12px 12px 40px',
            border: 'none',
            borderBottom: '2px solid black',
            backgroundColor: 'transparent',
            color: colorInput,
            boxShadow: 'none',
            outline: 'none',
            ...style
          }}
        />
        {isPassword && onTogglePassword && (
          <div
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              ...eyeIconStyle,
            }}
            onClick={onTogglePassword}
          >
            {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        )}
      </div>
    </Form.Item>
  );
};

export default LoginInput;
