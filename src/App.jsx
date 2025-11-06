import { useState } from "react";
import data from "./sport-poll.json";
import "./index.css";

export default function App() {
  const [selectedEvent] = useState(data[0]);
  const [vote, setVote] = useState(null);

  const randomOdds = () => (Math.random() * (4 - 1.2) + 1.2).toFixed(2);
  const odds = {
    home: randomOdds(),
    draw: randomOdds(),
    away: randomOdds(),
  };

  return (
    <div className="poll-container">
      <h1 className="title">Sports Poll</h1>
      <p className="category">
        Kategori: <strong>{selectedEvent.sport}</strong>
      </p>

      <div className="card">
        <h2 className="match">
          {selectedEvent.homeName} vs {selectedEvent.awayName}
        </h2>
        <p className="meta">
          {selectedEvent.group} • {selectedEvent.country} • {selectedEvent.state}
        </p>

        <div className="buttons">
          <button onClick={() => setVote(`${selectedEvent.homeName} vinner`)}>
            {selectedEvent.homeName} ({odds.home})
          </button>
          <button onClick={() => setVote("Oavgjort")}>
            Oavgjort ({odds.draw})
          </button>
          <button onClick={() => setVote(`${selectedEvent.awayName} vinner`)}>
            {selectedEvent.awayName} ({odds.away})
          </button>
        </div>

        {vote && <p className="result">Du röstade på: <strong>{vote}</strong></p>}
      </div>

      <p className="note">Odds slumpas. Röster sparas inte mellan omladdningar.</p>
    </div>
  );
}
