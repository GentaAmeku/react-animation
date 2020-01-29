import styled from 'styled-components';
import theme from '../../../theme';

export const AppBar = styled.header`
  background: #ffffff;
  border-bottom: 1px solid ${theme.palette.border.primary};
  height: ${theme.size.header}px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const Button = styled.button`
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding: 10px 30px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
  outline: none;
  &:active {
    background: #f5f5f5;
  }
`;
