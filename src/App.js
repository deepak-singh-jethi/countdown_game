import Player from "./components/Player.js";
import TimerChallenge from "./components/TimerChallenge.js";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="not easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Hard" targetTime={15} />
      </div>
    </>
  );
}

export default App;
