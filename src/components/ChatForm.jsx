import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { IoSend } from 'react-icons/io5';
import { HiX } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';
import './ChatForm.css';

export default function ChatForm() {
  const { t } = useLanguage();
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', phone: '', message: '' });
  
  const chatBodyRef = useRef(null);

  const questions = [
    { key: 'name', text: t('chat.qName') },
    { key: 'email', text: (data) => t('chat.qEmail').replace('{{name}}', data.name) },
    { key: 'phone', text: (data) => t('chat.qPhone') },
    { key: 'message', text: (data) => t('chat.qIdea') }
  ];

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleStart = () => {
    setStarted(true);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages([{ sender: 'bot', text: questions[0].text }]);
    }, 1000);
  };

  const handleClose = () => {
    setStarted(false);
    setMessages([]);
    setInputValue('');
    setCurrentStep(0);
    setIsTyping(false);
    setUserData({ name: '', email: '', phone: '', message: '' });
  };

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const newMessages = [...messages, { sender: 'user', text: inputValue }];
    setMessages(newMessages);
    
    const currentQuestion = questions[currentStep];
    const newData = { ...userData, [currentQuestion.key]: inputValue };
    setUserData(newData);
    setInputValue('');
    setIsTyping(true);

    const nextStep = currentStep + 1;
    
    setTimeout(() => {
      setIsTyping(false);
      if (nextStep < questions.length) {
        setCurrentStep(nextStep);
        setMessages([...newMessages, { sender: 'bot', text: questions[nextStep].text(newData) }]);
      } else {
        setCurrentStep(nextStep);
        setMessages([...newMessages, { sender: 'bot', text: t('chat.redirecting') }]);
        
        // Redirect to WhatsApp
        setTimeout(() => {
          const text = `Olá, gostaria de solicitar um diagnóstico.\n\n*Nome:* ${newData.name}\n*E-mail:* ${newData.email}\n*Telefone:* ${newData.phone}\n*Projeto:* ${newData.message}`;
          const encodedText = encodeURIComponent(text);
          window.open(`https://wa.me/5517992204822?text=${encodedText}`, '_blank');
        }, 1500);
      }
    }, 1200);
  };

  if (!started) {
    return (
      <div className="chat-initial">
        <div className="chat-initial__icon">
          <img src="/robot.png" alt="Robô" className="chat-robot-img" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn-icons-png.flaticon.com/512/4712/4712035.png"; }} />
        </div>
        <h3 className="chat-initial__title">{t('chat.title')}</h3>
        <p className="chat-initial__desc">
          {t('chat.desc')}
        </p>
        <button className="chat-initial__btn" onClick={handleStart}>
          {t('chat.btn')}
        </button>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-header__info">
          <div className="chat-header__icon">
            <img src="/robot.png" alt="Robô" className="chat-robot-img" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn-icons-png.flaticon.com/512/4712/4712035.png"; }} />
          </div>
          <div>
            <h4 className="chat-header__title">{t('chat.title')}</h4>
            <span className="chat-header__status">
              <span className="chat-header__dot"></span> {t('chat.online')}
            </span>
          </div>
        </div>
        <button className="chat-header__close" onClick={handleClose} aria-label="Close chat">
          <HiX />
        </button>
      </div>

      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((msg, idx) => (
          <motion.div 
            key={idx} 
            className={`chat-msg chat-msg--${msg.sender}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="chat-msg__bubble">
              {msg.text}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <motion.div 
            className="chat-msg chat-msg--bot"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="chat-msg__bubble chat-msg__bubble--typing">
              <span></span><span></span><span></span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="chat-footer">
        <form onSubmit={handleSend} className="chat-input-wrapper">
          <input 
            type="text" 
            className="chat-input" 
            placeholder={currentStep >= questions.length ? t('chat.finished') : t('chat.placeholder')}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isTyping || currentStep >= questions.length}
          />
          <button 
            type="submit" 
            className="chat-send-btn"
            disabled={!inputValue.trim() || isTyping || currentStep >= questions.length}
          >
            <IoSend />
          </button>
        </form>
      </div>
    </div>
  );
}
