import React from 'react';
import {Typography, Stack, Button} from '@mui/material';

import BodyPartImage from '../assets/assets/icons/body-part.png';
import TargetImage from '../assets/assets/icons/target.png';
import EquipmentImage from '../assets/assets/icons/equipment.png';

const Details = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail
    const equipmentDetail = [
        {
            icon:BodyPartImage,
            name: bodyPart
        },
        {
            icon:TargetImage,
            name: target
        },
        {
            icon:EquipmentImage,
            name: equipment
        }
    ]
  return (
    <Stack gap="60px"
    sx={{ flexDirection: {lg: 'row'},
    p: '20px', alignItems: 'center' }}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack>
            <Typography variant="h3" mb="30px">
                {name}
            </Typography>
            <Typography variant="h6">
                Exercise keeps you strong.
                {name} {` `} is one of the best exercises to target your {target} {` `}
                it will help you improve you mood and gain energy
            </Typography>
            {equipmentDetail.map((detail)=>(
                 <Stack key={detail.name} direction="row" alignItems="center" gap="24px">
                    <Button
                    sx={{ backgroundColor: '#fff2db', borderRadius: '50%', width: '80px', height: '80px', m: '15px' }}>
                        <img src={detail.icon} alt={detail.name} style={{ width: '50px', height: '50px' }} />
                    </Button>
                    <Typography variant="h5" textTransform="capitalize">
                        {detail.name}
                    </Typography>
                 </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Details