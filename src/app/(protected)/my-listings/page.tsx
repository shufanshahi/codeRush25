export default function MyListingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Listings</h1>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
          Create New Listing
        </button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Listing cards will go here */}
        <div className="rounded-lg border p-4">
          <div className="aspect-square bg-muted rounded-md mb-4"></div>
          <h3 className="font-semibold mb-2">Sample Listing</h3>
          <p className="text-muted-foreground mb-2">Category • Condition</p>
          <div className="flex justify-between items-center">
            <p className="font-bold">$0.00</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border rounded-md hover:bg-muted">
                Edit
              </button>
              <button className="px-3 py-1 text-sm border rounded-md hover:bg-destructive hover:text-destructive-foreground">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 