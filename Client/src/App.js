import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import QuizApp from './question/QuizApp';
import QuestionAnswer from './questionAnswer/questionAnswer'
import Landing from './landing/landing'
import NextResult from './question/NextResult';
import MedicalAnswerPage from './questionAnswer/MedicalAnswerPage';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />}/>
        <Route exact path="/home" element={<QuestionAnswer />}/>
        <Route exact path="//medical-question" element={<MedicalAnswerPage />}/>
      </Routes>
    </Router>
  );
}

export default App;


// import './App.css';
// import { useState } from 'react'; // Add this
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import io from 'socket.io-client'; // Add this
// import Home from './pages/home';

// const socket = io.connect('http://localhost:4000'); // Add this -- our server will run on port 4000, so we connect to it from here

// function App() {
//   const [username, setUsername] = useState(''); // Add this
//   const [room, setRoom] = useState(''); // Add this

//   return (
//     <Router>
//       <div className='App'>
//         <Routes>
//           <Route
//             path='/'
//             element={
//               <Home
//                 username={username} // Add this
//                 setUsername={setUsername} // Add this
//                 room={room} // Add this
//                 setRoom={setRoom} // Add this
//                 socket={socket} // Add this
//               />
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;