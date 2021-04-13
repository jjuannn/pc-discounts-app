import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LandingPage from "./pages/landing/landing";
import OffersPage from "./pages/offers/offers";
import PriceFilterResultsPage from "./pages/priceFilterResults/results";
import TitleFilterResultsPage from "./pages/titleFilterResults/results";
import { CacheContextProvider } from "./context/cacheContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <CacheContextProvider>
            <Route path="/offers/all/page=:page" exact>
              <OffersPage />
            </Route>
            <Route
              path="/offers/filter/page=:page&lower=:lower&higher=:higher"
              exact
            >
              <PriceFilterResultsPage />
            </Route>
            <Route path="/offers/filter/title=:title" exact>
              <TitleFilterResultsPage />
            </Route>
          </CacheContextProvider>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
