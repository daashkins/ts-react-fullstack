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
var puppiesContext_1 = require("../context/puppiesContext");
var react_1 = require("react");
var Box_1 = require("@mui/material/Box");
var Button_1 = require("@mui/material/Button");
var TextField_1 = require("@mui/material/TextField");
var Typography_1 = require("@mui/material/Typography");
var Pets_1 = require("@mui/icons-material/Pets");
var axios_1 = require("axios");
var AddPuppy = function () {
    var addPuppy = React.useContext(puppiesContext_1.PuppyContext).addPuppy;
    var _a = React.useState(), formData = _a[0], setFormData = _a[1];
    var _b = React.useState(""), breed = _b[0], setBreed = _b[1];
    var handleInputChange = function (event) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[event.currentTarget.id] = event.currentTarget.value, _a)));
        if (event.currentTarget.id === 'breed') {
            setBreed(event.currentTarget.value);
        }
    };
    react_1.useEffect(function () {
        var getImage = function (breed) { return __awaiter(void 0, void 0, Promise, function () {
            var response, number, image;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get("https://api.unsplash.com/search/photos?query=" + breed + "&page=1&client_id=" + process.env.REACT_APP_UNSPLASH_KEY)];
                    case 1:
                        response = _b.sent();
                        number = Math.floor(Math.random() * 10);
                        image = (_a = response.data.results[number]) === null || _a === void 0 ? void 0 : _a.urls.full;
                        console.log(response.data.results[number]);
                        if (!image) {
                            setFormData(__assign(__assign({}, formData), { image: 'https://media.istockphoto.com/id/513228693/nl/foto/funny-dog-face.jpg?s=612x612&w=0&k=20&c=MaQmRS5XU3Yv1l2KE-XXtM90q3WPj_2edYK1GTqJO_o=' }));
                        }
                        setFormData(__assign(__assign({}, formData), { image: image }));
                        return [2 /*return*/];
                }
            });
        }); };
        if (breed) {
            getImage(breed);
        }
    }, [breed]);
    var handleAddPuppy = function (e, formData) { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    addPuppy(formData);
                    console.log(formData);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].post("http://localhost:8000/api/puppies/", __assign({}, formData))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(Box_1["default"], { sx: { display: "flex", flexDirection: "column" } },
        React.createElement(Typography_1["default"], { className: "form_heading", gutterBottom: true, variant: "h4", component: "div", color: "#525050", fontWeight: 600, sx: { marginBottom: "20px" } },
            "Would you like to add your dog? ",
            React.createElement(Pets_1["default"], { fontSize: "large", sx: { color: "Orange" } })),
        React.createElement(Box_1["default"], { component: "form", sx: { '& > :not(style)': { m: 1, width: '50%' } }, noValidate: true, autoComplete: "off", onSubmit: function (e) { return handleAddPuppy(e, formData); } },
            React.createElement(TextField_1["default"], { id: "name", type: "text", required: true, label: "Name", variant: "outlined", onChange: handleInputChange, title: "name" }),
            React.createElement(TextField_1["default"], { id: "breed", type: "text", required: true, label: "Breed", variant: "outlined", onChange: handleInputChange, title: "breed" }),
            React.createElement(TextField_1["default"], { id: "birth_date", type: "text", required: true, label: "Birth date", variant: "outlined", onChange: handleInputChange, title: "birth_name" }),
            React.createElement(Button_1["default"], { variant: "contained", type: "submit", style: { backgroundColor: '#d26419' } }, "Add your dog"))));
};
exports["default"] = AddPuppy;
