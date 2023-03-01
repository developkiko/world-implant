import React, { FC, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import styles from "./Gallery.module.scss";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Heading from "@/components/ui/Heading/Heading";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

//import {images as IMAGES} from "./images/";
//add lightbox from here: https://codesandbox.io/s/long-star-sw28e2

const photos = [
  { src: "/gallery/glr-item1.jpg", width: 1280, height: 960 },
  { src: "/gallery/glr-item2.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item3.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item4.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item5.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item6.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item7.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item8.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item9.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item10.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item11.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item12.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item13.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item14.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item15.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item16.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item17.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item18.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item19.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item20.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item21.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item22.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item23.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item24.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item25.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item26.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item27.jpg", width: 1280, height: 960 },
  { src: "/gallery/glr-item28.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item29.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item30.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item31.jpg", width: 1280, height: 960 },
  { src: "/gallery/glr-item32.jpg", width: 960, height: 1280 },
  { src: "/gallery/glr-item33.jpg", width: 854, height: 740 },
  { src: "/gallery/glr-item34.jpg", width: 854, height: 740 },
  { src: "/gallery/glr-item35.jpg", width: 854, height: 740 },
  { src: "/gallery/glr-item36.jpg", width: 740, height: 854 },
  { src: "/gallery/glr-item37.jpg", width: 854, height: 740 },
  { src: "/gallery/glr-item38.jpg", width: 854, height: 740 },
  { src: "/gallery/glr-item39.jpg", width: 854, height: 740 }
];

const PhotoGallery: FC = () => {
  const [index, setIndex] = useState(-1);
  return (
    <main className={styles.main}>
      <Heading>Наша фото-галерея</Heading>
      <PhotoAlbum layout="rows" photos={photos} onClick={({ index }) => setIndex(index)} />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </main>
  );
};

export default PhotoGallery;
