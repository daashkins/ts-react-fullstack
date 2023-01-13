"use strict";
exports.__esModule = true;
var React = require("react");
var AppBar_1 = require("@mui/material/AppBar");
var Box_1 = require("@mui/material/Box");
var Toolbar_1 = require("@mui/material/Toolbar");
var Typography_1 = require("@mui/material/Typography");
var bg_new_png_1 = require("../images/bg_new.png");
var Header = function () {
    return (React.createElement(Box_1["default"], { sx: { flexGrow: 1, backgroundColor: "#5555610f" } },
        React.createElement(AppBar_1["default"], { position: "static", sx: { backgroundColor: '#d26419' } },
            React.createElement(Toolbar_1["default"], { variant: "dense" },
                React.createElement(Typography_1["default"], { variant: "h6", color: "inherit", component: "div" }, "Dog connect"))),
        React.createElement(Box_1["default"], { sx: {
                height: "30px",
                backgroundColor: "#5555610f"
            } }),
        React.createElement(Box_1["default"], { sx: {
                flexGrow: 1,
                backgroundColor: "#5555610f",
                backgroundImage: "url(" + bg_new_png_1["default"] + ")",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                height: 200,
                backgroundPosition: 'center',
                boxSizing: 'border-box'
            } })));
};
exports["default"] = Header;
