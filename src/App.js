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
import AddANewService from "./component/AddANewService/AddANewService";
import MangeAllBooking from "./component/ManageAllBooking/MangeAllBooking";
import ChangeBookingStatus from "./component/ManageAllBooking/ChangeBookingStatus";
import PrivetRouter from "./component/PrivetRouter/PrivetRouter";

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
            <PrivetRouter path="/myBookings">
              <MyBooking></MyBooking>
            </PrivetRouter>
            <PrivetRouter path="/manageAllBooking">
              <MangeAllBooking></MangeAllBooking>
            </PrivetRouter>
            <PrivetRouter path="/addNewService">
              <AddANewService></AddANewService>
            </PrivetRouter>
            <PrivetRouter path="/allBooking/:id">
              <ChangeBookingStatus></ChangeBookingStatus>
            </PrivetRouter>

            <PrivetRouter  path="/service/:id">
              <BookingConfirm></BookingConfirm>
            </PrivetRouter>
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
