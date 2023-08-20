import React from 'react';
// import './App.css';
import {  Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Booklist from './components/book/Booklist';
import Navbar from './components/mainnavigation/Navbar';
import Footer from './components/mainnavigation/Footer';
import Favorites from './components/favorites/Favorites';
import BookDetails from './components/book/BookDetails';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';


function App() {
  return (
    
      <div className='App'>
        <Navbar />
        <Routes>
          <Route extract path='/Booklist' element={<Booklist/>} />
          <Route extract path='/Favorites' element={<Favorites/>} />
          <Route extract path='/Login' element={<Login/>} />
          <Route extract path='/Registration' element={<Registration/>} />
          <Route extract path='/Books/:id' element={<BookDetails/>} />
          <Route extract path='/' element={<Home/>} />
  

          
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;













// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import Home from './Home';
// import Booklist from './components/Booklist';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Favorites from './components/Favorites';
// import BookDetails from './components/BookDetails';
// import Login from './components/Login';
// import Registration from './components/Registration';

// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         <Navbar />
//         <Routes>
//           <Route path='/' Component={Home } />
//           <Route path='/Booklist' Component={Booklist} />
//           <Route path='/Favorites' Component={Favorites} />
//           <Route path='/Login' Component={Login} />
//           <Route path='/Registration' Component={Registration} />
//           <Route path='/Book/:id' Component={BookDetails} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }


// export default App;
