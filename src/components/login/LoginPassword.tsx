import React from 'react';
import { Form } from 'antd';
import { LockFilled } from '@ant-design/icons';
import LoginInput from '../login/LoginInput';

interface LoginPasswordProps {
    showPassword: boolean;
    showConfirmPassword: boolean;
    handlePasswordToggle: () => void;
    handleConfirmPasswordToggle: () => void;
    colorInput?: string; 
    iconPassword?: string; 
    iconEye?: string; 
}

const LoginPassword: React.FC<LoginPasswordProps> = ({
    showPassword,
    showConfirmPassword,
    handlePasswordToggle,
    handleConfirmPasswordToggle,
    colorInput, 
    iconPassword,
    iconEye,
}) => {
    return (
        <>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
                style={{ marginBottom: "auto" }}>
                <LoginInput
                    name="password"
                    type="password"
                    placeholder="Digite sua senha..."
                    showPassword={showPassword}
                    onTogglePassword={handlePasswordToggle}
                    icon={<LockFilled />}
                    iconStyle={{ color: iconPassword || 'white' }}
                    eyeIconStyle={{ color: iconEye || 'grey' }}
                    colorInput={colorInput}
                />
            </Form.Item>
            <Form.Item
                name="confirmPassword"
                rules={[
                    { required: true, message: 'Por favor, confirme sua senha!' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('As senhas não correspondem!'));
                        },
                    }),
                ]}
            >
                <LoginInput
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirme sua senha..."
                    showPassword={showConfirmPassword}
                    onTogglePassword={handleConfirmPasswordToggle}
                    icon={<LockFilled />}
                    iconStyle={{ color: iconPassword || 'white' }}
                    eyeIconStyle={{ color: iconEye || 'grey' }}
                    colorInput={colorInput}
                />
            </Form.Item>
        </>
    );
};

export default LoginPassword;
