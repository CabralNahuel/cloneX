import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const PexelsAPIComponent = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.pexels.com/videos/popular',
          {
            headers: {
              Authorization: 'wFrk9yRQxUZm1SVTk2zNZPsX0ryWoPjcqUx4vxmp7LXMImMOO7SDoEJy',
            },
          }
        );
        setVideos(response.data.videos);
      } catch (error) {
        console.error('Error al obtener los videos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Videos populares de Pexels</h2>
      <div className="videos-container" >
        {videos.map((video) => (
          <Card key={video.id} style={{ maxWidth: '300px', maxHeight:"300px", marginBottom: '20px' }}>
            <CardMedia
              component="video"
              src={video.video_files[0].link}
              title={video.user.name}
              controls
            />
            <CardContent>
              <Typography variant="subtitle1">{video.user.name}</Typography>
              <Typography variant="body2">{video.url}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PexelsAPIComponent;
