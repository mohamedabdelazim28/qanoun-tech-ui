"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, Briefcase, Star, MapPin } from "lucide-react"

export default function LawyerProfilePage() {
    return (
        <DashboardLayout role="lawyer">
            <div className="p-6 space-y-6 max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Profile Sidebar */}
                    <Card className="w-full md:w-80 shrink-0">
                        <CardContent className="p-6 text-center">
                            <div className="w-32 h-32 rounded-full bg-purple/10 mx-auto mb-4 flex items-center justify-center border-4 border-background shadow-md">
                                <User className="h-16 w-16 text-purple" />
                            </div>
                            <h2 className="text-2xl font-bold mb-1">عبدالله محمود</h2>
                            <p className="text-muted-foreground mb-4">محامي أول - قانون تجاري</p>

                            <div className="flex items-center justify-center gap-2 mb-6">
                                <Badge variant="outline" className="bg-secondary text-secondary-foreground gap-1 border-border">
                                    <Star className="h-3 w-3 fill-current" />
                                    4.9
                                </Badge>
                                <Badge variant="secondary">15 سنة خبرة</Badge>
                            </div>

                            <div className="space-y-3 text-sm flex flex-col items-start w-full">
                                <div className="flex items-center gap-3 text-muted-foreground justify-start">
                                    <Mail className="h-4 w-4 text-purple shrink-0" />
                                    <span className="truncate">abdullah@example.com</span>
                                </div>
                                <div className="flex items-center justify-start gap-3 w-full text-muted-foreground">
                                    <Phone className="h-4 w-4 text-purple shrink-0" />
                                    <span dir="ltr">+966 50 111 2222</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground text-right w-full">
                                    <MapPin className="h-4 w-4 text-purple shrink-0" />
                                    <span>الرياض، السعودية</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground text-right w-full">
                                    <Briefcase className="h-4 w-4 text-purple shrink-0" />
                                    <span>مكتب العدالة للمحاماة</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Profile Content */}
                    <div className="flex-1 space-y-6 w-full">
                        <Card>
                            <CardHeader>
                                <CardTitle>البيانات الشخصية والمهنية</CardTitle>
                                <CardDescription>تحديث بياناتك التي تظهر للعملاء والمكتب</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">الاسم الكامل</Label>
                                        <Input id="name" defaultValue="عبدالله محمود" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="title">المسمى الوظيفي</Label>
                                        <Input id="title" defaultValue="محامي أول" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">البريد الإلكتروني</Label>
                                        <Input id="email" type="email" defaultValue="abdullah@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">رقم الهاتف</Label>
                                        <Input id="phone" type="tel" defaultValue="+966 50 111 2222" dir="ltr" className="text-right" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="bio">نبذة تعريفية</Label>
                                    <textarea
                                        id="bio"
                                        className="w-full min-h-[100px] flex rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                        defaultValue="محامي متخصص في القضايا التجارية والشركات بـ 15 عاماً من الخبرة في الترافع وصياغة العقود."
                                    />
                                </div>
                                <Button className="w-full md:w-auto bg-purple hover:bg-purple/90 text-white">حفظ التغييرات</Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>التخصصات القانونية</CardTitle>
                                <CardDescription>ما هي المجالات التي تعمل بها وتتقنها؟</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm py-1 px-3 border-border">القانون التجاري</Badge>
                                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm py-1 px-3 border-border">عقود الشركات</Badge>
                                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm py-1 px-3 border-border">النزاعات المالية</Badge>
                                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm py-1 px-3 border-border">قانون العمل</Badge>
                                </div>
                                <div className="flex gap-2">
                                    <Input placeholder="إضافة تخصص جديد..." className="max-w-xs" />
                                    <Button variant="outline">إضافة</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
