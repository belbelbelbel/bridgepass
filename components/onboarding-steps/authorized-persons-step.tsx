'use client'

import { useState } from 'react'
import { Plus, X, AlertCircle } from 'lucide-react'

interface AuthorizedPersonsStepProps {
  data: any
  setData: (data: any) => void
  errors: Record<string, string>
}

export default function AuthorizedPersonsStep({
  data,
  setData,
  errors
}: AuthorizedPersonsStepProps) {
  const [newPerson, setNewPerson] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: ''
  })

  const addPerson = () => {
    if (newPerson.fullName && newPerson.email && newPerson.position) {
      setData({
        ...data,
        authorizedPersons: [...data.authorizedPersons, {
          id: Date.now(),
          ...newPerson
        }]
      })
      setNewPerson({ fullName: '', email: '', phone: '', position: '' })
    }
  }

  const removePerson = (id: number) => {
    setData({
      ...data,
      authorizedPersons: data.authorizedPersons.filter((p: any) => p.id !== id)
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">Authorized Persons</h2>
        <p className="text-foreground/70">Add individuals authorized to manage donations and FX conversions</p>
      </div>

      <div className="space-y-4 p-6 bg-background rounded-lg border border-border">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            value={newPerson.fullName}
            onChange={(e) => setNewPerson({ ...newPerson, fullName: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input
              type="email"
              placeholder="Email address"
              value={newPerson.email}
              onChange={(e) => setNewPerson({ ...newPerson, email: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
            <input
              type="tel"
              placeholder="Phone number"
              value={newPerson.phone}
              onChange={(e) => setNewPerson({ ...newPerson, phone: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Position/Role</label>
          <select
            value={newPerson.position}
            onChange={(e) => setNewPerson({ ...newPerson, position: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          >
            <option value="">Select position</option>
            <option value="Executive Director">Executive Director</option>
            <option value="Finance Manager">Finance Manager</option>
            <option value="Operations Manager">Operations Manager</option>
            <option value="Board Member">Board Member</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          onClick={addPerson}
          disabled={!newPerson.fullName || !newPerson.email || !newPerson.position}
          className="w-full flex items-center justify-center gap-2 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Person
        </button>
      </div>

      {errors.authorized && (
        <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errors.authorized}
        </div>
      )}

      {data.authorizedPersons.length > 0 && (
        <div>
          <h3 className="font-medium text-foreground mb-3">Added Persons</h3>
          <div className="space-y-2">
            {data.authorizedPersons.map((person: any) => (
              <div key={person.id} className="p-4 bg-background rounded-lg border border-border flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{person.fullName}</p>
                  <p className="text-sm text-foreground/70">{person.position} • {person.email}</p>
                </div>
                <button
                  onClick={() => removePerson(person.id)}
                  className="p-2 hover:bg-destructive/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-destructive" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
