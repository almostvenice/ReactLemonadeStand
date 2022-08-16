import styled, { keyframes } from "styled-components";

import WaveSVG from "./wave.svg";

import Fill from "./Fill";

const waveFront = keyframes`
    100% {
        transform: translate(-50, 0);
    }
`;

const waveBack = keyframes`
    100% {
        transform: translate(50%, 0);
    }
`;

const Wave = styled(WaveSVG)`
  width: 200%;
  position: absolute;
  bottom: 100%;
  margin: -1px;
  &.front {
    fill: ${({ frontFill }) => frontFill};
    left: 0;
    animation: ${waveFront} 3s infinite linear;
  }
  &.back {
    fill: ${({ backFill }) => backFill};
    right: 0;
    animation: ${waveBack} 1.5s infinite linear;
  }
`;
const Offset = styled(Fill)`
  transform: translate(
    0,
    ${({ percent }) => `${percent == 100 ? 100 : percent}%`}
  );
`;
const Liquid = ({ percent, bg, opacity, frontFill, backFill }) => {
  return (
    <Offset percent={percent} bg={bg} opacity={opacity}>
      <Wave/>
    </Offset>
  );
};

export default Liquid;
