import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TestButton.module.css";

export function TestButton({ as: _Component = _Builtin.Link }) {
  return (
    <_Component
      className={_utils.cx(_styles, "button")}
      button={true}
      options={{
        href: "#",
      }}
    >
      {"Test Button"}
    </_Component>
  );
}
