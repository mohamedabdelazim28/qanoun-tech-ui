import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  MapPin,
  Star,
  Award,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Share2,
  Clock,
  Users,
  TrendingUp,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

const MOCK_LAWYERS_DATA = [
  {
    id: 1,
    name: "د. سارة حسين",
    title: "محامية متخصصة في قانون العمل والتأمينات الاجتماعية",
    bio: "محامية معتمدة مع أكثر من 15 عاماً من الخبرة في مجال قانون العمل والتأمينات الاجتماعية. حاصلة على دكتوراه في القانون من جامعة القاهرة. متخصصة في قضايا الفصل التعسفي، النزاعات العمالية، عقود العمل، والتأمينات الاجتماعية. عملت كمستشارة قانونية لعدة شركات كبرى وساعدت مئات العملاء في الحصول على حقوقهم القانونية.",
    specializations: ["قانون العمل", "التأمينات الاجتماعية", "النزاعات العمالية", "عقود العمل"],
    city: "القاهرة",
  rating: 4.9,
  reviewsCount: 189,
  experienceYears: 15,
  casesCompleted: 245,
  answersCount: 189,
  verified: true,
  languages: ["العربية", "الإنجليزية"],
  education: [
    {
      degree: "دكتوراه في القانون",
      institution: "جامعة القاهرة",
      year: "2008",
    },
    {
      degree: "ماجستير في القانون المدني",
      institution: "جامعة عين شمس",
      year: "2005",
    },
    {
      degree: "بكالوريوس في الحقوق",
      institution: "جامعة الإسكندرية",
      year: "2002",
    },
  ],
  certifications: ["عضو نقابة المحامين المصريين", "محامية معتمدة من وزارة العدل", "شهادة في التحكيم التجاري الدولي"],
  achievements: [
    {
      title: "جائزة أفضل محامي في قانون العمل",
      year: "2023",
      description: "جائزة من نقابة المحامين",
    },
    {
      title: "نسبة نجاح 95% في قضايا الفصل التعسفي",
      year: "2022",
      description: "تحقيق أعلى نسبة نجاح في المنطقة",
    },
    {
      title: "أكثر من 200 قضية ناجحة",
      year: "2021",
      description: "إنجاز 200 قضية بنتائج إيجابية للعملاء",
    },
  ],
  recentActivity: [
    {
      type: "answer",
      title: "أجابت على سؤال حول حقوق العمال في حالة الفصل التعسفي",
      date: "منذ ساعتين",
      likes: 28,
    },
    {
      type: "achievement",
      title: "حققت نسبة نجاح 95% في قضايا العمل",
      date: "منذ أسبوع",
      likes: 156,
    },
    {
      type: "answer",
      title: "أجابت على سؤال حول التأمينات الاجتماعية",
      date: "منذ أسبوعين",
      likes: 42,
    },
  ],
  reviews: [
    {
      author: "أحمد محمد",
      rating: 5,
      date: "منذ أسبوع",
      comment: "محامية ممتازة جداً، ساعدتني في قضية فصل تعسفي وحصلت على كامل حقوقي. احترافية عالية وتواصل ممتاز.",
    },
    {
      author: "فاطمة علي",
      rating: 5,
      date: "منذ أسبوعين",
      comment: "خبرة واسعة وفهم عميق لقانون العمل. أنصح بها بشدة لأي شخص لديه مشكلة عمالية.",
    },
    {
      author: "خالد إبراهيم",
      rating: 4,
      date: "منذ شهر",
      comment: "محامية متميزة ومتعاونة. استجابة سريعة ومتابعة دقيقة للقضية.",
    },
  ],
  },
  {
    id: 2,
    name: "أ. محمد السيد",
    title: "محامي متخصص في قانون الشركات والعقود التجارية",
    bio: "خبير قانوني ذو باع طويل في تأسيس الشركات وصياغة العقود التجارية المعقدة.",
    specializations: ["قانون الشركات", "الطرح العام", "الاندماج والاستحواذ", "التجارة الدولية"],
    city: "الجيزة",
    rating: 4.8,
    reviewsCount: 167,
    experienceYears: 12,
    casesCompleted: 198,
    answersCount: 125,
    verified: true,
    languages: ["العربية", "الإنجليزية", "الفرنسية"],
    education: [
      { degree: "ماجستير قانون الشركات", institution: "جامعة القاهرة", year: "2010" }
    ],
    certifications: ["محامي معتمد لدى محكمة النقض"],
    achievements: [],
    recentActivity: [],
    reviews: []
  },
  {
    id: 3,
    name: "أ. فاطمة أحمد",
    title: "محامية متخصصة في قانون الأحوال الشخصية",
    bio: "محامية ذات خبرة كبيرة في حل النزاعات الأسرية وقضايا الأحوال الشخصية بمنتهى السرية والاحترافية.",
    specializations: ["قانون الأحوال الشخصية", "قضايا أسرية", "حضانة", "ميراث"],
    city: "الإسكندرية",
    rating: 4.7,
    reviewsCount: 134,
    experienceYears: 10,
    casesCompleted: 176,
    answersCount: 95,
    verified: true,
    languages: ["العربية"],
    education: [
      { degree: "بكالوريوس حقوق", institution: "جامعة الإسكندرية", year: "2013" }
    ],
    certifications: ["عضو اتحاد المحامين العرب"],
    achievements: [],
    recentActivity: [],
    reviews: []
  }
]

export default async function LawyerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profileId = parseInt(id) || 1;
  const MOCK_LAWYER_PROFILE = MOCK_LAWYERS_DATA.find((p) => p.id === profileId) || {
    ...MOCK_LAWYERS_DATA[0],
    id: profileId,
    name: "محامي غير معروف",
    city: "غير متاح"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Card */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar */}
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <div className="h-32 w-32 rounded-full bg-purple/10 flex items-center justify-center">
                    <Briefcase className="h-16 w-16 text-purple" />
                  </div>
                  {MOCK_LAWYER_PROFILE.verified && (
                    <Badge className="gap-1 bg-accent/10 text-accent border-accent/20">
                      <CheckCircle2 className="h-4 w-4" />
                      محامي موثّق
                    </Badge>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h1 className="text-3xl font-bold text-foreground">{MOCK_LAWYER_PROFILE.name}</h1>
                        <p className="text-lg text-muted-foreground mt-1">{MOCK_LAWYER_PROFILE.title}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="bg-transparent">
                          <Share2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-accent text-accent" />
                      <div>
                        <div className="font-bold text-lg">{MOCK_LAWYER_PROFILE.rating}</div>
                        <div className="text-xs text-muted-foreground">{MOCK_LAWYER_PROFILE.reviewsCount} تقييم</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-purple" />
                      <div>
                        <div className="font-bold text-lg">{MOCK_LAWYER_PROFILE.experienceYears}</div>
                        <div className="text-xs text-muted-foreground">سنة خبرة</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-magenta" />
                      <div>
                        <div className="font-bold text-lg">{MOCK_LAWYER_PROFILE.casesCompleted}</div>
                        <div className="text-xs text-muted-foreground">قضية منجزة</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-accent" />
                      <div>
                        <div className="font-bold text-lg">{MOCK_LAWYER_PROFILE.answersCount}</div>
                        <div className="text-xs text-muted-foreground">إجابة</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-purple" />
                      <div>
                        <div className="font-bold text-lg truncate">{MOCK_LAWYER_PROFILE.city}</div>
                        <div className="text-xs text-muted-foreground">الموقع</div>
                      </div>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="flex flex-wrap gap-2">
                    {MOCK_LAWYER_PROFILE.specializations.map((spec) => (
                      <Badge key={spec} variant="outline" className="bg-secondary">
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/booking/lawyer/${MOCK_LAWYER_PROFILE.id}`}>
                      <Button size="lg" className="gap-2">
                        <Calendar className="h-5 w-5" />
                        احجز موعد استشاري
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                      <MessageSquare className="h-5 w-5" />
                      أرسل رسالة
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>نبذة تعريفية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{MOCK_LAWYER_PROFILE.bio}</p>
                </CardContent>
              </Card>

              {/* Education */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-accent" />
                    المؤهلات العلمية
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {MOCK_LAWYER_PROFILE.education.map((edu, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground mt-1">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple" />
                    الإنجازات والجوائز
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {MOCK_LAWYER_PROFILE.achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="h-12 w-12 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                        <Award className="h-6 w-6 text-purple" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                          <Badge variant="outline" className="bg-secondary text-xs">
                            {achievement.year}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-magenta" />
                    النشاط الأخير
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {MOCK_LAWYER_PROFILE.recentActivity.map((activity, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div
                        className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${
                          activity.type === "answer" ? "bg-accent/10" : "bg-magenta/10"
                        }`}
                      >
                        {activity.type === "answer" ? (
                          <MessageSquare className={`h-5 w-5 ${activity.type === "answer" ? "text-accent" : ""}`} />
                        ) : (
                          <Award className="h-5 w-5 text-magenta" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{activity.title}</p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                          <span>{activity.date}</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-accent text-accent" />
                            <span>{activity.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    التقييمات ({MOCK_LAWYER_PROFILE.reviewsCount})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {MOCK_LAWYER_PROFILE.reviews.map((review, index) => (
                    <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold text-foreground">{review.author}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex gap-0.5">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">معلومات الاتصال</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{MOCK_LAWYER_PROFILE.city}, جمهورية مصر العربية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>يستجيب خلال ساعتين عادة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>متاح للاستشارات الفورية</span>
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">اللغات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {MOCK_LAWYER_PROFILE.languages.map((lang) => (
                      <Badge key={lang} variant="outline" className="bg-secondary">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">الشهادات والعضويات</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {MOCK_LAWYER_PROFILE.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-accent/10 to-purple/10 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-base">هل تحتاج مساعدة قانونية؟</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    احجز استشارة مع د. سارة واحصل على مشورة قانونية متخصصة
                  </p>
                  <Link href={`/booking/lawyer/${MOCK_LAWYER_PROFILE.id}`}>
                    <Button className="w-full">احجز موعد الآن</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
