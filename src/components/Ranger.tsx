import React, { useState } from "react";
import { useRanger } from "react-ranger";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

export default function Ranger() {
  const [values, setValues] = useState([5, 50]);
  const { getTrackProps, ticks, segments, handles } = useRanger({
    min: 0,
    max: 100,
    stepSize: 1,
    values,
    ticks: [0, 20, 40, 60, 80, 100],
    onChange: setValues,
  });

  return (
    <div>
      <h1> React Ranger </h1>
      <div>
        Basic implementation
        <br></br>
        <br></br>
        <br></br>
        <div className={trackStyle} {...getTrackProps()}>
          {ticks.map(({ value, getTickProps }) => (
            <div className={Tick} {...getTickProps()}>
              <div className={TickLabel}>{value}</div>
            </div>
          ))}
          {segments.map(({ getSegmentProps }, i) => (
            <Segment {...getSegmentProps()} index={i} />
          ))}
          {handles.map(({ value, active, getHandleProps }) => (
            <button
              {...getHandleProps({
                style: {
                  appearance: "none",
                  border: "none",
                  background: "transparent",
                  outline: "none",
                },
              })}
            >
              <Handle active={active}>{value}</Handle>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

interface SegmentProps {
  index: number;
}


export const Segment = styled.div<SegmentProps>`
  background: ${(props) =>
    props.index === 0
      ? "#d5006b"
      : props.index === 1
      ? "#00d1d5"
      : props.index === 2
      ? "#f55200"
      : "#ff6050"};
  height: 100%;
`;

interface HandleProps {
  active: boolean;
}

const Handle = styled.div<HandleProps>`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 100%;
  font-size: 0.7rem;
  white-space: nowrap;
  color: white;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transform: ${(props) =>
    props.active ? "translateY(-100%) scale(1.3)" : "translateY(0) scale(0.9)"};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const trackStyle = css`
  display: inline-block;
  height: 8px;
  width: 80%;
  margin: 0 5%;
  border-radius: 50%;
`;

const TickLabel = css`
  position: absolute;
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.5);
  top: 100%;
  transform: translate(-50%, 1.2rem);
  white-space: nowrap;
`;
const Tick = css`
  :before {
    content: "";
    position: absolute;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    height: 5px;
    width: 2px;
    transform: translate(-50%, 0.7rem);
  }
`;
