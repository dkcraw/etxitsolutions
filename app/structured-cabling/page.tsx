import type { Metadata } from "next"
import { CablingPage } from "@/components/cabling-page"
import { pageMetadata } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Structured Cabling & Projects in East Texas | ETX IT Solutions",
  description:
    "Cat6, Cat6A, and fiber installation from ETX IT Solutions in Lufkin, including bank-branch retrofits and network room build-outs. Call 936-674-5440.",
  path: "/structured-cabling",
})

export default function Page() {
  return <CablingPage />
}
