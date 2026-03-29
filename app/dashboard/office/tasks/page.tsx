import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, CheckSquare, Clock, Users, ArrowUpRight } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function OfficeTasksPage() {
    return (
        <DashboardLayout role="office">
            <div className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">مهام المكتب</h1>
                        <p className="text-muted-foreground mt-1">إدارة وتوزيع المهام على فريق المحامين</p>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="gap-2 bg-magenta hover:bg-magenta/90 text-white">
                                <Plus className="h-4 w-4" />
                                تعيين مهمة جديدة
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>تعيين مهمة جديدة</DialogTitle>
                                <DialogDescription>
                                    قم بإنشاء مهمة جديدة وتعيينها لأحد أفراد فريقك.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="task-title">عنوان المهمة</Label>
                                    <Input id="task-title" placeholder="مثال: مراجعة المستندات" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="deadline">تاريخ الاستحقاق</Label>
                                    <Input id="deadline" type="date" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="assignee">تعيين إلى</Label>
                                    <Select>
                                        <SelectTrigger className="w-full text-right" dir="rtl">
                                            <SelectValue placeholder="اختر المحامي" />
                                        </SelectTrigger>
                                        <SelectContent dir="rtl">
                                            <SelectItem value="ahmed">أحمد (متدرب)</SelectItem>
                                            <SelectItem value="sarah">سارة جونسون</SelectItem>
                                            <SelectItem value="michael">مايكل تشين</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="w-full bg-magenta hover:bg-magenta/90 text-white">إضافة المهمة</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
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
                            { id: 2, title: "صياغة عقد الاندماج", case: "صفقة اندماج شركة تيك ستارت", assignee: "مايكل تشين", priority: "متوسطة", color: "accent" },
                            { id: 3, title: "إعداد مسودة التسوية", case: "نزاع ملكية مارتينيز", assignee: "منى (مساعد)", priority: "عادية", color: "purple" }
                        ].map(task => (
                            <Card key={task.id} className="hover:border-magenta/50 transition-colors">
                                <CardContent className="p-4 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <Badge className={`bg-${task.color} text-white border-transparent text-xs`}>{task.priority}</Badge>
                                        <button className="text-muted-foreground hover:text-foreground"><ArrowUpRight className="h-4 w-4" /></button>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm">{task.title}</h4>
                                        <p className="text-xs text-muted-foreground mt-1">{task.case}</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 border-t border-border mt-3">
                                        <span className="text-xs flex items-center gap-1 text-muted-foreground"><Clock className="h-3 w-3" /> اليوم</span>
                                        <Badge variant="outline" className="text-xs flex items-center gap-1 bg-secondary/30">
                                            <Users className="h-3 w-3 text-magenta" />
                                            {task.assignee}
                                        </Badge>
                                    </div>
                                    <Button variant="outline" size="sm" className="w-full gap-2 mt-2 h-8 text-xs">
                                        <CheckSquare className="h-3 w-3 text-accent" />
                                        إكمال المهمة
                                    </Button>
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
                            { id: 4, title: "تقديم طلب حكم عاجل", case: "جونسون ضد شركة التقنية", assignee: "سارة جونسون", priority: "عالية", color: "destructive" },
                            { id: 5, title: "البحث القانوني الشامل", case: "قضية توظيف أندرسون", assignee: "مايكل تشين", priority: "عادية", color: "purple" }
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
                                    <div className="flex items-center justify-between pt-2 border-t border-border mt-3">
                                        <span className="text-xs flex items-center gap-1 text-muted-foreground"><Clock className="h-3 w-3" /> غداً</span>
                                        <Badge variant="outline" className="text-xs flex items-center gap-1 bg-secondary/30">
                                            <Users className="h-3 w-3 text-magenta" />
                                            {task.assignee}
                                        </Badge>
                                    </div>
                                    <Button variant="outline" size="sm" className="w-full gap-2 mt-2 h-8 text-xs">
                                        <CheckSquare className="h-3 w-3 text-accent" />
                                        إكمال المهمة
                                    </Button>
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
                            <Badge variant="secondary">2</Badge>
                        </div>

                        {[
                            { id: 6, title: "مراجعة سندات الملكية", case: "نزاع ملكية مارتينيز", assignee: "ديفيد مارتينيز", priority: "عالية", color: "destructive" },
                            { id: 7, title: "جمع الوثائق المالية", case: "صفقة اندماج شركة تيك ستارت", assignee: "منى (مساعد)", priority: "متوسطة", color: "accent" }
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
