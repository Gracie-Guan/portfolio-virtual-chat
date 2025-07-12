import React, { useState, useRef, useEffect } from 'react';
import {
  Grid,
  Column,
  TextArea,
  Button,
  Tag,
  Layer,
  Tile,
  Breadcrumb,
  BreadcrumbItem
} from '@carbon/react';
import { Send } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import './Chat.scss';
import chatbotService from '../services/chatbotService';
import coffeeVideo from '../assets/img/coffeechat.mp4'; // You need to place your 4s video here
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import chatAvatarG from '../assets/img/chat_avatar_g.png';
import chatAvatarU from '../assets/img/chat_avatar_u.png';

const TAGS = [
  'Tell me about Gracie',
  'Fun fact about Gracie',
  'What skills does Gracie have',
  'Gracie\'s work experience',
];

const ChatInput = ({ inputValue, setInputValue, handleKeyPress, handleSendMessage, isLoading }) => (
  <Tile className="hero-chatbox">
    <div className="hero-chatbox-input-row">
      <TextArea
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ask anything about Gracie"
        labelText="Ask anything about Gracie"
        hideLabel
        rows={1}
        className="hero-input"
      />
      <Button
        hasIconOnly
        renderIcon={Send}
        iconDescription="Send message"
        onClick={handleSendMessage}
        disabled={!inputValue.trim()}
        size="md"
        kind="primary"
        className="hero-send"
      />
      {/* Remove the AI typing indicator from here */}
    </div>
    <div className="hero-tags">
      {TAGS.map(tag => (
        <Tag key={tag} type="gray" size="md" onClick={() => setInputValue(tag)} className="hero-tag">{tag}</Tag>
      ))}
    </div>
  </Tile>
);

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const chatMessagesBoxRef = useRef(null);

  useEffect(() => {
    if (chatMessagesBoxRef.current) {
      chatMessagesBoxRef.current.scrollTop = chatMessagesBoxRef.current.scrollHeight;
    }
  }, [messages]);

  // Load Calendly script on mount
  useEffect(() => {
    const scriptId = 'calendly-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    if (!chatStarted) setChatStarted(true);

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await chatbotService.generateResponse(userMessage.content);
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: response.content,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: "I'm sorry, I'm having trouble processing your request right now. Please try again or schedule a meeting to discuss this further.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // AI typing indicator
  const AITypingIndicator = () => (
    <div className="ai-typing-indicator">
      <span className="ai-typing-dot"></span>
      <span className="ai-typing-dot"></span>
      <span className="ai-typing-dot"></span>
    </div>
  );

  // Hero layout before chat starts
  const renderHero = () => (
    <div className="chat-hero">
      <Grid fullWidth>
        <Column lg={4} md={4} sm={4} className="hero-title-col">
          <div className="hero-title left">
            VIRTUAL<br />COFFEE<br />CHAT
          </div>
        </Column>
        <Column lg={8} md={8} sm={4} className="hero-video-col">
          <video
            src={coffeeVideo}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          />
        </Column>
        <Column lg={4} md={4} sm={4} className="hero-title-col">
          <div className="hero-title-right">
            WITH<br />GRACIE
          </div>
        </Column>
      </Grid>
      <Grid fullWidth className="hero-chatbox-row">
        <Column lg={{ span: 14, offset: 1 }} md={8} sm={4}>
          <ChatInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleKeyPress={handleKeyPress}
            handleSendMessage={handleSendMessage}
            isLoading={isLoading}
          />
        </Column>
      </Grid>
    </div>
  );

  // 聊天界面
  const renderChatInterface = () => (
    <div className="chat-hero">
      <Button
        kind="tertiary"
        size="sm"
        className="chat-back-btn"
        onClick={() => setChatStarted(false)}
        style={{ alignSelf: 'flex-start', marginBottom: '1rem' }}
      >
        ← Back
      </Button>
      <div className="chat-messages-box" ref={chatMessagesBoxRef}>
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`message-row ${msg.type}`}
          >
            {msg.type === 'user' ? null : (
              <img className="chat-avatar-img" src={chatAvatarG} alt="Gracie avatar" />
            )}
            <div className={`message ${msg.type}`}>{msg.content}
              <div className="message-timestamp">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
            {msg.type === 'user' ? (
              <img className="chat-avatar-img" src={chatAvatarU} alt="User avatar" />
            ) : null}
          </div>
        ))}
        {isLoading && <AITypingIndicator />}
      </div>
      <Grid fullWidth className="hero-chatbox-row">
        <Column lg={{ span: 14, offset: 1 }} md={8} sm={4}>
          <ChatInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleKeyPress={handleKeyPress}
            handleSendMessage={handleSendMessage}
            isLoading={isLoading}
          />
        </Column>
      </Grid>
    </div>
  );

  // Calendly section
  const renderCalendly = () => (
    <div className="chat-lower-section">
      <h3 className="calendly-title">Fancy A Real Chat?</h3>
      <Layer>
        <div className="calendly-embed-wrapper">
          {/* Calendly inline widget begin */}
          <div className="calendly-inline-widget" data-url="https://calendly.com/gracie-yy-guan/30min"></div>
          {/* Calendly inline widget end */}
        </div>
      </Layer>
    </div>
  );

  return (
    <div className='chat-page'>
      <Breadcrumb noTrailingSlash aria-label="Page navigation" className='chat-breadcrumb'>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>Chat</BreadcrumbItem>
      </Breadcrumb>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={chatStarted ? 'chat' : 'hero'}
          timeout={400}
          classNames="fade"
        >
          <div>
            {!chatStarted ? renderHero() : null}
            {chatStarted ? renderChatInterface() : null}
          </div>
        </CSSTransition>
      </SwitchTransition>
      {renderCalendly()}
    </div>
  );
}

export default Chat; 