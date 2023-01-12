'use strict'
exports.__esModule = true
var React = require('react')
var react_1 = require('react')
var Typography_1 = require('@mui/material/Typography')
var puppiesContext_1 = require('../context/puppiesContext')
var Box_1 = require('@mui/material/Box')
var ImageList_1 = require('@mui/material/ImageList')
var Puppy_1 = require('./Puppy')
var Puppies = function () {
    var puppies = react_1.useContext(puppiesContext_1.PuppyContext).puppies
    return React.createElement(
        Box_1['default'],
        null,
        React.createElement(
            Typography_1['default'],
            {
                gutterBottom: true,
                variant: 'h4',
                component: 'div',
                color: 'Orange',
                fontWeight: 600,
                sx: { marginBottom: '20px' },
            },
            'Registered dogs:'
        ),
        React.createElement(
            ImageList_1['default'],
            { sx: { maxHeight: 700 }, key: 'list' },
            puppies.map(function (puppy) {
                return React.createElement(Puppy_1['default'], { puppy: puppy })
            })
        )
    )
}
exports['default'] = Puppies
