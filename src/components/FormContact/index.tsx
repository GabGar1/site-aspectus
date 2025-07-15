"use client"

import { Button, Flex, message } from "antd";
import React, { useState } from "react";
import { Container, DescriptionForm, FormContent, FormWrapper, Label, LabelInputWrapper, StyledInput } from "./style";
import { useCreateContact } from "@/domain/services/contacts/create";


export function FormContact() {
    const [messageApi, contextHolder] = message.useMessage();
    const { mutate } = useCreateContact()

    function formatPhone(value: string) {
        return value
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .slice(0, 15);
    }

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        status: true
    });

    const successToast = () => {
        messageApi.open({
            type: 'success',
            content: 'Contato enviado com sucesso!',
        });
    };

    const errorToast = () => {
        messageApi.open({
            type: 'error',
            content: 'Erro ao enviar contato!',
        });
    };

    function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
        const formatted = formatPhone(e.target.value);
        setFormData({ ...formData, phone: formatted });
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        mutate({ ...formData }, {
            onSuccess: () => {
                setFormData({ name: '', phone: '', email: '', message: '', status: true });
                successToast();
            },
            onError: (error: unknown) => {
                console.error('Erro ao enviar o contato', error);
                errorToast();
            }
        });
    };


    return (
        <Container>
            <DescriptionForm>
                <h1 style={{ color: 'white', fontSize: 24 }}>Converse com a nossa equipe</h1>
                <p style={{ color: 'white' }}>Estamos prontos para tirar suas dúvidas e entender o seu problema!</p>
            </DescriptionForm>
            <FormWrapper>
                <FormContent>
                    <h1 style={{ alignSelf: 'start', color: 'black', fontSize: 24 }}>Fale com a gente!</h1>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
                        {contextHolder}
                        <Flex flex={1} vertical gap={8}>
                            <LabelInputWrapper>
                                <Label>Nome</Label>
                                <StyledInput
                                    type="text"
                                    name="name"
                                    placeholder="Digite seu nome"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </LabelInputWrapper>
                            <LabelInputWrapper>
                                <Label>Telefone</Label>
                                <StyledInput
                                    type="tel"
                                    name="phone"
                                    placeholder="(99) 99999-9999"
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    required
                                />
                            </LabelInputWrapper>
                            <LabelInputWrapper>
                                <Label>Email</Label>
                                <StyledInput
                                    type="email"
                                    name="email"
                                    placeholder="Digite seu email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </LabelInputWrapper>
                            <LabelInputWrapper>
                                <Label>Mensagem</Label>
                                <StyledInput
                                    type="text"
                                    name="message"
                                    placeholder="Digite sua mensagem"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </LabelInputWrapper>
                        </Flex>
                        <Button htmlType="submit" type="primary" style={{ alignSelf: 'flex-end', background: '#C8102E' }}>Enviar</Button>
                    </form>
                </FormContent>
            </FormWrapper>
        </Container>


    )
}