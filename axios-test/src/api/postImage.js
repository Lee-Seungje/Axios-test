import axios from "axios";

const url = "https://openapi.naver.com/v1/vision/celebrity";

export const postImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image, "image.png");

  const { data } = await axios.post(url, formData, {
    Headers: {
      "Content-Type": "multipart/form-data",
      "X-Naver-Client-Id": process.env.REACT_APP_NAVER_ID,
      "X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SECRET,
    },
  });

  return data;
};
