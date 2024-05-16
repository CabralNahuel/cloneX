import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, Avatar, CardMedia } from '@mui/material';

const GiphyViewer = () => {
 
  const [gifs, setGifs] = useState([]);

  
  const fetchGifs = async () => {
    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/trending?', {
        params: {
          api_key: '3RIMrU9XBRB9rNEJ6zUxrB6hB7i2ad23', 
          limit: 25, // Cantidad de GIFs a obtener
        },
      });
      const data = response.data.data;

      
      data.forEach((item) => {
        console.log('Type:', item.type);
        // console.log('ID:', item.id);
        // console.log('URL:', item.url);
        // console.log('Slug:', item.slug);
        // console.log('Title:', item.title);
        // console.log('Username:', item.username);
        // console.log('Source:', item.source);
        // console.log('Original Image URL:', item.images.original.url);
        // console.log('Fixed Width Image URL:', item.images.fixed_width.url);
        // console.log('Avatar URL:', item.user?.avatar_url || 'URL de Avatar no disponible');

        // console.log('Display Name:', item.user?.display_name || 'Nombre de usuario no disponible');

      });

      setGifs(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  useEffect(() => {
    fetchGifs();
  }, []);

  return (
    <div>
      <h1>Trending GIFs</h1>
      <div>
        {gifs.map((gif) => (
          <Card key={gif.id} style={{ maxWidth: '600px', marginBottom: '20px' }}>
            <CardHeader
              avatar={<Avatar alt={gif.username} src={gif.user?.avatar_url || ''} />}
              title={gif.user?.display_name || ''}
            />

            <CardMedia component="img" src={gif.images.original.url} alt={gif.title} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GiphyViewer;
