'use client'

import { useState } from 'react'
import Link from 'next/link'
import DashboardSidebar from '@/components/dashboard/sidebar'
import TopNav from '@/components/dashboard/top-nav'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Clock, AlertCircle, DollarSign, Shield, Bell, Filter, CheckCheck, Trash2, X } from 'lucide-react'

interface Notification {
  id: string
  type: 'conversion' | 'security' | 'system' | 'payment' | 'compliance'
  title: string
  message: string
  time: string
  isRead: boolean
  actionUrl?: string
}

export default function NotificationsPage() {
  const [filter, setFilter] = useState<'all' | 'unread' | 'conversion' | 'security' | 'system'>('all')
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'conversion',
      title: 'Conversion Completed',
      message: 'Your USD 50,000 conversion to NGN 81,025,000 has been completed successfully',
      time: '5 minutes ago',
      isRead: false,
      actionUrl: '/dashboard/convert'
    },
    {
      id: '2',
      type: 'security',
      title: 'Security Alert',
      message: 'A new device has logged into your account from Lagos, Nigeria',
      time: '2 hours ago',
      isRead: false,
      actionUrl: '/dashboard/settings?tab=security'
    },
    {
      id: '3',
      type: 'system',
      title: 'Registration Approved',
      message: 'Your NGO registration has been approved. Your account is now fully activated.',
      time: '1 day ago',
      isRead: true,
      actionUrl: '/dashboard'
    },
    {
      id: '4',
      type: 'conversion',
      title: 'Rate Lock Expiring',
      message: 'Your rate lock for EUR 30,000 conversion expires in 15 minutes',
      time: '3 hours ago',
      isRead: false,
      actionUrl: '/dashboard/convert'
    },
    {
      id: '5',
      type: 'compliance',
      title: 'Audit Report Ready',
      message: 'Your Q4 2024 audit report is ready for download',
      time: '5 hours ago',
      isRead: true,
      actionUrl: '/dashboard/reports'
    },
    {
      id: '6',
      type: 'payment',
      title: 'Payment Received',
      message: 'Payment of USD 25,000 has been received and is available for conversion',
      time: '1 day ago',
      isRead: true
    },
    {
      id: '7',
      type: 'system',
      title: 'System Maintenance',
      message: 'Scheduled maintenance will occur on Saturday, 9pm-11pm WAT',
      time: '2 days ago',
      isRead: true
    },
    {
      id: '8',
      type: 'conversion',
      title: 'Conversion Failed',
      message: 'Your GBP 15,000 conversion failed due to insufficient funds. Please check your wallet.',
      time: '2 days ago',
      isRead: false,
      actionUrl: '/dashboard/wallets'
    }
  ])

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'conversion':
        return DollarSign
      case 'security':
        return Shield
      case 'system':
        return Bell
      case 'payment':
        return CheckCircle2
      case 'compliance':
        return AlertCircle
      default:
        return Bell
    }
  }

  const getBadgeColor = (type: Notification['type']) => {
    switch (type) {
      case 'conversion':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'security':
        return 'bg-red-100 text-red-700 border-red-200'
      case 'system':
        return 'bg-gray-100 text-gray-700 border-gray-200'
      case 'payment':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'compliance':
        return 'bg-purple-100 text-purple-700 border-purple-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === 'unread') return !notif.isRead
    if (filter === 'all') return true
    return notif.type === filter
  })

  const unreadCount = notifications.filter(n => !n.isRead).length

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const clearAll = () => {
    setNotifications([])
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Notifications</h1>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {unreadCount > 0 ? `${unreadCount} unread notification${unreadCount !== 1 ? 's' : ''}` : 'All caught up!'}
                  </p>
                </div>
                {unreadCount > 0 && (
                  <Button 
                    onClick={markAllAsRead}
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto text-xs sm:text-sm"
                  >
                    <CheckCheck className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Mark All as Read
                  </Button>
                )}
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 overflow-x-auto pb-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    filter === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                  All
                  {filter === 'all' && <Badge variant="secondary" className="ml-1 text-xs">{notifications.length}</Badge>}
                </button>
                <button
                  onClick={() => setFilter('unread')}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    filter === 'unread'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  Unread
                  {unreadCount > 0 && <Badge variant="secondary" className="ml-1 text-xs bg-red-100 text-red-700 border-red-200">{unreadCount}</Badge>}
                </button>
                <button
                  onClick={() => setFilter('conversion')}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    filter === 'conversion'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  Conversions
                </button>
                <button
                  onClick={() => setFilter('security')}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    filter === 'security'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  Security
                </button>
                <button
                  onClick={() => setFilter('system')}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    filter === 'system'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  System
                </button>
              </div>
            </div>

            {/* Notifications List */}
            {filteredNotifications.length === 0 ? (
              <Card>
                <CardContent className="p-8 sm:p-12 text-center">
                  <Bell className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-4 sm:mb-6 opacity-50" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">No notifications</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {filter === 'unread' 
                      ? "You're all caught up! No unread notifications."
                      : filter !== 'all'
                      ? `No ${filter} notifications found.`
                      : "You don't have any notifications yet."}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {filteredNotifications.map((notification) => {
                  const Icon = getIcon(notification.type)
                  return (
                    <Card
                      key={notification.id}
                      className={`transition-all hover:shadow-md ${
                        !notification.isRead ? 'border-l-4 border-l-primary bg-primary/5' : ''
                      }`}
                    >
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            !notification.isRead 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 sm:gap-4 mb-1 sm:mb-2">
                              <div className="flex items-center gap-2 flex-wrap min-w-0 flex-1">
                                <h3 className={`text-sm sm:text-base font-semibold ${
                                  !notification.isRead ? 'text-foreground' : 'text-foreground/70'
                                }`}>
                                  {notification.title}
                                </h3>
                                <Badge 
                                  variant="outline" 
                                  className={`text-xs ${getBadgeColor(notification.type)} flex-shrink-0`}
                                >
                                  {notification.type}
                                </Badge>
                                {!notification.isRead && (
                                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                )}
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                {!notification.isRead && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      markAsRead(notification.id)
                                    }}
                                    className="p-1.5 sm:p-2 hover:bg-muted rounded-lg transition-colors"
                                    title="Mark as read"
                                    aria-label="Mark as read"
                                  >
                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                                  </button>
                                )}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    deleteNotification(notification.id)
                                  }}
                                  className="p-1.5 sm:p-2 hover:bg-destructive/10 rounded-lg transition-colors"
                                  title="Delete notification"
                                  aria-label="Delete notification"
                                >
                                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hover:text-destructive" />
                                </button>
                              </div>
                            </div>
                            
                            <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 leading-relaxed">
                              {notification.message}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>{notification.time}</span>
                              </div>
                              {notification.actionUrl ? (
                                <Link
                                  href={notification.actionUrl}
                                  onClick={() => !notification.isRead && markAsRead(notification.id)}
                                  className="text-xs sm:text-sm text-primary hover:underline font-medium"
                                >
                                  View Details →
                                </Link>
                              ) : (
                                !notification.isRead && (
                                  <button
                                    onClick={() => markAsRead(notification.id)}
                                    className="text-xs sm:text-sm text-primary hover:underline font-medium"
                                  >
                                    Mark as read →
                                  </button>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}

            {/* Clear All Button */}
            {notifications.length > 0 && (
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                <Button
                  onClick={clearAll}
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Clear All Notifications
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

