import React, { useState } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [inputUrl, setInputUrl] = useState("");

  const addImage = () => {
    if (inputUrl.trim() === "") return;
    setImages([...images, inputUrl]);
    setInputUrl(""); // clear input
  };

  const deleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="p-4">

      <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter image URL"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <button
          onClick={addImage}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative">
            <img
              src={img}
              alt="img"
              className="w-full h-40 object-cover rounded border"
              onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=Invalid+URL")}
            />
            <button
              onClick={() => deleteImage(idx)}
              className="absolute top-1 right-1 bg-red-600 text-white text-sm px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ImageGallery;
