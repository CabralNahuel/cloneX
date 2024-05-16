import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Avatar, Button, IconButton, InputAdornment } from '@mui/material';


export default function CardPersonal() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar 
            alt="Remy Sharp"
            src="Foto CV.jpg"
            sx={{ width: 48, height: 48 }} >
            
          </Avatar>
        }
        
        title={
            <input
              id="input-mode"
              type="text"
              placeholder="What is happening?!"
              style={{
                width: '100%',
                padding: '8px 12px',
                fontSize: '1rem',
                border: 'none', // Oculta el borde
                outline: 'none', // Oculta el contorno de enfoque
              }}
            />
        }
        
      />
      <CardContent>
      <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: '999px', // Hace que el botón sea redondeado
                bgcolor: '#7abaff', // Color azul claro
                '&:hover': {
                  bgcolor: '#59a3f7', // Color azul claro más claro al pasar el cursor
                },
              }}
            >
              Post
            </Button>
          </Grid>
        </Grid>
        </CardContent>
    </Card>
  );
}