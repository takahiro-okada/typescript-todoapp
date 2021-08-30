import { VFC } from "react";
import styled from "styled-components";
import { Modal } from "../../components/molecules/Modal";
import { ModalButton } from "../../components/atoms/ModalButton";
import { useModal } from "../../hooks/useModal";
import { Box } from "../organisms/Box";

export const List: VFC = () => {
  const { show, toggle } = useModal();
  return (
    <SWrapper>
      <Box title="Todo" color="#CEFFED" />
      <Box title="Complete" color="#FFCA99" />
      <ModalButton toggle={toggle} />
      <Modal show={show} toggle={toggle} />
    </SWrapper>
  );
};
const SWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
`;
