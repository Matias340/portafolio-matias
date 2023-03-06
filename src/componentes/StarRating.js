import React from 'react'
import Box from '@mui/material/Box';
import { Rating } from '@mui/lab';


const StarRating = ({stars}) => {
  return (
    <div>
        <Box component='fieldset' borderColor='transparent'>
           <Rating name='read-only' readOnly value={stars} />
        </Box>
    </div>
  )
}

export default StarRating