import React, { useState, useContext } from 'react';
import { LayoutBox, Typography, Context } from '../../shared';
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
  RotateSVG,
  JumpSVG,
} from './styles';
import { Fish } from '../Icons';

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
  const { state } = useContext(Context);
  return (
    <>
      <Section title="Fade In">
        <FadeIn state={state}>
          <Circle />
        </FadeIn>
      </Section>
      <Section title="Fade Out">
        <FadeOut state={state}>
          <Circle />
        </FadeOut>
      </Section>
      <Section title="Size Scale">
        <SizeScale state={state} />
      </Section>
      <Section title="Timing">
        <Timing timing="ease" state={state}>
          <Circle />
        </Timing>
        <LayoutBox mt={2}>
          <Timing timing="ease-in" state={state}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="ease-out" state={state}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="ease-in-out" state={state}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="linear" state={state}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="step-start" state={state}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="step-end" state={state}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="steps(5, start)" state={state}>
            <Circle />
          </Timing>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Timing timing="steps(5, end)" state={state}>
            <Circle />
          </Timing>
        </LayoutBox>
      </Section>
      <Section title="Direction">
        <Direction direction="alternate" state={state}>
          <Circle />
        </Direction>
        <LayoutBox mt={2}>
          <Direction direction="alternate-reverse" state={state}>
            <Circle />
          </Direction>
        </LayoutBox>
        <LayoutBox mt={2}>
          <Direction direction="reverse" state={state}>
            <Circle />
          </Direction>
        </LayoutBox>
      </Section>
      <Section title="Fill Mode">
        <FillMode fill="forwards" state={state}>
          <Circle />
        </FillMode>
        <LayoutBox mt={2}>
          <FillMode fill="backwards" state={state}>
            <Circle />
          </FillMode>
        </LayoutBox>
      </Section>
      <Section title="FadeIn + FadeOut">
        <FadeInOut state={state}>
          <Circle />
        </FadeInOut>
      </Section>
      <Section title="SVG">
        <LayoutBox left>
          <RotateSVG state={state}>
            <Fish color="#A9E2F3" />
          </RotateSVG>
          <JumpSVG state={state}>
            <Fish color="#A9E2F3" />
          </JumpSVG>
        </LayoutBox>
      </Section>
    </>
  );
};

export default Animations;
