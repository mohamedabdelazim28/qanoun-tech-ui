import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  ThumbsUp,
  MessageSquare,
  Eye,
  Clock,
  Scale,
  CheckCircle2,
  Star,
  Award,
  Briefcase,
  Share2,
  Bookmark,
} from "lucide-react"
import Link from "next/link"

const MOCK_QUESTION = {
  id: 1,
  title: "ما هي حقوقي القانونية في حالة فصل تعسفي من العمل؟",
  description:
    "تم فصلي من عملي دون سابق إنذار بعد 5 سنوات من الخدمة في شركة خاصة. لم أحصل على أي تحذيرات مسبقة ولم يتم إخطاري بأسباب واضحة للفصل. كنت أعمل كمدير مبيعات وكان أدائي جيداً حسب التقييمات السنوية. \n\nأريد معرفة: \n1. هل يحق لي الحصول على تعويض؟\n2. ما هي المدة القانونية للإخطار المسبق؟\n3. هل يمكنني رفع دعوى قضائية؟\n4. ما هي الوثائق التي يجب أن أجمعها؟",
  category: "قانون العمل",
  askedBy: {
    name: "أحمد محمد",
    role: "عميل",
    questionsAsked: 3,
    joinedAt: "منذ 6 أشهر",
  },
  askedAt: "منذ 3 ساعات",
  views: 124,
  likes: 15,
  tags: ["فصل تعسفي", "حقوق العمال", "تعويضات"],
  answers: [
    {
      id: 1,
      lawyer: {
        name: "د. سارة حسين",
        specialization: "محامية متخصصة في قانون العمل",
        experience: "15 سنة خبرة",
        answersCount: 189,
        rating: 4.9,
        verified: true,
      },
      content:
        "بناءً على المعلومات التي قدمتها، لديك حقوق قانونية واضحة في هذه الحالة:\n\n1. **حق التعويض**: نعم، يحق لك الحصول على تعويض عن الفصل التعسفي وفقاً لقانون العمل. التعويض يشمل:\n   - راتب شهر عن كل سنة خدمة (5 أشهر في حالتك)\n   - مستحقات نهاية الخدمة\n   - الإجازات غير المستخدمة\n\n2. **الإخطار المسبق**: يجب على صاحب العمل إخطارك قبل 30 يوماً على الأقل، أو دفع بدل الإخطار.\n\n3. **الدعوى القضائية**: يمكنك رفع دعوى فصل تعسفي خلال سنة من تاريخ الفصل.\n\n4. **الوثائق المطلوبة**:\n   - عقد العمل\n   - كشوف المرتبات\n   - خطاب الفصل (إن وجد)\n   - تقييمات الأداء\n   - أي مراسلات مع صاحب العمل\n\nأنصحك بالتواصل مع محامي متخصص لدراسة حالتك بشكل تفصيلي واتخاذ الإجراءات القانونية المناسبة.",
      postedAt: "منذ ساعتين",
      likes: 28,
      isAccepted: true,
    },
    {
      id: 2,
      lawyer: {
        name: "أ. محمد السيد",
        specialization: "محامي قانون العمل والتأمينات",
        experience: "12 سنة خبرة",
        answersCount: 167,
        rating: 4.8,
        verified: true,
      },
      content:
        "أضيف على الإجابة الممتازة للزميلة د. سارة بعض النقاط المهمة:\n\n**خطوات عملية يجب اتخاذها فوراً:**\n\n1. **التوثيق الفوري**: اجمع كل الوثائق المتعلقة بعملك فوراً قبل أن تفقد الوصول إليها.\n\n2. **الشهود**: إذا كان هناك زملاء شهدوا على أدائك الجيد، احصل على معلومات الاتصال بهم.\n\n3. **مكتب العمل**: يمكنك تقديم شكوى لمكتب العمل أولاً قبل اللجوء للمحكمة. هذه خطوة مهمة وقد تحل المشكلة بشكل أسرع.\n\n4. **التسوية الودية**: حاول التواصل مع الشركة للوصول لتسوية ودية، فهذا سيوفر عليك الوقت والجهد.\n\nمع تحياتي، وأتمنى لك التوفيق في حل هذه المشكلة.",
      postedAt: "منذ ساعة",
      likes: 12,
      isAccepted: false,
    },
    {
      id: 3,
      lawyer: {
        name: "أ. خالد إبراهيم",
        specialization: "محامي عمالي",
        experience: "8 سنوات خبرة",
        answersCount: 98,
        rating: 4.7,
        verified: true,
      },
      content:
        "نقطة مهمة يجب التأكد منها: **نوع العقد**\n\nإذا كان عقدك محدد المدة أو غير محدد المدة، فهذا يؤثر على حقوقك:\n\n- **عقد غير محدد المدة**: لك الحق في كل ما ذكر أعلاه\n- **عقد محدد المدة**: قد تختلف الحقوق قليلاً\n\nأيضاً، تأكد من أن الشركة مسجلة في التأمينات الاجتماعية، فهذا يعطيك حقوق إضافية.\n\nإذا احتجت استشارة مفصلة، يمكنك حجز موعد معي عبر المنصة.",
      postedAt: "منذ 30 دقيقة",
      likes: 8,
      isAccepted: false,
    },
  ],
}

export default function ConsultationDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/consultations" className="hover:text-foreground">
              الاستشارات القانونية
            </Link>
            <span>/</span>
            <span className="text-foreground">{MOCK_QUESTION.category}</span>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Question Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                        {MOCK_QUESTION.title}
                      </h1>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Share2 className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Bookmark className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {MOCK_QUESTION.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Scale className="h-4 w-4" />
                      <span>{MOCK_QUESTION.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{MOCK_QUESTION.askedAt}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{MOCK_QUESTION.views} مشاهدة</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{MOCK_QUESTION.answers.length} إجابة</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Question Content */}
                  <div className="prose prose-slate max-w-none">
                    <p className="text-foreground leading-relaxed whitespace-pre-line">{MOCK_QUESTION.description}</p>
                  </div>

                  {/* Question Author */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <span className="font-semibold text-accent">
                            {MOCK_QUESTION.askedBy.name.split(" ")[0][0]}
                            {MOCK_QUESTION.askedBy.name.split(" ")[1]?.[0]}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{MOCK_QUESTION.askedBy.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {MOCK_QUESTION.askedBy.questionsAsked} أسئلة • {MOCK_QUESTION.askedBy.joinedAt}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                        <ThumbsUp className="h-4 w-4" />
                        {MOCK_QUESTION.likes}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Answers Section */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{MOCK_QUESTION.answers.length} إجابة</h2>

                <div className="space-y-4">
                  {MOCK_QUESTION.answers.map((answer) => (
                    <Card key={answer.id} className={answer.isAccepted ? "border-accent border-2" : ""}>
                      {answer.isAccepted && (
                        <div className="bg-accent/10 px-6 py-2 border-b border-accent/20">
                          <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>إجابة مقبولة من طارح السؤال</span>
                          </div>
                        </div>
                      )}

                      <CardContent className="pt-6 space-y-4">
                        {/* Lawyer Info */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <div className="h-12 w-12 rounded-full bg-purple/10 flex items-center justify-center shrink-0">
                              <span className="font-semibold text-purple">
                                {answer.lawyer.name.split(" ")[1]?.[0] || answer.lawyer.name[0]}
                                {answer.lawyer.name.split(" ")[2]?.[0] || ""}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <Link href={`/profiles/lawyer/${answer.id}`}>
                                  <h3 className="font-bold hover:text-accent transition-colors cursor-pointer">
                                    {answer.lawyer.name}
                                  </h3>
                                </Link>
                                {answer.lawyer.verified && <CheckCircle2 className="h-4 w-4 text-accent" />}
                              </div>
                              <p className="text-sm text-muted-foreground">{answer.lawyer.specialization}</p>
                              <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Briefcase className="h-3 w-3" />
                                  <span>{answer.lawyer.experience}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MessageSquare className="h-3 w-3" />
                                  <span>{answer.lawyer.answersCount} إجابة</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="h-3 w-3 fill-accent text-accent" />
                                  <span>{answer.lawyer.rating}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground">{answer.postedAt}</div>
                        </div>

                        {/* Answer Content */}
                        <div className="prose prose-slate max-w-none">
                          <p className="text-foreground leading-relaxed whitespace-pre-line">{answer.content}</p>
                        </div>

                        {/* Answer Actions */}
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                            <ThumbsUp className="h-4 w-4" />
                            مفيد ({answer.likes})
                          </Button>
                          <Link href={`/profiles/lawyer/${answer.id}`}>
                            <Button variant="ghost" size="sm">
                              عرض الملف الشخصي
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Add Answer Form */}
              <Card>
                <CardHeader>
                  <CardTitle>أضف إجابتك</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea placeholder="شارك معرفتك القانونية واكتب إجابة مفصلة..." className="min-h-[150px]" />
                  <div className="flex justify-end gap-3">
                    <Button variant="outline">معاينة</Button>
                    <Button>نشر الإجابة</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Lawyer CTA */}
              <Card className="bg-gradient-to-br from-purple/10 to-accent/10 border-purple/20">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="h-12 w-12 rounded-full bg-purple/20 flex items-center justify-center mx-auto">
                    <Award className="h-6 w-6 text-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold">محامي؟</h3>
                    <p className="text-sm text-muted-foreground mt-1">ساعد الناس وابني سمعتك المهنية</p>
                  </div>
                  <Link href="/consultations">
                    <Button className="w-full bg-transparent" variant="outline">
                      ابدأ الإجابة
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Similar Questions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">أسئلة مشابهة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/consultations/2" className="block text-sm hover:text-accent transition-colors">
                    هل يحق للشركة تخفيض راتبي دون موافقتي؟
                  </Link>
                  <Link href="/consultations/3" className="block text-sm hover:text-accent transition-colors">
                    ما هي مدة الإنذار القانونية قبل الفصل؟
                  </Link>
                  <Link href="/consultations/4" className="block text-sm hover:text-accent transition-colors">
                    كيف أحسب مستحقات نهاية الخدمة؟
                  </Link>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">إحصائيات السؤال</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">مرات المشاهدة</span>
                    <span className="font-semibold">{MOCK_QUESTION.views}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">الإعجابات</span>
                    <span className="font-semibold">{MOCK_QUESTION.likes}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">الإجابات</span>
                    <span className="font-semibold">{MOCK_QUESTION.answers.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">تاريخ النشر</span>
                    <span className="font-semibold">{MOCK_QUESTION.askedAt}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
