import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Form.module.css";

export function Form({ as: _Component = _Builtin.Section }) {
  return (
    <_Component className={_utils.cx(_styles, "section-2")} tag="section">
      <_Builtin.FormWrapper>
        <_Builtin.FormForm
          className={_utils.cx(_styles, "form")}
          name="email-form"
          data-name="Email Form"
          method="get"
          id="email-form"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-102")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-103")}
              tag="div"
            >
              <_Builtin.FormBlockLabel htmlFor="name-2">
                {"Name"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                autoFocus={false}
                maxLength={256}
                name="name-2"
                data-name="Name 2"
                type="text"
                disabled={false}
                required={false}
                id="name-2"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-104")}
              tag="div"
            >
              <_Builtin.FormBlockLabel htmlFor="name-2">
                {"Lastname"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                autoFocus={false}
                maxLength={256}
                name="name-2"
                data-name="Name 2"
                type="text"
                disabled={false}
                required={false}
                id="name-2"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.Block tag="div">
              <_Builtin.FormBlockLabel htmlFor="email-2">
                {"Email Address"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                autoFocus={false}
                maxLength={256}
                name="email-2"
                data-name="Email 2"
                type="email"
                disabled={false}
                required={true}
                id="email-2"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.FormButton
            className={_utils.cx(_styles, "submit-button")}
            type="submit"
            value="Submit"
            data-wait="Please wait..."
          />
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage>
          <_Builtin.Block tag="div">
            {"Thank you! Your submission has been received!"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage>
          <_Builtin.Block tag="div">
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
    </_Component>
  );
}
