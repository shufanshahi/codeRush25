export default function MessagesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      <div className="grid grid-cols-12 gap-6 h-[calc(100vh-12rem)]">
        <div className="col-span-4 border rounded-lg p-4">
          <div className="space-y-4">
            {/* Chat list will go here */}
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-muted">
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-muted-foreground">Last message preview...</p>
            </div>
          </div>
        </div>
        <div className="col-span-8 border rounded-lg p-4 flex flex-col">
          <div className="flex-1">
            {/* Messages will go here */}
            <div className="text-center text-muted-foreground">
              Select a conversation to start messaging
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border rounded-md"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 