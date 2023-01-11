"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var Button_1 = require("@mui/material/Button");
var Typography_1 = require("@mui/material/Typography");
var puppiesContext_1 = require("../context/puppiesContext");
var Delete_1 = require("@mui/icons-material/Delete");
var Box_1 = require("@mui/material/Box");
var ImageList_1 = require("@mui/material/ImageList");
var ImageListItem_1 = require("@mui/material/ImageListItem");
var ImageListItemBar_1 = require("@mui/material/ImageListItemBar");
function TitlebarBelowImageList() {
    var puppies = react_1.useContext(puppiesContext_1.PuppyContext).puppies;
    var deletePuppy = react_1.useContext(puppiesContext_1.PuppyContext).deletePuppy;
    return (React.createElement(Box_1["default"], null,
        React.createElement(Typography_1["default"], { gutterBottom: true, variant: "h4", component: "div", color: "Orange", fontWeight: 600, sx: { marginBottom: "20px" } }, "Registered dogs:"),
        React.createElement(ImageList_1["default"], { sx: { maxHeight: 700 }, key: "list" }, puppies.map(function (puppy) { return (React.createElement(ImageListItem_1["default"], { key: puppy.id },
            React.createElement("img", { 
                // src={`${puppy.image}?w=248&fit=crop&auto=format`}
                src: puppy.image, 
                // srcSet={`${puppy.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt: puppy.breed, loading: "lazy" }),
            React.createElement(ImageListItemBar_1["default"], { title: puppy.name, position: "below" }),
            React.createElement(Box_1["default"], { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 1, paddingRight: 1 } },
                React.createElement(Button_1["default"], { size: "small" }, "Learn More"),
                React.createElement(Delete_1["default"], { onClick: function () { return deletePuppy(puppy.id); } })))); }))));
}
exports["default"] = TitlebarBelowImageList;
