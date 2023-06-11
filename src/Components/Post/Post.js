import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import User from "../User/User";
import { Link } from 'react-router-dom';



const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  

function Post(props) {
    const { title, text, userName, userId } = props;
    return (
        <div className="PostContainer">

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {userId}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>

                    <Link to={{ pathname: '/users/' + userId }} component={User}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {userName}
                    </Typography>
                    </Link>
                    <Typography variant="body2">
                        {text}
                    </Typography>
                </CardContent>
                
            </Card>
        </div>
    );
}

export default Post;