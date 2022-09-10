import { useState } from "react";

export default function InputImage({ setUrl, img }) {
  const [image, setImage] = useState(img);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "MedicApp");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dupwg1pgi/image/upload",
      { method: "POST", body: data }
    );
    const file = await res.json();
    if (file.secure_url){
        setImage(file.secure_url);
        setUrl(file.secure_url);
    }
  };

  return (
    <>
      <div className="flex items-center space-x-6">
        <div className="shrink-0">
          <img
            className="object-cover w-40 rounded-full border"
            src={image}
            alt="Perfil"
          />
        </div>
        <label className="block w-full">
          <span className="sr-only">Choose File</span>
          <input
            type="file"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            onChange={uploadImage}
          />
        </label>
      </div>
    </>
  );
}
