import styled, { keyframes, css } from 'styled-components';

const ANIMATION_SEC = '3.5s';
const COUNT = 'infinite';
const CARD_WIDTH = 864;
const CIRCLE_WIDTH = 30;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const sizeScale = keyframes`
  to {
    width: 100%;
  }
`;

const moveX = keyframes`
  to {
    transform: translateX(calc(${CARD_WIDTH}px - ${CIRCLE_WIDTH}px));
  }
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`;

const animationPlayState = playState => css`
  animation-play-state: ${playState};
`;

export const Button = styled.button`
  background-color: #ffffff;
  border-radius: 4px;
  border-style: none;
  padding: 10px 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  outline: none;
  &:active {
    background: #f5f5f5;
  }
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 16px;
`;

export const Circle = styled.div`
  background-color: ${props => props.bg || '#81DAF5'};
  border-radius: 50%;
  height: 30px;
  width: ${CIRCLE_WIDTH}px;
`;

export const FadeIn = styled.div`
  animation: ${fadeIn} ${ANIMATION_SEC} ${COUNT};
  ${animationPlayState(props => props.state)}
`;

export const FadeOut = styled.div`
  animation: ${fadeOut} ${ANIMATION_SEC} ${COUNT};
  ${animationPlayState(props => props.state)}
`;

export const SizeScale = styled.div`
  animation: ${sizeScale} ${ANIMATION_SEC} ${COUNT};
  background-color: #ccff99;
  min-height: 30px;
  width: ${props => `${props.width || 0}px`};
  ${animationPlayState(props => props.state)}
`;

export const Timing = styled.div`
  > div {
    animation: ${moveX} ${ANIMATION_SEC} ${props => props.timing} ${COUNT};
    ${animationPlayState(props => props.state)}
  }
`;

export const Direction = styled.div`
  > div {
    animation: ${moveX} ${ANIMATION_SEC} linear ${COUNT};
    animation-direction: ${props => props.direction};
    ${animationPlayState(props => props.state)}
  }
`;

export const FillMode = styled.div`
  > div {
    animation: ${moveX} ${ANIMATION_SEC} linear ${COUNT} alternate
      ${props => props.fill};
    ${animationPlayState(props => props.state)}
  }
`;

export const FadeInOut = styled.div`
  /* animation: ${fadeIn} ${ANIMATION_SEC}, ${fadeOut} ${ANIMATION_SEC} 3.5s; */
  animation: ${fadeInOut} ${ANIMATION_SEC} linear ${COUNT};
  ${animationPlayState(props => props.state)}
`;
