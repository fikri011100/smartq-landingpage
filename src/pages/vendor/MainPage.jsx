import React from 'react'
import Dashboard from './Dashboard'
import {Route,Switch,Router} from 'react-router-dom'
// import DrawerBar from './../../components/Drawer'

const routes = [
  {
    path: "/Dashboard",
    exact: true,
    component: () => <Dashboard />,
    tittle: "Dashboard",
  },
  {
    path: "/Antrian",
    exact: true,
    component: () => <Dashboard />,
    tittle: "Antrian",
  },
  {
    path: "/Pegawai",
    exact: true,
    component: () => <Dashboard />,
    tittle: "Pegawai",
  },
  {
    path: "/Setelan",
    exact: true,
    component: () => <Dashboard />,
    tittle: "Setelan",
  }
];

export default function MainPage (){
    return (
      <Switch>
        <div>
          {/* <DrawerBar /> */}
          <div className="MainPage">
            {/* Bagian utama di aplikasi */}

            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.component />}
              />
            ))}
          </div>
        </div>
      </Switch>
    );
}