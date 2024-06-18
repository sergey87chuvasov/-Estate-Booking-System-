import { useContext } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';
import { AuthContext } from '../../context/AuthContect';

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
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
          <div className='boxes'>
            <div className='box'>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>204</h1>
              <h2>Award Gained</h2>
            </div>
            <div className='box'>
              <h1>777+</h1>
              <h2>Properly Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='bg' />
      </div>
    </div>
  );
}

export default HomePage;
