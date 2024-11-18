import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { chat } from '../lib/cohere';

interface Message {
  role: 'user' | 'assistant';
  message: string;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', message: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat(input, messages);
      
      if (response.text) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          message: response.text
        }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        message: 'I apologize, but I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl bg-gray-900/60 backdrop-blur-lg rounded-lg shadow-2xl border border-purple-500/20">
      <div className="h-[500px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-purple-500/20">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-lg ${
                message.role === 'user'
                  ? 'bg-purple-600/20 text-purple-100'
                  : 'bg-teal-600/20 text-teal-100'
              } animate-fadeIn`}
            >
              <p className="text-sm md:text-base whitespace-pre-wrap">{message.message}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-teal-600/20 p-4 rounded-lg">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-purple-500/20">
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Speak to the Oracle..."
            className="flex-1 bg-gray-800/50 text-purple-100 placeholder-purple-400/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-purple-500/20"
          />
          <button
            type="submit"
            className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-100 p-2 rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50"
            disabled={!input.trim() || isLoading}
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  );
}