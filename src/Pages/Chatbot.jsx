import {useState} from 'react'
import Remi from '../../public/Assets/Images/smiling-customer-service-agent.jpg'
import ChatIcon from '../../public/Assets/Images/chat-icon.png'
import '../Css/chatbot.css'

function Chatbot() {
    const [showChatbot, setShowChatbot] = useState(false)
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
    
    const toggleVisibilty = () => {
        setShowChatbot(prev => !prev)
    }

  const sendMessage = async() => {
    if (userInput.trim() === '') return;

    setMessages(prevMessages => [
      ...prevMessages,
      { text: userInput, from: 'user' }
    ]);

      setTimeout(() => {
      setMessages(prev => [...prev, { text: `You said: "${userInput}"`, from: 'bot' }]);
    }, 1000);

    // uncomment this once we have the endpoint

    // if(userInput){
    //     try {
    //         const response = await fetch('http://localhost:5000/api/chat', {
    //               method:'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({input: userInput})
    //         })

    //         if(response.ok){
    //             const res = await response.json()
    //             setMessages(prev =>  (
    //                 [...prev, {
    //                     text: res.message,
    //                     from: "bot"
    //                 }]
    //             ))
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         setMessages((prev) => ([
    //             ...prev, {
    //                 userInput: res.message,
    //                 user:"bot"
    //             }
    //         ]))
    //     }
    // }


    setUserInput('');
    // Optional: add bot response logic here
  };

  const message =  messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.from === 'user' ? 'user-message' : 'bot-message'}`}>
                {msg.text}
              </div>
            ))

  const handleKey = (e) => {
    if(e.key === "Enter") {
        sendMessage()
    }
  }

  return (
      <section className="chatbot-container ">
      {showChatbot && <div id="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <img src={Remi} alt="Remi Avatar" />
              <div className="chatbot-header-text">
                <h1>Remi (PROPMATE Chat Assistant)</h1>
                <p>Online</p>
              </div>
            </div>
            <button className="chatbot-close-button" onClick={toggleVisibilty}>X</button>
            {/* <button className="chatbot-close-button" onClick={closeChatbot}>X</button> */}
          </div>
          <div className="chatbot-msg-container" id="chatbot-msg-container">
           {message}
          </div>
          <div className="chatbot-input-area">
            <input
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your question..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
      </div>}
      <img src={ChatIcon} alt="chatbot-chat-icon" onClick={toggleVisibilty} className='chatbot-chat-icon' />
    </section>
   
  )
}

export default Chatbot
