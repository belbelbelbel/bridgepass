'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowLeft, Send, Minimize2, Maximize2, Bot, User, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import DashboardSidebar from '@/components/dashboard/sidebar'
import TopNav from '@/components/dashboard/top-nav'

interface Message {
  id: string
  text: string
  sender: 'user' | 'support'
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Hello! Welcome to Naira Bridge support. I'm here to help you with any questions or issues you may have. How can I assist you today?",
    sender: 'support',
    timestamp: new Date()
  }
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [supportStatus, setSupportStatus] = useState<'online' | 'away' | 'offline'>('online')

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages([...messages, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate support response (in real app, this would be WebSocket or API call)
    setTimeout(() => {
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message. Our support team is currently reviewing your inquiry. In the meantime, you can check our knowledge base for immediate answers, or we'll get back to you shortly.",
        sender: 'support',
        timestamp: new Date()
      }
      setMessages([...messages, userMessage, supportMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getCurrentTime = () => {
    const now = new Date()
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Link href="/support" className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground mb-4 sm:mb-6">
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          Back to Support
        </Link>

        <Card className="h-[calc(100vh-200px)] sm:h-[calc(100vh-250px)] flex flex-col">
          <CardHeader className="border-b border-border p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-base sm:text-lg">Live Chat Support</CardTitle>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mt-1">
                    <Badge
                      variant={supportStatus === 'online' ? 'default' : supportStatus === 'away' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {supportStatus === 'online' ? 'Online' : supportStatus === 'away' ? 'Away' : 'Offline'}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {supportStatus === 'online' ? 'Typically replies in a few minutes' : 'We\'ll respond when available'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Mon-Fri, 9am-5pm WAT</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-hidden flex flex-col p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'support' && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[75%] sm:max-w-[70%] rounded-lg px-3 sm:px-4 py-2 sm:py-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-xs sm:text-sm whitespace-pre-wrap break-words">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === 'user'
                          ? 'text-primary-foreground/70'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>

                  {message.sender === 'user' && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-3 h-3 sm:w-4 sm:h-4 text-foreground" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 sm:gap-3 justify-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-muted rounded-lg px-3 sm:px-4 py-2">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-3 sm:p-4">
              <form onSubmit={handleSend} className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 text-sm sm:text-base"
                  disabled={supportStatus === 'offline'}
                />
                <Button type="submit" size="sm" disabled={!input.trim() || isTyping || supportStatus === 'offline'} className="flex-shrink-0">
                  <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </form>
              
              {supportStatus === 'offline' && (
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Live chat is currently offline. Please submit a ticket or email us at{' '}
                  <a href="mailto:support@nairabridge.com" className="text-primary hover:underline break-all">
                    support@nairabridge.com
                  </a>
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Alternative Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-sm sm:text-base font-semibold mb-2">Need immediate help?</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                Submit a support ticket for urgent issues
              </p>
              <Link href="/support/tickets/new">
                <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm">
                  Submit a Ticket
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-sm sm:text-base font-semibold mb-2">Contact via Email</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 break-all">
                support@nairabridge.com
              </p>
              <a href="mailto:support@nairabridge.com">
                <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm">
                  Send Email
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
          </div>
        </main>
      </div>
    </div>
  )
}

