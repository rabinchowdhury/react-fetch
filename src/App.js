import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    posts: [ ]
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data  }))

    console.log(this.state.posts)
}

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
        posts.map(post => {
            return (
                <div className="post card" key={post.id} >
                    <div className="card-content">
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="center">No posts yet</div>
    )
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            {postList}
        </div>
    )
  }
}

export default App;
