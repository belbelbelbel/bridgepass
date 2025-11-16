export function SkeletonCard() {
  return (
    <div className="p-6 bg-card border border-border rounded-xl animate-pulse">
      <div className="h-4 bg-muted rounded w-24 mb-4"></div>
      <div className="h-8 bg-muted rounded w-32 mb-2"></div>
      <div className="h-4 bg-muted rounded w-20"></div>
    </div>
  )
}

export function SkeletonTable() {
  return (
    <div className="space-y-2">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex gap-4">
          <div className="h-10 bg-muted rounded flex-1 animate-pulse"></div>
          <div className="h-10 bg-muted rounded flex-1 animate-pulse"></div>
          <div className="h-10 bg-muted rounded flex-1 animate-pulse"></div>
          <div className="h-10 bg-muted rounded w-24 animate-pulse"></div>
        </div>
      ))}
    </div>
  )
}
