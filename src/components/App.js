import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Video from './Video';
import Photo from './Photo';
import Audio from './Audio';
import Design from './Design';
import Writing from './Writing';
import '../../node_modules/bulma/css/bulma.min.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../css/App.css';
import logo from '../assets/logo/kmp_logo_web.png';

class App extends Component {
  state = {
    burgerClicked: false,
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  }

  handleBurgerClick = () => {
    this.setState({
      burgerClicked: !this.state.burgerClicked,
    });
  }

  render() {

    return (
      <Router>
        <div className ="container">

          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img src={logo} alt="Logo" height="50" />
              </a>

              <a role="button" onClick={this.handleBurgerClick} className={ this.state.burgerClicked ? "navbar-burger burger is-active" : "navbar-burger burger" } aria-label="menu" aria-expanded="false" data-target="navMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navMenu" className={ this.state.burgerClicked ? "navbar-menu is-active" : "navbar-menu" }>
              <div className="navbar-start">

                <NavLink exact to={'/'} activeClassName="navbar-item is-active" className="navbar-item">HOME</NavLink>
                <NavLink to={'/video'} activeClassName="navbar-item is-active" className="navbar-item">VIDEO</NavLink>
                <NavLink to={'/photo'} activeClassName="navbar-item is-active" className="navbar-item">PHOTO</NavLink>
                <NavLink to={'/audio'} activeClassName="navbar-item is-active" className="navbar-item">AUDIO</NavLink>
                <NavLink to={'/design'} activeClassName="navbar-item is-active" className="navbar-item">DESIGN</NavLink>
                <NavLink to={'/writing'} activeClassName="navbar-item is-active" className="navbar-item">WRITING</NavLink>

              </div>
            </div>

          </nav>

        </div>


        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/video' component={Video} />
          <Route path='/photo' component={Photo} />
          <Route path='/audio' component={Audio} />
          <Route path='/design' component={Design} />
          <Route path='/writing' component={Writing} />
        </Switch>

      </Router>

    );
  }
}

export default App;
