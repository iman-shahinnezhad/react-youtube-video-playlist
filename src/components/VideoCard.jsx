import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import demoThumbnailUrl from "../assets/no-video.jpg";

import {  demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ( video ) => (
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={video.video.videoId ? `/video/${video.video.videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={video.video?.thumbnails[0]?.url || demoThumbnailUrl} alt={video.video?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={video.video.videoId ? `/video/${video.video.videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {video.video?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={video.video?.channelId ? `/channel/${video.video?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {video.video?.channelTitle || demoChannelTitle}
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard