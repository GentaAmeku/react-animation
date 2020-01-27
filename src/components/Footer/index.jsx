import React from 'react';
import { Typography, LayoutBox } from '../../shared';
import { Container } from './styles';

const CopyRight = () => (
  <Typography color="secondary" textAlign="center" fontSize="14px">
    Copyright © XXXX, 2019 All Rights Reserved.
  </Typography>
);

export const Footer = () => {
  return (
    <Container>
      <CopyRight />
      <LayoutBox mt={1}>
        <Typography color="secondary" fontSize="13px">
          プライバシーポリシー
        </Typography>
      </LayoutBox>
    </Container>
  );
};

export default Footer;
