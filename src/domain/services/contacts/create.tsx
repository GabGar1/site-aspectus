import { ICreateContact } from "@/domain/application/dtos/ICreateContact";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create_contact"],
    mutationFn: async (params: ICreateContact) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });

      if (!response.ok) throw new Error("Erro ao enviar contato");

      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["list_contacts"] });
    },
  });
}
