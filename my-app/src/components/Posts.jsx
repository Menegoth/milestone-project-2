import React from 'react'
import {CardMedia, CardContent, Card, Typography} from '@mui/material'

function Posts(props) {
  return (
    <div className='post-test'>
    
    <Card sx={{ maxWidth: 450 }}>
      <CardContent>
        <Typography gutterBottom variant="h4">
            {props.title}
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image="{prop.imgUrl}"
          alt="User's Post alt"
        />
          <Typography variant="body2">
          {props.description}
          </Typography>
        </CardContent>
    </Card>
    </div>
  );
}

export default Posts