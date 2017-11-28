import React, { Component } from 'react';

class Header extends Component {
  render() {
    var greeting = this.props.greeting
    return (
      <div>
        <h1> Good Robot</h1>
        <h2> I hear you saying {greeting}. Is that correct? </h2>
        <h1> Bad Robot</h1>
        <h2> I hear you saying {greeting.repeat(greeting.length)}. Is that correct? </h2>
        <h1> Kanyebot</h1>
        <h2> Im gonna let you finish but Beyonce is {greeting}.  </h2>
      </div>
    );
  }
}

export default Header;
