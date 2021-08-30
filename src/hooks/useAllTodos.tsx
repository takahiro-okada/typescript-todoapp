import axios from "axios";
import { useState, useEffect } from "react";
import { useModal } from "./useModal";

export type Todos = {
  title: string;
  userId: string;
  completed: boolean;
};

export const useAllTodos = () => {
  const { setShow } = useModal();
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState<Todos[]>([]);
  const [completeTodos, setCompleteTodos] = useState<Todos[]>([]);
  const onClickComplete = (index: any) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  // 戻る
  const onClickReturn = (index: any) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };
  // 追加
  const addTask = () => {
    if (!title || !userId) return;
    const newTodos = [...incompleteTodos, { title, userId, completed: false }];
    setIncompleteTodos(newTodos);
    setTitle("");
    setUserId("");
    setShow(false);
  };
  // 削除
  const onClickIncompleteDelete = (index: any) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickCompleteDelete = (index: any) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const completedTask = res.data.filter(
          (item: any) => item.completed === false
        );
        setIncompleteTodos(completedTask);
        const incompletedTask = res.data.filter(
          (item: any) => item.completed === true
        );
        setCompleteTodos(incompletedTask);
      })
      .catch((error) => console.log(error));
  }, []);
  return {
    title,
    setTitle,
    userId,
    setUserId,
    incompleteTodos,
    setIncompleteTodos,
    completeTodos,
    setCompleteTodos,
    onClickComplete,
    onClickReturn,
    onClickIncompleteDelete,
    onClickCompleteDelete,
    addTask,
    setShow,
  };
};
