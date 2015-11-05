const React = require('react');
const ThreadItem = require('./ThreadItem');
const MessageItem = require('./MessageItem');
const initialState = {
  account: {
    name:'Wernerway',
    profilePic:'http://lorempixel.com/50/50/people/6'
  },
  newMessage: '',
  threads: [
    {
      target: {
        name: 'Elsa',
        profilePic: 'http://lorempixel.com/50/50/people/1'
      },
      messages: [
        { fromMe:false, text: '對啊', time: '12:27', profilePic: 'http://lorempixel.com/50/50/people/1' },
        { fromMe:false, text: '試著', time: '12:27' , profilePic: 'http://lorempixel.com/50/50/people/1' },
        { fromMe:false, text: '靠左邊嘛', time: '12:27' , profilePic: 'http://lorempixel.com/50/50/people/1' },
        { fromMe:true, text: '換我了', time: '12:27' , profilePic: 'http://lorempixel.com/50/50/people/1' },
        { fromMe:true, text: '有看到嗎', time: '12:27' , profilePic: 'http://lorempixel.com/50/50/people/1' },
      ]
    },
    {
      target: {
        name: 'Katharine',
        profilePic: 'http://lorempixel.com/50/50/people/9'
      },
      messages: [
        { fromMe:false, text: '對啊', time: '12:27' ,profilePic: 'http://lorempixel.com/50/50/people/9'},
      ]
    },
    {
      target: {
        name: 'Marshall',
        profilePic: 'http://lorempixel.com/50/50/people/7'
      },
      messages: [
        { fromMe:false, text: '對啊', time: '12:27',profilePic: 'http://lorempixel.com/50/50/people/7' },
      ]
    }
  ],
  currentIndex: 0
};


// ChatApp: 原本的 HTML
class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleThreadItemClick(index) {
    this.setState({
      currentIndex: index
    });
  }

  handleNewMessageChange(event) {
    this.setState({
      newMessage: event.target.value
    })
  }

  handleInputKeyDown(event) {
    const inputValue = event.target.value;
    if (event.keyCode == 13 && inputValue !== '') {
      const { newMessage, threads, currentIndex } = this.state;
      const now = new Date();
      threads[currentIndex].messages.push({
        fromMe: true,
        text: newMessage,
        time: `${now.getHours()}:${now.getMinutes()}`
      });
      // 新增 message 並清掉 input
      this.setState({
        newMessage: '',
        threads: threads
      });
    }
  }

  renderThreadItem(thread, i) {
    const { target, messages } = thread;
    const lastMessage = messages[messages.length - 1];
    return (
      <ThreadItem
        key={i}
        src={target.profilePic}
        name={target.name}
        content={lastMessage.text}
        time={lastMessage.time}
        onClick={this.handleThreadItemClick.bind(this, i)}
      />
    );
  }

  renderMessageItem(msg, i) {
    const {account}=this.state;
    var  tmp = account.profilePic;
    return (
      <MessageItem
        key={i}
        fromMe={msg.fromMe}
        pic ={tmp}
        text={msg.text}
        time={msg.time}
        profilePic={msg.profilePic}
      />
    );
  }

  render() {
    const { newMessage, threads, currentIndex } = this.state;
    const targetThread = threads[currentIndex];
    const targetName = targetThread.target.name;
    const messages = targetThread.messages;
    return (
          <div className = "chatapp row">
            <div className = "chat-app-left col-sm-3">
              <div className="left-picture">
                <h2 className="user-name" id="user-name"></h2>
              </div>
              <div className = "left-heading">
                <div className="col-sm-6 col-sm-6-no-padding list-tag tag-selected">
                  <h3>Messages</h3>
                </div>
                <div className="col-sm-6 col-sm-6-no-padding list-tag tag-unselected">
                  <h3>Users</h3>
                </div>
              </div>
              <div className="left-list">
                {threads.map(this.renderThreadItem, this)}
              </div>
            </div>
            <div className = "chat-app-right col-sm-8">
              <div className="right-heading">
                <div className="chat-name"></div>
              </div>
              <div className="message-list">
                {messages.map(this.renderMessageItem, this)}
              </div>
              <div className="message-footer">
                <input className="message-input" type="text" value={newMessage}
                       onChange={this.handleNewMessageChange.bind(this)}
                       onKeyDown={this.handleInputKeyDown.bind(this)}/>
                </div>
              </div>
            </div>
    );
  }
}

module.exports = ChatApp;
