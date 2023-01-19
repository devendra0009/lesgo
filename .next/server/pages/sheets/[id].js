"use strict";
(() => {
var exports = {};
exports.id = 384;
exports.ids = [384];
exports.modules = {

/***/ 9366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Bar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
// EXTERNAL MODULE: ./components/ThemeToggler.js
var ThemeToggler = __webpack_require__(8590);
;// CONCATENATED MODULE: ./components/Bar.js





const Bar = ({ topic , totalQuestions , sheetname , solvedQuestions , removeTopic  })=>{
    const width = solvedQuestions / totalQuestions * 100;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
            width: width,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "topic",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: topic ? topic : `${sheetname} Sheet`
                        }),
                        topic ? /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdDelete, {
                            className: "delete",
                            onClick: removeTopic
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "progress",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            class: "progress-bar",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                class: "progress-value"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "count",
                            children: `${solvedQuestions}/${totalQuestions}`
                        })
                    ]
                })
            ]
        })
    });
};
const Container = (styled_default()).div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  ${"" /* background-color: var(--bgcolor); */ }
  color: var(--text);
  border-radius: 5px;
  .topic {
    padding: 0.5rem;
    background: var(--grey);
    border-radius:5px;
    ${"" /* font-weight:bold; */ }
    color: var(--text);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    ${"" /* border: 2px solid var(--text); */ }
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    .delete {
      cursor: pointer;
    }
  }
  .progress {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 60%;
    .progress-bar {
      background: var(--lightBlue);
      justify-content: flex-start;
      border-radius: 100px;
      align-items: center;
      position: relative;
      padding: 5px;
      display: flex;
      width: 100%;
      .progress-value {
        border-radius: 100px;
        background: var(--darkBlue);
        height: 5px;
        width: ${({ width  })=>width}%;
        transition: 0.5s ease-out;
      }
    }
  }
`;
/* harmony default export */ const components_Bar = (Bar);


/***/ }),

/***/ 1894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Question)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/CheckBox.js



const CheckBox = ({ qid , sheetId , solved , barHandle  })=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setToggle(solved);
    }, []);
    const handleChange = ()=>{
        var data = localStorage.getItem(`tri2do-${sheetId}`);
        data = data ? JSON.parse(data) : [];
        if (!toggle) {
            data.push(qid);
            let newData = [
                ...new Set(data)
            ];
            localStorage.setItem(`tri2do-${sheetId}`, JSON.stringify(newData));
            setToggle(true);
            barHandle(toggle);
            return;
        } else {
            let index = data.indexOf(qid);
            if (index !== -1) data.splice(index, 1);
            localStorage.setItem(`tri2do-${sheetId}`, JSON.stringify(data));
            setToggle(false);
            barHandle(toggle);
            return;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "checkbox-wrapper-13",
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    id: "c1-13",
                    type: "checkbox",
                    checked: toggle,
                    onChange: handleChange
                })
            })
        })
    });
};
const Container = (styled_default()).div`
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    .checkbox-wrapper-13 input[type="checkbox"] {
      --active: var(--blue);
      --active-inner: #fff;
      --focus: 2px rgba(39, 94, 254, 0.3);
      --border: #bbc1e1;
      --border-hover: #275efe;
      --background: #fff;
      --disabled: #f6f8ff;
      --disabled-inner: #e1e6f9;
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 21px;
      outline: none;
      display: inline-block;
      vertical-align: top;
      position: relative;
      margin: 0;
      cursor: pointer;
      border: 1px solid var(--bc, var(--border));
      background: var(--b, var(--background));
      transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
    }
    .checkbox-wrapper-13 input[type="checkbox"]:after {
      content: "";
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
        opacity var(--d-o, 0.2s);
    }
    .checkbox-wrapper-13 input[type="checkbox"]:checked {
      --b: var(--active);
      --bc: var(--active);
      --d-o: 0.3s;
      --d-t: 0.6s;
      --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    }

    .checkbox-wrapper-13
      input[type="checkbox"]:hover:not(:checked):not(:disabled) {
      --bc: var(--border-hover);
    }
    .checkbox-wrapper-13 input[type="checkbox"]:focus {
      box-shadow: 0 0 0 var(--focus);
    }
    .checkbox-wrapper-13 input[type="checkbox"]:not(.switch) {
      width: 21px;
    }
    .checkbox-wrapper-13 input[type="checkbox"]:not(.switch):after {
      opacity: var(--o, 0);
    }
    .checkbox-wrapper-13 input[type="checkbox"]:not(.switch):checked {
      --o: 1;
    }
    .checkbox-wrapper-13 input[type="checkbox"] + label {
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      margin-left: 4px;
    }

    .checkbox-wrapper-13 input[type="checkbox"]:not(.switch) {
      border-radius: 7px;
    }
    .checkbox-wrapper-13 input[type="checkbox"]:not(.switch):after {
      width: 5px;
      height: 9px;
      border: 2px solid var(--active-inner);
      border-top: 0;
      border-left: 0;
      left: 7px;
      top: 4px;
      transform: rotate(var(--r, 20deg));
    }
    .checkbox-wrapper-13 input[type="checkbox"]:not(.switch):checked {
      --r: 43deg;
    }
  }

  .checkbox-wrapper-13 * {
    box-sizing: inherit;
  }
  .checkbox-wrapper-13 *:before,
  .checkbox-wrapper-13 *:after {
    box-sizing: inherit;
  }
`;
/* harmony default export */ const components_CheckBox = (CheckBox);

;// CONCATENATED MODULE: ./components/Question.js




const Question = ({ name , link , qid , sheetId , solved , barHandle  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Question_Container, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "left",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_CheckBox, {
                            qid: qid,
                            sheetId: sheetId,
                            solved: solved,
                            barHandle: barHandle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "name",
                            children: name
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: link,
                    target: "_blank",
                    rel: "noreferrer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        children: "SOLVE"
                    })
                })
            ]
        })
    });
};
const Question_Container = (styled_default()).div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  ${"" /* background-color: var(--bgcolor); */ }
  color: var(--text);
  border-radius: 5px;
  .left {
    display: flex;
    gap: 2rem;

    .name {
      font-size: 18px;
    }
  }

  button {
    padding: 1rem;
    width: 10rem;
    ${"" /* background: transparent; */ }
    background-color:  var(--green);
    ${"" /* border: 2px solid var(--text); */ }
    font-weight:bold;
    border-radius: 8px ;
    color: white;
    transition: 0.5s ease-in-out;
    &:hover {
      ${"" /* background-color:  var(--green); */ }
      ${"" /* background-color: var(--hover); */ }
      ${"" /* border: 2px solid var(--third); */ }
      cursor: pointer;
    }
  }
  &:hover {
  }
`;
/* harmony default export */ const components_Question = (Question);


/***/ }),

/***/ 5348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Sidebar = ({ topics , name , handleClick  })=>{
    let key1 = 1;
    const handleState = (e)=>{
        handleClick(e.target.textContent);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col category",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "head",
                        children: "TOPIC"
                    }),
                    topics.map((topic)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            onClick: (e)=>{
                                handleState(e);
                            },
                            children: topic
                        }, key1++);
                    })
                ]
            })
        })
    });
};
const Container = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  width: 25rem;
  height: 100%;
  ${"" /* background: var(--bgcolor); */ }
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: scroll;
  .col {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 0.5rem;
    color: var(--white);
    border-bottom: 2px solid var(--fourth);
    ${"" /* border-top: 2px solid var(--fourth); */ }
    .head {
      ${"" /* padding: 1rem;
      font-size: 20px;
      color: var(--third); */ }
      padding: 10px;
      font-size: 20px;
      margin-bottom: 10px;
      color: var(--text);
    }
    span {
      width: 100%;
      padding: 1rem 2rem;
      color: var(--text);
      transition: 0.5s ease-in-out;
      &:hover,
      &:focus {
        cursor: pointer;
        background-color: var(--lightBlue);
      }
    }
  }
  @media screen and (max-widht: 820px) {
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ }),

/***/ 6380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1894);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5348);
/* harmony import */ var _components_Bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9366);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4152);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_tb__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ThemeToggler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8590);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_9__]);
axios__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










async function getStaticPaths() {
    const response = await axios__WEBPACK_IMPORTED_MODULE_9__["default"].get(`${process.env.BASE_URL}/api/sheetlist`);
    const sheets = response.data;
    const paths = sheets.map((sheet)=>({
            params: {
                id: sheet.id.toString()
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_9__["default"].get(`${process.env.BASE_URL}/api/sheets/${params.id}`);
    // const vari=response.data;
    // console.log(vari.problems)
    const sheet = response.data;
    return {
        props: {
            sheet,
            sheetId: params.id
        }
    };
}
const Sheet = ({ sheet , sheetId  })=>{
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [topic, setTopic] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [solvedNumber, setSolvedNumber] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const items = JSON.parse(localStorage.getItem(`tri2do-${sheetId}`)) || [];
        if (items) {
            items.forEach((item)=>{
                sheet.problems[Number(item) - 1].solved = true;
            });
            setData(true);
            setSolvedNumber(items.length);
        }
    }, [
        topic
    ]);
    const handleChange = (e)=>{
        setSearch(e.target.value);
    };
    const handleClick = (data)=>{
        setTopic(data);
    };
    const removeTopic = ()=>{
        setTopic("");
    };
    const barHandle = (data)=>{
        if (data) {
            setSolvedNumber(solvedNumber - 1);
        } else {
            setSolvedNumber(solvedNumber + 1);
        }
    };
    const questions = sheet.problems.filter((item)=>item.topic.toLowerCase().includes(topic.toLowerCase()));
    const filteredQuestions = questions.filter((item)=>item.problem.toLowerCase().includes(search.toLowerCase()));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
            children: !data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_7__.TbLoader, {
                        className: "loader"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Please Wait"
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Navbar, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    marginTop: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "TRI2DO"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            marginTop: "8px",
                                            marginLeft: "102px"
                                        },
                                        children: [
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThemeToggler__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "divider"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                placeholder: "Search Problem",
                                onChange: handleChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                topics: sheet.topics,
                                name: sheet.name,
                                handleClick: handleClick
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    width: "100%"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Bar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        topic: topic,
                                        totalQuestions: sheet.length,
                                        solvedQuestions: solvedNumber,
                                        sheetname: sheet.name,
                                        removeTopic: removeTopic
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Contain, {
                                        children: filteredQuestions.map((item)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Question__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                sheetId: sheetId,
                                                name: item.problem,
                                                link: item.link,
                                                solved: item.solved,
                                                qid: item.id,
                                                barHandle: barHandle
                                            }, item.id);
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const Contain = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${"" /* padding: 1rem 2rem; */ }
  overflow-y: scroll;
`;
const Content = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  ${"" /* background-color: var(--grey); */ }
`;
const Navbar = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  padding: 0.5rem 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: var(--blue);
  ${"" /* background-color: var(--bgcolor);
  color: var(--primary); */ }
  span {
    font-size: 32px;
    font-family: "Bree Serif", sans-serif;
    &:hover {
      ${"" /* color:  var(--midBlue); */ }
    }
  }
  .divider{
    width: 30vh;
    margin-top: 31px;
    border-bottom: 2px solid var(--text);
    position: relative;
    left: -255px;
    top: 8px;
  }

  input {
    padding: 0.5rem;
    width: 30%;
    ${"" /* background: transparent; */ }
    border: none;
    border-bottom: 2px solid var(--blue);
    border-right: 2px solid var(--blue);
    color: var(--inputText);
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
`;
const Container = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .loader {
    color: var(--text);
    font-size: 4rem;
    margin: 1rem;
    animation: animate 3s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sheet);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 4152:
/***/ ((module) => {

module.exports = require("react-icons/tb");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,590], () => (__webpack_exec__(6380)));
module.exports = __webpack_exports__;

})();