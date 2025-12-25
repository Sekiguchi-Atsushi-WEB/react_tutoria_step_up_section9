import type { TodoType } from "./types/todo";

export const Todo = (
  props: Pick<TodoType, "title" | "userId" | "completed">
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完了]" : "[未完了]";
  return <p>{`${completeMark} ${title}（ユーザー：${userId}）`}</p>;
};
