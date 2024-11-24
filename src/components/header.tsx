import Link from "next/link";
import { homePath, ticketsPath } from "@/paths";
import { buttonVariants } from "@/components/ui/button";
import { LucideCloudLightning, LucideHandCoins, LucideCog, LucideBrainCog } from "lucide-react";

const Header = () => {
  return (
    <nav
      className="
        supports-backdrop-blur:bg-background/60
        fixed left-0 right-0 top-0 z-20
        border-b bg-background/95 backdrop-blur
        w-full flex py-2.5 px-5 justify-between
        "
    >
      <div>
        <Link href={homePath()} className={buttonVariants({ variant: "ghost"})}>
        <LucideCloudLightning/>
        <h1 className="text-lg font-semibold">TicketBounty</h1>
        <LucideBrainCog/>
        </Link>
      </div>
      <div>
        <Link href={ticketsPath()} className={buttonVariants({ variant: "default"})}>
        <LucideCog/>
          Tickets
        </Link>
      </div>
    </nav>
  );
}

export { Header };