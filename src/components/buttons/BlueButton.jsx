
import { Button } from '@mui/material';

export default function BlueButton({ children, ...props }) {
    return (
        <Button
            variant="contained"
            sx={{
                marginLeft: '-66px',
                width: '180px',
                height: '50px',
                borderRadius: '999px',
                bgcolor: 'rgb(29, 155, 240)',
                '&:hover': {
                    bgcolor: '#59a3f7',
                },
            }}
            {...props} // Pasa las props adicionales al componente Button
        >
            {children} {/* Renderiza el contenido del botón */}
        </Button>
    );
}
