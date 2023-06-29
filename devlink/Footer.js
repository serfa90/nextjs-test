import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Section }) {
  return (
    <_Component className={_utils.cx(_styles, "footer")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "div-block-34")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-38")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "", "div-block-72")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "", "image-19")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649ca0241f7bbc67f47591bd_Color%3DOff.png"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "image-6")}
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649ca0241f7bbc67f47591bb_Color%3DWhite.png"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-73")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-block-14")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "link-17")}
                button={false}
                id="imprint"
                options={{
                  href: "#",
                  target: "_blank",
                }}
              >
                {"Legal Notice"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-block-17")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "link-10")}
                button={false}
                id="data_protection"
                options={{
                  href: "#",
                  target: "_blank",
                }}
              >
                {"Data Protection"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-77")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-block-18")}
            tag="div"
          >
            {"© 2023. Bad Homburg Open, alle Rechte vorbehalten."}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-78")}
            tag="div"
          >
            <_Builtin.Link
              button={false}
              options={{
                href: "https://www.facebook.com/BadHomburgOpen/?locale=de_DE",
                target: "_blank",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-20")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649ca0241f7bbc67f47591b9_facebook.png"
              />
            </_Builtin.Link>
            <_Builtin.Link
              button={false}
              options={{
                href: "https://www.instagram.com/badhomburgopen/?hl=en",
                target: "_blank",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-21")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649ca0241f7bbc67f47591b7_instagram.png"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
