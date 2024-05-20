import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DrawerLeft from '../../components/drawer/Drawer';
import { InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import PexelsAPIComponent from '../../components/apis/pexeles/Pexeles';

const margenSup = '10px';

export default function ProfilePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" >
        <Grid container spacing={2}>
          {/* DrawerLeft */}
          <Grid 
            item 
            xs={12} 
            md={4} 
            sx={{ 
              marginTop: margenSup, 
                           alignSelf: 'flex-start' 
            }}
          >
            <DrawerLeft selectedPath={'/messages'} />
          </Grid>
          {/* Contenido centrado */}
          <Grid item xs={12} md={6} sx={{ marginTop: margenSup} }>
            <Box
                display="grid"
                alignItems="center"
                gap="1%"
                justifyContent="start"
                border="1px solid rgba(0, 0, 0, 0.1)" // Borde gris claro
                backgroundColor="transparent"
                borderRadius="1px"
               
            >
            <PexelsAPIComponent />
            </Box>
            
          </Grid>
          <Grid item xs={12} md={2} sx={{ marginTop: margenSup}}>
            {/* Contenido aquí */}
            <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
                ),
                sx: {
                bgcolor: '#ffffff', // Fondo gris claro
                borderRadius: '999px', // Borde redondeado
                '& input': {
                    borderRadius: '999px', // Borde redondeado
                },
                },
            }}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}



