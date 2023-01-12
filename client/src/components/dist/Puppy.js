'use strict'
exports.__esModule = true
var React = require('react')
var react_1 = require('react')
var Button_1 = require('@mui/material/Button')
var puppiesContext_1 = require('../context/puppiesContext')
var Delete_1 = require('@mui/icons-material/Delete')
var Box_1 = require('@mui/material/Box')
var ImageListItem_1 = require('@mui/material/ImageListItem')
var ImageListItemBar_1 = require('@mui/material/ImageListItemBar')
var react_card_flip_1 = require('react-card-flip')
var Puppy = function (_a) {
    var puppy = _a.puppy
    var deletePuppy = react_1.useContext(
        puppiesContext_1.PuppyContext
    ).deletePuppy
    var _b = React.useState(false),
        isFlipped = _b[0],
        setIsFlipped = _b[1]
    var handleClick = function (event) {
        event.preventDefault()
        setIsFlipped(!isFlipped)
    }
    return React.createElement(
        react_card_flip_1['default'],
        { isFlipped: isFlipped, flipDirection: 'vertical' },
        React.createElement(
            ImageListItem_1['default'],
            { key: puppy.id },
            React.createElement('img', {
                src: puppy.image + '?w=248&fit=crop&auto=format',
                // src={puppy.image}
                srcSet: puppy.image + '?w=248&fit=crop&auto=format&dpr=2 2x',
                alt: puppy.breed,
                loading: 'lazy',
            }),
            React.createElement(ImageListItemBar_1['default'], {
                title: puppy.name,
                position: 'below',
            }),
            React.createElement(
                Box_1['default'],
                {
                    sx: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingLeft: 1,
                        paddingRight: 1,
                    },
                },
                React.createElement(
                    Button_1['default'],
                    { size: 'small', onClick: handleClick },
                    'Learn More'
                ),
                React.createElement(Delete_1['default'], {
                    onClick: function () {
                        return deletePuppy(puppy.id)
                    },
                })
            )
        ),
        React.createElement(
            ImageListItem_1['default'],
            { key: puppy.id },
            React.createElement('img', {
                src: puppy.image + '?w=248&fit=crop&auto=format',
                // src={puppy.image}
                srcSet: puppy.image + '?w=248&fit=crop&auto=format&dpr=2 2x',
                alt: puppy.breed,
                loading: 'lazy',
                style: { opacity: '0.5' },
            }),
            React.createElement(ImageListItemBar_1['default'], {
                title: puppy.name,
                position: 'below',
            }),
            React.createElement(
                Box_1['default'],
                {
                    sx: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingLeft: 1,
                        paddingRight: 1,
                    },
                },
                React.createElement(
                    Button_1['default'],
                    { size: 'small', onClick: handleClick },
                    'Back'
                ),
                React.createElement(Delete_1['default'], {
                    onClick: function () {
                        return deletePuppy(puppy.id)
                    },
                })
            )
        )
    )
}
exports['default'] = Puppy
