import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../images/image.png"
import image2 from "../../images/image2.png"

const images = [
  { url: image1 },
  { url: image2 },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1000}
        height={499}
        images={images}
        showBullets={false}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={5}
      />
    </div>
  );
}

export default Slider