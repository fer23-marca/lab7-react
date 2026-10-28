import React, { useState } from "react";
import Cards from "./Cards.jsx";

const LIstas = () => {

  const [busqueda, setBusqueda] = useState("");

  const frutas = [
    { id: 1, nombre: "Manzana", imagen: "manzana.jpg" },
    { id: 2, nombre: "Uva", imagen: "uva.png" },
    { id: 3, nombre: "Sandia", imagen: "sandia.webp" },
  ];

  const [total, setTotal] = useState(0);

  const frutasFiltradas = frutas.filter((fruta) => 
    fruta.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Total de likes de frutas: {total}</h1>

      <input
        style={{
          padding: '10px',
          marginBotton: '20px',
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }} 
      type="text" 
      placeholder="Ingrese el nombre de la fruta" 
      onChange={(e) => {
        setBusqueda(e.target.value);
      }}
      />

      <div style={{ display: "flex", gap: "10px" }}>
        {frutasFiltradas.length === 0 && (
          <p style={{color: '#ccc', fontSize: "20px"}}>
            no se encontraron furtas con el nombre "{busqueda}"
          </p>
        )}



        {frutasFiltradas.map((fruta) => {
          return (
            <Cards
              key={fruta.id}
              nombre={fruta.nombre}
              img={fruta.imagen}
              onLike={() => {
                setTotal(total + 1);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LIstas;
