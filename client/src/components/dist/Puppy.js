"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var React = require("react");
var axios_1 = require("axios");
var react_1 = require("react");
var puppiesContext_1 = require("../context/puppiesContext");
var Delete_1 = require("@mui/icons-material/Delete");
var Button_1 = require("@mui/material/Button");
var Box_1 = require("@mui/material/Box");
var ImageListItem_1 = require("@mui/material/ImageListItem");
var ImageListItemBar_1 = require("@mui/material/ImageListItemBar");
var react_card_flip_1 = require("react-card-flip");
var IconButton_1 = require("@mui/material/IconButton");
var Edit_1 = require("@mui/icons-material/Edit");
var Dialog_1 = require("@mui/material/Dialog");
var ListItem_1 = require("@mui/material/ListItem");
var List_1 = require("@mui/material/List");
var Typography_1 = require("@mui/material/Typography");
var Close_1 = require("@mui/icons-material/Close");
var Slide_1 = require("@mui/material/Slide");
var AppBar_1 = require("@mui/material/AppBar");
var Toolbar_1 = require("@mui/material/Toolbar");
var TextField_1 = require("@mui/material/TextField");
var Transition = React.forwardRef(function Transition(props, ref) {
    return React.createElement(Slide_1["default"], __assign({ direction: "up", ref: ref }, props));
});
var Puppy = function (_a) {
    var puppy = _a.puppy;
    var deletePuppy = react_1.useContext(puppiesContext_1.PuppyContext).deletePuppy;
    var updatePuppy = react_1.useContext(puppiesContext_1.PuppyContext).updatePuppy;
    var _b = React.useState(false), isFlipped = _b[0], setIsFlipped = _b[1];
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var _d = React.useState(__assign({}, puppy)), formData = _d[0], setFormData = _d[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    var handleClick = function (event) {
        event.preventDefault();
        setIsFlipped(!isFlipped);
    };
    var handleInputChange = function (event) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[event.currentTarget.id] = event.currentTarget.value, _a)));
    };
    var handleUpdatePuppy = function (e, formData) { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].put("http://localhost:8000/api/puppies/" + puppy.id, __assign({}, formData))];
                case 2:
                    _a.sent();
                    updatePuppy(formData);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(react_card_flip_1["default"], { isFlipped: isFlipped, flipDirection: "vertical" },
        React.createElement(ImageListItem_1["default"], { className: "front" },
            React.createElement("img", { src: puppy.image, alt: puppy.breed, loading: "lazy" }),
            React.createElement(ImageListItemBar_1["default"], { title: React.createElement("span", { className: "front_header" }, formData.name), position: "below" }),
            React.createElement(Box_1["default"], { sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: 1,
                    paddingRight: 1
                } },
                React.createElement(Button_1["default"], { size: "small", onClick: handleClick, sx: { color: 'rgb(0 0 0 / 87%)' } }, "Learn More"),
                React.createElement(Delete_1["default"], { onClick: function () { return deletePuppy(puppy.id); }, sx: { color: '#d26419' } }))),
        React.createElement(ImageListItem_1["default"], { key: puppy.id, className: "back" },
            React.createElement("img", { src: puppy.image, alt: puppy.breed, loading: "lazy", style: { opacity: '0.5' } }),
            React.createElement(ImageListItemBar_1["default"], { title: React.createElement("h2", { className: "back_headers" },
                    "Name: ",
                    formData.name), subtitle: React.createElement("h2", { className: "back_headers" },
                    "Breed: ",
                    formData.breed), position: "top", sx: {
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
                }, actionIcon: React.createElement(IconButton_1["default"], { sx: { color: 'rgba(255, 255, 255, 0.54)' }, "aria-label": "info about}", onClick: handleClickOpen },
                    React.createElement(Edit_1["default"], null)) }),
            React.createElement(ImageListItemBar_1["default"], { title: React.createElement("span", { className: "back_bottom" },
                    "Birth date: ",
                    puppy.birth_date), position: "below" }),
            React.createElement(Box_1["default"], { sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: 1,
                    paddingRight: 1
                } },
                React.createElement(Button_1["default"], { size: "small", onClick: handleClick, sx: { color: 'rgb(0 0 0 / 87%)' } }, "Back"),
                React.createElement(Delete_1["default"], { onClick: function () { return deletePuppy(puppy.id); }, sx: { color: '#d26419' } })),
            React.createElement(Dialog_1["default"], { fullScreen: true, open: open, onClose: handleClose, TransitionComponent: Transition },
                React.createElement(Box_1["default"], { component: "form", autoComplete: "off", onSubmit: function (e) { return handleUpdatePuppy(e, formData); } },
                    React.createElement(AppBar_1["default"], { sx: {
                            position: 'relative',
                            backgroundColor: '#d26419'
                        } },
                        React.createElement(Toolbar_1["default"], null,
                            React.createElement(IconButton_1["default"], { edge: "start", color: "inherit", onClick: handleClose, "aria-label": "close" },
                                React.createElement(Close_1["default"], null)),
                            React.createElement(Typography_1["default"], { sx: { ml: 2, flex: 1 }, variant: "h6", component: "div" },
                                "Please edit information below about dog",
                                ' ',
                                puppy.name),
                            React.createElement(Button_1["default"], { autoFocus: true, color: "inherit", type: "submit", onClick: handleClose }, "save"))),
                    React.createElement(List_1["default"], null,
                        React.createElement(ListItem_1["default"], null,
                            React.createElement(TextField_1["default"], { id: "name", type: "text", required: true, label: "Name", 
                                // defaultValue={puppy.name}
                                value: formData.name, onChange: handleInputChange, title: "name", autoFocus: true, margin: "dense", fullWidth: true, variant: "standard" })),
                        React.createElement(ListItem_1["default"], null,
                            React.createElement(TextField_1["default"], { id: "breed", type: "text", required: true, label: "Breed", value: formData.breed, 
                                // defaultValue={puppy.breed}
                                onChange: handleInputChange, title: "breed", margin: "dense", fullWidth: true, variant: "standard" }))))))));
};
exports["default"] = Puppy;
