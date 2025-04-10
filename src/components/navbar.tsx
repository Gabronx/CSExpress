"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [language, setLanguage] = React.useState<"en" | "ar">("en")

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold inline-block text-primary">CSExpress</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/"
              className={`flex items-center text-sm font-medium ${
                pathname === "/" ? "text-foreground" : "text-foreground/60"
              } transition-colors hover:text-foreground/80`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`flex items-center text-sm font-medium ${
                pathname === "/about" ? "text-foreground" : "text-foreground/60"
              } transition-colors hover:text-foreground/80`}
            >
              Sobre
            </Link>
            <Link
              href="/contact"
              className={`flex items-center text-sm font-medium ${
                pathname === "/contact" ? "text-foreground" : "text-foreground/60"
              } transition-colors hover:text-foreground/80`}
            >
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
                  <Languages className="h-4 w-4" />
                  <span className="sr-only">Switch language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "bg-muted" : ""}
                >
                  <span className="mr-2">🇬🇧</span> English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("ar")}
                  className={language === "ar" ? "bg-muted" : ""}
                >
                  <span className="mr-2">pt</span> Português
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign up</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
