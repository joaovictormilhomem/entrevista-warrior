import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Questions from "./pages/Questions";
import SelectAmount from "./pages/SelectAmount";
import './App.css'
import Report from "./pages/Report";

function App() {
  const [amount, setAmount] = useState(true);

  return (
    <Router>
      <Switch>

        <Route exact path="/" >
          <SelectAmount setAmount={setAmount}/>
        </Route>

        <Route exact path="/questions">
          {amount ? <Questions amount={amount} /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/report">
          <Report />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
