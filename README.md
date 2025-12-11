# Imersão Ar Comprimido sem Desperdício

## 🎯 Sobre

Site institucional para evento de imersão em ar comprimido industrial, realizado pela Air Treinamentos.

**Data do Evento:** 6 e 7 de Fevereiro de 2026  
**Local:** Rio de Janeiro, RJ

## 🛠️ Tecnologias

- **Framework:** Next.js 14
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Banco de Dados:** PostgreSQL (via Prisma ORM)
- **UI Components:** Radix UI, Lucide Icons

## 🚀 Instalação Local

1. **Clone o repositório ou extraia o arquivo:**
   ```bash
   # Se estiver usando o arquivo .tar.gz:
   tar -xzf air_treinamentos_event_export.tar.gz
   cd air_treinamentos_event/nextjs_space
   ```

2. **Instale as dependências:**
   ```bash
   yarn install
   # ou
   npm install
   ```

3. **Configure as variáveis de ambiente (opcional):**
   ```bash
   cp .env.example .env
   # Edite o arquivo .env com suas configurações
   ```

4. **Execute o banco de dados (se necessário):**
   ```bash
   yarn prisma generate
   yarn prisma db push
   ```

5. **Inicie o servidor de desenvolvimento:**
   ```bash
   yarn dev
   ```

6. **Acesse:** [http://localhost:3000](http://localhost:3000)

## 📝 Scripts Disponíveis

```bash
yarn dev          # Inicia servidor de desenvolvimento
yarn build        # Gera build de produção
yarn start        # Inicia servidor em modo produção
yarn lint         # Executa linter
```

## 📚 Estrutura do Projeto

```
nextjs_space/
├── app/
│   ├── api/
│   │   ├── extract-pdf/      # Endpoint para extração de PDF
│   │   └── registration/     # Endpoint de registro
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
│
├── components/
│   ├── contact.tsx          # Seção de contato
│   ├── event-overview.tsx   # Visão geral do evento
│   ├── footer.tsx           # Rodapé
│   ├── header.tsx           # Cabeçalho/navegação
│   ├── hero.tsx             # Banner principal
│   ├── pricing.tsx          # Preços e pacotes
│   ├── registration.tsx     # Formulário de registro
│   ├── schedule.tsx         # Agenda do evento
│   ├── speakers.tsx         # Palestrantes
│   ├── topics.tsx           # Tópicos abordados
│   └── ui/                  # Componentes reutilizáveis
│
├── prisma/
│   └── schema.prisma        # Schema do banco de dados
│
├── public/
│   ├── air-center-logo.png
│   ├── air-treinamentos-logo.jpg
│   ├── event-details.pdf
│   └── factory-compressed-air-*.jpg
│
└── lib/
    ├── db.ts                # Configuração do Prisma
    ├── types.ts             # Tipos TypeScript
    └── utils.ts             # Utilitários
```

## 🌐 Deploy

Veja o arquivo `INSTRUÇÕES_HOSPEDAGEM.md` para instruções detalhadas de hospedagem em:
- Vercel (recomendado)
- Netlify
- VPS (DigitalOcean, AWS, etc.)
- Hospedagem compartilhada

## 📧 Contato

**Air Treinamentos**
- Email: Contato@airtreinamentos.com
- Telefone: +55(21) 985521685 / +55(21) 997991685

## 📝 Licença

Projeto desenvolvido para Air Treinamentos. Todos os direitos reservados.
