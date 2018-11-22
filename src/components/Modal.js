import React from "react";
import { Link } from "react-router-dom";
import CommentBox from "../components/CommentBox";
import Spinner from "../components/Spinner";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      likes: 121,
      following: 723,
      followers: 4343,
      isFollow: false,
      isLiked: false,
      isShared: false,
      randomUser: null
    };
  }

  follow = () => {
    const { isFollow, followers } = this.state;
    if (isFollow) {
      this.setState({
        followers: followers - 1,
        isFollow: false
      });
    } else {
      this.setState({
        followers: followers + 1,
        isFollow: true
      });
    }
  };

  like = () => {
    const { isLiked } = this.state;
    if (isLiked) {
      this.setState({
        likes: this.state.likes - 1,
        isLiked: false
      });
    } else {
      this.setState({
        likes: this.state.likes + 1,
        isLiked: true
      });
    }
  };

  share = () => {
    this.setState({
      isShared: !this.state.isShared
    });
  };

  componentDidMount() {
    this.props.users.map(user =>
      user.login.username === this.props.match.params.id
        ? this.setState({
            user
          })
        : null
    );

    if (this.state.user !== this.props.users[0]) {
      this.setState({ randomUser: this.props.users[0] });
    }
  }

  render() {
    const {
      user,
      likes,
      following,
      followers,
      isFollow,
      isLiked,
      isShared,
      randomUser
    } = this.state;

    if (user) {
      return (
        <div className="wrapper" onClick={this.closeModal}>
          <div className="modal">
            <div className="profile">
              <div className="profile__header">
                <div className={isShared ? "display-share" : "no-share"}>
                  http://localhost:3000{this.props.match.url}
                </div>
                <Link
                  to={{
                    pathname: `/`
                  }}
                >
                  <i className="fas fa-times-circle close-position" />
                </Link>
                <div className="profile__picture">
                  <img src={user.picture.medium} alt={user.name.last} />
                </div>

                <div className="profile__info">
                  <div className="profile__identity">
                    <div className="profile__name">
                      <div className="profile--capital">{user.name.first}</div>{" "}
                      <span> </span>
                      <div className="profile--capital">{user.name.last}</div>
                    </div>
                    <i
                      className={
                        !isLiked
                          ? "far fa-heart unliked heart-position "
                          : "fas fa-heart liked heart-position "
                      }
                      onClick={this.like}
                    />
                  </div>

                  <div className="profile__location">
                    <div className="profile--capital">{user.location.city}</div>
                    ,
                    <div className="profile--capital">
                      {user.location.state}
                    </div>
                  </div>
                </div>
                <div>
                  <i
                    className="fas fa-share-square share-position"
                    onClick={this.share}
                  />
                </div>
              </div>
              <div className="profile__stats">
                <div className="profile__stat stat-likes">
                  <span className="profile__numbers">{likes}</span>
                  <span className="profile__statname">Likes</span>
                </div>
                <div className="profile__separator" />
                <div className="profile__stat">
                  <span className="profile__numbers">{following}</span>
                  <span className="profile__statname">Following </span>
                </div>
                <div className="profile__separator" />
                <div className="profile__stat">
                  <span className="profile__numbers">{followers}</span>
                  <span className="profile__statname">Followers </span>
                </div>

                <div onClick={this.follow} className="btn">
                  {isFollow ? "UNFOLLOW" : "FOLLOW"}
                </div>
              </div>
            </div>
            <CommentBox randomUser={randomUser} />
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
export default Modal;
