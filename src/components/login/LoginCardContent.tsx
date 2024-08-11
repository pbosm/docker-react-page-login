import React from 'react';

interface LoginCardContentProps {
  children?: React.ReactNode;
  containerClassName?: string;
  formContainerClassName?: string;
  title?: string;
}

const LoginCardContent: React.FC<LoginCardContentProps> = ({
  children,
  containerClassName = '',
  formContainerClassName = '',
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className={`container ${containerClassName}`}>
        <div className={`form-container ${formContainerClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginCardContent;