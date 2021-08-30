import { BoxTitle } from "../atoms/Boxtitle";
import { VFC } from "react";

type Props = {
  title: string;
  color: string;
};
export const Box: VFC<Props> = (props) => {
  const { title, color } = props;
  return (
    <div>
      <BoxTitle title={title} color={color} />
    </div>
  );
};
