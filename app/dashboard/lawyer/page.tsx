import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  MessageSquare,
  Clock,
  CheckSquare,
  DollarSign,
  Users,
  AlertCircle,
  CheckCircle2,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function LawyerDashboardPage() {
  return (
    <DashboardLayout role="lawyer">
      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">مرحباً بك، أستاذنا</h1>
          <p className="text-muted-foreground mt-1">لديك 5 مهام مستحقة اليوم و 3 مواعيد قادمة</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">القضايا النشطة</CardTitle>
              <FileText className="h-4 w-4 text-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground mt-1">3 هامة</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">مهام اليوم</CardTitle>
              <CheckSquare className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground mt-1">8 مكتملة</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">رسائل العملاء</CardTitle>
              <MessageSquare className="h-4 w-4 text-magenta" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground mt-1">من 5 عملاء</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">الساعات المفوترة</CardTitle>
              <DollarSign className="h-4 w-4 text-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42.5</div>
              <p className="text-xs text-muted-foreground mt-1">هذا الأسبوع</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Tasks */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>مهام اليوم</CardTitle>
                  <CardDescription>المهام ذات الأولوية لهذا اليوم</CardDescription>
                </div>
                <Link href="/dashboard/lawyer/tasks">
                  <Button variant="outline" size="sm">
                    عرض الكل
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border border-border rounded-lg p-4 hover:border-purple/50 transition-colors">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 rounded border-input" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">تقديم طلب حكم عاجل</h4>
                        <p className="text-sm text-muted-foreground mt-1">جونسون ضد شركة التقنية</p>
                      </div>
                      <Badge className="bg-destructive/10 text-destructive border-destructive/20">عالية</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>مستحق بحلول 3:00 مساءً</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>قضية #2024-01</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 hover:border-purple/50 transition-colors">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 rounded border-input" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">التحضير لاجتماع العميل</h4>
                        <p className="text-sm text-muted-foreground mt-1">نزاع ملكية مارتينيز</p>
                      </div>
                      <Badge className="bg-accent/10 text-accent border-accent/20">متوسطة</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>مستحق بحلول 2:00 مساءً</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>الاجتماع في 4:00 مساءً</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 hover:border-purple/50 transition-colors">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 rounded border-input" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">مراجعة والرد على طلبات الاكتشاف</h4>
                        <p className="text-sm text-muted-foreground mt-1">قضية توظيف أندرسون</p>
                      </div>
                      <Badge className="bg-purple/10 text-purple border-purple/20">عادية</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>مستحق بحلول 5:00 مساءً</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>قضية #2024-08</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 hover:border-purple/50 transition-colors">
                <div className="flex items-start gap-3">
                  <input type="checkbox" checked disabled className="mt-1 rounded border-input" />
                  <div className="flex-1 opacity-60">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground line-through">مسودة مقترح تسوية</h4>
                        <p className="text-sm text-muted-foreground mt-1">نزاع عقد تشين</p>
                      </div>
                      <Badge className="bg-muted text-muted-foreground border-muted">مكتملة</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span>اكتملت في 10:30 صباحاً</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle>المواعيد القادمة</CardTitle>
                <CardDescription>جدولك لهذا اليوم</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="text-sm font-semibold text-foreground">2:00</div>
                    <div className="text-xs text-muted-foreground">مساءً</div>
                  </div>
                  <div className="flex-1 border-r-2 border-purple pr-3">
                    <p className="text-sm font-medium">استشارة عميل</p>
                    <p className="text-xs text-muted-foreground">سارة ويليامز</p>
                    <p className="text-xs text-muted-foreground mt-1">غرفة الاجتماعات أ</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="text-sm font-semibold text-foreground">4:00</div>
                    <div className="text-xs text-muted-foreground">مساءً</div>
                  </div>
                  <div className="flex-1 border-r-2 border-accent pr-3">
                    <p className="text-sm font-medium">اجتماع لمراجعة القضية</p>
                    <p className="text-xs text-muted-foreground">ملكية مارتينيز</p>
                    <p className="text-xs text-muted-foreground mt-1">مكالمة فيديو</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="text-sm font-semibold text-foreground">5:30</div>
                    <div className="text-xs text-muted-foreground">مساءً</div>
                  </div>
                  <div className="flex-1 border-r-2 border-magenta pr-3">
                    <p className="text-sm font-medium">اجتماع الفريق</p>
                    <p className="text-xs text-muted-foreground">الاجتماع الأسبوعي</p>
                    <p className="text-xs text-muted-foreground mt-1">غرفة الاجتماعات ب</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>تنبيهات القضايا</CardTitle>
                <CardDescription>تحديثات هامة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">الموعد النهائي غداً</p>
                    <p className="text-xs text-muted-foreground">استحقاق الرد على طلبات الاكتشاف</p>
                    <p className="text-xs text-muted-foreground mt-1">قضية #2024-05</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-purple/10 flex items-center justify-center shrink-0">
                    <Calendar className="h-4 w-4 text-purple" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">تم تحديد موعد المحكمة</p>
                    <p className="text-xs text-muted-foreground">جلسة في 15 مارس</p>
                    <p className="text-xs text-muted-foreground mt-1">جونسون ضد شركة التقنية</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">تم تقديم المستند</p>
                    <p className="text-xs text-muted-foreground">تم تقديم الطلب بنجاح</p>
                    <p className="text-xs text-muted-foreground mt-1">منذ ساعتين</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Cases */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>أحدث القضايا</CardTitle>
                <CardDescription>القضايا الأكثر نشاطاً هذا الأسبوع</CardDescription>
              </div>
              <Link href="/dashboard/lawyer/cases">
                <Button variant="outline" size="sm">
                  عرض كل القضايا
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border border-border rounded-lg p-4 hover:border-purple/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">جونسون ضد شركة التقنية</h4>
                    <p className="text-sm text-muted-foreground mt-1">قانون العمل</p>
                  </div>
                  <Badge className="bg-destructive/10 text-destructive border-destructive/20">حرجة</Badge>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>قضية #2024-01</span>
                    <span>15 مهمة</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>التالي: جلسة محكمة</span>
                    <span>15 مارس</span>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 hover:border-purple/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">نزاع ملكية مارتينيز</h4>
                    <p className="text-sm text-muted-foreground mt-1">عقارات</p>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">نشطة</Badge>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>قضية #2024-03</span>
                    <span>8 مهام</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>التالي: اجتماع</span>
                    <span>اليوم</span>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 hover:border-purple/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">توظيف أندرسون</h4>
                    <p className="text-sm text-muted-foreground mt-1">قانون العمل</p>
                  </div>
                  <Badge className="bg-purple/10 text-purple border-purple/20">قيد التقدم</Badge>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>قضية #2024-08</span>
                    <span>12 مهمة</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>التالي: الاكتشاف</span>
                    <span>غداً</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
