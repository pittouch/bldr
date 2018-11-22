import React from "react";
import Comment from "../components/Comment";

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi nesciunt delectus perferendis sunt cupiditate iste, modi doloribus impedit odit hic facilis. Repellendus reiciendis animi consequuntur consectetur numquam explicabo quas!",
          date: "18 November 2018 13:30:00 GMT+05:45"
        },

        {
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi nesciunt delectus perferendis sunt cupiditate iste, modi doloribus impedit odit hic facilis.",
          date: "12 novvember 2018 18:30:00 GMT+05:45"
        },

        {
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          date: "20 November 2018 07:30:00 GMT+05:45"
        }
      ],
      hide: true
    };
  }

  sendComment = e => {
    if (e.key === "Enter") {
      const comArray = this.state.comments;
      comArray.push({ content: e.target.value, date: new Date().getTime() });
      this.setState({ comments: comArray });
      e.currentTarget.value = "";
    }
  };

  countDays = date => {
    const now = new Date().getTime();
    const past = new Date(date).getTime();
    const cd = 24 * 60 * 60 * 1000;
    const diff = now - past;
    const res = diff / cd;
    return Math.round(res);
  };

  showComment = () => {
    this.setState({
      hide: !this.state.hide
    });
  };

  sortComments = () => {
    const sortedComments = this.state.comments.sort(function(a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    this.setState({ comments: sortedComments });
  };

  componentDidMount() {
    this.scrollToBottom();
    this.sortComments();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: "instant" });
  }

  render() {
    const { comments, hide } = this.state;
    const { randomUser } = this.props;

    return (
      <div className="comment-box">
        <div className="list-comment">
          {comments.length >= 3 ? (
            <div onClick={this.showComment} className="show-comment">
              {!hide
                ? `Hide comments (${comments.length})`
                : `Show comments (${comments.length})`}
            </div>
          ) : null}
          <div className="list-comment__scroll">
            {comments
              ? comments.map((comment, i) => (
                  <div key={i} className={!hide ? "show" : "hide"}>
                    <Comment
                      comment={comment.content}
                      randomUser={randomUser}
                      date={this.countDays(comment.date)}
                    />
                    <div
                      ref={el => {
                        this.el = el;
                      }}
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
        {!hide ? (
          <input
            onKeyPress={this.sendComment}
            type="text"
            name="post_comment"
            placeholder="Add a comment"
          />
        ) : null}
      </div>
    );
  }
}
export default CommentBox;
