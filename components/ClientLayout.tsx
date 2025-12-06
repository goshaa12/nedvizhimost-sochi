"use client"

import { ReactNode } from "react"
import { BookingProvider } from "@/lib/booking-context"

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <BookingProvider>
      {children}
    </BookingProvider>
  )
}

