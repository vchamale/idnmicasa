"use client";

import { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";

const Songs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [artistName, setArtistName] = useState("");
  const [songName, setSongName] = useState("");
  const [note, setNote] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [lyricsLink, setLyricsLink] = useState("");
  const [songKeys, setSongKeys] = useState<string[]>([]);

  // Fetch SongKeys from the database
  useEffect(() => {
    const fetchSongKeys = async () => {
      try {
        const keys = await prisma.songKey.findMany();
        setSongKeys(keys.map((key) => key.name));
      } catch (error) {
        console.error("Error fetching SongKeys:", error);
      }
    };
    fetchSongKeys();
  }, []);

  const handleAddSong = async () => {
    // Simple validation
    if (!artistName || !songName || !note) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    try {
      const response = await fetch("/api/songs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          artistName,
          songName,
          note,
          pdfLink,
          youtubeLink,
          lyricsLink,
        }),
      });

      if (response.ok) {
        alert("Canción guardada con éxito.");
        setIsModalOpen(false);
      } else {
        alert("Error al guardar la canción.");
      }
    } catch (error) {
      alert("Hubo un problema al guardar la canción.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <button onClick={() => setIsModalOpen(true)}>Agregar Canción</button>
        <button style={{ marginLeft: "20px" }}>Crear Set</button>
        <button style={{ marginLeft: "20px" }}>Ver Sets</button>
      </div>

      {isModalOpen && (
        <div style={modalStyle}>
          <h2>Agregar Canción</h2>
          <form>
            <label>Nombre Artista:</label>
            <input
              type="text"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
            />

            <label>Nombre Canción:</label>
            <input
              type="text"
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
            />

            <label>Nota:</label>
            <select value={note} onChange={(e) => setNote(e.target.value)}>
              <option value="">Seleccione una nota</option>
              {songKeys.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>

            <label>Link a PDF:</label>
            <input
              type="url"
              value={pdfLink}
              onChange={(e) => setPdfLink(e.target.value)}
            />

            <label>Link a YouTube:</label>
            <input
              type="url"
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
            />

            <label>Link a Letra:</label>
            <input
              type="url"
              value={lyricsLink}
              onChange={(e) => setLyricsLink(e.target.value)}
            />

            <button type="button" onClick={handleAddSong}>
              Guardar
            </button>
            <button type="button" onClick={() => setIsModalOpen(false)}>
              Cerrar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Songs;

const modalStyle: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};
