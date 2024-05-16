// import { Avatar, Button, Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';
// import { useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../firebase/Conexion.js";
// import { getAuth } from "firebase/auth";

// const MandarMensajes = ({ onMessageSent }) => {
//   const auth = getAuth();
//   const user = auth.currentUser;
//   const avatar = user.photoURL;
//   const name = user.displayName;
  
//   // Agregar timestamp al mensaje
//   const [texto, setTexto] = useState("");
//   const [correo, setCorreo] = useState(user && user.email ? user.email : "");

//   const crearMensaje = async (e) => {
//     e.preventDefault();
//     const mensaje = {
//       texto: texto,
//       correo: correo,
//       photoURL: avatar // Asegúrate de agregar la URL de la foto al mensaje
//     };

//     try {
//       const mensajes = collection(db, "mensajes");
//       const docRef = await addDoc(mensajes, mensaje);
//       mensaje.id = docRef.id; // Agregar el ID del documento generado a la propiedad mensaje
//       onMessageSent(mensaje); // Llamar a la función onMessageSent con el nuevo mensaje
//       setTexto(""); // Limpiar el campo de texto después de enviar el mensaje
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   return (
//     <Card sx={{ width: '100%' }}>
//       <CardHeader
//         avatar={
//           <Avatar 
//             alt={name}
//             src={avatar}
//             sx={{ width: 48, height: 48 }} 
//           />
//         }
//       />
//       <CardContent>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={12} sm={12}>
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Escribe tu mensaje..."
//               value={texto}
//               onChange={(e) => setTexto(e.target.value)}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   borderRadius: '999px',
//                   backgroundColor: 'transparent',
//                   '& fieldset': {
//                     borderColor: 'transparent',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'transparent',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: 'transparent',
//                   },
//                   '& input': {
//                     color: 'black', // Ajustar el color del texto según sea necesario
//                   },
//                   '&::placeholder': {
// //                     color: 'gray', // Ajustar el color del placeholder según sea necesario
// //                   },
// //                 },
// //               }}
// //             />
// //           </Grid>
// //           <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
// //             <Button
// //               onClick={crearMensaje} 
// //               variant="contained"
// //               sx={{
// //                 borderRadius: '999px', 
// //                 bgcolor: '#7abaff', 
// //                 '&:hover': {
// //                   bgcolor: '#59a3f7', 
// //                 },
// //               }}
// //             >
// //               Enviar
// //             </Button>
// //           </Grid>
// //         </Grid>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default MandarMensajes;


// import { Avatar, Button, Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';
// import { useState } from "react";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "../../firebase/Conexion.js";
// import { getAuth } from "firebase/auth";

// const MandarMensajes = ({ onMessageSent }) => {
//   const auth = getAuth();
//   const user = auth.currentUser;
//   const avatar = user.photoURL;
//   const name = user.displayName;

//   const [texto, setTexto] = useState("");
//   const [correo, setCorreo] = useState(user && user.email ? user.email : "");

//   const crearMensaje = async (e) => {
//     e.preventDefault();
//     const mensaje = {
//       texto: texto,
//       correo: correo,
//       timestamp: serverTimestamp() // Agregar el timestamp al mensaje
//     };
    
//     try {
//       const mensajes = collection(db, "mensajes");
//       const docRef = await addDoc(mensajes, mensaje);
//       mensaje.id = docRef.id; // Agregar el ID del documento generado al mensaje
//       onMessageSent(mensaje); // Llamar a la función onMessageSent con el nuevo mensaje
//       setTexto(""); // Limpiar el campo de texto después de enviar el mensaje
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   return (
//     <Card sx={{ width: '100%' }}>
//       <CardHeader
//         avatar={
//           <Avatar 
//             alt={name}
//             src={avatar}
//             sx={{ width: 48, height: 48 }} 
//           />
//         }
//       />
//       <CardContent>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Escribe tu mensaje..."
//               value={texto}
//               onChange={(e) => setTexto(e.target.value)}
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   borderRadius: '999px',
//                   backgroundColor: 'transparent',
//                   '& fieldset': {
//                     borderColor: 'transparent',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'transparent',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: 'transparent',
//                   },
//                   '& input': {
//                     color: 'black', // Ajustar el color del texto según sea necesario
//                   },
//                   '&::placeholder': {
//                     color: 'gray', // Ajustar el color del placeholder según sea necesario
//                   },
//                 },
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <Button
//               onClick={crearMensaje} 
//               variant="contained"
//               sx={{
//                 borderRadius: '999px', 
//                 bgcolor: '#7abaff', 
//                 '&:hover': {
//                   bgcolor: '#59a3f7', 
//                 },
//               }}
//             >
//               Enviar
//             </Button>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }

// export default MandarMensajes;


import { Avatar, Button, Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/Conexion.js";
import { getAuth } from "firebase/auth";

const MandarMensajes = ({ onMessageSent }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const avatar = user.photoURL;
  const name = user.displayName;

  const [texto, setTexto] = useState("");
  const [correo, setCorreo] = useState(user && user.email ? user.email : "");

  const crearMensaje = async (e) => {
    e.preventDefault();
    const mensaje = {
      texto: texto,
      correo: correo,
      photoURL: avatar,
      displayName: name,
      timestamp: serverTimestamp() // Agregar el timestamp al mensaje
    };
    
    try {
      const mensajes = collection(db, "mensajes");
      const docRef = await addDoc(mensajes, mensaje);
      mensaje.id = docRef.id; // Agregar el ID del documento generado al mensaje
      onMessageSent(mensaje); // Llamar a la función onMessageSent con el nuevo mensaje
      setTexto(""); // Limpiar el campo de texto después de enviar el mensaje
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar 
            alt={name}
            src={avatar}
            sx={{ width: 48, height: 48 }} 
          />
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
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
      }
      />
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          {/*<Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Escribe tu mensaje..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '999px',
                  backgroundColor: 'transparent',
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent',
                  },
                  '& input': {
                    color: 'black', // Ajustar el color del texto según sea necesario
                  },
                  '&::placeholder': {
                    color: 'gray', // Ajustar el color del placeholder según sea necesario
                  },
                },
              }}
            />
            </Grid>*/}
          <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={crearMensaje} 
              variant="contained"
              sx={{
                borderRadius: '999px', 
                bgcolor: '#7abaff', 
                '&:hover': {
                  bgcolor: '#59a3f7', 
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

export default MandarMensajes;
