# VectorShift AI Integration Guide

## AI-Powered CV Chatbot Setup

This guide explains how to integrate VectorShift AI with your portfolio chatbot to create a fully AI-powered CV experience.

## 🚀 Quick Start

Your portfolio now includes a custom chatbot component (`/components/chatbot.tsx`) that can be enhanced with VectorShift AI for intelligent CV interactions.

## 📋 Prerequisites

1. **VectorShift Account**: Sign up at [vectorshift.ai](https://vectorshift.ai)
2. **Knowledge Base**: Prepare your CV/resume data
3. **API Access**: Get your VectorShift API credentials

## 🔧 VectorShift Setup Steps

### Step 1: Create Your Knowledge Base

1. **Login to VectorShift**: Go to [vectorshift.ai](https://vectorshift.ai) and sign in
2. **Create Knowledge Base**: 
   - Upload your resume/CV (PDF format)
   - Add project descriptions and details
   - Include skills and experience information
   - Add any additional portfolio content

### Step 2: Build Your Chatbot Pipeline

1. **Navigate to Pipelines**: In VectorShift dashboard
2. **Use Template**: Select "Search Knowledge Base" template
3. **Configure Pipeline**:
   ```
   Input Node → Knowledge Base Search → LLM Response → Output Node
   ```
4. **Customize Prompt**: <mcreference link="https://vectorshift.ai/platform/chat" index="3">3</mcreference>
   ```
   You are Ahmed Marwan's AI assistant. Answer questions about his:
   - Professional experience and skills
   - Projects and achievements
   - Education and certifications
   - Contact information
   
   Provide helpful, accurate responses based on the knowledge base.
   If you don't know something, suggest contacting Ahmed directly.
   ```

### Step 3: Deploy and Get API Endpoint

1. **Test Pipeline**: Ensure it works correctly
2. **Deploy**: Click "Deploy" to create API endpoint
3. **Get URL**: Copy the generated API endpoint URL
4. **Configure Authentication**: Note any required headers/keys

## 🔌 Integration with Portfolio

### Method 1: API Integration (Recommended)

Update the chatbot component with your VectorShift API:

```typescript
// In components/chatbot.tsx
const VECTORSHIFT_API_URL = 'your-vectorshift-api-endpoint'
const API_KEY = 'your-api-key' // Store in environment variables

// Update the handleSendMessage function
const response = await fetch(VECTORSHIFT_API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`, // If required
  },
  body: JSON.stringify({
    query: inputValue,
    // Add other required parameters
  })
})
```

### Method 2: iFrame Embedding

Alternatively, you can embed VectorShift's chatbot directly: <mcreference link="https://vectorshift.ai/platform/chat" index="3">3</mcreference>

```typescript
// Replace the custom chatbot with VectorShift iframe
<iframe
  src="your-vectorshift-chatbot-url"
  width="320"
  height="400"
  frameBorder="0"
  className="rounded-lg shadow-lg"
/>
```

## 🎯 Knowledge Base Content Suggestions

### Essential CV Information to Include:

1. **Professional Summary**
   - Current role and expertise
   - Years of experience
   - Key specializations

2. **Technical Skills**
   - Programming languages
   - Frameworks and libraries
   - Tools and platforms
   - Certifications

3. **Work Experience**
   - Company names and roles
   - Key responsibilities
   - Major achievements
   - Project highlights

4. **Education**
   - Degrees and institutions
   - Relevant coursework
   - Academic achievements

5. **Projects Portfolio**
   - Project descriptions
   - Technologies used
   - Challenges solved
   - Results achieved

6. **Contact & Availability**
   - Preferred contact methods
   - Location/timezone
   - Availability for opportunities

## 🔒 Environment Variables Setup

Create a `.env.local` file in your project root:

```env
# VectorShift Configuration
NEXT_PUBLIC_VECTORSHIFT_API_URL=your-api-endpoint
VECTORSHIFT_API_KEY=your-secret-api-key
```

Update the chatbot component to use these variables:

```typescript
const vectorShiftUrl = process.env.NEXT_PUBLIC_VECTORSHIFT_API_URL
const apiKey = process.env.VECTORSHIFT_API_KEY
```

## 🎨 Customization Options

### Chatbot Appearance
- **Branding**: Customize colors to match your portfolio
- **Welcome Message**: Set personalized greeting
- **Suggested Prompts**: Add helpful starter questions

### Example Starter Questions:
- "Tell me about Ahmed's experience with React"
- "What projects has Ahmed worked on?"
- "How can I contact Ahmed for opportunities?"
- "What are Ahmed's key technical skills?"

## 📊 Analytics and Monitoring

VectorShift provides analytics for:
- **Query Volume**: Track chatbot usage
- **Popular Questions**: Understand visitor interests
- **Response Quality**: Monitor AI performance
- **User Engagement**: Measure interaction patterns

## 🚀 Advanced Features

### Multi-language Support
- Configure responses in multiple languages
- Detect user language preferences

### Integration with CRM
- Connect to lead management systems
- Track potential employer interactions

### Voice Integration
- Add voice input/output capabilities
- Enhance accessibility

## 🔧 Troubleshooting

### Common Issues:

1. **API Connection Errors**
   - Verify API endpoint URL
   - Check authentication credentials
   - Ensure CORS settings allow your domain

2. **Poor Response Quality**
   - Review knowledge base content
   - Improve prompt engineering
   - Add more specific training data

3. **Slow Response Times**
   - Optimize knowledge base size
   - Consider caching strategies
   - Monitor API rate limits

## 📞 Support

- **VectorShift Documentation**: [docs.vectorshift.ai](https://docs.vectorshift.ai)
- **Community Support**: VectorShift Discord/Forums
- **Technical Issues**: Contact VectorShift support team

---

**Ready to Deploy?** Once configured, your AI-powered CV chatbot will provide visitors with instant, intelligent responses about your professional background, making your portfolio more interactive and engaging!

**Next Steps:**
1. Set up your VectorShift account
2. Create and populate your knowledge base
3. Configure the API integration
4. Test thoroughly before going live
5. Monitor performance and optimize based on user interactions