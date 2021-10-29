import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Banner from "./component/Home/Banner/Banner";
import Footer from "./component/Home/Footer/Footer";

import Airlines from "./component/Home/Airlines/Airlines";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import ContextCreate from "./component/Context/ContextCreate";
import BookingConfirm from "./component/BookingConfirm/BookingConfirm";
import NotFound from "./component/NotFound/NotFound";
import MyBooking from "./component/MyBooking/MyBooking";

function App() {
  return (
    <div className="App">
      <ContextCreate>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/myBookings">
              <MyBooking></MyBooking>
            </Route>

            <Route path="/service/:id">
              <BookingConfirm></BookingConfirm>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </ContextCreate>
    </div>
  );
}

export default App;
