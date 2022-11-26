import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome dude. Hello world!...
        </p>
        <div>
          <table>
            <tr>
              <td>
                <img style={{ width: 320, height: 230, objectFit: 'contain' }} alt="Beyonce"
                    src="https://imageio.forbes.com/specials-images/imageserve/63596599cf6ced61b908fd10/US-GRAMMY-MUSIC-PRESSROOM/960x0.jpg?format=jpg&width=960" />
              </td>
              <td>
              <img style={{ width: 232, height: 320, objectFit: 'contain' }}
                src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMTgyMTgzOTk3MDg4ODkw/gettyimages-483195065.jpg" alt="shakira" />
          </td>
            </tr>
          </table>
         
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
