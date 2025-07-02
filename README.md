# Aspectus Auto Mecânica - Website

Site institucional desenvolvido com foco em captação de leads para a oficina Aspectus Auto Mecânica. O site permite que usuários entrem em contato diretamente através de um formulário, que salva os dados no banco e envia notificação por email ou botão de CTA inciando conversa no WhatsApp.

---

## 🔧 Tecnologias

- [Next.js 15](https://nextjs.org/)
- TypeScript
- MongoDB Atlas (Mongoose)
- Email via [Brevo (ex-Sendinblue)](https://www.brevo.com/)
- StyledComponents
- ANTD
- Neverthrow
- React Query
- Vercel (deploy)

---

## ✨ Funcionalidades

- Formulário de contato com envio de email
- Armazenamento de leads no banco de dados
- Botão de WhatsApp como CTA, abrindo o chat direto com a oficina
- Validação de campos obrigatórios
- Layout responsivo
- Deploy com preview automático na Vercel

---

## 🚀 Instalação e uso local

```bash
# Clone o repositório
git clone https://github.com/GabGar1/site-aspectus

# Acesse a pasta
cd site-aspectus

# Instale as dependências
yarn

# Configure as variáveis de ambiente
cp .env.example .env.local

# `.env.local` esperado:

Crie um arquivo `.env.local` com as seguintes variáveis:

# .env.example
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/
BREVO_API_KEY=sua-chave-aqui
EMAIL_DESTINATION=seu@email.com

## 🚧 Próximos Passos

- Resolver timeout na Vercel durante chamadas à API
- Mover envio de email para background com fila
- Adicionar testes automatizados (unitários e de integração)
- Melhorar tratamento de erros e exibição de feedback ao usuário