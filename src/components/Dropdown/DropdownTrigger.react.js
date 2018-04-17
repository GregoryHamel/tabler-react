// @flow

import * as React from "react";
import cn from "classnames";
import { Button } from "../";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +toggle?: boolean,
  +value?: string,
|};

function DropdownTrigger({
  className,
  toggle,
  value,
  children,
}: Props): React.Node {
  const classes = cn({ "dropdown-toggle": toggle }, className);
  return (
    <Button className={classes} dataToggle="dropdown">
      {value}
      {children}
    </Button>
  );
}

export default DropdownTrigger;
