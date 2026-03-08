import { ClientLayout } from "@/components/client-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  MessageSquare,
  ThumbsUp,
  Eye,
  CheckCircle2,
  TrendingUp,
  Clock,
  Scale,
  Plus,
  Filter,
} from "lucide-react"
import Link from "next/link"

const MOCK_QUESTIONS = [
  {
    id: 1,
    title: "ما هي حقوقي القانونية في حالة فصل تعسفي من العمل؟",
    description: "تم فصلي من عملي دون سابق إنذار بعد 5 سنوات من الخدمة. ما هي الخطوات القانونية التي يمكنني اتخاذها؟",
    category: "قانون العمل",
    askedBy: "أحمد محمد",
    askedAt: "منذ 3 ساعات",
    views: 124,
    answers: 3,
    likes: 15,
    hasAcceptedAnswer: true,
    tags: ["فصل تعسفي", "حقوق العمال", "تعويضات"],
  },
  {
    id: 2,
    title: "كيف أسجل علامة تجارية لمشروعي الجديد؟",
    description: "أرغب في تسجيل علامة تجارية لمشروعي الناشئ. ما هي المتطلبات والإجراءات اللازمة؟ وكم تستغرق العملية؟",
    category: "قانون الملكية الفكرية",
    askedBy: "سارة أحمد",
    askedAt: "منذ 5 ساعات",
    views: 89,
    answers: 5,
    likes: 22,
    hasAcceptedAnswer: true,
    tags: ["علامة تجارية", "ملكية فكرية", "مشاريع ناشئة"],
  },
  {
    id: 3,
    title: "هل يمكنني إلغاء عقد إيجار قبل انتهاء مدته؟",
    description: "وقعت عقد إيجار لمدة سنة ولكن اضطررت للانتقال إلى مدينة أخرى لظروف العمل. ما هي حقوقي والتزاماتي؟",
    category: "قانون العقارات",
    askedBy: "محمد علي",
    askedAt: "منذ يوم",
    views: 156,
    answers: 7,
    likes: 31,
    hasAcceptedAnswer: false,
    tags: ["عقد إيجار", "إلغاء عقد", "عقارات"],
  },
  {
    id: 4,
    title: "ما هي خطوات تأسيس شركة ذات مسؤولية محدودة؟",
    description: "أريد تأسيس شركة ذات مسؤولية محدودة مع شريكين. ما هي الوثائق المطلوبة والإجراءات القانونية؟",
    category: "قانون الشركات",
    askedBy: "فاطمة حسن",
    askedAt: "منذ يومين",
    views: 203,
    answers: 4,
    likes: 45,
    hasAcceptedAnswer: true,
    tags: ["تأسيس شركة", "شركات", "قانون تجاري"],
  },
  {
    id: 5,
    title: "كيف أحمي اختراعي قانونياً؟",
    description: "طورت اختراع جديد في مجال التكنولوجيا وأريد حمايته قبل تسويقه. ما هي الخطوات القانونية؟",
    category: "قانون الملكية الفكرية",
    askedBy: "خالد إبراهيم",
    askedAt: "منذ 3 أيام",
    views: 178,
    answers: 6,
    likes: 38,
    hasAcceptedAnswer: true,
    tags: ["براءة اختراع", "حماية الاختراعات", "ملكية فكرية"],
  },
  {
    id: 6,
    title: "ما هي حقوق الورثة في توزيع التركة؟",
    description: "توفي والدي وترك تركة. كيف يتم توزيع التركة بين الورثة وفقاً للقانون؟ هل نحتاج محامي؟",
    category: "قانون الأحوال الشخصية",
    askedBy: "ليلى محمود",
    askedAt: "منذ 4 أيام",
    views: 267,
    answers: 8,
    likes: 52,
    hasAcceptedAnswer: false,
    tags: ["ميراث", "توزيع تركة", "أحوال شخصية"],
  },
]

const CATEGORIES = [
  "الكل",
  "قانون العمل",
  "قانون العقارات",
  "قانون الشركات",
  "قانون الملكية الفكرية",
  "قانون الأحوال الشخصية",
  "قانون تجاري",
]

export default function ConsultationsPage() {
  return (
    <ClientLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">الاستشارات القانونية</h1>
            <p className="text-muted-foreground mt-1">اطرح أسئلتك القانونية واحصل على إجابات من محامين محترفين</p>
          </div>
          <Link href="/consultations/ask">
            <Button size="lg" className="gap-2">
              <Plus className="h-5 w-5" />
              اطرح سؤالاً
            </Button>
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-sm text-muted-foreground">سؤال</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-purple/10 text-purple flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">3,892</div>
                  <div className="text-sm text-muted-foreground">إجابة</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-magenta/10 text-magenta flex items-center justify-center">
                  <Scale className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm text-muted-foreground">محامي نشط</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm text-muted-foreground">تم الإجابة عليها</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="ابحث عن سؤال قانوني..." className="h-12 pr-10" />
            </div>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              <Filter className="h-5 w-5" />
              فلترة
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={category === "الكل" ? "default" : "outline"}
                size="sm"
                className={category === "الكل" ? "" : "bg-transparent"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Questions List */}
          <div className="lg:col-span-3 space-y-4">
            {MOCK_QUESTIONS.map((question) => (
              <Card key={question.id} className="hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <Link href={`/consultations/${question.id}`}>
                        <CardTitle className="text-xl hover:text-accent transition-colors cursor-pointer">
                          {question.title}
                        </CardTitle>
                      </Link>
                      <CardDescription className="mt-2 leading-relaxed">{question.description}</CardDescription>
                    </div>
                    {question.hasAcceptedAnswer && (
                      <div className="shrink-0">
                        <div className="h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {question.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Scale className="h-4 w-4" />
                      <span>{question.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{question.answers} إجابة</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{question.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{question.views} مشاهدة</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{question.askedAt}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-muted-foreground">طرحه: </span>
                        <span className="font-medium text-foreground">{question.askedBy}</span>
                      </div>
                      <Link href={`/consultations/${question.id}`}>
                        <Button variant="ghost" size="sm">
                          عرض التفاصيل
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Lawyers */}
            <Card>
              <CardHeader>
                <CardTitle>أكثر المحامين نشاطاً</CardTitle>
                <CardDescription>الأكثر إجابة على الأسئلة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple/10 flex items-center justify-center shrink-0">
                    <span className="font-semibold text-purple">م.س</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">محمد السيد</p>
                    <p className="text-xs text-muted-foreground">189 إجابة • تقييم 4.9</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="font-semibold text-accent">س.ح</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">سارة حسن</p>
                    <p className="text-xs text-muted-foreground">167 إجابة • تقييم 4.8</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-magenta/10 flex items-center justify-center shrink-0">
                    <span className="font-semibold text-magenta">أ.م</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">أحمد محمود</p>
                    <p className="text-xs text-muted-foreground">145 إجابة • تقييم 4.7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle>المواضيع الشائعة</CardTitle>
                <CardDescription>الأكثر بحثاً</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                    عقود العمل
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                    تأسيس شركات
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                    عقارات
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                    ملكية فكرية
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                    ميراث
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                    تعويضات
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card className="bg-gradient-to-br from-accent/10 to-purple/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-lg">كيف تطرح سؤالاً جيداً؟</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>اكتب عنواناً واضحاً ومحدداً</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>اشرح المشكلة بالتفصيل</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>أضف الوثائق ذات الصلة</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>اختر التصنيف المناسب</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ClientLayout>
  )
}
