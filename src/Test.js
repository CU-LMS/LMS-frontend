import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import {Widget} from 'rasa-webchat';

const Chatbot = () => {
  const rasaWebchatRef = useRef(null);

  useEffect(() => {
    const initChatbot = async () => {
      const response = await axios.post('http://3.109.95.156:5005/webhooks/rest/webhook', {});
      const { conversation_id } = response.data;
        console.log(response.data)
      rasaWebchatRef.current.send({ action: 'session_request', session_id: conversation_id });
    };

    initChatbot();
  }, []);

  return (
    <Widget
      ref={rasaWebchatRef}
      initPayload="/get_started"
      socketUrl="http://3.109.95.156:5005/webhooks/rest/webhook"
      socketPath="/socket.io/"
      title="Rasa Chatbot"
    />
  );
};

export default Chatbot;
