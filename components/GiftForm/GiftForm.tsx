"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { dataset, projectId, token, versionApi } from "@/env";

const phoneValidation = new RegExp(
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{4})\-?(\d{4}))$/
);

const formSchema = z.object({
  assignedName: z.string().min(5, {
    message: "O nome deve ter pelo menos 5 caracteres",
  }),
  assignedPhone: z
    .string()
    .min(11, {
      message: "O telefone deve ter pelo menos 11 caracteres",
    })
    .regex(phoneValidation, { message: "Formato de telefone inválido" }),
});

interface GiftFormProps {
  isAssigned: boolean;
  id: string;
  refetch: any;
  setSubmitLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export function GiftForm({
  isAssigned,
  id,
  refetch,
  setSubmitLoading,
}: GiftFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      assignedName: "",
      assignedPhone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitLoading(true);
    const mutations = [
      {
        patch: {
          id: id,
          set: {
            isAssigned: !isAssigned,
            assignedName: values.assignedName,
            assignedPhone: values.assignedPhone,
          },
        },
      },
    ];

    fetch(
      `https://${projectId}.api.sanity.io/${versionApi}/data/mutate/${dataset}`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ mutations }),
      }
    )
      .then((response) => response.json())
      .then(() => refetch().then(() => setSubmitLoading(false)))
      .catch((error) => console.error(error));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
        id="gift-form"
      >
        <FormField
          control={form.control}
          name="assignedName"
          render={({ field }: any) => (
            <FormItem autoFocus={false}>
              <FormLabel>Nome do assinante:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nome completo do assinante"
                  {...field}
                  autoFocus={false}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="assignedPhone"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input
                  placeholder="Telefone do assinante"
                  {...field}
                  autoFocus={false}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
