import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  useEffect(() => {

}, []);

  return (
    <div className="container-fluid pt-12">
      <div className="row vh-100 bg-secondary align-items-center justify-content-center">
        <div className="col-md-6 text-center p-4">
          <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
          <h1 className="display-1 fw-bold">404</h1>
          <h1 className="mb-4">Page Not Found</h1>
          <Link to="/" className="btn btn-dark">
            Volte para o início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
