import type { FC } from "react";
import type { User } from "./types/user";

type UserProfileProps = {
  user: User;
};

export const UserProfile: FC<UserProfileProps> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join("、") || "なし"}</dd>
    </dl>
  );
};
