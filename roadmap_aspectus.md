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
- [ ] Adicionar `MONGO_URI`, `MAIL_USER`, `MAIL_PASS`, `MAIL_TO`
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

