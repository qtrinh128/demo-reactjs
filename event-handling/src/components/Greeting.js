import React, { Component } from 'react';
import UserGreeting from './UserGreeting';
import UserGreeting from './GuestGreeting';
class Greeting extends Component {
    render() {
        function Greeting(props) {
            const isLoggedIn = props.isLoggedIn;
            if (isLoggedIn) {
                return <UserGreeting />;
            }
            return <GuestGreeting />;
        }
    }
}

export default Greeting;




