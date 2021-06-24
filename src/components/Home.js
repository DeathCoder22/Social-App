import React from 'react';
import { PostsList } from './';
import FriendList from './FriendList';

class Home extends React.Component {
  render() {
    const { posts, friends, isLoggedIn } = this.props;
    return (
      <div className="home">
        <PostsList posts={posts} />
        {isLoggedIn && <FriendList friends={friends} />}
      </div>
    );
  }
}

export default Home;
