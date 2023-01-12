"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var Typography_1 = require("@mui/material/Typography");
var puppiesContext_1 = require("../context/puppiesContext");
var Box_1 = require("@mui/material/Box");
var ImageList_1 = require("@mui/material/ImageList");
var Puppy_1 = require("./Puppy");
function TitlebarBelowImageList() {
    var puppies = react_1.useContext(puppiesContext_1.PuppyContext).puppies;
    // const { deletePuppy } = useContext(PuppyContext) as PuppyContextType;  
    // const [isFlipped, setFlipped] = React.useState<{}[]>([])
    // const showBack = (id: string) => {
    //   setFlipped({...isFlipped,
    //     id: id,
    //     flipped: true,
    // })
    // }
    // const showFront = (id: string) => {
    //   setFlipped({...isFlipped,
    //     id: id,
    //     flipped: false,
    // })
    // }
    // const showFront = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    //   event.preventDefault();
    //   setFlipped(isFlipped.push({${id}: false}))
    // }
    return (React.createElement(Box_1["default"], null,
        React.createElement(Typography_1["default"], { gutterBottom: true, variant: "h4", component: "div", color: "Orange", fontWeight: 600, sx: { marginBottom: "20px" } }, "Registered dogs:"),
        React.createElement(ImageList_1["default"], { sx: { maxHeight: 700 }, key: "list" }, puppies.map(function (puppy) { return (React.createElement(Puppy_1["default"], { puppy: puppy })
        // <ReactCardFlip isFlipped={isFlipped.flipped} flipDirection="vertical">
        // <ImageListItem key={puppy.id}>
        //   <img
        //     src={`${puppy.image}?w=248&fit=crop&auto=format`}
        //     // src={puppy.image}
        //     srcSet={`${puppy.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        //     alt={puppy.breed}
        //     loading="lazy"
        //   />
        //   <ImageListItemBar
        //     title={puppy.name}
        //     position="below"
        //   />
        //   <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 1, paddingRight: 1 }}>
        //   <Button size="small" onClick={(e) => handleClick(e, puppy.id)}>Learn More</Button>
        //   <DeleteIcon onClick={() => deletePuppy(puppy.id)}/>
        //    </Box>
        // </ImageListItem>
        // <ImageListItem key={puppy.id}>
        //   <img
        //     src={`${puppy.image}?w=248&fit=crop&auto=format`}
        //     // src={puppy.image}
        //     srcSet={`${puppy.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        //     alt={puppy.breed}
        //     loading="lazy"
        //     style={{opacity: '0.5'}}
        //   />
        //   <ImageListItemBar
        //     title={puppy.name}
        //     position="below"
        //   />
        //   <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 1, paddingRight: 1 }}>
        //   <Button size="small" onClick={(e) => handleClick(e, puppy.id)}>Back</Button>
        //   <DeleteIcon onClick={() => deletePuppy(puppy.id)}/>
        //    </Box>
        // </ImageListItem>
        // </ReactCardFlip>
        ); }))));
}
exports["default"] = TitlebarBelowImageList;
