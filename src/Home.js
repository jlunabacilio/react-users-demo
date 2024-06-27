import React from 'react';

function Home() {
    return (
        <div className="container">
            <h1>Welcome to the User Management app</h1>
            <p> * Click <a href="/users">here</a> if you want to see the full list of Users. </p>
            <p> * New user on board? Please add it <a href="/newuser">here</a>! </p>
            <p> * Is not the correct User data? Update it <a href="/updateuser">here</a>! </p>
            <p> * Do you need to remove a User? Delete <a href="/deleteuser">it!</a></p>
            <p>Also, entire menu is always available at the top</p>
            <a href="/users" className="button">Users</a>
        </div>
    );
}

export default Home;
