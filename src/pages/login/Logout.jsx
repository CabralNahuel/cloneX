
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/Conexion"; 
import BlueButton from '../../components/buttons/BlueButton'

const LogOut = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut(); // Utiliza 'auth' desde 'Conexion.js'
        navigate("/");
    };

    return (

    <BlueButton onClick={handleLogout}> LogOut </BlueButton> 

       // <Button variant="contained" color="primary" onClick={handleLogout}>
    );
};

export default LogOut;

