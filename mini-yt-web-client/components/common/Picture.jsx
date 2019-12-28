import React from 'react';
import { string, oneOf } from 'prop-types';
import styled from 'styled-components';

export const variants = {
  square: 'square',
  '16x9': '16x9',
  '4x3': '4x3',
};

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Picture = styled(({ className, src, alt }) => (
  <picture className={className}>
    <Img src={src} alt={alt} />
  </picture>
))`
  display: block;

  position: relative;
  height: 0;
  width: 100%;
  background: #f0f0f0;

  ${({ variant }) => (variant === variants.square ? 'padding-top: 100%;' : '')}
  ${({ variant }) => (variant === variants['4x3'] ? 'padding-top: 75%;' : '')}
  ${({ variant }) => (variant === variants['16x9'] ? 'padding-top: 56.25%;' : '')}
`;

Picture.picture = {
  className: string,
  variant: oneOf(Object.values(variants)),
  src: string.isRequired,
  alt: string.isRequired,
};

Picture.defaultProps = {
  className: undefined,
  variant: variants['16x9'],
};

export default Picture;
