import React, { useContext } from 'react';
import { LayoutBox, Container } from '../../shared';
import { AppBar, Button } from './styles';
import { Context } from '../../shared';

export const Header = () => {
  const { start, stop } = useContext(Context);
  return (
    <AppBar>
      <Container>
        <LayoutBox minHeight="80px" left>
          Animations
          <LayoutBox left marginLeft="auto">
            <Button onClick={start}>START</Button>
            <LayoutBox ml={2}>
              <Button onClick={stop}>STOP</Button>
            </LayoutBox>
          </LayoutBox>
        </LayoutBox>
      </Container>
    </AppBar>
  );
};

export default Header;
