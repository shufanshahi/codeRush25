export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="rounded-lg border p-6">
            <div className="aspect-square bg-muted rounded-full mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Your Name</h2>
            <p className="text-muted-foreground mb-4">University Name</p>
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Account Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <p className="text-muted-foreground">your.email@university.edu</p>
              </div>
              <div>
                <label className="text-sm font-medium">Department</label>
                <p className="text-muted-foreground">Computer Science</p>
              </div>
              <div>
                <label className="text-sm font-medium">Year of Study</label>
                <p className="text-muted-foreground">3rd Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 