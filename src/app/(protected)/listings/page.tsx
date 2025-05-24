export default function ListingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Browse Listings</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search listings..."
            className="px-4 py-2 border rounded-md"
          />
          <select className="px-4 py-2 border rounded-md">
            <option value="">All Categories</option>
            <option value="textbooks">Textbooks</option>
            <option value="electronics">Electronics</option>
            <option value="services">Services</option>
          </select>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Listing cards will go here */}
        <div className="rounded-lg border p-4">
          <div className="aspect-square bg-muted rounded-md mb-4"></div>
          <h3 className="font-semibold mb-2">Sample Listing</h3>
          <p className="text-muted-foreground mb-2">Category • Condition</p>
          <p className="font-bold">$0.00</p>
        </div>
      </div>
    </div>
  );
} 