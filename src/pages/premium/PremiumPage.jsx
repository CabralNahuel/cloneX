import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DrawerLeft from '../../components/drawer/Drawer';
import CardPersonal from '../../components/cards/CardPersonal';
import { InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const margenSup = '10px';

export default function ProfilePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ marginLeft: '-10px', marginTo: '-80px' }}>
        <Grid container spacing={2}>
          {/* DrawerLeft */}
          <Grid 
            item 
            xs={12} 
            md={3} 
            sx={{ 
              marginTop: margenSup, 
            
              alignSelf: 'flex-start' 
            }}
          >
            <DrawerLeft />
          </Grid>
          {/* Contenido centrado */}
          <Grid item xs={12} md={6} sx={{ marginTop: margenSup} }>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                border="1px solid rgba(0, 0, 0, 0.1)" // Borde gris claro
                backgroundColor="transparent"
                borderRadius="1px"
                padding="0.1rem "
            >
            {/* <p>ESTO ES LA PAGINA DE PREMIUM</p> */}
            <div  >

<h1>Acerca de X Premium</h1>
<button className='btn btn-primary'>Suscríbete hoy</button>
<h2>
Nuevos niveles de Premium</h2>
<strong>Desde el 27 de octubre de 2023, ofrecemos dos nuevos niveles: Básico y Premium+.</strong>

<p> Si te suscribiste a Premium en iOS o la web, ahora puedes actualizar tu suscripción a Premium+. En las próximas semanas lanzaremos la opción de actualizar fácilmente tu nivel de suscripción a uno superior o inferior en Android. Si tienes alguna pregunta, ponte en contacto con el equipo de soporte de X Premium.

X Premium es nuestro servicio de suscripción prémium que prioriza las conversaciones de calidad en la plataforma. 

X Premium es una suscripción de pago optativa que ofrece funciones adicionales* para mejorar tu experiencia. X Premium tiene tres niveles, Básico, Premium y Premium+, y cada nivel ofrece más funciones que el nivel inferior.
</p><p>
<strong>Básico:</strong>
 incluye las funciones esenciales de Premium, como edición de posts, posts más largos y cargas de videos más largos, prioridad en las respuestas, formatos de texto, carpetas de elementos guardados, íconos de app personalizados y mucho más.
 </p><p>
<strong>Premium:</strong>
 incluye todas las funciones del nivel Básico más una marca de verificación, menos anuncios, acceso para solicitar la cuota de ingresos por anuncios y suscripciones para creadores, mayor prioridad en las respuestas, verificación de identidad, Media Studio y mucho más.
 </p>
<p><strong>Premium+:</strong>
 incluye todas las funciones de Premium más beneficios adicionales, por ejemplo, ausencia de anuncios en las cronologías Para ti y Siguiendo, prioridad absoluta en las respuestas, Artículos y acceso a Grok. Actualmente, el acceso a Grok se limita a los suscriptores de Premium+ en determinados territorios.

La lista completa de funciones está aquí. </p>


<p>Suscríbete ahora con precios localizados a partir de USD 3/mes o USD 32/año (más los impuestos, por ejemplo el IVA, y las comisiones de tu forma de pago) en la Web en los países disponibles.Haz clic aquí para obtener información de precios.

Todas las funciones de X Premium asociadas a cada nivel estarán disponibles de inmediato excepto la marca de verificación azul, que aparecerá en los perfiles elegibles suscritos a los niveles Premium o Premium+ tras la revisión pertinente para garantizar que las cuentas suscritas cumplan con todos los criterios de elegibilidad.

También lanzamos un servicio nuevo llamado Organizaciones verificadas, que permite a empresas, gobiernos y organizaciones sin fines de lucro en X obtener una marca de verificación dorada o gris, insignias de afiliación, soporte prémium, protección contra la suplantación de identidad y más funciones para las organizaciones. Obtén más información sobre Organizaciones verificadas aquí.
</p>
            </div>
            </Box>
            
          </Grid>
          <Grid item xs={12} md={3} sx={{ marginTop: margenSup}}>
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