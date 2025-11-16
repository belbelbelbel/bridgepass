'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import DashboardSidebar from '@/components/dashboard/sidebar'
import TopNav from '@/components/dashboard/top-nav'
import { Key, User, Lock, Bell, Trash2, Plus, CheckCircle2 } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('organization')
  const [isSaving, setIsSaving] = useState(false)

  const tabs = [
    { id: 'organization', label: 'Organization', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'api', label: 'API Keys', icon: Key },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ]

  const teamMembers = [
    {
      name: 'Chioma Adeyemi',
      email: 'chioma@ngo.org',
      role: 'Admin',
      status: 'Active',
      joined: '2024-01-15'
    },
    {
      name: 'Samuel Okafor',
      email: 'samuel@ngo.org',
      role: 'Finance Manager',
      status: 'Active',
      joined: '2024-03-20'
    },
    {
      name: 'Zainab Musa',
      email: 'zainab@ngo.org',
      role: 'Compliance Officer',
      status: 'Active',
      joined: '2024-06-10'
    }
  ]

  const apiKeys = [
    {
      name: 'Production API Key',
      key: 'nrb_prod_****************************4x89',
      created: '2024-12-01',
      lastUsed: '2025-01-15',
      status: 'Active'
    },
    {
      name: 'Test/Development Key',
      key: 'nrb_test_****************************9w2k',
      created: '2024-11-15',
      lastUsed: '2025-01-10',
      status: 'Active'
    }
  ]

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-auto">
          <div className="p-8 max-w-5xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-muted-foreground">Manage your organization, security, and integrations</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-8 border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-accent text-foreground'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Organization Settings */}
            {activeTab === 'organization' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Organization Profile</CardTitle>
                    <CardDescription>Update your NGO information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Organization Name</label>
                        <Input defaultValue="Education for All Nigeria" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Registration Number</label>
                        <Input defaultValue="NGO/2023/001234" disabled />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Country</label>
                        <Input defaultValue="Nigeria" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Primary Contact Email</label>
                        <Input defaultValue="contact@ngo.org" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Organization Description</label>
                      <textarea
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                        rows={4}
                        defaultValue="We are a registered NGO focused on educational initiatives across rural Nigeria."
                      />
                    </div>
                    <div className="pt-4 border-t border-border flex gap-3">
                      <Button
                        onClick={() => setIsSaving(true)}
                        onAnimationEnd={() => setTimeout(() => setIsSaving(false), 1000)}
                      >
                        {isSaving ? 'Saving...' : 'Save Changes'}
                      </Button>
                      <Button variant="outline">Cancel</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Team Members */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Team Members</CardTitle>
                        <CardDescription>Manage access and permissions</CardDescription>
                      </div>
                      <Button size="sm">
                        <Plus className="w-4 h-4 mr-1" />
                        Invite Member
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow className="border-border">
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {teamMembers.map((member, idx) => (
                          <TableRow key={idx} className="border-border hover:bg-muted/50">
                            <TableCell className="font-medium">{member.name}</TableCell>
                            <TableCell className="text-sm">{member.email}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{member.role}</Badge>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">{member.joined}</TableCell>
                            <TableCell>
                              <Badge className="bg-green-100 text-green-800 border-green-200">
                                {member.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-green-900">Two-Factor Authentication Enabled</p>
                        <p className="text-sm text-green-700">Your account is protected with 2FA.</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-4">Change Password</h3>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium mb-2">Current Password</label>
                            <Input type="password" placeholder="••••••••" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">New Password</label>
                            <Input type="password" placeholder="••••••••" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                            <Input type="password" placeholder="••••••••" />
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <Button>Update Password</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-destructive">Danger Zone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Delete your account and all associated data. This action cannot be undone.
                    </p>
                    <Button variant="destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* API Keys */}
            {activeTab === 'api' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>API Keys</CardTitle>
                        <CardDescription>Manage API credentials for integrations</CardDescription>
                      </div>
                      <Button size="sm">
                        <Plus className="w-4 h-4 mr-1" />
                        Generate New Key
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow className="border-border">
                          <TableHead>Name</TableHead>
                          <TableHead>Key</TableHead>
                          <TableHead>Created</TableHead>
                          <TableHead>Last Used</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {apiKeys.map((keyData, idx) => (
                          <TableRow key={idx} className="border-border hover:bg-muted/50">
                            <TableCell className="font-medium">{keyData.name}</TableCell>
                            <TableCell className="font-mono text-xs">{keyData.key}</TableCell>
                            <TableCell className="text-sm">{keyData.created}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">{keyData.lastUsed}</TableCell>
                            <TableCell>
                              <Badge className="bg-green-100 text-green-800 border-green-200">
                                {keyData.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Revoke
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Notifications */}
            {activeTab === 'notifications' && (
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { title: 'Conversion Completed', description: 'Get notified when a conversion is completed' },
                    { title: 'Rate Lock Expiring', description: 'Receive alerts when your rate lock is about to expire' },
                    { title: 'Weekly Reports', description: 'Get weekly conversion summaries' },
                    { title: 'Security Alerts', description: 'Receive alerts for account security events' },
                    { title: 'Product Updates', description: 'Learn about new features and improvements' }
                  ].map((notif, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">{notif.title}</p>
                        <p className="text-sm text-muted-foreground">{notif.description}</p>
                      </div>
                      <input type="checkbox" className="w-5 h-5" defaultChecked />
                    </div>
                  ))}

                  <div className="pt-4 border-t border-border">
                    <Button>Save Preferences</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
