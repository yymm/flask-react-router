let {Router, Route, Link, browserHistory} = window.ReactRouter;

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/article'>Article</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>About</div>
    );
  }
}

class Article extends React.Component {
  render() {
    return (
      <div>Article</div>
    );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Index}>
      <Route path='about' component={About}/>
      <Route path='article' component={Article}/>
    </Route>
  </Router>
  ), document.getElementById('content')
);
