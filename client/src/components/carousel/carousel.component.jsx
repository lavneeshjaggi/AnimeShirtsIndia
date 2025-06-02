import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./carousel.styles.scss";

var images = [
  {
    id: 1,
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-preview.jpg",
    msg: "Halloween",
  },
  {
    id: 2,
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/985/136/886/building-lights-illustration-romain-trystram-cityscape-hd-wallpaper-preview.jpg",
    msg: "Diwali",
  },
  {
    id: 3,
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/615/294/495/artwork-deer-antlers-forest-wallpaper-preview.jpg",
    msg: "Christamas",
  },
  {
    id: 4,
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/495/241/90/acrylic-texture-design-color-wallpaper-preview.jpg",
    msg: "Holi",
  },
  {
    id: 5,
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/526/765/292/landscape-mosque-architecture-panoramas-wallpaper-preview.jpg",
    msg: "Eid",
  },
  {
    id: 6,
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/526/8/1002/library-interior-interior-design-books-wallpaper-preview.jpg",
    msg: "Back to School",
  },
];

const Carousel = () => {
  const navigate = useNavigate();
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (images.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (images.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="carousel">
      {images.map(({ id, imageUrl, msg }) => (
        <div
          key={id}
          className="slider"
          style={{
            transform: `translateX(${x}%)`,
          }}
        >
          <div
            className="img"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
          <div onClick={() => navigate("/shop")} className="msg">
            <h1 className="title">{msg.toUpperCase()} SALE</h1>
            <h2 className="subtitle">SHOP NOW</h2>
          </div>
        </div>
      ))}
      <button id="left" onClick={goLeft}>
        &lt;
      </button>
      <button id="right" onClick={goRight}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
