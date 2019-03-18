const menuBody = (style, showMenu) => {
  var changeWidth;
  if (showMenu === true) {
    changeWidth = style.width || "30%";
  } else {
    changeWidth = "0%";
  }
  let styleObj = {
    zIndex: style.zIndex || "10",
    transition: style.transition || "0.15s",
    transitionProperty: "width",
    position: "relative",
    margin: style.margin || "0px",
    padding: style.padding || "5px",
    width: changeWidth,
    height: style.height || "100px",
    color: style.color || "black",
    backgroundColor: style.backgroundColor || "white",
    borderRadius: style.borderRadius || "5px",
    borderColor: style.borderColor || "black",
    borderStyle: style.borderStyle || "solid",
    borderWidth: style.borderWidth || "2px"
  };
  return styleObj;
};

const close = {
  float: "right",
  padding: "10px",
  fontSize: "15px",
  cursor: "pointer",
  color: "black"
};

const menuButton = style => {
  let styleObj = {
    float: style.float || "right",
    padding: style.padding || "10pxs",
    cursor: style.cursor || "pointer"
  };
  return styleObj;
};

const bar = style => {
  let styleObj = {
    width: style.width || "20px",
    height: style.height || "3px",
    backgroundColor: style.backgroundColor || "black",
    margin: style.margin || "3px 0"
  };
  return styleObj;
};

// const bar = style => {
//   let styleObj = {
//     width: style.width || "20px",
//     height: style.height || "3px",
//     backgroundColor: style.backgroundColor || "white",
//     margin: style.margin || "3px 0"
//   };
//   return styleObj;
// };

export { menuBody, close, menuButton, bar };
