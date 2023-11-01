import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { useState } from "react";
import { postImage } from "./api/postImage";

const CameraCapture = ({ goNext }) => {
  const [image, setImage] = useState(null);

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);
    return new Blob([ab], { type: "image/jpeg" });
  };

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const imageBlob = dataURItoBlob(imageSrc);
    setImage(imageBlob);
  }, [webcamRef]);

  const getImageUrl = () => URL.createObjectURL(image);

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>사진 찍기</button>
      {image && <img src={getImageUrl()} />}
      <button
        onClick={() => {
          console.log(postImage(image));
        }}
      >
        다음
      </button>
    </div>
  );
};

export default CameraCapture;
