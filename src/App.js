import "./styles/root.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LandingPage from "./pages/landing/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/breakpoints.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/test" exact>
            <p style={{ flex: 1 }}>Testing this</p>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
