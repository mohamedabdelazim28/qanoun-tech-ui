"use client"

import { useState } from "react"
import { ClientLayout } from "@/components/client-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  MapPin,
  Star,
  Briefcase,
  Building2,
  Users,
  CheckCircle2,
  Award,
  Clock,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

const MOCK_LAWYERS = [
  {
    id: 1,
    name: "د. سارة حسين",
    type: "lawyer",
    specialization: "قانون العمل والتأمينات",
    city: "القاهرة",
    rating: 4.9,
    reviewsCount: 189,
    experienceYears: 15,
    casesCompleted: 245,
    responseTime: "خلال ساعتين",
    verified: true,
    distance: 2.3,
    priceRange: "متوسط",
    languages: ["العربية", "الإنجليزية"],
  },
  {
    id: 2,
    name: "أ. محمد السيد",
    type: "lawyer" as const,
    specialization: "قانون الشركات والعقود التجارية",
    city: "الجيزة",
    rating: 4.8,
    reviewsCount: 167,
    experienceYears: 12,
    casesCompleted: 198,
    responseTime: "خلال 3 ساعات",
    verified: true,
    distance: 5.1,
    priceRange: "عالي",
    languages: ["العربية", "الإنجليزية", "الفرنسية"],
  },
  {
    id: 3,
    name: "أ. فاطمة أحمد",
    type: "lawyer" as const,
    specialization: "قانون الأحوال الشخصية",
    city: "الإسكندرية",
    rating: 4.7,
    reviewsCount: 134,
    experienceYears: 10,
    casesCompleted: 176,
    responseTime: "خلال 4 ساعات",
    verified: true,
    distance: 8.7,
    priceRange: "متوسط",
    languages: ["العربية"],
  },
]

const MOCK_OFFICES = [
  {
    id: 1,
    name: "مكتب النور للمحاماة والاستشارات القانونية",
    type: "office" as const,
    specializations: ["قانون الشركات", "قانون العمل", "القانون التجاري"],
    city: "القاهرة",
    rating: 4.9,
    reviewsCount: 312,
    lawyersCount: 12,
    casesCompleted: 890,
    establishedYear: 2008,
    verified: true,
    distance: 1.5,
    priceRange: "عالي",
  },
  {
    id: 2,
    name: "مكتب الخليج القانوني",
    type: "office" as const,
    specializations: ["قانون العقارات", "قانون البناء", "قانون الأراضي"],
    city: "الجيزة",
    rating: 4.8,
    reviewsCount: 278,
    lawyersCount: 8,
    casesCompleted: 654,
    establishedYear: 2012,
    verified: true,
    distance: 3.2,
    priceRange: "متوسط",
  },
  {
    id: 3,
    name: "مكتب العدالة للمحاماة",
    type: "office" as const,
    specializations: ["قانون جنائي", "قانون مدني", "قضايا الأسرة"],
    city: "المنصورة",
    rating: 4.6,
    reviewsCount: 198,
    lawyersCount: 6,
    casesCompleted: 445,
    establishedYear: 2015,
    verified: true,
    distance: 6.8,
    priceRange: "منخفض",
  },
]

const SPECIALIZATIONS = [
  "الكل",
  "قانون العمل",
  "قانون الشركات",
  "قانون العقارات",
  "قانون الأحوال الشخصية",
  "قانون الملكية الفكرية",
  "قانون تجاري",
  "قانون جنائي",
]

const CITIES = ["الكل", "القاهرة", "الجيزة", "الإسكندرية", "المنصورة", "طنطا", "سوهاج", "أسيوط"]

export default function DiscoveryPage() {
  const [searchType, setSearchType] = useState<"lawyers" | "offices">("lawyers")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("الكل")
  const [selectedCity, setSelectedCity] = useState("الكل")

  const baseData = searchType === "lawyers" ? MOCK_LAWYERS : MOCK_OFFICES
  const displayData = baseData.filter((item: any) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (item.type === "office" ? item.specializations.join(" ") : item.specialization).toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === "الكل" || item.city === selectedCity;
    const matchesSpec = selectedSpecialization === "الكل" || 
      (item.type === "office" 
        ? item.specializations.includes(selectedSpecialization) 
        : item.specialization.includes(selectedSpecialization));
    
    return matchesSearch && matchesCity && matchesSpec;
  })

  return (
    <ClientLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">اكتشف المحامين ومكاتب المحاماة</h1>
          <p className="text-muted-foreground mt-1">ابحث عن المحترفين القانونيين المناسبين لقضيتك</p>
        </div>

        {/* Search Type Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={searchType === "lawyers" ? "default" : "outline"}
            onClick={() => setSearchType("lawyers")}
            className={searchType === "lawyers" ? "" : "bg-transparent"}
          >
            <Briefcase className="h-4 w-4 ml-2" />
            محامين أفراد
          </Button>
          <Button
            variant={searchType === "offices" ? "default" : "outline"}
            onClick={() => setSearchType("offices")}
            className={searchType === "offices" ? "" : "bg-transparent"}
          >
            <Building2 className="h-4 w-4 ml-2" />
            مكاتب محاماة
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="md:col-span-2 relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder={searchType === "lawyers" ? "ابحث عن محامي..." : "ابحث عن مكتب محاماة..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pr-10"
                />
              </div>

              {/* Specialization Filter */}
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="h-12 px-3 rounded-lg border border-input bg-background text-foreground"
              >
                {SPECIALIZATIONS.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>

              {/* City Filter */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="h-12 px-3 rounded-lg border border-input bg-background text-foreground"
              >
                {CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Additional Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Star className="h-4 w-4" />
                تقييم 4.5+
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <CheckCircle2 className="h-4 w-4" />
                موثّق
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <MapPin className="h-4 w-4" />
                الأقرب إليّ
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Clock className="h-4 w-4" />
                استجابة سريعة
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Results */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                تم العثور على <span className="font-semibold text-foreground">{displayData.length}</span> نتيجة
              </p>
              <select className="text-sm px-3 py-1.5 rounded-lg border border-input bg-background">
                <option>الأعلى تقييماً</option>
                <option>الأقرب مسافة</option>
                <option>الأكثر خبرة</option>
                <option>الأسرع استجابة</option>
              </select>
            </div>

            {searchType === "lawyers"
              ? MOCK_LAWYERS.map((lawyer) => (
                  <Card key={lawyer.id} className="hover:border-accent/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Avatar */}
                        <div className="flex flex-col items-center gap-2 shrink-0">
                          <div className="h-24 w-24 rounded-full bg-purple/10 flex items-center justify-center">
                            <Briefcase className="h-10 w-10 text-purple" />
                          </div>
                          {lawyer.verified && (
                            <Badge variant="outline" className="gap-1 bg-accent/10 text-accent border-accent/20">
                              <CheckCircle2 className="h-3 w-3" />
                              موثّق
                            </Badge>
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 space-y-3">
                          <div>
                            <Link href={`/profiles/lawyer/${lawyer.id}`}>
                              <h3 className="text-xl font-bold hover:text-accent transition-colors cursor-pointer">
                                {lawyer.name}
                              </h3>
                            </Link>
                            <p className="text-muted-foreground mt-1">{lawyer.specialization}</p>
                          </div>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <div className="flex items-center gap-1 text-muted-foreground mb-1">
                                <Star className="h-4 w-4 fill-accent text-accent" />
                                <span className="font-semibold text-foreground">{lawyer.rating}</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{lawyer.reviewsCount} تقييم</p>
                            </div>

                            <div>
                              <div className="flex items-center gap-1 text-muted-foreground mb-1">
                                <Award className="h-4 w-4" />
                                <span className="font-semibold text-foreground">{lawyer.experienceYears} سنة</span>
                              </div>
                              <p className="text-xs text-muted-foreground">خبرة</p>
                            </div>

                            <div>
                              <div className="flex items-center gap-1 text-muted-foreground mb-1">
                                <CheckCircle2 className="h-4 w-4" />
                                <span className="font-semibold text-foreground">{lawyer.casesCompleted}</span>
                              </div>
                              <p className="text-xs text-muted-foreground">قضية منجزة</p>
                            </div>

                            <div>
                              <div className="flex items-center gap-1 text-muted-foreground mb-1">
                                <MapPin className="h-4 w-4" />
                                <span className="font-semibold text-foreground">{lawyer.distance} كم</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{lawyer.city}</p>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-secondary">
                              {lawyer.responseTime}
                            </Badge>
                            <Badge variant="outline" className="bg-secondary">
                              {lawyer.priceRange}
                            </Badge>
                            {lawyer.languages.map((lang) => (
                              <Badge key={lang} variant="outline" className="bg-secondary">
                                {lang}
                              </Badge>
                            ))}
                          </div>

                          {/* Actions */}
                          <div className="flex gap-3 pt-2">
                            <Link href={`/profiles/lawyer/${lawyer.id}`} className="flex-1">
                              <Button className="w-full">عرض الملف الشخصي</Button>
                            </Link>
                            <Link href={`/booking/lawyer/${lawyer.id}`}>
                              <Button variant="outline" className="bg-transparent">
                                احجز موعد
                              </Button>
                            </Link>
                            <Button variant="outline" size="icon" className="shrink-0 bg-transparent">
                              <MessageSquare className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : MOCK_OFFICES.map((office) => (
                  <Card key={office.id} className="hover:border-accent/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Logo */}
                        <div className="flex flex-col items-center gap-2 shrink-0">
                          <div className="h-24 w-24 rounded-lg bg-magenta/10 flex items-center justify-center">
                            <Building2 className="h-10 w-10 text-magenta" />
                          </div>
                          {office.verified && (
                            <Badge variant="outline" className="gap-1 bg-accent/10 text-accent border-accent/20">
                              <CheckCircle2 className="h-3 w-3" />
                              موثّق
                            </Badge>
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 space-y-3">
                          <div>
                            <Link href={`/profiles/office/${office.id}`}>
                              <h3 className="text-xl font-bold hover:text-accent transition-colors cursor-pointer">
                                {office.name}
                              </h3>
                            </Link>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {office.specializations.map((spec) => (
                                <Badge key={spec} variant="outline" className="bg-secondary text-xs">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <div className="flex items-center gap-1 text-muted-foreground mb-1">
                                <Star className="h-4 w-4 fill-accent text-accent" />
                                <span className="font-semibold text-foreground">{office.rating}</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{office.reviewsCount} تقييم</p>
                            </div>

                            <div>
                              <div className="flex items-center gap-1 text-muted-foreground mb-1">
                                <Users className="h-4 w-4" />
                                <span className="font-semibold text-foreground">{office.lawyersCount} محامي</span>
                              </div>
                              <p className="text-xs text-muted-foreground">الفريق</p>
                            </div>

                            <div>
                              <div className="flex items-center gap-1 text-muted-foreground mb-1">
                                <CheckCircle2 className="h-4 w-4" />
                                <span className="font-semibold text-foreground">{office.casesCompleted}</span>
                              </div>
                              <p className="text-xs text-muted-foreground">قضية منجزة</p>
                            </div>

                            <div>
                              <div className="flex items-center gap-1 text-muted-foreground mb-1">
                                <MapPin className="h-4 w-4" />
                                <span className="font-semibold text-foreground">{office.distance} كم</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{office.city}</p>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-secondary">
                              تأسس {office.establishedYear}
                            </Badge>
                            <Badge variant="outline" className="bg-secondary">
                              {office.priceRange}
                            </Badge>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-3 pt-2">
                            <Link href={`/profiles/office/${office.id}`} className="flex-1">
                              <Button className="w-full">عرض الملف المؤسسي</Button>
                            </Link>
                            <Link href={`/booking/office/${office.id}`}>
                              <Button variant="outline" className="bg-transparent">
                                احجز استشارة
                              </Button>
                            </Link>
                            <Button variant="outline" size="icon" className="shrink-0 bg-transparent">
                              <MessageSquare className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Popular Specializations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">التخصصات الشائعة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {SPECIALIZATIONS.slice(1, 8).map((spec) => (
                    <Badge
                      key={spec}
                      variant="outline"
                      className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card className="bg-gradient-to-br from-accent/10 to-purple/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-base">كيف تختار المحامي المناسب؟</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>اقرأ التقييمات والمراجعات</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>تحقق من التخصص والخبرة</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>راجع القضايا المنجزة</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>احجز استشارة أولية</span>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">إحصائيات المنصة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">محامين مسجلين</span>
                  <span className="font-semibold">850+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">مكاتب محاماة</span>
                  <span className="font-semibold">120+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">قضية منجزة</span>
                  <span className="font-semibold">12,500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">متوسط التقييم</span>
                  <span className="font-semibold">4.8 ⭐</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ClientLayout>
  )
}
