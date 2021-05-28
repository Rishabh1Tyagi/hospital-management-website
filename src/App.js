import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './menu/Home';
import About from './menu/About';
import Service from './menu/Service';
import Contacts from './menu/Contacts';
import NavBar from './NavigationBar/NavBar';
import Signup from './menu/Signup';

function App()  {
  return (
    <>
     <NavBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/signup"   component={Signup}  />
      <Redirect to="/" />
      </Switch>
    </>
  );
};


export default App;



























// import { Route, Switch, Redirect} from 'react-router-dom';

// import AllQuotes from './pages/AllQuotes';
// import NewQuotes from './pages/NewQuotes';
// import QuotesDetails from './pages/QuotesDetails';
// import NotFound from './pages/NotFound';
// import Quotes from './pages/Quotes';
// import Layout from './components/layout/Layout';

// function App() {
//   return (
//     <Layout>
//      <Switch>
//      <Route path='/' exact>
//        <Redirect to='/quotes'/>
//      </Route>
//        <Route path='/quotes' exact>
//          <AllQuotes/>
//        </Route>
//        <Route path='/quotes/:quoteId'>
//           <QuotesDetails/>
//        </Route>
//        <Route path='/new-quote'>
//           <NewQuotes/>
//        </Route>
//        <Route path='/new-one'>
//          <Quotes/>
//        </Route>
//        <Route path="*">
//           <NotFound />
//        </Route>
//      </Switch>
//      </Layout>    
//   );
// }

// export default App;