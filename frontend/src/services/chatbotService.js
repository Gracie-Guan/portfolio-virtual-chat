// 优先使用环境变量，便于灵活切换
const API_URL = process.env.REACT_APP_API_URL ||
  (process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://gracie-virtual-chat.onrender.com');

// Initialize session ID once per session
let sessionId = crypto.randomUUID();

const chatbotService = {
  async generateResponse(userInput) {
    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userInput, session_id: sessionId }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return {
        content: data.content,
        confidence: 1.0,
      };
    } catch (error) {
      return {
        content: `Error: ${error.message}`,
        confidence: 0,
      };
    }
  }
};

export default chatbotService;