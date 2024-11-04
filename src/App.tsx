import { ArrowRight, Hash, MessageCircle, Users, Sparkles, Search, Star, TrendingUp, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthButtons } from "@/components/AuthButtons";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-semibold">ChatBolt</span>
            </div>
            <AuthButtons />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Connect, Share, Discuss
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Join topic-based communities, participate in discussions, and connect with people who share your interests.
            </p>
          </div>

          {/* Interface Previews */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Forums Preview */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Popular Forums</h2>
                <Button variant="ghost" size="sm">View all</Button>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input className="pl-9" placeholder="Search forums..." />
                </div>
                <ScrollArea className="h-[300px] pr-4">
                  {forums.map((forum, index) => (
                    <div key={index} className="mb-3">
                      <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <forum.icon className="h-5 w-5 text-blue-500 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{forum.name}</h3>
                            <Badge variant="secondary">{forum.posts} posts</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{forum.description}</p>
                        </div>
                      </div>
                      {index < forums.length - 1 && <Separator className="my-3" />}
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </Card>

            {/* Threads Preview */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Trending Threads</h2>
                <Button variant="ghost" size="sm">View all</Button>
              </div>
              <ScrollArea className="h-[360px] pr-4">
                {threads.map((thread, index) => (
                  <div key={index} className="mb-3">
                    <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{thread.category}</Badge>
                            <span className="text-sm text-gray-500">
                              {thread.timeAgo}
                            </span>
                          </div>
                          <h3 className="font-medium mt-2">{thread.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{thread.preview}</p>
                          <div className="flex items-center space-x-4 mt-3">
                            <div className="flex items-center text-sm text-gray-500">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              {thread.replies} replies
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Users className="h-4 w-4 mr-1" />
                              {thread.participants} participants
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < threads.length - 1 && <Separator className="my-3" />}
                  </div>
                ))}
              </ScrollArea>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <feature.icon className="h-6 w-6 text-blue-500 mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="p-8 text-center bg-gradient-to-r from-blue-500 to-blue-600">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to join the conversation?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Connect with thousands of people who share your interests.
            </p>
            <Button size="lg" variant="secondary" className="font-medium">
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Forums</li>
                <li>Communities</li>
                <li>Direct Messages</li>
                <li>Threads</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Community Guidelines</li>
                <li>Help Center</li>
                <li>Safety Center</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
            © 2024 ChatBolt. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: MessageCircle,
    title: "Real-time Discussions",
    description: "Engage in live conversations with instant message delivery and typing indicators.",
  },
  {
    icon: Hash,
    title: "Organized Topics",
    description: "Find and follow discussions organized by topics that interest you.",
  },
  {
    icon: Star,
    title: "Rich Features",
    description: "Enjoy markdown support, file sharing, and thread organization.",
  },
];

const forums = [
  {
    icon: TrendingUp,
    name: "Technology Trends",
    description: "Discuss the latest developments in tech, AI, and digital innovation.",
    posts: "2.3k",
  },
  {
    icon: MessageCircle,
    name: "Programming Help",
    description: "Get help with coding problems and share programming knowledge.",
    posts: "1.8k",
  },
  {
    icon: Users,
    name: "Community Projects",
    description: "Collaborate on open-source projects and share your work.",
    posts: "956",
  },
  {
    icon: Star,
    name: "Design Showcase",
    description: "Share your designs and get feedback from the community.",
    posts: "1.2k",
  },
  {
    icon: Hash,
    name: "Career Advice",
    description: "Discussion about career growth and professional development.",
    posts: "789",
  },
];

const threads = [
  {
    category: "Tech Discussion",
    title: "What's your take on the latest AI developments?",
    preview: "I've been following the recent advances in artificial intelligence...",
    timeAgo: "2h ago",
    replies: 45,
    participants: 23,
  },
  {
    category: "Programming",
    title: "Best practices for React performance optimization",
    preview: "I'm working on a large React application and noticed some performance issues...",
    timeAgo: "4h ago",
    replies: 32,
    participants: 18,
  },
  {
    category: "Community",
    title: "Organizing our first virtual meetup!",
    preview: "Hey everyone! I think it would be great to organize a community meetup...",
    timeAgo: "6h ago",
    replies: 28,
    participants: 15,
  },
  {
    category: "Design",
    title: "Feedback needed: New portfolio design",
    preview: "I've been working on redesigning my portfolio and would love some feedback...",
    timeAgo: "8h ago",
    replies: 19,
    participants: 12,
  },
  {
    category: "Career",
    title: "Transitioning from backend to full-stack",
    preview: "I'm a backend developer looking to expand my skillset into frontend...",
    timeAgo: "12h ago",
    replies: 24,
    participants: 16,
  },
];

export default App;