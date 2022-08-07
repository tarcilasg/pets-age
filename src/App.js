import Routers from "./routes";
import "./App.css";

function App() {
  return (
    <div
      /* className="waveWrapper waveAnimation" */
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(wave-haikei_orange.svg)`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="waveWrapperInner bgTop">
        <div
          className="wave waveTop"
          style={{
            backgroundImage: `url(http://front-end-noobs.com/jecko/img/wave-top.png)`,
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgMiddle">
        <div
          className="wave waveMiddle"
          style={{
            backgroundImage: `url(http://front-end-noobs.com/jecko/img/wave-mid.png)`,
          }}
        ></div>
      </div>
      <div className="waveWrapperInner bgBottom">
        <div
          className="wave waveBottom"
          style={{
            backgroundImage: `url(http://front-end-noobs.com/jecko/img/wave-bot.png)`,
          }}
        ></div>
      </div> */}
      <Routers />
    </div>
  );
}
export default App;
