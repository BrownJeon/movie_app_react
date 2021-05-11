import React from "react";

function Food({fav, isFav}) {
    return <h1>I {isFav} {fav}</h1>
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Food fav="kimchi" isFav="like" />
      <Food fav="bab" isFav="dont like" />
      <Food fav="ham" isFav="like" />
      <Food fav="ramen" isFav="like" />
      <Food fav="book" isFav="dont like" />
    </div>
  );
}

export default App;