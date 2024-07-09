
import './App.css';
import datainfo from './data/db.json';
import MainBanner from './Banner.js';

function App() {
  return (
    <div className="App">
      <ul>
        {
          datainfo["gnb"].map((v, i) => <li><a href={v.href}>{v.atext}</a></li>)
        }
      </ul>
      <MainBanner></MainBanner>
    </div>
  );
}

export default App;
