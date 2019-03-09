const menuBody = (style, showMenu) => {
  var changeWidth;
  if (showMenu === true) {
    changeWidth = "30%";
  } else {
    changeWidth = "0%";
  }
  let styleObj = {
    zIndex: style.zIndex || "10",
    transition: "0.15s",
    transitionProperty: "width",
    position: "fixed",
    margin: style.margin || "0px",
    padding: style.padding || "5px",
    width: changeWidth,
    height: style.height || "80%",
    color: style.color || "black",
    backgroundColor: style.backgroundColor || "white",
    borderRadius: style.borderRadius || "5px",
    borderColor: style.borderColor || "#2665c4",
    borderStyle: style.borderStyle || "solid",
    borderWidth: style.borderWidth || "3px"
  };
  return styleObj;
};

const close = {
  float: "right",
  padding: "10px",
  fontSize: "30px",
  cursor: "pointer",
  color: "black"
};

const menuButton = style => {
  let styleObj = {
    float: style.float || "right",
    padding: style.padding || "10px",
    cursor: style.cursor || "pointer"
  };
  return styleObj;
};

const bar = {
  width: "20px",
  height: "3px",
  backgroundColor: "white",
  margin: "3px 0"
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
