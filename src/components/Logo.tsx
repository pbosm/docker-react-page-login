import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faW } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Logo: React.FC = () => {
    return (
        <div className="fixed-icon">
            <FontAwesomeIcon icon={faW} size="3x" color="yellow" />
        </div>
    );
};

export default Logo;
