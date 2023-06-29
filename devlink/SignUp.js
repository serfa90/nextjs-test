import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SignUp.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"42cc9145-a522-0bfa-66a4-17239b039f17","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"42cc9145-a522-0bfa-66a4-17239b039f17","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684460011887},"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"42cc9145-a522-0bfa-66a4-17239b039f4b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"42cc9145-a522-0bfa-66a4-17239b039f4b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684472703346}},"actionLists":{"a":{"id":"a","title":"first step animation","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"42cc9145-a522-0bfa-66a4-17239b039f19"},"value":"block"}}]},{"actionItems":[{"id":"a-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tab-pane-tab-1-2","selectorGuids":["f5ac6d3e-acd3-aaa1-f349-2d587e1262df"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684460021143},"a-2":{"id":"a-2","title":"second page animation","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tab-pane-tab-1-2","selectorGuids":["f5ac6d3e-acd3-aaa1-f349-2d587e1262df"]},"value":"block"}}]},{"actionItems":[{"id":"a-2-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".tab-pane-tab-2-2","selectorGuids":["f5ac6d3e-acd3-aaa1-f349-2d587e1262ee"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684472708629}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SignUp({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section-407")} tag="section">
      <_Builtin.FormWrapper>
        <_Builtin.FormForm
          name="email-form"
          data-name="Email Form"
          method="get"
          id="wf-form-signup-form"
        >
          <_Builtin.TabsWrapper
            current="Tab 1"
            easing="ease"
            fadeIn={300}
            fadeOut={100}
          >
            <_Builtin.TabsMenu
              className={_utils.cx(_styles, "tabs-menu-2")}
              tag="div"
            >
              <_Builtin.TabsLink data-w-tab="Tab 1">
                <_Builtin.Block tag="div">{"Tab 1"}</_Builtin.Block>
              </_Builtin.TabsLink>
              <_Builtin.TabsLink data-w-tab="Tab 2">
                <_Builtin.Block tag="div">{"Tab 2"}</_Builtin.Block>
              </_Builtin.TabsLink>
            </_Builtin.TabsMenu>
            <_Builtin.TabsContent tag="div">
              <_Builtin.TabsPane
                className={_utils.cx(_styles, "tab-pane-tab-1-2")}
                tag="div"
                data-w-tab="Tab 1"
                id="part_1"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-20", "form-title")}
                  tag="h2"
                >
                  {"SIGN UP- "}
                  <_Builtin.Span className={_utils.cx(_styles, "text-span-39")}>
                    {"Step 1"}
                  </_Builtin.Span>
                </_Builtin.Heading>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-19")}
                  tag="h3"
                >
                  {"Personal data"}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-93")}
                  tag="div"
                >
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "text-field-10", "required")}
                    autoFocus={false}
                    maxLength={256}
                    name="first-name-2"
                    data-name="First Name 2"
                    placeholder="First Name *"
                    type="text"
                    disabled={false}
                    required={true}
                    id="first-name-2"
                  />
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "text-field-10", "required")}
                    autoFocus={false}
                    maxLength={256}
                    name="last-name-2"
                    data-name="Last Name 2"
                    placeholder="Last Name *"
                    type="text"
                    disabled={false}
                    required={true}
                    id="last-name-2"
                  />
                </_Builtin.Block>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field-13", "required")}
                  autoFocus={false}
                  maxLength={256}
                  name="Email"
                  data-name="Email"
                  placeholder="Email *"
                  type="email"
                  disabled={false}
                  required={true}
                  id="signup-email"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-94")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-95")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(
                        _styles,
                        "text-field-11",
                        "required",
                        "password"
                      )}
                      autoFocus={false}
                      maxLength={256}
                      name="Password"
                      data-name="Password"
                      placeholder="Password *"
                      type="password"
                      disabled={false}
                      required={true}
                      autoComplete="new-password"
                      id="signup-password"
                    />
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "html-embed-27")}
                      value="%3Cbutton%20type%3D%22button%22%20id%3D%22showPassword%22%3E%0A%3Cimg%20src%3D%22https%3A%2F%2Fuploads-ssl.webflow.com%2F649471d58c4292fde7b0bd0a%2F649471d58c4292fde7b0bd50_Vector.png%22%20alt%3D%22Show%20password%22%3E%0A%3C%2Fbutton%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-96")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(
                        _styles,
                        "text-field-12",
                        "required",
                        "password"
                      )}
                      autoFocus={false}
                      maxLength={256}
                      name="Password-2"
                      data-name="Password 2"
                      placeholder="Confirm Password *"
                      type="password"
                      disabled={false}
                      required={true}
                      autoComplete="confirm-password"
                      id="password-confirm"
                    />
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "html-embed-28")}
                      value="%3Cbutton%20type%3D%22button%22%20id%3D%22showConfPassword%22%3E%0A%3Cimg%20src%3D%22https%3A%2F%2Fuploads-ssl.webflow.com%2F649471d58c4292fde7b0bd0a%2F649471d58c4292fde7b0bd50_Vector.png%22%20alt%3D%22Show%20password%22%3E%0A%3C%2Fbutton%3E"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field")}
                  autoFocus={false}
                  maxLength={256}
                  name="sign-up-company-2"
                  data-name="Sign Up Company 2"
                  type="text"
                  disabled={false}
                  required={true}
                  id="sign-up-company"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-101")}
                  tag="div"
                  id="company_select_cont"
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "html-embed-31")}
                    id="html_embed"
                    value="%3Cdiv%20class%3D%22updateCompany%22%20id%3D%22user_company_select%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22company_select_cont%22%3E%0A%09%09%3Cselect%20type%3D%22text%22%20id%3D%22user_company%22%20class%3D%22js-example-basic-multiple%22%20name%3D%22companies%5B%5D%22%20multiple%3D%22multiple%22%3E%0A%20%20%20%20%3C%2Fselect%3E%0A%20%20%20%20%3Cimg%20src%3D%22https%3A%2F%2Fuploads-ssl.webflow.com%2F649471d58c4292fde7b0bd0a%2F649471d58c4292fde7b0bd3e_Vector%25201.png%22%3E%0A%3C%2Fdiv%3E%0A%3C%2Fdiv%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-97")}
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className={_utils.cx(_styles, "field-label-15")}
                  >
                    {"Profile picture *"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "html-embed-29")}
                    value="%3Cdiv%20class%3D%22image_up_cont%22%3E%0A%3Cdiv%20class%3D%22image_btn_container%22%3E%0A%3Clabel%20id%3D%22profile_pic_label%22%20style%3D%22cursor%3Apointer%22%3E%0AUPLOAD%20%3Cimg%20src%3D%22https%3A%2F%2Fuploads-ssl.webflow.com%2F649471d58c4292fde7b0bd0a%2F649471d58c4292fde7b0bd3f_UpLoad.png%22%3E%0A%3Cinput%20type%3D%22file%22%20id%3D%22profile_img%22%20accept%3D%22image%2Fpng%2Cimage%2Fjpg%2Cimage%2Fjpeg%22%20onchange%3D%22updateFileLabel()%22%20required%3E%0A%3Cinput%20type%3D%22hidden%22%20id%3D%22hidden_profile_img%22%3E%0A%3C%2Flabel%3E%0A%3Cbutton%20type%3D%22button%22%20class%3D%22upload_btn%22%20id%3D%22image_upload_button%22%3EUPLOAD%20%3Cimg%20src%3D%22https%3A%2F%2Fuploads-ssl.webflow.com%2F649471d58c4292fde7b0bd0a%2F649471d58c4292fde7b0bd3f_UpLoad.png%22%3E%3C%2Fbutton%3E%0A%3Cdiv%20class%3D%22%22%3E%0A%3Cp%20id%3D%22fileName%22%3E%3C%2Fp%3E%0A%3Cp%20id%3D%22noFile%22%3ENo%20file%20selected%3C%2Fp%3E%0A%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%0A%3Cdiv%20class%3D%22modal%22%20id%3D%22cropper_modal%22%3E%0A%20%20%3C!--%20Modal%20content%20--%3E%0A%20%20%3Cdiv%20class%3D%22modal-content%22%3E%0A%20%20%09%20%3Cspan%20class%3D%22close4%22%3E%26times%3B%3C%2Fspan%3E%0A%09%09%20%3Cimg%20id%3D%22profile_image_cropper%22%3E%0A%20%20%20%20%20%3Cspan%20id%3D%22close_button%22%3ESave%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-17")}
                  width={50}
                  height="auto"
                  loading="lazy"
                  id="uploading_image"
                  src="https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649ca26b59c59a83f0312304_loading.gif"
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "field-label-14", "image_size")}
                  htmlFor="name-3"
                >
                  {
                    "Please upload an image with a maxium size of 4MB in the format .png or .jpg"
                  }
                </_Builtin.FormBlockLabel>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-27")}
                  tag="div"
                >
                  {"* Required"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-98")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "button-20",
                      "next-tab-button",
                      "disabled"
                    )}
                    data-w-id="42cc9145-a522-0bfa-66a4-17239b039f17"
                    button={true}
                    options={{
                      href: "#",
                    }}
                  >
                    {"NEXT STEP"}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.TabsPane>
              <_Builtin.TabsPane
                className={_utils.cx(_styles, "tab-pane-tab-2-2")}
                data-w-id="42cc9145-a522-0bfa-66a4-17239b039f19"
                tag="div"
                data-w-tab="Tab 2"
                id="part_2"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-20")}
                  tag="h2"
                >
                  <_Builtin.Span className={_utils.cx(_styles, "text-span-40")}>
                    {"accreditation Data"}
                  </_Builtin.Span>
                  {" - "}
                  <_Builtin.Span className={_utils.cx(_styles, "text-span-39")}>
                    {"Step 2"}
                  </_Builtin.Span>
                </_Builtin.Heading>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-19")}
                  tag="h3"
                >
                  {"Operation days"}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-16")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-81")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "required")}
                      autoFocus={false}
                      maxLength={256}
                      name="Select-dates-3"
                      data-name="Select Dates 3"
                      placeholder="From"
                      type="text"
                      disabled={false}
                      required={true}
                      data-date-picker="datepicker-start"
                      autoComplete="off"
                      id="Select-dates-3"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "", "image-22")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      id="start_date_icon"
                      src="https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649ca26b59c59a83f0312306_trailing-icon.png"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-82")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "required")}
                      autoFocus={false}
                      maxLength={256}
                      name="Select-dates-2"
                      data-name="Select Dates 2"
                      placeholder="To"
                      type="text"
                      disabled={false}
                      required={true}
                      data-date-picker="datepicker-end"
                      autoComplete="off"
                      id="Select-dates-2"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "", "image-22")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      id="end_date_icon"
                      src="https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649ca26b59c59a83f0312306_trailing-icon.png"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field-14")}
                  autoFocus={false}
                  maxLength={256}
                  name="field"
                  data-name="Field"
                  placeholder="Special requests"
                  type="text"
                  disabled={false}
                  required={false}
                  id="special_requests"
                />
                <_Builtin.FormCheckboxWrapper
                  className={_utils.cx(_styles, "checkbox-field-3", "required")}
                >
                  <_Builtin.FormCheckboxInput
                    className={_utils.cx(_styles, "checkbox-3")}
                    inputType="default"
                    type="checkbox"
                    name="checkbox-6"
                    data-name="Checkbox 6"
                    required={true}
                    checked={false}
                    id="checkbox-6"
                  />
                  <_Builtin.FormInlineLabel
                    className={_utils.cx(_styles, "checkbox-label-2")}
                  >
                    {"I've read the "}
                    <_Builtin.Link
                      className={_utils.cx(_styles, "link-13")}
                      button={false}
                      options={{
                        href: "#",
                        target: "_blank",
                      }}
                    >
                      {
                        "consent to the creation, processing and publication of photographs / video recordings"
                      }
                    </_Builtin.Link>
                    {" and accept.*"}
                  </_Builtin.FormInlineLabel>
                </_Builtin.FormCheckboxWrapper>
                <_Builtin.FormCheckboxWrapper
                  className={_utils.cx(_styles, "checkbox-field-3", "required")}
                  id="checkbox_1"
                >
                  <_Builtin.FormCheckboxInput
                    className={_utils.cx(_styles, "required", "cheking")}
                    inputType="default"
                    type="checkbox"
                    name="checkbox-5"
                    data-name="Checkbox 5"
                    required={true}
                    checked={false}
                    id="checkbox-5"
                  />
                  <_Builtin.FormInlineLabel
                    className={_utils.cx(_styles, "checkbox-label-3")}
                  >
                    {"I've read the "}
                    <_Builtin.Link
                      className={_utils.cx(_styles, "link-5")}
                      val={{
                        val: {
                          type: "Record",

                          val: {
                            search: {
                              type: "Record",

                              val: {
                                type: {
                                  type: "Text",
                                  val: "Record",
                                },

                                val: {
                                  type: "Record",

                                  val: {
                                    exclude: {
                                      type: "Record",

                                      val: {
                                        type: {
                                          type: "Text",
                                          val: "Boolean",
                                        },

                                        val: {
                                          type: "Boolean",
                                          val: false,
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },

                            xattr: {
                              type: "Record",

                              val: {
                                type: {
                                  type: "Text",
                                  val: "List",
                                },

                                val: {
                                  type: "List",
                                  val: [],
                                },
                              },
                            },

                            block: {
                              type: "Record",

                              val: {
                                type: {
                                  type: "Text",
                                  val: "Text",
                                },

                                val: {
                                  type: "Text",
                                  val: "",
                                },
                              },
                            },

                            displayName: {
                              type: "Record",

                              val: {
                                type: {
                                  type: "Text",
                                  val: "Text",
                                },

                                val: {
                                  type: "Text",
                                  val: "",
                                },
                              },
                            },

                            devlink: {
                              type: "Record",

                              val: {
                                type: {
                                  type: "Text",
                                  val: "Record",
                                },

                                val: {
                                  type: "Record",

                                  val: {
                                    runtimeProps: {
                                      type: "Record",

                                      val: {
                                        type: {
                                          type: "Text",
                                          val: "Literal",
                                        },

                                        val: {
                                          type: "Record",

                                          val: {
                                            name: {
                                              type: "List",

                                              val: [
                                                {
                                                  type: "Text",
                                                  val: "Devlink",
                                                },
                                                {
                                                  type: "Text",
                                                  val: "RuntimeProps",
                                                },
                                              ],
                                            },

                                            value: {
                                              type: "Record",
                                              val: {},
                                            },
                                          },
                                        },
                                      },
                                    },

                                    slot: {
                                      type: "Record",

                                      val: {
                                        type: {
                                          type: "Text",
                                          val: "Literal",
                                        },

                                        val: {
                                          type: "Record",

                                          val: {
                                            name: {
                                              type: "List",

                                              val: [
                                                {
                                                  type: "Text",
                                                  val: "Devlink",
                                                },
                                                {
                                                  type: "Text",
                                                  val: "Slot",
                                                },
                                              ],
                                            },

                                            value: {
                                              type: "Text",
                                              val: "",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },

                            attr: {
                              type: "Record",

                              val: {
                                type: {
                                  type: "Text",
                                  val: "Record",
                                },

                                val: {
                                  type: "Record",

                                  val: {
                                    href: {
                                      type: "Record",

                                      val: {
                                        type: {
                                          type: "Text",
                                          val: "Text",
                                        },

                                        val: {
                                          type: "Text",
                                          val: "#",
                                        },
                                      },
                                    },

                                    id: {
                                      type: "Record",

                                      val: {
                                        type: {
                                          type: "Text",
                                          val: "Text",
                                        },

                                        val: {
                                          type: "Text",
                                          val: "",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },

                            visibility: {
                              type: "Record",

                              val: {
                                type: {
                                  type: "Text",
                                  val: "Record",
                                },

                                val: {
                                  type: "Record",

                                  val: {
                                    conditions: {
                                      type: "Record",

                                      val: {
                                        type: {
                                          type: "Text",
                                          val: "List",
                                        },

                                        val: {
                                          type: "List",
                                          val: [],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },

                            button: {
                              type: "Record",

                              val: {
                                type: {
                                  type: "Text",
                                  val: "Boolean",
                                },

                                val: {
                                  type: "Boolean",
                                  val: false,
                                },
                              },
                            },

                            link: {
                              type: "Record",

                              val: {
                                type: {
                                  type: "Text",
                                  val: "Literal",
                                },

                                val: {
                                  type: "Record",

                                  val: {
                                    name: {
                                      type: "List",

                                      val: [
                                        {
                                          type: "Text",
                                          val: "Basic",
                                        },
                                        {
                                          type: "Text",
                                          val: "Link",
                                        },
                                      ],
                                    },

                                    value: {
                                      type: "Record",

                                      val: {
                                        mode: {
                                          type: "Text",
                                          val: "file",
                                        },

                                        target: {
                                          type: "Text",
                                          val: "_blank",
                                        },

                                        assetId: {
                                          type: "Text",
                                          val: "641245b1209be72dc7144ffe",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },

                            styleBlockIds: {
                              type: "Record",

                              val: {
                                type: {
                                  type: "Text",
                                  val: "List",
                                },

                                val: {
                                  type: "List",

                                  val: [
                                    {
                                      type: "Record",

                                      val: {
                                        type: {
                                          type: "Text",
                                          val: "Text",
                                        },

                                        val: {
                                          type: "Text",
                                          val: "53993f4e-bec1-f94c-3375-84794e7b4c79",
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                            },

                            children: {
                              type: "Record",

                              val: {
                                type: {
                                  type: "Text",
                                  val: "List",
                                },

                                val: {
                                  type: "List",

                                  val: [
                                    {
                                      type: "Record",

                                      val: {
                                        type: {
                                          type: "Text",
                                          val: "Element",
                                        },

                                        val: {
                                          type: "Record",

                                          val: {
                                            id: {
                                              type: "Text",
                                              val: "5fb46322-2056-d34e-389a-9a85e4a12f21",
                                            },

                                            type: {
                                              type: "List",

                                              val: [
                                                {
                                                  type: "Text",
                                                  val: "Basic",
                                                },
                                                {
                                                  type: "Text",
                                                  val: "String",
                                                },
                                              ],
                                            },

                                            data: {
                                              type: "Record",

                                              val: {
                                                type: {
                                                  type: "Text",
                                                  val: "Text",
                                                },

                                                val: {
                                                  type: "Text",
                                                  val: "data protection",
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                            },
                          },
                        },

                        search: {
                          type: "Record",

                          val: {
                            exclude: {
                              type: "Boolean",
                              val: false,
                            },
                          },
                        },

                        xattr: {
                          type: "List",
                          val: [],
                        },

                        block: {
                          type: "Text",
                          val: "",
                        },

                        displayName: {
                          type: "Text",
                          val: "",
                        },

                        devlink: {
                          type: "Record",

                          val: {
                            runtimeProps: {
                              type: "Literal",

                              val: {
                                name: ["Devlink", "RuntimeProps"],
                                value: {},
                              },
                            },

                            slot: {
                              type: "Literal",

                              val: {
                                name: ["Devlink", "Slot"],
                                value: "",
                              },
                            },
                          },
                        },

                        attr: {
                          type: "Record",

                          val: {
                            id: {
                              type: "Text",
                              val: "",
                            },
                          },
                        },

                        visibility: {
                          type: "Record",

                          val: {
                            conditions: {
                              type: "List",
                              val: [],
                            },
                          },
                        },

                        button: {
                          type: "Boolean",
                          val: false,
                        },

                        type: {
                          type: "Text",
                          val: "Record",
                        },

                        link: {
                          type: "Literal",

                          val: {
                            name: ["Basic", "Link"],

                            value: {
                              mode: "file",
                              assetId: "641245b1209be72dc7144ffe",
                              target: "_blank",
                            },
                          },
                        },

                        styleBlockIds: {
                          type: "List",

                          val: [
                            {
                              type: "Text",
                              val: "53993f4e-bec1-f94c-3375-84794e7b4c79",
                            },
                          ],
                        },

                        children: {
                          type: "List",

                          val: [
                            {
                              type: "Element",

                              val: {
                                id: "5fb46322-2056-d34e-389a-9a85e4a12f21",
                                type: ["Basic", "String"],

                                data: {
                                  type: "Text",
                                  val: "data protection",
                                },
                              },
                            },
                          ],
                        },
                      }}
                      button={false}
                      type="Record"
                      options={{
                        href: "https://uploads-ssl.webflow.com/649b54972f219f1bd153068c/649ca26b59c59a83f0312308_240523_ENG_BHO_Datenschutz_Briefpapier_PM.pdf",
                        target: "_blank",
                      }}
                    >
                      {"data protection"}
                    </_Builtin.Link>
                    {" policy and accept."}
                    <_Builtin.Span
                      className={_utils.cx(_styles, "text-span-26")}
                    >
                      {"*"}
                    </_Builtin.Span>
                  </_Builtin.FormInlineLabel>
                </_Builtin.FormCheckboxWrapper>
                <_Builtin.FormCheckboxWrapper
                  className={_utils.cx(_styles, "checkbox-field-3", "required")}
                >
                  <_Builtin.FormCheckboxInput
                    className={_utils.cx(_styles, "checkbox-3")}
                    inputType="default"
                    type="checkbox"
                    name="checkbox-4"
                    data-name="Checkbox 4"
                    required={true}
                    checked={false}
                    id="checkbox-4"
                  />
                  <_Builtin.FormInlineLabel
                    className={_utils.cx(_styles, "checkbox-label-2")}
                  >
                    {
                      "I'm aware that I need a valid ID to collect my accreditation.*"
                    }
                  </_Builtin.FormInlineLabel>
                </_Builtin.FormCheckboxWrapper>
                <_Builtin.FormCheckboxWrapper
                  className={_utils.cx(
                    _styles,
                    "checkbox-field-3",
                    "required",
                    "last"
                  )}
                >
                  <_Builtin.FormCheckboxInput
                    className={_utils.cx(_styles, "checkbox-3")}
                    inputType="default"
                    type="checkbox"
                    name="checkbox-4"
                    data-name="Checkbox 4"
                    required={true}
                    checked={false}
                    id="checkbox-4"
                  />
                  <_Builtin.FormInlineLabel
                    className={_utils.cx(_styles, "checkbox-label-2")}
                  >
                    {"I’ve read the brief information on "}
                    <_Builtin.Link
                      className={_utils.cx(_styles, "link-14")}
                      button={false}
                      options={{
                        href: "#",
                      }}
                    >
                      {"occupational health and safety"}
                    </_Builtin.Link>
                    {" and accept.*"}
                  </_Builtin.FormInlineLabel>
                </_Builtin.FormCheckboxWrapper>
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "html-embed-33")}
                  value="%3Clabel%20class%3D%22w-checkbox%20checkbox-field-3%20required%22%3E%0A%20%20%3Cinput%20class%3D%22w-checkbox-input%20checkbox-2%22%20type%3D%22checkbox%22%20id%3D%22admin_checkbox%22%20value%3D%22Company%20admin%22%3E%0A%20%20%3Cspan%20class%3D%22checkbox-label-2%20w-form-label%22%3EI%20request%20an%20extended%20administrator%20account%20to%20perform%20the%20accreditation%20in%20the%20name%20of%20my%20employees%20and%20I've%20read%20the%20%3Ca%20class%3D%22link-18%22%20target%3D%22_blank%22%20href%3D%22https%3A%2F%2Fuploads-ssl.webflow.com%2F6453e5fbbb9ef87f5979b611%2F646e7bf62209ecf71070ff49_DLE_BHO2023_Deutsch.pdf%22%3Esupplier%20declaration%20for%20employee%20consent%3C%2Fa%3E%20and%20accept.%3C%2Fspan%3E%0A%3C%2Flabel%3E"
                />
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-2")}
                >
                  {"* Required"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "auth-error-message")}
                  id="signup-error-message"
                >
                  {"Errors are shown here, but only on the live site."}
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-99")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "button-21", "prev_btn")}
                    data-w-id="42cc9145-a522-0bfa-66a4-17239b039f4b"
                    button={true}
                    options={{
                      href: "#",
                    }}
                  >
                    {"PREVIOUS"}
                  </_Builtin.Link>
                  <_Builtin.FormButton
                    className={_utils.cx(_styles, "submit-button-3")}
                    type="submit"
                    value="SUBMIT"
                    data-wait="Please Wait..."
                    id="signup_button"
                  />
                </_Builtin.Block>
              </_Builtin.TabsPane>
            </_Builtin.TabsContent>
          </_Builtin.TabsWrapper>
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
