import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import { MdOutlineSettings } from "react-icons/md";


export default function UnderlineTabs({paramtro}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const underlineTabs = paramtro;

  const tabsComponents = underlineTabs.map((tab, i) => {
    return (
      <button
        type="button"
        key={`tab-${tab}`}
        onClick={() => setSelectedIndex(i)}
        style={{
   
          
          border: 0,
          cursor: "pointer",
          display: "flex", // Añadido para alinear contenido verticalmente
          alignItems: "center", // Añadido para alinear contenido verticalmente
          position: "relative", // Añadido para establecer posición relativa
          background: "transparent", // Eliminar el color de fondo
          outline: "none", // Eliminar el contorno al enfocar
          color: selectedIndex === i ? "black" : "inherit", // Aplicar negrita si está seleccionado
          fontWeight: selectedIndex === i ? "bold" : "normal", // Aplicar negrita si está seleccionado
        }}
      >
       
        {tab}

        {/* Renderizar el subrayado solo en la pestaña seleccionada y si el ícono es nulo */}
        {selectedIndex === i && !tab.icon && (
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
            <MagicTabSelect
              id="underline"
              //transition={{  bounce: 0.1 }}
            >
              <div
                style={{
                  width: "100%",
                  height: "0.15rem",
                  backgroundColor: "rgb(29, 155, 240)",
                }}
              />
            </MagicTabSelect>
          </div>
        )}
      </button>
    );
  });

  return paramtro.lenght <= 2? <div style={{ display: "flex", gap: "0.5rem" , height:"45px", justifyContent:"space-between" }}>{tabsComponents}</div>: <div style={{ display: "flex", gap: "0.5rem" , height:"45px", justifyContent:"space-around" }}>{tabsComponents}</div>;
}
