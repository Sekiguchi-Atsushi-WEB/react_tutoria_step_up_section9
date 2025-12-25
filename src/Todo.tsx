//propsの型定義
type TodoProps = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo = (props: TodoProps) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完了]" : "[未完了]";
  return <p>{`${completeMark} ${title}（ユーザー：${userId}）`}</p>;
};
