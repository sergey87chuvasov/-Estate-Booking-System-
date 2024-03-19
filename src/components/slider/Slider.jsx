import './slider.scss';

function Slider({ images }) {
  return (
    <div className='slider'>
      <div className='fullSlider'>
        <div className='arrow'>
          <img src='/arrow.png' alt='arrow' />
        </div>
        <div className='imgContainer'>
          <img src={images[0]} alt='img' />
        </div>
        <div className='arrow'>
          <img src='/arrow.png' alt='arrow' className='right' />
        </div>
        <div className='close'>X</div>
      </div>
      <div className='bigImage'>
        <img src={images[0]} alt='img' />
      </div>
      <div className='smallImages'>
        {images.slice(1).map((image, index) => (
          <img src={image} alt='img' key={index} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
