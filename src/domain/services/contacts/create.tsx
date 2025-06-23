import { ICreateContact } from "@/domain/application/use-cases/contacts/create_contact";
import { createContact } from "@/domain/spi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateContact() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey:['create_contact'],
        mutationFn: async (params: ICreateContact) => {
            return await createContact.execute(params);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['list_contacts']})
        }
    })
}