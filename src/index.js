import ReactDom from "react-dom";
import {Router, Route, Switch} from "react-router-dom";
import Porfolio from "./components/portfolio";
import {createBrowserHistory} from "history"
import NotFound from "./components/notfound";
import Landingpage from "./components/layout";
import "./static/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import 'animate.css/animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const history = createBrowserHistory();

function App (){
    return(
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Landingpage}/>
                    <Route path="/portfolio" component={Porfolio} />
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    )
};

ReactDom.render(
    <App/>,
    document.getElementById("root")
)

AOS.init();