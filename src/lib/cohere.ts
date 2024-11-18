import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
  token: import.meta.env.VITE_COHERE_API_KEY || '',
});

interface ChatHistory {
  role: string;
  message: string;
}

export const chat = async (message: string, chatHistory: ChatHistory[]) => {
  if (!import.meta.env.VITE_COHERE_API_KEY) {
    throw new Error('Cohere API key is not set');
  }

  try {
    const response = await cohere.chat({
      model: 'command-r-08-2024',
      message,
      temperature: 0.3,
      chatHistory,
      prompt_truncation: 'AUTO',
      stream: false,
      connectors: [{ id: 'web-search' }],
    });

    return response;
  } catch (error) {
    console.error('Error chatting with Cohere:', error);
    throw error;
  }
};