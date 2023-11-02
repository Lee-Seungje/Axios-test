"use client";

import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { useState } from "react";
import { postImage } from "api/postImage";
import { useImageUrlState } from "stores";

const CameraCapture = ({ goNext, setFaces, goPrev }) => {
  const [image, setImage] = useState(null);
  const { setImageUrl } = useImageUrlState();

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

  const postPersonImage = async () => {
    const { faces } = await postImage(image);
    setFaces(faces);
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button
        className="ease-in-out duration-200	hover:bg-blue-600 bg-blue-500 w-custom h-14 text-xl absolute bottom-28 rounded-xl"
        onClick={capture}
      >
        사진 찍기
      </button>
      {image && <img src={getImageUrl()} />}
      <div className="absolute bottom-2 flex w-custom justify-between	">
        <button
          className="ease-in-out duration-200	hover:bg-blue-600 mb-8 bg-blue-500 w-60 rounded-xl h-14 text-xl "
          onClick={goPrev}
        >
          이전
        </button>
        <button
          className="ease-in-out duration-200	hover:bg-blue-600 mb-8 bg-blue-500 w-60 rounded-xl h-14 text-xl "
          onClick={() => {
            setImageUrl(getImageUrl());
            postPersonImage();
            goNext();
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default CameraCapture;
