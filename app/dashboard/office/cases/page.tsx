import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Plus, FileText, Clock, Users, CheckCircle2 } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
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
import { Textarea } from "@/components/ui/textarea"
export default function OfficeCasesPage() {
    return (
        <DashboardLayout role="office">
            <div className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">قضايا المكتب</h1>
                        <p className="text-muted-foreground mt-1">متابعة جميع القضايا وتوزيع المهام على فريق العمل</p>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="gap-2 bg-magenta hover:bg-magenta/90 text-white">
                                <Plus className="h-4 w-4" />
                                إضافة قضية جديدة
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>إضافة قضية جديدة</DialogTitle>
                                <DialogDescription>
                                    أدخل تفاصيل القضية الجديدة للمكتب.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">عنوان القضية</Label>
                                    <Input id="title" placeholder="مثال: استحواذ شركة التقنية" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="client">اسم العميل</Label>
                                    <Input id="client" placeholder="اسم العميل أو الشركة" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="type">نوع القضية</Label>
                                    <Input id="type" placeholder="مثال: شركات، عقارات..." />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="assignee">تعيين محامي</Label>
                                    <Input id="assignee" placeholder="اسم المحامي المسؤول" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description">وصف مختصر (خياري)</Label>
                                    <Textarea id="description" placeholder="تفاصيل موجزة عن القضية" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="date">تاريخ الجلسة</Label>
                                    <Input id="date" type="date" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="w-full bg-magenta hover:bg-magenta/90 text-white">إضافة القضية</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                <Card>
                    <CardHeader>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <CardTitle>سجل القضايا</CardTitle>
                                <CardDescription>إدارة ومراقبة التقدم في قضايا المكتب</CardDescription>
                            </div>
                            <div className="relative w-full sm:w-72">
                                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="البحث عن قضية أو عميل..." className="pr-9" />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            {
                                title: "جونسون ضد شركة التقنية",
                                type: "قانون العمل",
                                status: "مستعجلة",
                                statusColor: "destructive",
                                id: "2024-01",
                                progress: 80,
                                assignedTo: "سارة جونسون",
                                tasks: [
                                    { name: "تقديم طلب حكم عاجل", assignee: "سارة (محامي أول)", completed: true },
                                    { name: "مراجعة الشهود", assignee: "أحمد (محامي متدرب)", completed: false },
                                    { name: "تجهيز المذكرات", assignee: "سارة (محامي أول)", completed: false },
                                ]
                            },
                            {
                                title: "صفقة اندماج شركة تيك ستارت",
                                type: "شركات",
                                status: "قيد المراجعة",
                                statusColor: "purple",
                                id: "2024-09",
                                progress: 30,
                                assignedTo: "مايكل تشين",
                                tasks: [
                                    { name: "جمع الوثائق المالية", assignee: "منى (مساعد قانوني)", completed: true },
                                    { name: "صياغة عقد الاندماج", assignee: "مايكل (محامي)", completed: false },
                                ]
                            },
                            {
                                title: "نزاع ملكية مارتينيز",
                                type: "عقارات",
                                status: "نشطة",
                                statusColor: "accent",
                                id: "2024-03",
                                progress: 55,
                                assignedTo: "ديفيد مارتينيز",
                                tasks: [
                                    { name: "مراجعة سندات الملكية", assignee: "ديفيد (شريك)", completed: true },
                                    { name: "الاجتماع بالخصوم", assignee: "ديفيد (شريك)", completed: true },
                                    { name: "إعداد مسودة التسوية", assignee: "منى (مساعد قانوني)", completed: false },
                                ]
                            },
                        ].map((caseItem, idx) => (
                            <div key={idx} className="border border-border rounded-lg p-5 hover:border-magenta/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h4 className="font-semibold text-lg text-foreground">{caseItem.title}</h4>
                                            <Badge className={`bg-${caseItem.statusColor} text-white border-transparent`}>
                                                {caseItem.status}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                                            <span className="flex items-center gap-1"><FileText className="h-4 w-4" /> قضية #{caseItem.id}</span>
                                            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {caseItem.type}</span>
                                            <span className="flex items-center gap-1 text-magenta"><Users className="h-4 w-4" /> المحامي: {caseItem.assignedTo}</span>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-48">
                                        <div className="flex items-center justify-between text-sm mb-1">
                                            <span className="text-muted-foreground">نسبة الإنجاز الكلية</span>
                                            <span className="font-medium">{caseItem.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div className={`h-full bg-${caseItem.statusColor}`} style={{ width: `${caseItem.progress}%` }} />
                                        </div>
                                    </div>
                                </div>

                                {/* Task Distribution Section */}
                                <div className="bg-secondary/20 rounded-md p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h5 className="text-sm font-semibold flex items-center gap-2">
                                            <Users className="h-4 w-4 text-magenta" />
                                            توزيع مهام الفريق
                                        </h5>
                                    </div>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {caseItem.tasks.map((task, tIdx) => (
                                            <div key={tIdx} className="flex flex-col gap-2 bg-background p-3 rounded border border-border text-sm">
                                                <div className="flex items-start gap-2">
                                                    <Checkbox id={`task-${idx}-${tIdx}`} defaultChecked={task.completed} className="mt-0.5 peer" />
                                                    <label htmlFor={`task-${idx}-${tIdx}`} className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium cursor-pointer peer-data-[state=checked]:line-through peer-data-[state=checked]:text-muted-foreground">
                                                        {task.name}
                                                    </label>
                                                </div>
                                                <div className="flex justify-end mt-1">
                                                    <Badge variant="outline" className="text-xs bg-secondary text-secondary-foreground">{task.assignee}</Badge>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    )
}
