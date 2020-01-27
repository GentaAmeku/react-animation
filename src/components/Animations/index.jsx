import React, { useState } from 'react';
import { LayoutBox, Typography } from '../../shared';
import {
  Button,
  Card,
  Circle as _Circle,
  FadeIn,
  FadeOut,
  SizeScale,
  Timing,
  Direction,
  FillMode,
  FadeInOut,
} from './styles';

const RUN = 'running';
const STOP = 'paused';

const colors = [
  '#E74C3C',
  '#9B59B6',
  '#3498DB',
  '#1ABC9C',
  '#2ECC71',
  '#F39C12',
  '#D35400',
  '#34495E',
];

const Circle = React.memo(() => (
  <_Circle bg={colors[Math.floor(Math.random() * colors.length)]} />
));

const Section = ({ title, noMargin, children }) => {
  return (
    <LayoutBox mt={noMargin ? 0 : 3}>
      <Card>
        <Typography component="h2" fontSize="16px">
          {title}
        </Typography>
        <LayoutBox mt={2}>{children}</LayoutBox>
      </Card>
    </LayoutBox>
  );
};

export const Animations = () => {
  const [playState, setPlayState] = useState(STOP);
  const handleStart = () => setPlayState(RUN);
  const handleStop = () => setPlayState(STOP);
  return (
    <>
      <LayoutBox left>
        <Button onClick={handleStart}>START</Button>
        <LayoutBox ml={2}>
          <Button onClick={handleStop}>STOP</Button>
        </LayoutBox>
      </LayoutBox>
      <Section title="Fade In">
        <FadeIn state={playState}>
          <Circle />
        </FadeIn>
      </Section>
      <Section title="Fade Out">
        <FadeOut state={playState}>
          <Circle />
        </FadeOut>
      </Section>
      <Section title="Size Scale">
        <SizeScale state={playState} />
      </Section>
      <Section title="Timing">
        <Timing timing="ease" state={playState}>
          <Circle />
        </Timing>
        <LayoutBox mt={2}>
          <Timing timing="ease-in" state={playState}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="ease-out" state={playState}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="ease-in-out" state={playState}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="linear" state={playState}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="step-start" state={playState}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="step-end" state={playState}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="steps(5, start)" state={playState}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="steps(5, end)" state={playState}>
            <Circle />
          </Timing>
        </LayoutBox>
      </Section>
      <Section title="Direction">
        <Direction direction="alternate" state={playState}>
          <Circle />
        </Direction>
        <LayoutBox mt={2}>
          <Direction direction="alternate-reverse" state={playState}>
            <Circle />
          </Direction>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Direction direction="reverse" state={playState}>
            <Circle />
          </Direction>
        </LayoutBox>
      </Section>
      <Section title="Fill Mode">
        <FillMode fill="forwards" state={playState}>
          <Circle />
        </FillMode>
        <LayoutBox mt={2}>
          <FillMode fill="backwards" state={playState}>
            <Circle />
          </FillMode>
        </LayoutBox>
      </Section>
      <Section title="FadeIn + FadeOut">
        <FadeInOut state={playState}>
          <Circle />
        </FadeInOut>
      </Section>
    </>
  );
};

export default Animations;
