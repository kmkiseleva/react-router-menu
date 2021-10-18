import { Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import DriftPage from "./pages/DriftPage";
import TimeAttackPage from "./pages/TimeAttackPage";
import ForzaPage from "./pages/ForzaPage";

export default function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </Switch>
      </div>
    </div>
  );
}
