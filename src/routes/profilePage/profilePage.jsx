import Chat from '../../components/chat/Chat';
import List from '../../components/list/List';
import './profilePage.scss';

function ProfilePage() {
  return (
    <div className='profilePage'>
      <div className='details'>
        <div className='wrapper'>
          <div className='title'>
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className='info'>
            <span>
              Avatar:
              <img
                src='https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='user'
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              Email: <b>jhon.d@mail.com</b>
            </span>
          </div>
          <div className='title'>
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <List />
          <List />
          <div className='title'>
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className='chatContainer'>
        <div className='wrapper'>
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
