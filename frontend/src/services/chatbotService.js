// Determine environment and API URL
const isDevelopment = process.env.NODE_ENV === 'development';
const API_URL = isDevelopment
  ? 'http://localhost:8000/chat'
  : 'https://your-api-domain.com/chat'; // TODO: Replace with actual production URL

// Initialize session ID once per session
let sessionId = crypto.randomUUID();

const chatbotService = {
  async generateResponse(userInput) {
    try {
      const response = await fetch(API_URL, {
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