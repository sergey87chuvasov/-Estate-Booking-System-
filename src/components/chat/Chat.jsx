import { useState } from 'react';
import './chat.scss';

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className='chat'>
      <div className='messages'>
        <h1>Messages</h1>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='user'
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet elit...</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='user'
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet elit...</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='user'
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet elit...</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='user'
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet elit...</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='user'
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet elit...</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='user'
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet elit...</p>
        </div>
        <div className='message'>
          <img
            src='https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='user'
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit, amet elit...</p>
        </div>
      </div>
      {chat && (
        <div className='chatBox'>
          <div className='top'>
            <div className='user'>
              <img
                src='https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='user'
              />
              Jhon Doe
            </div>
            <span className='close' onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className='center'>
            <div className='chatMessage'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage own'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage own'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage own'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage own'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className='bottom'>
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
