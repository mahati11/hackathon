// import React from 'react';
// import './Home.css';
// import { Link } from 'react-router-dom';
// import logo from './logo.png';
// // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';

// // import image1 from './images/1.png';
// // import image2 from './images/2.png';
// // import image3 from './images/3.png';

// function Home() {
//   return (
//     <div>
//       <nav className="navbar">
//       <img src={logo} alt="Logo" className="navbar-logo" />
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link to="/home" className="nav-link">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/about" className="nav-link">
//               About Us
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/events" className="nav-link">
//               Events
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/forums" className="nav-link">
//               Forums
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/login" className="nav-link">
//               Login
//             </Link>
//           </li>
//         </ul>
//       </nav>
      
//       <div className="home-container">
//         <h1>RiseNet</h1>
//         <p>
//         Introducing a software platform that connects small and medium-sized enterprises (SMEs) in underdeveloped regions with the resources and support they need to grow, innovate, and create jobs. This platform aims to address two of the United Nations Sustainable Development Goals - Decent Work and Economic Growth, and Industry, Innovation and Infrastructure.
        
//         </p>
//         <button className="home-button">Learn More</button>
//       </div>
//     </div>
//   );
// }

// export default Home;

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
