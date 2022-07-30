import axios from "axios";
import { useEffect, useState } from "react";

function useImages() {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const res = await axios.get(
        "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s"
      );
      setImages(res.data.photos.photo);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => getImages, []);
  return { images };
}
export { useImages };
