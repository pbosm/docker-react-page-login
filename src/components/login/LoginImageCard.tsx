import React from 'react';
import imageUrl from '../../assets/image/img-login.png';

interface LoginImageCardProps {
  getImage?: string;
  side?: boolean;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  imageCardStyle?: React.CSSProperties;
}

const LoginImageCard: React.FC<LoginImageCardProps> = ({ getImage, side, style, containerStyle, imageCardStyle }) => {
  const imageSrc = getImage || imageUrl;

  return (
    <div
      className="imageCard-container"
      style={{
        position: 'absolute',
        top: 0,
        left: side ? '0' : '100%',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 1000,
        ...containerStyle
      }}
    >
      <div
        className="imageCard"
        style={{
          height: '100%',
          left: side ? '0' : '-100%',
          backgroundSize: 'contain',
          backgroundImage: `url(${imageSrc})`,
          ...imageCardStyle,
          ...style
        }}
      >
      </div>
    </div>
  );
};

export default LoginImageCard;
