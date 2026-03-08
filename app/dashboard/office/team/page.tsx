import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, TrendingUp, Briefcase, Award, Plus } from "lucide-react"

export default function OfficeTeamPage() {
    return (
        <DashboardLayout role="office">
            <div className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">فريق العمل</h1>
                        <p className="text-muted-foreground mt-1">إدارة المحامين وتقييم أدائهم</p>
                    </div>
                    <Button className="gap-2 bg-magenta hover:bg-magenta/90 text-white">
                        <Plus className="h-4 w-4" />
                        إضافة عضو جديد
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            name: "سارة جونسون",
                            role: "شريك أول",
                            avatarInitial: "SJ",
                            avatarColor: "bg-purple text-white",
                            specialty: "قانون العمل",
                            cases: 15,
                            hours: 156.5,
                            performance: "ممتاز",
                            email: "sarah@firm.com",
                            phone: "+966 50 111 2222"
                        },
                        {
                            name: "مايكل تشين",
                            role: "محامي مساعد",
                            avatarInitial: "MC",
                            avatarColor: "bg-accent text-white",
                            specialty: "قانون الشركات",
                            cases: 12,
                            hours: 142.0,
                            performance: "جيد جداً",
                            email: "michael@firm.com",
                            phone: "+966 50 111 3333"
                        },
                        {
                            name: "ديفيد مارتينيز",
                            role: "شريك",
                            avatarInitial: "DM",
                            avatarColor: "bg-magenta text-white",
                            specialty: "عقارات",
                            cases: 14,
                            hours: 168.5,
                            performance: "ممتاز",
                            email: "david@firm.com",
                            phone: "+966 50 111 4444"
                        },
                        {
                            name: "أحمد محمود",
                            role: "محامي متدرب",
                            avatarInitial: "AM",
                            avatarColor: "bg-orange-500 text-white",
                            specialty: "قانون عام",
                            cases: 5,
                            hours: 110.0,
                            performance: "جيد",
                            email: "ahmed@firm.com",
                            phone: "+966 50 111 5555"
                        },
                        {
                            name: "منى الجاسم",
                            role: "مساعد قانوني",
                            avatarInitial: "MJ",
                            avatarColor: "bg-blue-500 text-white",
                            specialty: "بحوث قانونية",
                            cases: 20,
                            hours: 180.0,
                            performance: "ممتاز",
                            email: "mona@firm.com",
                            phone: "+966 50 111 6666"
                        }
                    ].map((member, idx) => (
                        <Card key={idx} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${member.avatarColor}`}>
                                            {member.avatarInitial}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{member.name}</h3>
                                            <p className="text-sm text-muted-foreground">{member.role}</p>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="bg-secondary/30 border-muted/50">{member.specialty}</Badge>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-secondary/20 p-3 rounded-lg text-center">
                                        <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                                            <Briefcase className="w-4 h-4" />
                                            <span className="text-xs">القضايا</span>
                                        </div>
                                        <p className="font-semibold text-lg">{member.cases}</p>
                                    </div>
                                    <div className="bg-secondary/20 p-3 rounded-lg text-center">
                                        <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                                            <TrendingUp className="w-4 h-4" />
                                            <span className="text-xs">الساعات</span>
                                        </div>
                                        <p className="font-semibold text-lg" dir="ltr">{member.hours}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-border">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="flex items-center gap-2 text-muted-foreground">
                                            <Award className="w-4 h-4 text-magenta" /> التقييم العام
                                        </span>
                                        <span className="font-medium text-foreground">{member.performance}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="flex items-center gap-2 text-muted-foreground">
                                            <Mail className="w-4 h-4" /> البريد
                                        </span>
                                        <span className="truncate max-w-[150px]">{member.email}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="flex items-center gap-2 text-muted-foreground">
                                            <Phone className="w-4 h-4" /> الهاتف
                                        </span>
                                        <span dir="ltr">{member.phone}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}
