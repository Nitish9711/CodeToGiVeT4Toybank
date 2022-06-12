// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 200
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)"
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// });

// export default function Cards() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root} variant="outlined">
//       <CardContent>
//         <Typography
//           className={classes.title}
//           color="textSecondary"
//           gutterBottom
//         >
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NavLink } from "react-router-dom";


export default function Cards({ type, data, category }) {

    return (
        <>
            {data && <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={data.name ? data.name : "NA"}
                    subheader={data.date ? new Date(data.date).toUTCString() : '--/--/--'}
                />
                <CardMedia
                    component="img"
                    height="100"
                    image="https://thebetterindia-static.gumlet.io/wp-content/uploads/2010/08/toybank-collage.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
                        <b>{category ? category : "NA"}.</b>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {type === 'own' &&
                        <>
                            {category==='onGround' ? 
                            <NavLink to={`/myEvents/onGround/${data.id}`} style={{ textDecoration: "none" }}>
                                <Button size="small">Learn More</Button>
                            </NavLink>
                            :
                            <NavLink to={`/myEvents/virtual/${data.id}`} style={{ textDecoration: "none" }}>
                                <Button size="small">Learn More</Button>
                            </NavLink>}
                        </>
                    }
                </CardActions>
            </Card>
            }
        </>
    );
}
