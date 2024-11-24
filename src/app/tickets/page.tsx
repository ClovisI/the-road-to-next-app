import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "@/components/ui/card";
import { LucideClockAlert, LucideMonitorCog, LucideCircleCheckBig } from "lucide-react";
import { Heading } from "@/components/heading";



const TICKET_ICONS = {
  OPEN: <LucideClockAlert />,
  IN_PROGRESS: <LucideMonitorCog />,
  DONE: <LucideCircleCheckBig />,
};

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets in one place"/>

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <Card
            key={ticket.id}
            className ="w-full max-w-[420px] p-4"
          //className="w-full max-w-[420px] p-4 border border-slate-100 rounded"
          >
          <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
              <span className="truncate">{ticket.title}</span>
          </CardTitle>
          </CardHeader>
          <CardContent>
              <span className="line-clamp-3 whitespace-break-space">
                {ticket.content}
              </span>
              </CardContent>
              <CardFooter>
              <Link href={ticketPath(ticket.id)} className="text-sm underline">
                View
              </Link>
              </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  );
};
export default TicketsPage;
