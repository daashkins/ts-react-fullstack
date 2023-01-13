"use strict";
exports.__esModule = true;
var React = require("react");
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./components/Home");
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Home_1["default"], null) })),
        React.createElement("div", { className: "App" })));
}
exports["default"] = App;
