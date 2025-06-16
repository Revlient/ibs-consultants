import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const initialMessage: Message = {
  type: 'bot',
  content: 'Hello! I\'m your ArchCraft assistant. How can I help you today?'
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInputValue('');

    // Simulate bot response based on keywords
    setTimeout(() => {
      const response = generateResponse(userMessage.toLowerCase());
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const generateResponse = (input: string): string => {
    if (input.includes('services') || input.includes('offer')) {
      return 'We offer a wide range of services including Architectural Design, Interior Design, Construction Management, Sustainable Design, Urban Planning, and Renovation & Restoration. Which service would you like to know more about?';
    }
    if (input.includes('contact') || input.includes('reach')) {
      return 'You can reach us at +1 (555) 123-4567 or email us at info@archcraft.com. Our office is located at 123 Architecture Avenue, Suite 500, San Francisco, CA 94105.';
    }
    if (input.includes('project') || input.includes('portfolio')) {
      return 'We have completed over 250 projects across various categories including hospitals, apartments, houses, and commercial buildings. Would you like to see our portfolio?';
    }
    if (input.includes('about') || input.includes('company')) {
      return 'ArchCraft is a leading architecture and construction firm with 18+ years of experience. We\'re dedicated to creating exceptional spaces that inspire and endure, with a focus on innovative design and sustainable practices.';
    }
    return 'I\'d be happy to help you with information about our architectural and construction services. What would you like to know about specifically?';
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-colors duration-300"
          aria-label="Open chat"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      ) : (
        <div className={`bg-white rounded-lg shadow-xl w-80 transition-all duration-300 ${isMinimized ? 'h-14' : 'h-[500px]'}`}>
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              <span className="font-medium">ArchCraft Assistant</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-blue-700 rounded p-1 transition-colors duration-300"
                aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
              >
                {isMinimized ? (
                  <Maximize2 className="h-4 w-4" />
                ) : (
                  <Minimize2 className="h-4 w-4" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-blue-700 rounded p-1 transition-colors duration-300"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          {!isMinimized && (
            <>
              <div className="p-4 h-[380px] overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <div className="border-t p-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;