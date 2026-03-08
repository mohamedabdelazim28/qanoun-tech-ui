import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Scale,
  Users,
  FileText,
  Calendar,
  MessageSquare,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Building2,
  UserCircle,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
            <Zap className="h-4 w-4" />
            <span>منصة التكنولوجيا القانونية الاحترافية</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-balance tracking-tight text-foreground">
            إدارة الممارسة القانونية الحديثة للعصر الرقمي
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            بسّط سير عملك القانوني بأدوات قوية لإدارة القضايا، التعاون مع العملاء، وأتمتة الممارسات المصممة لمكاتب
            المحاماة الحديثة
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 h-12 px-8 text-base font-semibold">
                ابدأ مجاناً
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold bg-transparent">
                استكشف الميزات
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              <span className="font-medium">أمان على مستوى البنوك</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="font-medium">متوافق مع GDPR</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              <span className="font-medium">+10,000 محترف قانوني</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance text-foreground">
                كل ما تحتاجه لإدارة ممارستك القانونية
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                ميزات قوية مصممة لمساعدة المهنيين القانونيين على العمل بكفاءة أكبر
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-accent/50 transition-colors bg-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">إدارة القضايا</CardTitle>
                  <CardDescription className="leading-relaxed">
                    نظّم وتتبّع جميع قضاياك في منصة مركزية واحدة مع بحث وفلترة قوية
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-purple/50 transition-colors bg-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple/10 text-purple flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">أتمتة المهام</CardTitle>
                  <CardDescription className="leading-relaxed">
                    أتمت المهام الروتينية، المواعيد النهائية والتذكيرات لتجنب تفويت التواريخ المهمة
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-magenta/50 transition-colors bg-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-magenta/10 text-magenta flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">التواصل مع العملاء</CardTitle>
                  <CardDescription className="leading-relaxed">
                    نظام مراسلة آمن للتواصل السلس بين المحامين والعملاء
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors bg-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">التعاون الجماعي</CardTitle>
                  <CardDescription className="leading-relaxed">
                    تعاون مع فريقك في الوقت الفعلي مع المستندات ومذكرات القضايا المشتركة
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-purple/50 transition-colors bg-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple/10 text-purple flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">آمن ومتوافق</CardTitle>
                  <CardDescription className="leading-relaxed">
                    تشفير على مستوى البنوك وامتثال كامل لـ GDPR لحماية المعلومات القانونية الحساسة
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-magenta/50 transition-colors bg-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-magenta/10 text-magenta flex items-center justify-center mb-4">
                    <Scale className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold">تحليلات قانونية</CardTitle>
                  <CardDescription className="leading-relaxed">
                    تتبع نتائج القضايا، مقاييس الأداء والرؤى المالية مع تحليلات شاملة
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions for different roles */}
      <section id="solutions" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-foreground">مصمم لكل محترف قانوني</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              تجارب مخصصة للعملاء، المحامين الأفراد، ومكاتب المحاماة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden border-2 bg-card">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple" />
              <CardHeader className="text-center pb-6">
                <div className="h-16 w-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                  <UserCircle className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold">للعملاء</CardTitle>
                <CardDescription className="text-base">الوصول إلى الخدمات القانونية بسهولة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">ابحث وتواصل مع محامين مؤهلين</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">تتبع تقدم قضيتك في الوقت الفعلي</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">مراسلة آمنة مع فريقك القانوني</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">الوصول إلى المستندات والتحديثات فوراً</span>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 bg-card">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple to-magenta" />
              <CardHeader className="text-center pb-6">
                <div className="h-16 w-16 rounded-full bg-purple/10 text-purple flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold">للمحامين</CardTitle>
                <CardDescription className="text-base">إدارة ممارستك بكفاءة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">إدارة القضايا والعلاقات مع العملاء</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">أتمت المهام والمواعيد النهائية</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">تتبع الساعات القابلة للفوترة والنفقات</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">بناء ملفك المهني</span>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 bg-card">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-magenta to-accent" />
              <CardHeader className="text-center pb-6">
                <div className="h-16 w-16 rounded-full bg-magenta/10 text-magenta flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold">لمكاتب المحاماة</CardTitle>
                <CardDescription className="text-base">توسيع عمليات شركتك</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-magenta shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">التعاون والإدارة الجماعية</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-magenta shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">التتبع المالي وإعداد التقارير</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-magenta shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">إدارة محفظة العملاء</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-magenta shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">تحليلات ورؤى الأداء</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-purple to-magenta text-primary-foreground border-0 shadow-xl">
          <CardHeader className="text-center space-y-6 py-16">
            <CardTitle className="text-3xl md:text-4xl font-bold text-balance">
              هل أنت مستعد لتحويل ممارستك القانونية؟
            </CardTitle>
            <CardDescription className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              انضم إلى آلاف المهنيين القانونيين الذين يثقون في قانون تك لإدارة ممارساتهم
            </CardDescription>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 h-12 px-8 text-base font-semibold"
                >
                  ابدأ التجربة المجانية
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                احجز عرضاً توضيحياً
              </Button>
            </div>
          </CardHeader>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <img src="/images/logo-horizontal.png" alt="Qanoun Tech" className="h-8" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                منصة تكنولوجيا قانونية احترافية لمكاتب المحاماة الحديثة
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">المنتج</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground transition-colors">
                    الميزات
                  </Link>
                </li>
                <li>
                  <Link href="#solutions" className="hover:text-foreground transition-colors">
                    الحلول
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-foreground transition-colors">
                    الأسعار
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">الشركة</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    اتصل بنا
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-foreground transition-colors">
                    الوظائف
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">القانونية</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    شروط الخدمة
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-foreground transition-colors">
                    الأمان
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2025 قانون تك. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  )
}
