import Home from '../pages/Home'
import dashboard from '../pages/dashboard'
import about from '../pages/about'
import contact from '../pages/contact'


interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected: boolean
}

const routes: RouteType[]=[
    {
      path:"",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/dashboard",
      component: dashboard,
      name: "dashboard",
      protected: true,
    },
    {
      path: "/about",
      component: about,
      name: "about",
      protected: false,
    },
    {
      path:"/contact",
      component: contact,
      name: "contact",
      protected: false,
    },
  ];




export default routes