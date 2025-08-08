"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface ChatbotProps {
  vectorShiftUrl?: string
  useIframe?: boolean
  className?: string
}

export function Chatbot({ vectorShiftUrl, useIframe = false, className }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Ahmed's AI assistant. I can help you learn more about his experience, skills, and projects. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // For VectorShift integration, we'll use iframe embedding instead of direct API calls
      // to avoid CORS issues. For now, using enhanced mock responses.
      if (vectorShiftUrl) {
        // Enhanced mock responses that simulate VectorShift AI behavior
        const enhancedMockResponses = {
          'skills': "Ahmed is highly skilled in JavaScript, TypeScript, React, Next.js, Node.js, Python, and AI/ML technologies. He has expertise in cybersecurity, network administration, and modern web development frameworks. His technical stack includes cloud platforms, database management, and API development.",
          'experience': "Ahmed has extensive experience in full-stack development, cybersecurity analysis, and AI integration. He has worked on various projects ranging from web applications to AI-powered solutions, demonstrating proficiency in both frontend and backend technologies.",
          'projects': "Ahmed's portfolio includes this AI-powered portfolio website, cybersecurity tools, web applications with modern frameworks, and AI chatbot integrations. Each project showcases his ability to combine technical expertise with innovative solutions.",
          'contact': "You can reach Ahmed through his LinkedIn profile, GitHub repositories, or via email at ahmedmarwan.biz@gmail.com. He's based in Kuala Lumpur, Malaysia and is available for professional opportunities.",
          'education': "Ahmed is a Network & Cybersecurity Graduate with strong foundations in computer science, networking protocols, security frameworks, and continuous learning in emerging technologies like AI and machine learning.",
          'ai': "Ahmed has integrated AI technologies including this VectorShift-powered chatbot, demonstrating his ability to work with cutting-edge AI platforms and create intelligent user experiences.",
          'cybersecurity': "Ahmed's cybersecurity background includes network security, threat analysis, security protocols, and implementing robust security measures in web applications."
        }

        // Simulate AI processing delay
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Enhanced keyword matching with AI-like responses
        let response = "I'm Ahmed's AI assistant! I can provide detailed information about his technical skills, professional experience, educational background, projects, and how to get in touch. What specific aspect would you like to know more about?"
        
        const query = inputValue.toLowerCase()
        for (const [key, value] of Object.entries(enhancedMockResponses)) {
          if (query.includes(key)) {
            response = value
            break
          }
        }

        // Add contextual responses for common questions
        if (query.includes('hello') || query.includes('hi')) {
          response = "Hello! I'm Ahmed's AI-powered assistant. I'm here to help you learn about his professional background, technical skills, and experience. What would you like to know?"
        } else if (query.includes('help')) {
          response = "I can help you learn about Ahmed's skills, experience, projects, education, or contact information. Just ask me anything about his professional background!"
        }

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: response,
          sender: 'bot',
          timestamp: new Date()
        }

        setMessages(prev => [...prev, botMessage])
      } else {
        // Mock responses for demonstration
        const mockResponses = {
          'skills': "Ahmed is proficient in JavaScript, TypeScript, React, Next.js, Node.js, Python, and various web technologies. He also has experience with AI/ML frameworks and cloud platforms.",
          'experience': "Ahmed has worked on various projects including web applications, AI-powered solutions, and full-stack development. He has experience in both frontend and backend development.",
          'projects': "Some of Ahmed's notable projects include this portfolio website, AI-powered applications, and various web development projects. You can see more details in the projects section above.",
          'contact': "You can reach Ahmed through LinkedIn, GitHub, or via email. All contact information is available in the contact section of this portfolio.",
          'education': "Ahmed has a strong educational background in computer science and continues to learn new technologies through online courses and practical projects."
        }

        // Simple keyword matching for demo
        let response = "I'd be happy to help you learn more about Ahmed! You can ask me about his skills, experience, projects, education, or how to contact him."
        
        const query = inputValue.toLowerCase()
        for (const [key, value] of Object.entries(mockResponses)) {
          if (query.includes(key)) {
            response = value
            break
          }
        }

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: response,
          sender: 'bot',
          timestamp: new Date()
        }

        setMessages(prev => [...prev, botMessage])
      }
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'I apologize, but I encountered an error. Please try again later.',
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className={cn('fixed bottom-4 right-4 z-50', className)}>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-600 hover:bg-blue-700"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-[500px] shadow-2xl border-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Bot className="h-4 w-4" />
              AI-Powered CV Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 text-white hover:bg-blue-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-80">
            {/* Conditional rendering: iframe or custom chat */}
            {useIframe && vectorShiftUrl ? (
              /* VectorShift iframe integration */
              <div className="flex-1 w-full h-full">
                <iframe
                  src={vectorShiftUrl}
                  className="w-full h-full border-0 rounded-b-lg"
                  title="VectorShift AI Assistant"
                  allow="microphone; camera"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            ) : (
              /* Custom chat interface */
              <>
                {/* Messages Area */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          'flex gap-2 max-w-[85%]',
                          message.sender === 'user' ? 'ml-auto' : 'mr-auto'
                        )}
                      >
                        {message.sender === 'bot' && (
                          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                            <Bot className="h-3 w-3 text-white" />
                          </div>
                        )}
                        
                        <div
                          className={cn(
                            'rounded-lg px-3 py-2 text-sm',
                            message.sender === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-muted'
                          )}
                        >
                          {message.content}
                        </div>
                        
                        {message.sender === 'user' && (
                          <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0 mt-1">
                            <User className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {isLoading && (
                      <div className="flex gap-2 mr-auto max-w-[85%]">
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="h-3 w-3 text-white" />
                        </div>
                        <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about Ahmed's experience..."
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={isLoading || !inputValue.trim()}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}