import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';

function HomePage() {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find Real Estate and Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            minus expedita, quisquam ex delectus, magnam labore consequatur
            ratione nemo iusto ad cum culpa voluptatibus quis. Earum illo
            dolorum maxime officiis.
          </p>
          <SearchBar />
        </div>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='bg' />
      </div>
    </div>
  );
}

export default HomePage;
