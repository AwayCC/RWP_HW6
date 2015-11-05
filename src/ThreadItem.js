const React = require('react');


class ThreadItem extends React.Component {
  render() {
    const { src, name, content, time, onClick } = this.props;
    return (
      <div className="left-list-item" onClick={onClick}>
        <div className="clearfix">
          <div className="thread-item_left">
            <img className="img-circle img" src={src} />
          </div>
          <div className="thread-item_right">
            <div className="thread-from">
              {name}
            </div>
            <div>
              <span className="thread-content">{content}</span>
            </div>
            <span className="thread-time">{time}</span>
          </div>
        </div>
        </div>
    );
  }
}

module.exports = ThreadItem;

