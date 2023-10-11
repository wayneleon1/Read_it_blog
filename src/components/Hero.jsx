import hero from "../Images/Hero_image.jpg";
export default function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-image">
          <img src={hero} alt="background image" />
        </div>
      </div>
    </>
  );
}
