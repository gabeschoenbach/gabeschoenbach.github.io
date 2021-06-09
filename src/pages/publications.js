import * as React from 'react'
import Navigation from '../components/navigation'
import Media from '../components/media'
import { makeStyles } from "@material-ui/core/styles/";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Typography';
import texas from '../images/texas_hist.png'
import grid from '../images/7x7.png'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    // margin: 'auto',
  },
  media: {
    // height:100,
    width:200,
    paddingTop: '10%',
    paddingLeft: '10%',
    objectFit: 'cover',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  }
});

const PublicationsPage = () => {
    const classes = useStyles();
    return (
      <div>
        <Navigation pageTitle="publications">
        </Navigation>
        <div className="contentContainer">
          <h1>publications</h1>
          <Card className={classes.root} variant="outlined">
            <CardMedia className={classes.media} image={grid} title="Partisan Symmetry"/>
            <div className={classes.details}>
              <CardHeader
                // avatar={<Avatar alt="7x7 grid" src={grid}/>}
                title="Implementing partisan symmetry: Problems and paradoxes"
                subheader="Daryl DeFord, Natasha Dhamankar, Moon Duchin, Varun Gupta, Mackenzie McPike, Gabe Schoenbach, Ki Wan Sim"
              />
              <CardContent>
                <Typography component="p">
                Typography here.
                </Typography>
              </CardContent>
            </div>
          </Card>
        </div>
        <Media>
        </Media>
      </div>
    )
}

export default PublicationsPage