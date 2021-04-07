import "./styles/root.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LandingPage from "./pages/landing/landing";
import OffersPage from "./pages/offers/offers";
import ResultsPage from "./pages/results/results";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/globals.css";
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
          <Route path="/offers/all/page=:page" exact>
            <OffersPage />
          </Route>
          <Route path="/offers/filter/page=:page&lower=:lower&higher=:higher" exact>
            <ResultsPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
