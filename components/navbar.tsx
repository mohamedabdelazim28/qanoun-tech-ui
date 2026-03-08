import { Logo } from "./logo"
import { Button } from "./ui/button"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            الميزات
          </Link>
          <Link
            href="#solutions"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            الحلول
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            عن المنصة
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              تسجيل الدخول
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              ابدأ الآن
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
