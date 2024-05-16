import { getAuth } from "firebase/auth";


// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;
// }

// if (user !== null) {
//     user.providerData.forEach((profile) => {
//       console.log("Sign-in provider: " + profile.providerId);
//       console.log("  Provider-specific UID: " + profile.uid);
//       console.log("  Name: " + profile.displayName);
//       console.log("  Email: " + profile.email);
//       console.log("  Photo URL: " + profile.photoURL);
//     });
//   }

  
//   updateProfile(auth.currentUser, {
//     displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
//   }).then(() => {
//     // Profile updated!
//     // ...
//   }).catch((error) => {
//     // An error occurred
//     // ...
//   });



    //   // The user object has basic properties such as display name, email, etc.

    // export default async function CurrentUser() {
    //     const displayName = user.displayName;
    //     const email = user.email;
    //     const photoURL = user.photoURL;
    
    //     return await(
    //         // Puedes retornar lo que necesites aquí, por ejemplo:
    //         <div>
    //             <p>Nombre: {displayName}</p>
    //             <p>Email: {email}</p>
    //             <p>Foto: {photoURL}</p>
    //         </div>
    //     );
    // }
    
    const CurrentUser = () => {
        const auth = getAuth();
        const user = auth.currentUser;
      
        return user ? (
          <div>
            
            <p>Email: {user.email}</p>
            <p>Usuario: {user.displayName}</p>
            
          </div>
        ) : (
          <div>
            <p>No hay usuario actualmente logueado.</p>
          </div>
        );
      };
      
      export default CurrentUser;
      
