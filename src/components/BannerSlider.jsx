const BannerSlider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/f8dZfpx/DALL-E-2024-12-06-13-53-55-A-dynamic-and-vibrant-banner-image-featuring-a-gamer-holding-a-controller.webp"
          className="w-full h-96"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/Cwqgr5C/DALL-E-2024-12-04-19-40-25-A-visually-striking-gaming-banner-for-a-review-application-The-design-inc.webp"
          className="w-full h-96"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/g7FgpxQ/DALL-E-2024-12-04-19-45-29-A-vibrant-and-engaging-banner-image-for-a-gaming-review-application-home.webp"
          className="w-full h-96"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/8D9zzCG/DALL-E-2024-12-05-12-41-42-An-attractive-and-immersive-banner-image-for-a-gaming-review-website-The.webp"
          className="w-full h-96"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
