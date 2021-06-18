import React, { Component } from 'react';

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    console.log('POSTLIST CALLED ::: ', posts);
    return (
      <div>
        <div className="posts-list">
          {/* {posts.map((post) => { */}

          <div className="post-wrapper">
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-pic"
                />
              </div>

              <div>
                <span className="post-author">Atul Saini</span>
                <span className="post-time">a minute ago</span>
              </div>
            </div>

            <div className="post-content">Developing Web Apps</div>
            <div className="post-actions">
              <div className="post-like">
                <img
                  src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                  alt="likes-icon"
                />
                <span>899</span>
              </div>
              <div className="post-comments-icon">
                <img
                  src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                  alt="comments-icon"
                />
                <span>26</span>
              </div>
            </div>
            <div className="post-comment-box">
              <input placeholder="Type a comment" />
            </div>

            <div className="post-comments-list">
              <div className="post-comments-item">
                <div className="post-comment-header">
                  <span className="post-comment-author">Name</span>
                  <span className="post-comment-time">a minute ago</span>
                  <span className="post-comment-likes">32</span>
                </div>

                <div className="post-comment-content">Random Comment</div>
              </div>
            </div>
          </div>

          {/* })} */}
        </div>
      </div>
    );
  }
}

export default PostsList;
