# 🗺️ Roadmap Projeto Aspectus

## 🚀 Backend — Vercel Serverless API

**Objetivo:** Receber dados do formulário, salvar no MongoDB e enviar e-mail.

### Tarefas Detalhadas

### 1️⃣ Estrutura da API na Vercel
- [ x ] Criar pasta `/app/api/contato/route.ts` ou `/pages/api/contato.ts`
- [ x ] Definir método POST para receber JSON do formulário
- [ x ] Testar recebimento local (Postman ou pelo front)
**⏱️ ✅ Finalizado**

### 2️⃣ Configuração do MongoDB Atlas
- [ x ] Criar cluster gratuito (M0)
- [ x ] Criar DB `aspectus` e collection `contatos`
- [ x ] Gerar `MONGO_URI`
- [ x ] Testar conexão com Mongo na API
**⏱️ ✅ Finalizado**

### 3️⃣ Salvamento no MongoDB
- [ x ] Instalar `mongodb`
- [ x ] Criar conexão, db e collection
- [ x ] Inserir dados recebidos
- [ x ] Testar inserção (Compass ou Mongo Atlas)
**⏱️ ✅ Finalizado**

### 4️⃣ Envio de E-mail com Nodemailer
- [ ] Criar conta e gerar senha de app (SMTP)
- [ ] Instalar `nodemailer`
- [ ] Configurar transporter SMTP
- [ ] Criar template de e-mail
- [ ] Testar envio
**⏱️ 1h a 1h30**

### 5️⃣ Variáveis de Ambiente na Vercel
- [ x ] Adicionar `MONGO_URI`, `MAIL_USER`, `MAIL_PASS`, `MAIL_TO`
- [ ] Testar deploy em produção
**⏱️ 20 a 40 min**

### 6️⃣ Testes e Ajustes Finais
- [ ] Testar integração completa (Front → API → Mongo + E-mail)
- [ ] Tratar erros e validar respostas
- [ ] Adicionar logs básicos
**⏱️ 40 min a 1h**

---

## 🚀 Frontend — Next.js + React 19 + Styled Components + Ant Design

**Objetivo:** Refinamento visual, hooks, responsividade e performance.

### Tarefas Detalhadas

### 1️⃣ Avaliações (Carrossel de Reviews)
- [ ] Definir origem dos dados (JSON local recomendado)
- [ ] Usar `useState` para índice atual da avaliação
- [ ] Criar navegação (setas)
- [ ] Implementar loop infinito
- [ ] Adicionar animações suaves (CSS ou Framer Motion)
- [ ] Componentização e responsividade
- [ ] Acessibilidade nas interações
**⏱️ 2h a 3h**

### 2️⃣ Google Maps no Footer
- [ ] Gerar embed do mapa
- [ ] Criar componente `MapFooter`
- [ ] Adicionar link externo para abrir no app Google Maps no mobile
- [ ] Responsividade e estilização
**⏱️ 1h a 1h30**

### 3️⃣ Refatoração para Styled Components
- [ ] Mapear e substituir Tailwind por Styled
- [ ] Criar componentes estilizados reutilizáveis
- [ ] Consolidar tema (cores, fontes, espaçamentos)
- [ ] Remover Tailwind e limpar classes residuais
**⏱️ 4h a 6h**

### 4️⃣ Hooks e Boas Práticas
- [ ] Implementar Context API se necessário
- [ ] Usar hooks: `useState`, `useEffect`, `useCallback`, `useMemo`, `useRef`
- [ ] Criar custom hooks quando fizer sentido
- [ ] Otimizar re-renderizações
- [ ] Adicionar feedback visual (loading, sucesso, erro)
**⏱️ 2h a 4h**

### 5️⃣ Melhoria de UI/UX
- [ ] Refinar hierarquia visual
- [ ] Garantir consistência em botões, cards e tipografia
- [ ] Microinterações e animações
- [ ] Melhorar acessibilidade (contraste, aria)
- [ ] Revisão de responsividade
**⏱️ 2h a 3h**

---

## 🔥 Tempo Total Estimado
- Backend: **4h a 6h**
- Frontend: **10h a 14h**

---

## ✔️ Entregáveis Finais
- API Serverless funcionando (salva no Mongo + envia e-mail)
- Front refinado, estilizado 100% com Styled Components, responsivo, interativo e otimizado
- Código organizado, consistente e preparado para escalar

## 🚀 Roadmap - Refatoração com Clean Architecture + SPI + React Query

### 🎯 Objetivo
Organizar o projeto tanto no frontend quanto no backend aplicando os conceitos de:
- Clean Architecture
- SPI (Service Provider Interface)
- Hooks customizados
- React Query para gestão de estado assíncrono no frontend

---

## 🏗️ Backend (Next API - Serverless na Vercel)

### 🗂️ Organização de Pastas
- `/src`
  - `/app/api`
  - `/domain`
    - `/entities`
    - `/repositories`
    - `/services`
  - `/application`
    - `/use-cases`
  - `/infrastructure`
    - `/database`
    - `/email`
  - `/lib`

**⏱️ 30 a 60 minutos** (estrutura e mover arquivos)
**⏱️ ✅ Finalizado**
---

### 🔗 Conexão com Banco (Mongo)
- Revisar arquivo `db.ts` na camada `/infrastructure/database`
- Implementar cache de conexão corretamente
- Garantir que está fora do escopo da rota

**⏱️ 30 minutos**

---

### 📨 Serviço de Email (SPI)
- Criar contrato: `/domain/services/IEmailService.ts`
- Criar implementação: `/infrastructure/email/BrevoEmailService.ts`
- Adaptar envio de email na rota para usar o serviço via injeção

**⏱️ 40 minutos a 1h**

---

### 🗄️ Repository (SPI para Banco)
- Criar contrato: `/domain/repositories/IContactRepository.ts`
- Criar implementação: `/infrastructure/database/MongoContactRepository.ts`
- O repository gerencia persistência no banco

**⏱️ 1h**

---

### 💡 Use Cases
- Criar `/application/use-cases/CreateContact.ts`
- Esse arquivo orquestra o fluxo: validar dados → salvar no DB → disparar email
- A rota só chama o use case, ela não sabe nada de infraestrutura

**⏱️ 1h a 1h30**

---

### 🔥 Refatorar Rotas
- As rotas apenas recebem a request, chamam o use case e respondem.
- Toda regra de negócio, db e email ficam nas camadas certas.

**⏱️ 40 minutos**

---

## 🎨 Frontend (React + Next + React Query + Hooks)

### 🗂️ Organização de Pastas
- `/src`
  - `/hooks`
  - `/services` (fetchers)
  - `/components`
  - `/lib`

**⏱️ 30 minutos**

---

### 🔗 Setup React Query
- Instalar e configurar Provider no `_app.tsx`
- Configurar devtools para query

**⏱️ 20 minutos**

---

### 🪝 Hooks Customizados
- Criar hook para envio de contato: `/hooks/useContact.ts`
- Hook gerencia mutation, loading, sucesso e erro

**⏱️ 40 minutos**

---

### 🔌 Service (Fetcher)
- Criar função que faz a chamada HTTP: `/services/contactService.ts`
- O hook consome o service, mantendo separação

**⏱️ 30 minutos**

---

### 🔥 Refatorar Formulário
- Usar o hook no form
- Gerenciar estado com React Query ao invés de states manuais

**⏱️ 1h**

---

## 🏁 Checkpoint Final
- [ ] Backend com Clean Architecture + SPI funcionando
- [ ] Frontend consumindo via hooks e React Query
- [ ] Projeto escalável, performático e limpo

---

## 🚦 Tempo Total Estimado
**8h a 10h (focado e sem interrupções)**  
Ou dividir em **2 a 3 dias**, dependendo do ritmo.

---


