import React from 'react';
import ReactDOM from 'react-dom/client';
import SingleComment from './SingleComment';
import Profile1 from './img/persona1.jpg';
import Profile2 from './img/persona2.jpg';
import Profile3 from './img/persona3.jpg';
import UserCard from './UserCard';

function App() {
  return (
    <div className="ui comments">
      <UserCard>
        <SingleComment
          name="Sarah"
          date="Today 5:00 pm"
          text="It is amazing"
          picture={Profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Lucas"
          date="Today 6:00 pm"
          text="Coffee with milk"
          picture={Profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Chiqui"
          date="Today 7:00 pm"
          text="A ticket to train"
          picture={Profile3}
        />
      </UserCard>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
