"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Theme = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Image src="/icons/sun.svg" alt="Sun" width={24} height={24} className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"/>
          <Image src="/icons/moon.svg" alt="Moon" width={24} height={24} className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Theme