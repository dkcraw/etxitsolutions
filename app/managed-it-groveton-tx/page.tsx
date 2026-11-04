import type { Metadata } from "next"
import { TownPage } from "@/components/town-page"
import { getTown, townMetadata } from "@/lib/towns"

const town = getTown("groveton")

export const metadata: Metadata = townMetadata(town)

export default function Page() {
  return <TownPage town={town} />
}
