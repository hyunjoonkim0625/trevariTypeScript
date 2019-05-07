import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./layout/Header/Header";
import MeetingsPage from "./pages/MeetingsPage";
import FaqPage from "./pages/FaqPage";
// import Footer from "./layout/Footer/Footer";
import Footer from "./layout/Footer/Footer";

// fontAwesomeIcons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          {/* 메인 페이지가 없는 관계로 사용자가 접속 시에 바로 meetings 페이지로 redirect 시킵니다 */}
          <Route exact path="/" render={() => <Redirect to="/meetings" />} />
          <Route path="/meetings" component={MeetingsPage} />
          <Route path="/faq" component={FaqPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
