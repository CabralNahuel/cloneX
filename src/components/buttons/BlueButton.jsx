
import { Button } from '@mui/material';

export default function BlueButton({ children, sx, ...props }) {
    return (
        <Button
            variant="contained"
            sx={{
                width: '220px',
                height: '50px',
                borderRadius: '999px',
                bgcolor: 'rgb(29, 155, 240)',
                '&:hover': {
                    bgcolor: '#59a3f7',
                },
                ...sx, // Fusiona los estilos adicionales con los estilos originales
            }}
            {...props} // Pasa las props adicionales al componente Button
        >
            {children} {/* Renderiza el contenido del botón */}
        </Button>
    );
}