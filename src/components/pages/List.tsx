import { VFC } from "react";
import styled from "styled-components";
import { Modal } from "../../components/molecules/Modal";
import { ModalButton } from "../../components/atoms/ModalButton";
import { useModal } from "../../hooks/useModal";
import { useAllTodos } from "../../hooks/useAllTodos";
import { Box } from "../organisms/Box";
import { STATUS } from "../../const";

export const List: VFC = () => {
  const { show, toggle } = useModal();
  const {
    title,
    userId,
    incompleteTodos,
    completeTodos,
    setTitle,
    setUserId,
    onClickReturn,
    onClickComplete,
    onClickCompleteDelete,
    onClickIncompleteDelete,
    addTask,
  } = useAllTodos();
  return (
    <SWrapper>
      <Box
        title="Todo"
        color="#CEFFED"
        todoTitle={title}
        userId={userId}
        taskList={incompleteTodos}
        status={STATUS.complete}
        onClick={onClickComplete}
        onClickDelete={onClickIncompleteDelete}
      />
      <Box
        title="Complete"
        color="#FFCA99"
        todoTitle={title}
        userId={userId}
        taskList={completeTodos}
        status={STATUS.incomplete}
        onClick={onClickReturn}
        onClickDelete={onClickCompleteDelete}
      />
      <ModalButton toggle={toggle} />
      <Modal
        show={show}
        toggle={toggle}
        todoTitle={title}
        userId={userId}
        setTodoText={setTitle}
        setUserId={setUserId}
        addTask={addTask}
      />
    </SWrapper>
  );
};
const SWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
`;
