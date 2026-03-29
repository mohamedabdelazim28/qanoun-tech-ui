"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Users,
  DollarSign,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle2,
  ArrowUp,
  ArrowDown,
  BarChart3,
  Activity,
  Download,
} from "lucide-react"
import Link from "next/link"

export default function OfficeDashboardPage() {
  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8,\uFEFF"
      + "التقرير الشامل للمكتب\n\n"
      + "الاسم,الدور,البريد الإلكتروني,رقم الهاتف,عدد القضايا\n"
      + "سارة جونسون,شريك أول,sarah@firm.com,+966 50 111 2222,15\n"
      + "مايكل تشين,محامي مساعد,michael@firm.com,+966 50 111 3333,12\n"
      + "ديفيد مارتينيز,شريك,david@firm.com,+966 50 111 4444,14\n";

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "office_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <DashboardLayout role="office">
      <div className="p-6 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">نظرة عامة على المكتب</h1>
            <p className="text-muted-foreground mt-1">مراقبة أداء مكتب المحاماة الخاص بك ونشاط الفريق</p>
          </div>
          <Button onClick={handleExport} className="gap-2 bg-green-600 hover:bg-green-700 text-white">
            <Download className="h-4 w-4" />
            تصدير تقرير (Excel)
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي القضايا</CardTitle>
              <FileText className="h-4 w-4 text-magenta" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <div className="flex items-center gap-1 text-xs text-accent mt-1">
                <ArrowUp className="h-3 w-3" />
                <span dir="ltr">12% عن الشهر الماضي</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">المحامون النشطون</CardTitle>
              <Users className="h-4 w-4 text-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground mt-1">2 في إجازة</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">الإيرادات الشهرية</CardTitle>
              <DollarSign className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" dir="ltr">$124K</div>
              <div className="flex items-center gap-1 text-xs text-accent mt-1">
                <ArrowUp className="h-3 w-3" />
                <span dir="ltr">8% عن الشهر الماضي</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">معدل الإنجاز</CardTitle>
              <TrendingUp className="h-4 w-4 text-magenta" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <div className="flex items-center gap-1 text-xs text-destructive mt-1">
                <ArrowDown className="h-3 w-3" />
                <span dir="ltr">2% عن الشهر الماضي</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Team Performance */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>أداء الفريق</CardTitle>
                  <CardDescription>مقاييس المحامين الفردية لهذا الشهر</CardDescription>
                </div>
                <Link href="/dashboard/office/team">
                  <Button variant="outline" size="sm">
                    عرض الفريق
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border border-border rounded-lg p-4 hover:border-magenta/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-purple/10 flex items-center justify-center">
                      <span className="font-semibold text-purple">SJ</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">سارة جونسون</h4>
                      <p className="text-sm text-muted-foreground">شريك أول</p>
                    </div>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">ممتاز</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">القضايا</p>
                    <p className="font-semibold text-foreground">15</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">الساعات المفوترة</p>
                    <p className="font-semibold text-foreground" dir="ltr">156.5</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">معدل النجاح</p>
                    <p className="font-semibold text-foreground">92%</p>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 hover:border-magenta/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="font-semibold text-accent">MC</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">مايكل تشين</h4>
                      <p className="text-sm text-muted-foreground">مساعد</p>
                    </div>
                  </div>
                  <Badge className="bg-purple/10 text-purple border-purple/20">جيد</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">القضايا</p>
                    <p className="font-semibold text-foreground">12</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">الساعات المفوترة</p>
                    <p className="font-semibold text-foreground" dir="ltr">142.0</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">معدل النجاح</p>
                    <p className="font-semibold text-foreground">88%</p>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 hover:border-magenta/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-magenta/10 flex items-center justify-center">
                      <span className="font-semibold text-magenta">DM</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">ديفيد مارتينيز</h4>
                      <p className="text-sm text-muted-foreground">شريك</p>
                    </div>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">ممتاز</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">القضايا</p>
                    <p className="font-semibold text-foreground">14</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">الساعات المفوترة</p>
                    <p className="font-semibold text-foreground" dir="ltr">168.5</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">معدل النجاح</p>
                    <p className="font-semibold text-foreground">95%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Critical Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>المهام الحرجة</CardTitle>
                <CardDescription>عناصر عاجلة تتطلب الاهتمام</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">الموعد النهائي لتقديم المحكمة</p>
                    <p className="text-xs text-muted-foreground">قضية #2024-01</p>
                    <p className="text-xs text-muted-foreground mt-1">مستحق غداً</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-magenta/10 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4 text-magenta" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">دفعة العميل متأخرة</p>
                    <p className="text-xs text-muted-foreground">فاتورة #INV-2024-128</p>
                    <p className="text-xs text-muted-foreground mt-1">متأخرة 3 أيام</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-purple/10 flex items-center justify-center shrink-0">
                    <Users className="h-4 w-4 text-purple" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">جدولة مراجعة الموظفين</p>
                    <p className="text-xs text-muted-foreground">مراجعة الأداء السنوية</p>
                    <p className="text-xs text-muted-foreground mt-1">الأسبوع القادم</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Summary */}
            <Card>
              <CardHeader>
                <CardTitle>الملخص المالي</CardTitle>
                <CardDescription>نظرة عامة على هذا الشهر</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">الساعات المفوترة</span>
                    <span className="font-semibold" dir="ltr">$98,500</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">المصروفات</span>
                    <span className="font-semibold text-destructive" dir="ltr">-$12,300</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">إيرادات أخرى</span>
                    <span className="font-semibold" dir="ltr">$37,800</span>
                  </div>
                  <div className="border-t border-border pt-2 mt-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">صافي الإيرادات</span>
                      <span className="font-bold text-lg text-accent" dir="ltr">$124,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Case Distribution & Activity */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Case Distribution */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>توزيع القضايا</CardTitle>
                  <CardDescription>القضايا النشطة حسب مجال الممارسة</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <BarChart3 className="h-4 w-4 ml-2" />
                  عرض التقرير
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium">قانون الشركات</span>
                    <span className="text-muted-foreground">15 قضية (31%)</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-magenta w-[31%]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium">قانون العمل</span>
                    <span className="text-muted-foreground">12 قضية (25%)</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-purple w-[25%]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium">عقارات</span>
                    <span className="text-muted-foreground">10 قضايا (21%)</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[21%]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium">قانون الأسرة</span>
                    <span className="text-muted-foreground">7 قضايا (15%)</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-magenta/70 w-[15%]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium">أخرى</span>
                    <span className="text-muted-foreground">4 قضايا (8%)</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-purple/70 w-[8%]" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>النشاط الأخير</CardTitle>
                  <CardDescription>أحدث التحديثات عبر المكتب</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Activity className="h-4 w-4 ml-2" />
                  عرض الكل
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3 pb-3 border-b border-border">
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">كسبت سارة جونسون القضية</p>
                  <p className="text-xs text-muted-foreground">تمت تسوية جونسون ضد شركة التقنية بشكل إيجابي</p>
                  <p className="text-xs text-muted-foreground mt-1">منذ ساعتين</p>
                </div>
              </div>

              <div className="flex gap-3 pb-3 border-b border-border">
                <div className="h-8 w-8 rounded-full bg-purple/10 flex items-center justify-center shrink-0">
                  <FileText className="h-4 w-4 text-purple" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">تم تعيين قضية جديدة لمايكل تشين</p>
                  <p className="text-xs text-muted-foreground">استشارة اندماج شركات</p>
                  <p className="text-xs text-muted-foreground mt-1">منذ 5 ساعات</p>
                </div>
              </div>

              <div className="flex gap-3 pb-3 border-b border-border">
                <div className="h-8 w-8 rounded-full bg-magenta/10 flex items-center justify-center shrink-0">
                  <DollarSign className="h-4 w-4 text-magenta" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">تم استلام الدفعة</p>
                  <p className="text-xs text-muted-foreground">فاتورة #INV-2024-125 - 8,500$</p>
                  <p className="text-xs text-muted-foreground mt-1">أمس</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Users className="h-4 w-4 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">انضمام عميل جديد</p>
                  <p className="text-xs text-muted-foreground">شركة تيك ستارت - ديفيد مارتينيز</p>
                  <p className="text-xs text-muted-foreground mt-1">قبل يومين</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
