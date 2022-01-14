import React from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import { ChatContainer, MessageInput } from "@chatscope/chat-ui-kit-react";

function App() {
  return (
    <div className="App">
      <ChatContainer>
        <div>
          <MessageInput />
          <button>Custom button</button>
        </div>
      </ChatContainer>
    </div>
  );
}

export default App;
