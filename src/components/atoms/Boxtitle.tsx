import styled from "styled-components";
import { VFC } from "react";

type Props = {
  title: string;
  color: string;
};
export const BoxTitle: VFC<Props> = (props) => {
  const { color, title } = props;
  return (
    <SBoxTitle>
      <STitleCircle color={color}></STitleCircle>
      <STitle>{title}</STitle>
    </SBoxTitle>
  );
};

const SBoxTitle = styled.div`
  position: relative;
  display: flex;
`;
const STitle = styled.h2`
  font-family: "Staatliches", cursive;
  font-size: 40px;
  font-weight: bold;
  padding-left: 20px;
  letter-spacing: 0.1em;
`;
const STitleCircle = styled.span`
  width: 55px;
  height: 55px;
  background-color: ${(props) => props.color};
  border-radius: 100%;
  display: block;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
`;
