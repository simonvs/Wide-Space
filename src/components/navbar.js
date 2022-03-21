import React from 'react';
import logo from '../style/logo.png';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import Welcome from './Welcome';
import About from './About';
import PageNotFound from './PageNotFound';

function Navegation() {
    return (
        <div>
            <Router>
                <nav class="navbar navbar-expand-lg navbar-dark  fixed-top navbar_color">
                    <img src={logo} className="App-logo" alt="logo" href="/" />
                    <a class="navbar-brand name" href="/#">
                        WIDESPACE
        </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item navbar_fonts active">
                                <Link class="nav-link" to="/#">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item navbar_fonts">
                                <a class="nav-link" href="/About">About</a>
                            </li>
                            <li class="nav-item navbar_fonts">
                                <a class="nav-link" href="/#">Pricing</a>
                            </li>
                            <li class="nav-item navbar_fonts">
                                <a class="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Copyraight 2020 </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/About" component={About} />
                </main>
            </Router>
        </div>
    );
}
/*<Route path="/404" component={PageNotFound} />
<Redirect to="/404" />*/

export default Navegation;