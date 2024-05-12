import SimpleImageSlider from "react-simple-image-slider";
import pimage from "../../images/shampoo.png"

const images = [
  { url: '../../images/image1.png' },
  { url: pimage },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1000}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={4}
      />
    </div>
  );
}

export default Slider