import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, CheckSquare, Clock, Users, ArrowUpRight } from "lucide-react"

export default function LawyerTasksPage() {
    return (
        <DashboardLayout role="lawyer">
            <div className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">المهام</h1>
                        <p className="text-muted-foreground mt-1">توزيع وإدارة المهام الخاصة بالقضايا</p>
                    </div>
                    <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        مهمة جديدة
                    </Button>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* To Do Column */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between pb-2 border-b border-border">
                            <h3 className="font-semibold flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-destructive" />
                                قيد الانتظار
                            </h3>
                            <Badge variant="secondary">3</Badge>
                        </div>

                        {[
                            { id: 1, title: "مراجعة الشهود", case: "جونسون ضد شركة التقنية", assignee: "أحمد (متدرب)", priority: "عالية", color: "destructive" },
                            { id: 2, title: "صياغة العقد", case: "نزاع ملكية مارتينيز", assignee: "أنت", priority: "متوسطة", color: "accent" },
                            { id: 3, title: "تحضير المستندات", case: "قضية توظيف أندرسون", assignee: "منى (مساعد)", priority: "عادية", color: "purple" }
                        ].map(task => (
                            <Card key={task.id} className="hover:border-purple/50 transition-colors">
                                <CardContent className="p-4 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <Badge className={`bg-${task.color} text-white border-transparent text-xs`}>{task.priority}</Badge>
                                        <button className="text-muted-foreground hover:text-foreground"><ArrowUpRight className="h-4 w-4" /></button>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm">{task.title}</h4>
                                        <p className="text-xs text-muted-foreground mt-1">{task.case}</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 border-t border-border">
                                        <span className="text-xs flex items-center gap-1 text-muted-foreground"><Clock className="h-3 w-3" /> اليوم</span>
                                        <Badge variant="outline" className="text-xs flex items-center gap-1 bg-secondary/30">
                                            <Users className="h-3 w-3" />
                                            {task.assignee}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* In Progress Column */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between pb-2 border-b border-border">
                            <h3 className="font-semibold flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                قيد العمل
                            </h3>
                            <Badge variant="secondary">2</Badge>
                        </div>

                        {[
                            { id: 4, title: "جمع الوثائق", case: "نزاع ملكية مارتينيز", assignee: "أنت", priority: "عالية", color: "destructive" },
                            { id: 5, title: "البحث القانوني", case: "قضية توظيف أندرسون", assignee: "سارة (محامي)", priority: "عادية", color: "purple" }
                        ].map(task => (
                            <Card key={task.id} className="hover:border-accent/50 transition-colors border-l-2 border-l-accent border-l-solid">
                                <CardContent className="p-4 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <Badge className={`bg-${task.color} text-white border-transparent text-xs`}>{task.priority}</Badge>
                                        <button className="text-muted-foreground hover:text-foreground"><ArrowUpRight className="h-4 w-4" /></button>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm">{task.title}</h4>
                                        <p className="text-xs text-muted-foreground mt-1">{task.case}</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 border-t border-border">
                                        <span className="text-xs flex items-center gap-1 text-muted-foreground"><Clock className="h-3 w-3" /> غداً</span>
                                        <Badge variant="outline" className="text-xs flex items-center gap-1 bg-secondary/30">
                                            <Users className="h-3 w-3" />
                                            {task.assignee}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Completed Column */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between pb-2 border-b border-border">
                            <h3 className="font-semibold flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                                مكتملة
                            </h3>
                            <Badge variant="secondary">1</Badge>
                        </div>

                        {[
                            { id: 6, title: "تقديم طلب حكم عاجل", case: "جونسون ضد شركة التقنية", assignee: "أنت", priority: "عالية", color: "destructive" }
                        ].map(task => (
                            <Card key={task.id} className="opacity-70 bg-secondary/10">
                                <CardContent className="p-4 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <Badge variant="outline" className="text-xs grayscale text-muted-foreground border-muted-foreground/30">مكتملة</Badge>
                                        <CheckSquare className="h-4 w-4 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm line-through">{task.title}</h4>
                                        <p className="text-xs text-muted-foreground mt-1">{task.case}</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 border-t border-border">
                                        <span className="text-xs flex items-center gap-1 text-muted-foreground"><Clock className="h-3 w-3" /> أمس</span>
                                        <Badge variant="outline" className="text-xs flex items-center gap-1 grayscale text-muted-foreground border-muted-foreground/30">
                                            <Users className="h-3 w-3" />
                                            {task.assignee}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
