import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  card: {
    maxWidth: 500,
    display: 'inline-block',
    margin: 25,
    float: 'left',
  },
  media: {
    height: 150,
  },
  button: {
    margin: 100,
    float: 'left',    
  },
};

// This component renders the movie poster and some details about the movie
const PosterCard = ({ classes, posterUrl, movieDetails }) => (
  <div>
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={posterUrl} title={movieDetails.title} />
      <CardContent>
        <Typography variant="headline" component="h2">
          {movieDetails.title}
        </Typography>
        <Typography component="p">{movieDetails.overview}</Typography>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          className={classes.button}
          href={`https://www.themoviedb.org/movie/${movieDetails.id}`}
        >
          Read more...
        </Button>
      </CardActions>
    </Card>
  </div>
);

PosterCard.propTypes = {
  classes: PropTypes.object.isRequired,
  posterUrl: PropTypes.string.isRequired,
  movieDetails: PropTypes.object.isRequired,
};

export default withStyles(styles)(PosterCard);
