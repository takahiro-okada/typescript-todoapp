import styled from "styled-components";
import { VFC } from "react";
type Props = {
  toggle: () => void;
};
export const ModalButton: VFC<Props> = (props) => {
  const { toggle } = props;
  return <SModalButton onClick={toggle}>＋</SModalButton>;
};

const SModalButton = styled.button`
  font-size: 50px;
  text-align: center;
  color: #fff;
  background-color: #eb6100;
  border-radius: 50%;
  line-height: 100px;
  width: 100px;
  height: 100px;
  padding: 0;
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  transition: opacity 0.3s;
  :hover {
    opacity: 0.7;
  }
`;
