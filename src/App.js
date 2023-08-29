import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form id="search-form">
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="ENTER A CITY"
                  id="search-text-input"
                />
              </div>
              <div className="col-4">
                <input type="submit" value="search!" id="search-button" />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-6" id="left-sided-information">
              <div id="temperature-color">
                <h1>Warsaw</h1>
                <p id="date"></p>
                <hr />
                <h2>10</h2>
                <span className="units">°C</span>
              </div>
              <div id="description-color">
                <ul>
                  <li>
                    Humidity: 10<span id="humidity"></span>%
                  </li>
                  <li>
                    Wind: 9<span id="wind"></span> km/h
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6" id="right-sided-information">
              <img id="icon-weather" src="" alt="" />
              <p id="description"></p>
            </div>
          </div>

          <div className="weather-forecast"></div>
        </div>
        <footer>
          <a
            href="https://github.com/Justa91/react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Justyna Krupa / Image by{" "}
          <a
            href="https://www.freepik.com/free-photo/squared-paper-texture_2007563.htm#query=notebook%20paper&position=0&from_view=keyword"
            target="_blank"
            rel="noreferrer"
          >
            Freepik
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
