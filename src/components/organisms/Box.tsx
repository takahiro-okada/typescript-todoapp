import { VFC } from "react";
import { BoxTitle } from "../atoms/Boxtitle";
import IconCompleteImage from "../../images/icon-complete.png";
import IconReturnImage from "../../images/icon-return.png";
import styled from "styled-components";
import { STATUS } from "../../const";

type Props = {
  title: string;
  status: string;
  color: string;
  todoTitle: string;
  userId: string;
  taskList: Array<any>;
  onClick: (index: any) => void;
  onClickDelete: (index: any) => void;
};
export const Box: VFC<Props> = (props) => {
  const { title, color, taskList, status, onClick, onClickDelete } = props;
  const taskLength = taskList.length;
  console.log(taskLength);
  const todoList = taskList.map((todo, index) => {
    return (
      <SItem key={index}>
        <SItemContent>
          <SItemTitle>{todo.title}</SItemTitle>
          <SItemTags>
            <SItemTag>{todo.userId}</SItemTag>
          </SItemTags>
        </SItemContent>
        <SItemSubcontent>
          {status === STATUS.complete ? (
            <SItemComplete onClick={() => onClick(index)}>
              <img src={IconCompleteImage} alt="Complete" />
            </SItemComplete>
          ) : (
            <SItemComplete onClick={() => onClick(index)}>
              <img src={IconReturnImage} alt="Return" />
            </SItemComplete>
          )}
          {status === STATUS.complete ? (
            <SItemDelete onClick={() => onClickDelete(index)}>
              delete...
            </SItemDelete>
          ) : (
            <SItemDelete onClick={() => onClickDelete(index)}>
              delete...
            </SItemDelete>
          )}
        </SItemSubcontent>
      </SItem>
    );
  });
  return (
    <div>
      <BoxTitle title={title} color={color} taskLength={taskLength} />
      {todoList}
    </div>
  );
};
const SItemComplete = styled.div`
  width: 30px;
  height: 30px;
  transition: 1s all;
  &:active {
    background-color: red;
    border-radius: 100px;
  }
`;
const SItem = styled.li`
  display: flex;
  padding: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
const SItemContent = styled.div`
  width: 80%;
`;
const SItemSubcontent = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const SItemTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const SItemTags = styled.div`
  margin-top: 10px;
`;
const SItemTag = styled.div`
  background-color: #1d8ac7;
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 15px;
  border-radius: 20px;
  width: fit-content;
`;
const SItemDelete = styled.div`
  color: red;
`;
