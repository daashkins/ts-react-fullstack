"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.PuppyContext = void 0;
var React = require("react");
var react_1 = require("react");
var axios_1 = require("axios");
exports.PuppyContext = react_1.createContext(null);
var PuppyProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState([]), puppies = _b[0], setPuppies = _b[1];
    react_1.useEffect(function () {
        axios_1["default"].get('http://localhost:8000/api/puppies/').then(function (response) {
            setPuppies(__spreadArrays(response.data));
        });
    }, []);
    console.log(puppies);
    var addPuppy = function (puppy) {
        var newPuppy = {
            id: puppy.id,
            name: puppy.name,
            breed: puppy.breed,
            birth_date: puppy.birth_date,
            image: puppy.image
        };
        setPuppies(__spreadArrays(puppies, [newPuppy]));
    };
    var updatePuppy = function (id) {
        puppies.filter(function (puppy) {
            if (puppy.id === id) {
                setPuppies(__spreadArrays(puppies));
            }
        });
    };
    var deletePuppy = function (id) {
        puppies.filter(function (puppy) {
            if (puppy.id !== id) {
                setPuppies(__spreadArrays(puppies));
            }
        });
    };
    return (React.createElement(exports.PuppyContext.Provider, { value: { puppies: puppies, addPuppy: addPuppy, updatePuppy: updatePuppy, deletePuppy: deletePuppy } }, children));
};
exports["default"] = PuppyProvider;
