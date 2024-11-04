import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const SongsTable = () => {
  const canciones = [
    {
      titulo: "Vivo estás",
      artista: "Hillsong Y&F",
      nota: "D",
      enlace: "https://www.youtube.com/watch?v=0kit8qrfwBA",
    },
    {
      titulo: "Cambiaré mis tristezas",
      artista: "Israel Houghton",
      nota: "E",
      enlace: "https://www.youtube.com/watch?v=6zMXlfpGE_s",
    },
    {
      titulo: "Quiero más de ti",
      artista: "Jaime Murrell",
      nota: "D",
      enlace: "https://www.youtube.com/watch?v=XO2Jm986qXQ",
    },
    {
      titulo: "Mi Universo",
      artista: "JAR",
      nota: "A",
      enlace: "https://www.youtube.com/watch?v=3tSz1I1XogE",
    },
  ];

  return (
    <TableContainer component={Paper} style={{ borderRadius: "16px" }}>
      <Table>
        <TableHead style={{ backgroundColor: "#14175f" }}>
          <TableRow>
            <TableCell style={{ color: "white" }}>Título</TableCell>
            <TableCell style={{ color: "white" }}>Artista</TableCell>
            <TableCell style={{ color: "white" }}>Nota</TableCell>
            <TableCell style={{ color: "white" }}>Enlace a Youtube</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {canciones.map((cancion, index) => (
            <TableRow key={index}>
              <TableCell>{cancion.titulo}</TableCell>
              <TableCell>{cancion.artista}</TableCell>
              <TableCell>{cancion.nota}</TableCell>
              <TableCell>
                <a
                  href={cancion.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Video
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SongsTable;
