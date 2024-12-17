import { Suspense } from "react";
import { Heading } from "@/components/heading";
import { TicketList } from "../features/ticket/components/ticket-list";
import { Spinner } from "@/components/spinner";
import { ErrorBoundary } from "react-error-boundary";
import { Placeholder } from "@/components/Placeholder";
import { TicketUpsertForm } from "@/app/features/ticket/components/ticket-upsert-form";
import { CardCompact } from "@/components/card-compact";


const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets in one place"/>
    <ErrorBoundary fallback={<Placeholder label="Something went wrong"/>}>

    <CardCompact
      title = "Create Ticket"
      description = "A new ticket will be created"
      className = "w-full max-w-[420px] self-center"
      content = {<TicketUpsertForm />}
     />

    <Suspense fallback={<Spinner />}>
      <TicketList/>
    </Suspense>
    </ErrorBoundary>
    </div>
  );
};
export default TicketsPage;
