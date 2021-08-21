import './Intro.css';

function Intro() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-title">
            Climate Change Visualization
          </div>
        </div>
      </nav>
      <p className="quote">
        We cannot burn our way to the future. We cannot pretend the danger does not exist —
        or dismiss it because it affects someone else.
      </p>
      <p className="quote-author">
        - Ban Ki-moon
      </p>
    </div>
  );
}

export default Intro;
