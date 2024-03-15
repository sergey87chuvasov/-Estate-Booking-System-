import './filter.scss';

function Filter() {
  return (
    <div className='filter'>
      <h1>
        Search results for <b>London</b>
      </h1>
      <div className='top'>
        <div className='item'>
          <label htmlFor='city'>Location</label>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='City Location'
          />
        </div>
      </div>
      <div className='bottom'>
        <div className='item'>
          <label htmlFor='city'>Location</label>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='City Location'
          />
        </div>
        <div className='item'>
          <label htmlFor='city'>Location</label>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='City Location'
          />
        </div>
        <div className='item'>
          <label htmlFor='city'>Location</label>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='City Location'
          />
        </div>
        <div className='item'>
          <label htmlFor='city'>Location</label>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='City Location'
          />
        </div>
        <div className='item'>
          <label htmlFor='city'>Location</label>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='City Location'
          />
        </div>
        <button>
          <img src='/search.png' alt='button' />
        </button>
      </div>
    </div>
  );
}

export default Filter;
