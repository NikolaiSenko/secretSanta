import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Boxes from "../components/Boxes";
import Box from "../components/Box";

export default function Navigator() {
  const user = {
    name: {
      first: "имя",
      second: "фамилия",
    },
  };

  // const [user, setUser] = useState({});

  // const onUserReceive = (user) => {
  //   console.log('Данные приняты в компоненте Navigator')
  //   setUser(user);
  // }

  return (
    <Router>
      <div>
        {<Navbar user={user} />}

        <Switch>
          <Route path="/boxes/:boxId">
            <Box />
          </Route>

          <Route path="/boxes">
            <Boxes />
          </Route>

          <Route path="/"></Route>

          {/* <Route path="/">
            <Login
              onUserReceive={onUserReceive}
            />
          </Route> */}

          {/* <Route path="/">
            <div>main page</div>
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
