import React from 'react';

interface divContentProps {
  title: string;
  children: React.ReactNode;
  padding?: string;
  fontSize?: string;
  contentStyle?: React.CSSProperties;
}

const divContent: React.FC<divContentProps> = ({
  title,
  children,
  padding = '30px',
  fontSize = '30px',
  contentStyle = {},
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card-body p-5 text-center" style={{ ...contentStyle }}>
        <h2 className="mb-5" style={{ padding, fontSize }}>{title}</h2>
          {children}
      </div>
    </div>
  );
};

export default divContent;