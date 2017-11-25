import React from 'react';
import { render } from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter, withRouter, Switch, Route, Link} from 'react-router-dom';

import './app.css';

const Pages = withRouter((props) => {
  console.log(props.location.pathname)
  return (
    <div className="pages">
      <TransitionGroup>
        <CSSTransition
          key={props.location.pathname}
          classNames="example"
          timeout={{ enter: 500, exit: 300 }}>

          <Switch location={props.location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
});

const Home = () => (
  <div key="home" className="card">Home</div>
);

const About = () => (
  <div key="about" className="card">About</div>
);


const Contact = () => (
  <div key="contact" className="card">Contact</div>
);

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="tabs">
            <Link className="tab" to="/">Home</Link>
            <Link className="tab" to="/about">About</Link>
            <Link className="tab" to="/contact">Contact</Link>
          </div>
          <Pages/>
        </div>
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('root'));