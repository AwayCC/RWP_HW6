const React = require('react');


class MessageItem extends React.Component {
  render() {
    const { fromMe, text,time,pic,profilePic } = this.props;
    if (fromMe==true)
    return (
        <div className="message-from-me">
          <div className="clearfix">{text}
            <p className="message-time">{time}</p>
          </div>
          <img className="img-circle img" src={pic} />
        </div>
    );
    else
    return (
        <div className="message-from-other">
          <img className="img-circle img" src={profilePic} />
          <div className="clearfix">{text}
            <p className="message-time">{time}</p>
          </div>
        </div>
    );
  }
}

module.exports = MessageItem;
