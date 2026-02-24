import React, { useState, useContext } from "react";
import { ArtContext } from "../context/ArtContext";

function Artist() {
  const { addArtwork } = useContext(ArtContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleUpload = () => {
    if (!title || !price || !image) {
      alert("Please fill all fields");
      return;
    }

    addArtwork({ title, price, image });
    alert("Artwork uploaded! Waiting for approval.");

    setTitle("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Upload Artwork</h2>

        <input
          type="text"
          placeholder="Artwork Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
}

export default Artist;