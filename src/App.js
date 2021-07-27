import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home1 from "./Components/Home/Home1/Home1";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import OurTeam from "./Components/Pages/OurTeam/OurTeam";
import Pricing from "./Components/Pages/Pricing/Pricing";
import Error from "./Components/Pages/Error/Error";
import Services from "./Components/Pages/Services/Services";
import BlogPage from "./Components/Pages/BlogPage/BlogPage";
import Contact1 from "./Components/Pages/Contact/Contact1/Contact1";
import "react-modal-video/scss/modal-video.scss";
import SingleService from "./Components/Pages/Services/ServicesComp/SingleService";
import SingleBlog from "./Components/Pages/BlogPage/SingleBlog/SingleBlog";
import SingleSubService from "./Components/Pages/Services/ServicesComp/SingleSubService";
import Media_Events from "./Components/Pages/Media_Events/Media_Events";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home1} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/ourTeam" component={OurTeam} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/error" component={Error} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blogs" component={BlogPage} />
          <Route exact path="/singleBlog" component={SingleBlog} />
          <Route exact path="/contact1" component={Contact1} />
          <Route exact path="/media_events" component={Media_Events} />
          <Route exact path="/service/:url" component={SingleService} />
          <Route
            exact
            path="/service/:path/:path"
            component={SingleSubService}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
