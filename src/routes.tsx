import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Hoge } from "./components/Hoge";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <p>About</p>
          <Link to="/">Home</Link>
        </Route>
        <Route path="/">
          <p>Home</p>
          <Hoge/>
          <Link to="/about">About</Link>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes