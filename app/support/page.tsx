'use client'

import { useState } from 'react'
import { Search, HelpCircle, MessageSquare, FileText, Video, Book, ChevronRight, X, Send, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const knowledgeBaseCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: HelpCircle,
    articles: [
      { id: 1, title: 'How to register your NGO', description: 'Step-by-step guide to creating your account', views: 1250 },
      { id: 2, title: 'Setting up your organization profile', description: 'Complete your KYC verification', views: 890 },
      { id: 3, title: 'Adding authorized team members', description: 'Invite team members to your account', views: 654 },
      { id: 4, title: 'Understanding your dashboard', description: 'Navigate your Naira Bridge dashboard', views: 1200 }
    ]
  },
  {
    id: 'conversions',
    title: 'Currency Conversions',
    icon: MessageSquare,
    articles: [
      { id: 5, title: 'How to convert foreign donations', description: 'Complete guide to currency conversions', views: 2100 },
      { id: 6, title: 'Understanding FX rates and rate locks', description: 'Learn about our competitive rates', views: 1500 },
      { id: 7, title: 'Wallet funding and withdrawals', description: 'Managing your multi-currency wallets', views: 980 },
      { id: 8, title: 'Conversion timeframes', description: 'How long conversions typically take', views: 750 }
    ]
  },
  {
    id: 'reports',
    title: 'Reports & Compliance',
    icon: FileText,
    articles: [
      { id: 9, title: 'Generating audit reports', description: 'Create compliance reports for donors', views: 1100 },
      { id: 10, title: 'Sharing reports with donors', description: 'Transparency features explained', views: 920 },
      { id: 11, title: 'Understanding transaction history', description: 'Track all your conversions', views: 800 },
      { id: 12, title: 'Exporting data (PDF/CSV)', description: 'Download your reports', views: 670 }
    ]
  },
  {
    id: 'billing',
    title: 'Billing & Plans',
    icon: Book,
    articles: [
      { id: 13, title: 'Understanding subscription plans', description: 'Choose the right plan for your NGO', views: 950 },
      { id: 14, title: 'Upgrading or downgrading plans', description: 'Change your subscription anytime', views: 540 },
      { id: 15, title: 'Payment methods and invoices', description: 'Manage your billing information', views: 720 },
      { id: 16, title: 'Usage limits and quotas', description: 'Understanding conversion limits', views: 610 }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Support',
    icon: Video,
    articles: [
      { id: 17, title: 'API documentation and setup', description: 'Integrate Naira Bridge with your systems', views: 430 },
      { id: 18, title: 'Troubleshooting common issues', description: 'Solutions to frequently encountered problems', views: 890 },
      { id: 19, title: 'Browser compatibility', description: 'Supported browsers and requirements', views: 320 },
      { id: 20, title: 'Mobile access', description: 'Using Naira Bridge on mobile devices', views: 510 }
    ]
  }
]

const popularArticles = [
  { id: 5, title: 'How to convert foreign donations', category: 'Conversions' },
  { id: 9, title: 'Generating audit reports', category: 'Reports' },
  { id: 1, title: 'How to register your NGO', category: 'Getting Started' },
  { id: 13, title: 'Understanding subscription plans', category: 'Billing' }
]

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search functionality would go here
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Find answers to common questions or reach out to our support team
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for help articles, guides, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg"
              />
            </div>
          </form>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/support/tickets/new">
            <Card className="hover:border-primary transition-colors cursor-pointer h-full">
              <CardContent className="p-6">
                <MessageSquare className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Submit a Ticket</h3>
                <p className="text-sm text-muted-foreground">
                  Get help from our support team. We typically respond within 24 hours.
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/support/chat">
            <Card className="hover:border-primary transition-colors cursor-pointer h-full">
              <CardContent className="p-6">
                <Video className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground">
                  Chat with our support team. Available Monday-Friday, 9am-5pm WAT.
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Card className="hover:border-primary transition-colors cursor-pointer h-full">
            <CardContent className="p-6">
              <MessageSquare className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Contact Support</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <a href="mailto:support@nairabridge.com" className="text-primary hover:underline">
                  support@nairabridge.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                +234 (0) 800-000-0000
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="knowledge-base" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="knowledge-base">Knowledge Base</TabsTrigger>
            <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          </TabsList>

          {/* Knowledge Base Tab */}
          <TabsContent value="knowledge-base" className="space-y-8">
            {/* Popular Articles */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {popularArticles.map((article) => (
                  <Card key={article.id} className="hover:border-primary transition-colors cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2 text-xs">{article.category}</Badge>
                          <h3 className="font-semibold mb-1">{article.title}</h3>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
              <div className="space-y-6">
                {knowledgeBaseCategories.map((category) => (
                  <Card key={category.id}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <category.icon className="w-6 h-6 text-primary" />
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.articles.map((article) => (
                          <Link
                            key={article.id}
                            href={`/support/articles/${article.id}`}
                            className="flex items-start justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
                          >
                            <div className="flex-1">
                              <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">
                                {article.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2">{article.description}</p>
                              <p className="text-xs text-muted-foreground">{article.views.toLocaleString()} views</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* My Tickets Tab */}
          <TabsContent value="tickets">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Support Tickets</h2>
              <Link href="/support/tickets/new">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Ticket
                </Button>
              </Link>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">No tickets yet</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Submit your first support ticket to get help from our team
                  </p>
                  <Link href="/support/tickets/new">
                    <Button>
                      Create Your First Ticket
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}

