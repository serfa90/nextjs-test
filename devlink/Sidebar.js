import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Sidebar.module.css";

export function Sidebar({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "sidebar-wrapper")}
      tag="div"
      config={{
        animation: "over-left",
        collapse: "medium",
        docHeight: true,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "brand-bar")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "brand-container")}
          tag="div"
        >
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "logo-wrapper")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649c85b39a25b56d93c3b45c_bho_logo.png"
            />
          </_Builtin.NavbarBrand>
          <_Builtin.Block
            className={_utils.cx(_styles, "sidebar-logo-icon-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              loading="eager"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649c7dd1b069aa9dd9ded66b_sidebar-icon-dashboardly-webflow-template.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "sidebar-links")}
          tag="div"
        >
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "sidebar-nav-menu")}
            tag="nav"
            role="navigation"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "sidebar-menu-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "sidebar-menu-content")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav-link-current")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "icon")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649c7dd1b069aa9dd9ded665_home-icon.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block")}
                    tag="div"
                  >
                    {"ACCOUNT"}
                  </_Builtin.Block>
                </_Builtin.Link>
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "dropdown-5")}
                  tag="div"
                  data-hover={false}
                  data-delay={0}
                  id="admin_drop"
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "dropdown-toggle-2")}
                    tag="div"
                  >
                    <_Builtin.Icon
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-25")}
                      tag="div"
                    >
                      {"ADMIN"}
                    </_Builtin.Block>
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "dropdown-list-3")}
                    tag="nav"
                  >
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "dropdown-link")}
                      id="users_table"
                      options={{
                        href: "#",
                      }}
                    >
                      {"Users table"}
                    </_Builtin.DropdownLink>
                    <_Builtin.DropdownLink
                      className={_utils.cx(_styles, "dropdown-link-2")}
                      id="companies_table_link"
                      options={{
                        href: "#",
                      }}
                    >
                      {"Companies table"}
                    </_Builtin.DropdownLink>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "icon")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    src="https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649c86eb5269c80f10177762_sign_out.png"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-2")}
                    tag="div"
                  >
                    {"SIGN OUT"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-74")}
                tag="div"
                id="selected_lang"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "link-11")}
                  button={false}
                  id="englishBtn"
                  options={{
                    href: "#",
                  }}
                >
                  {"EN"}
                </_Builtin.Link>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-19")}
                  tag="div"
                >
                  {"|"}
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(_styles, "link-12")}
                  button={false}
                  id="germanBtn"
                  options={{
                    href: "#",
                  }}
                >
                  {"DEU"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "sidebar-menu-collapsed-overlay")}
              tag="div"
            />
          </_Builtin.NavbarMenu>
          <_Builtin.Block
            className={_utils.cx(_styles, "collapse-icon-container")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "collapse-icon-wrapper")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "arrow")}
                loading="lazy"
                width={10}
                height="auto"
                src="https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649c7dd1b069aa9dd9ded668_arrow.svg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "hamburger-menu-wrapper", "sidebar")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "hamburger-menu-bar",
                "top",
                "sidebar"
              )}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "hamburger-menu-bar",
                "bottom",
                "sidebar"
              )}
              tag="div"
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
