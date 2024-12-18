"use server";

import { redirect } from "next/navigation";
import { ticketsPath, ticketPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export const upsertTicket = async (id: string | undefined, formData: FormData) => {
  const data = {
    title: formData.get("title") as string,
    content: formData.get("content") as string
  };

  await prisma.ticket.upsert({
    where: {
      id: id  || "",
    },
    update: data,
    create: data,
   });

  revalidatePath(ticketsPath());

  if(id) {
    redirect(ticketPath(id));
  }
};
