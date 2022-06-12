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
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NavLink } from "react-router-dom";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Cards({ type, data, category }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                            <NavLink to="/myEvents/test" style={{ textDecoration: "none" }}>
                                <Button size="small">Learn More</Button>
                            </NavLink>

                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </>
                    }
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Description:</Typography>
                        <Typography paragraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto laborum, tempora repellendus laboriosam et debitis obcaecati ut quibusdam cupiditate aperiam facilis quos pariatur commodi explicabo.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            }
        </>
    );
}
