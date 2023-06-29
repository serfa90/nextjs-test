import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InfoContainer.module.css";

export function InfoContainer({ as: _Component = _Builtin.Section }) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="section">
      <_Builtin.Image
        className={_utils.cx(_styles, "image")}
        loading="lazy"
        width="auto"
        height="auto"
        src="https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649b61922f219f1bd1632c57_profile%20picture.png"
      />
      <_Builtin.Heading tag="h1">{"Testing Components"}</_Builtin.Heading>
      <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
        }
      </_Builtin.Paragraph>
    </_Component>
  );
}
