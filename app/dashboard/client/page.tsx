import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, MessageSquare, Clock, CheckCircle2, AlertCircle, TrendingUp, Scale } from "lucide-react"
import Link from "next/link"

export default function ClientDashboardPage() {
  return (
    <DashboardLayout role="client">
      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your cases today</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Cases</CardTitle>
              <FileText className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground mt-1">2 in progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Unread Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground mt-1">From 2 lawyers</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Deadlines</CardTitle>
              <Clock className="h-4 w-4 text-magenta" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground mt-1">Next in 3 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Case Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">67%</div>
              <p className="text-xs text-muted-foreground mt-1">Overall completion</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Active Cases */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Active Cases</CardTitle>
                  <CardDescription>Track your ongoing legal matters</CardDescription>
                </div>
                <Link href="/dashboard/client/cases">
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border border-border rounded-lg p-4 hover:border-accent/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">Employment Contract Dispute</h4>
                    <p className="text-sm text-muted-foreground mt-1">Attorney: Sarah Johnson</p>
                  </div>
                  <Badge className="bg-purple/10 text-purple border-purple/20">In Progress</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Started 2 weeks ago</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Scale className="h-4 w-4" />
                    <span>Labor Law</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">60%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-purple w-[60%]" />
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 hover:border-accent/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">Property Lease Agreement</h4>
                    <p className="text-sm text-muted-foreground mt-1">Attorney: Michael Chen</p>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Review</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Started 5 days ago</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Scale className="h-4 w-4" />
                    <span>Real Estate</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[85%]" />
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 hover:border-accent/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">Business Partnership Agreement</h4>
                    <p className="text-sm text-muted-foreground mt-1">Attorney: David Martinez</p>
                  </div>
                  <Badge className="bg-magenta/10 text-magenta border-magenta/20">Pending</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Started 1 week ago</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Scale className="h-4 w-4" />
                    <span>Corporate Law</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-magenta w-[30%]" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions & Recent Messages */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/dashboard/client/find-lawyers">
                  <Button variant="outline" className="w-full justify-start gap-3 h-11 bg-transparent">
                    <Search className="h-5 w-5 text-accent" />
                    <span>Find a Lawyer</span>
                  </Button>
                </Link>
                <Link href="/dashboard/client/cases">
                  <Button variant="outline" className="w-full justify-start gap-3 h-11 bg-transparent">
                    <FileText className="h-5 w-5 text-purple" />
                    <span>View All Cases</span>
                  </Button>
                </Link>
                <Link href="/dashboard/client/messages">
                  <Button variant="outline" className="w-full justify-start gap-3 h-11 bg-transparent">
                    <MessageSquare className="h-5 w-5 text-magenta" />
                    <span>Check Messages</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
                <CardDescription>Latest activity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Document signed</p>
                    <p className="text-xs text-muted-foreground">Property lease agreement</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-purple/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-4 w-4 text-purple" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New message</p>
                    <p className="text-xs text-muted-foreground">From Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-magenta/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="h-4 w-4 text-magenta" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Deadline approaching</p>
                    <p className="text-xs text-muted-foreground">Contract review in 3 days</p>
                    <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
