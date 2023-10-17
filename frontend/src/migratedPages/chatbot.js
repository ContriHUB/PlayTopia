
const ChatBot = ()=>{
    

    return (
  <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"/>

  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'/>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.min.css'/>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
  <link rel="stylesheet" href="./chatbot/css/style.css"/>
  <div className="chat">
  <div className="chat-title">
    <h1>Smart BOt</h1>
    <h2>i am customer support chat bot</h2>
    <figure className="avatar">
      <img src="./chatbot/css/bot.png"/></figure>
  </div>
  <div className="messages">
    <div className="messages-content"></div>
    
  </div>
  <form className="message-box" id="mymsg" method="POST">
    <input type="text" id="MSG" name="MSG" className="message-input" placeholder="Type message..."/ >
   
    <i className="fas fa-microphone" id="start-record-btn"></i>
    <button type="submit" className="message-submit">Send</button>
  </form>
  <h3 className="no-browser-support" hidden>Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening This Demo In Google Chrome.</h3>
</div>
<div className="bg"></div>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.concat.min.js'></script>
  <script src='./chatbot/js/index.js'></script>
  </>

    )
}

export default ChatBot

