import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import {
  Box,
  Chip,
  Card,
  Button,
  CardMedia,
  Typography,
  CardContent,
  CardActions
} from '@material-ui/core';

import useStyles from './styles';

const PlaceDetails = ({ place }) => {
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia 
        style={{ height: 170 }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display='flex' justifyContent='space-between' my={2}>
          <Rating name='read-only' value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant='subtitle1'>out of {place.num_reviews} reviews</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
        </Box>
        {place?.address && (
          <Typography className={classes.subtitle} variant='subtitle2' color='textSecondary'>
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography className={classes.spacing} variant='subtitle2' color='textSecondary'>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size='small' label={name} className={classes.chip} />
        ))}
        <CardActions className={classes.btnSpacing}>
          <Button size='small' color='primary' onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
          </Button>
          <Button size='small' color='primary' onClick={() => window.open(place.website, '_blank')}>
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
