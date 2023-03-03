import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <h1>RiseNet</h1>
      <h2 className="h2">Small businesses are the backbone of underdeveloped regions, and our software platform is designed to help them thrive.</h2>
      <div className="row">
      <Link to="/signup">
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>
        </Link>
        
        <Link to="/login">
        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
        </Link>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
