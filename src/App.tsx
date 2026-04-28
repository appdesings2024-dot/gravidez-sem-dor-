/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, X, Shield, Star, Lock } from "lucide-react";

const LINK_1990 = "https://pay.wiapy.com/69f01c346c8e0a09823afda3";
const LINK_2700 = "https://pay.wiapy.com/69f01dcd6c8e0a09823b67ce";

const trackInitiateCheckout = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'InitiateCheckout');
  }
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. BARRA DE URGÊNCIA */}
      <div className="bg-brand-medium text-white py-2 px-4 text-center text-sm font-bold sticky top-0 z-50 tracking-wider">
        <p>⏰ Promoção de lançamento — só até hoje! De R$67 por apenas R$19,90</p>
      </div>

      {/* 2. HERO / HEADLINE */}
      <section className="pt-12 pb-16 px-6 bg-gradient-to-b from-brand-light/30 to-white overflow-hidden text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Chega de Sofrer em Silêncio Durante a Gravidez
            </h1>
            <p className="text-base md:text-xl text-text-muted mb-8 max-w-2xl mx-auto">
              Descubra as técnicas simples que aliviam dor nas costas, câimbras, inchaço e dor pélvica — sem sair de casa e sem gastar fortunas
            </p>
            <a 
              href={LINK_1990}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackInitiateCheckout}
              className="inline-block bg-brand-strong text-white font-bold py-5 px-10 rounded-lg text-lg md:text-xl transform transition hover:scale-105 active:scale-95 shadow-sleek"
            >
              QUERO ALIVIAR MINHAS DORES — R$19,90
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. BLOCO DE IDENTIFICAÇÃO COM A DOR */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...fadeIn} className="text-3xl md:text-4xl text-center font-bold mb-8">
            Você se identifica com alguma dessas situações?
          </motion.h2>
          <div className="space-y-3 mb-8">
            {[
              "Acorda no meio da noite com câimbra e não sabe o que fazer",
              "Sente uma dor nas costas que não passa nem deitando, nem sentada",
              "Anda com dificuldade por causa da dor na pelve",
              "Fica com medo de que a dor seja sinal de algo grave",
              "Pesquisa no Google e só encontra respostas confusas ou assustadoras",
              "Se sente culpada por não conseguir aproveitar a gravidez por causa das dores"
            ].map((item, idx) => (
              <motion.div {...fadeIn} transition={{ delay: idx * 0.1 }} key={idx} className="flex items-start gap-4 p-4 border border-brand-light bg-white rounded-xl shadow-card">
                <X className="text-brand-strong shrink-0 mt-1" size={18} />
                <p className="text-base text-text-main">{item}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeIn} className="text-center text-xl font-medium text-brand-dark italic">
            "Você não está sozinha. Mais de 80% das gestantes sofrem com pelo menos uma dessas dores. E a boa notícia é: existe solução simples, segura e que você pode aplicar hoje mesmo."
          </motion.p>
        </div>
      </section>

      {/* 4. APRESENTAÇÃO DO PRODUTO */}
      <section className="py-16 px-6 bg-brand-light/20 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-6">
            Gravidez Sem Dor — Edição Completa
          </motion.h2>
          <motion.p {...fadeIn} className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Um treinamento prático e direto ao ponto com mais de 30 técnicas de postura, automassagem e bem-estar para você aliviar as dores mais comuns da gravidez de forma segura e simples — do primeiro ao nono mês.
          </motion.p>
        </div>
      </section>

      {/* 5. O QUE VOCÊ VAI APRENDER */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 {...fadeIn} className="text-3xl font-bold text-center mb-10">
            O que está incluído no guia:
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Como eliminar a dor nas costas com 7 posturas simples",
              "O segredo para dormir sem dor usando o travesseiro certo",
              "Alongamento de 5 minutos para acabar com as câimbras",
              "O que comer e evitar para reduzir o inchaço",
              "Técnica de automassagem para dor pélvica",
              "Por que você sente cólica e o que fazer na hora",
              "Como cuidar das mamas sensíveis e dormir melhor",
              "Guia emocional: ansiedade e medo na gestação",
              "Plano alimentar anti-inchaço de 7 dias",
              "Checklist completo por trimestre"
            ].map((item, idx) => (
              <motion.div {...fadeIn} transition={{ delay: idx * 0.05 }} key={idx} className="flex items-center gap-3">
                <div className="bg-brand-medium/20 p-1 rounded-full text-brand-strong">
                  <Check size={18} />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO DE FEEDBACKS / DEPOIMENTOS */}
      <section className="py-20 px-6 bg-brand-light/10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 {...fadeIn} className="text-3xl font-bold mb-12">
            O que as mamães estão dizendo:
          </motion.h2>

          {/* Depoimentos em Texto */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: "Fernanda S.",
                age: "29 anos",
                gestation: "7 meses",
                text: "Eu tava com dor lombar horrível e não conseguia nem varrer a casa. Apliquei a técnica de postura do guia e em dois dias já estava muito melhor. Não acreditei!"
              },
              {
                name: "Camila R.",
                age: "25 anos",
                gestation: "5 meses",
                text: "As câimbras me acordavam toda noite às 3h. Fiz o alongamento de 5 minutos antes de dormir e na primeira noite já melhorou. Recomendo demais!"
              },
              {
                name: "Juliana M.",
                age: "32 anos",
                gestation: "8 meses",
                text: "Comprei achando que ia ser mais um guia genérico. Me surpreendi com o quanto é prático e fácil de aplicar. Valeu cada centavo e muito mais."
              },
              {
                name: "Patrícia O.",
                age: "27 anos",
                gestation: "6 meses",
                text: "Finalmente um guia que fala a língua da gestante! Sem termos difíceis, sem enrolação. Direto ao ponto. Amei o plano alimentar anti-inchaço!"
              }
            ].map((testimony, idx) => (
              <motion.div 
                {...fadeIn} 
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="bg-white p-6 rounded-xl shadow-card text-left border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-brand-medium rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {testimony.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm leading-tight">{testimony.name}, {testimony.age}</h4>
                    <p className="text-[10px] text-text-muted">{testimony.gestation} de gestação</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="text-pink-300 fill-current" size={12} />)}
                </div>
                <p className="text-xs text-text-muted leading-relaxed italic">"{testimony.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5. BANNER DE SORTEIO */}
      <section className="py-12 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            {...fadeIn}
            className="relative bg-gradient-to-br from-pink-50 to-beige-50 rounded-[2.5rem] p-8 md:p-16 border-4 border-white shadow-2xl flex flex-col items-center text-center gap-6 overflow-hidden"
            style={{ backgroundColor: '#fff5f7' }}
          >
            {/* Decoração de fundo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-light/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-brand-strong text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 shadow-lg">
                <Star size={16} className="fill-current" />
                Exclusivo por tempo limitado
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 leading-tight">
                🎁 SORTEIO IMPERDÍVEL
              </h2>
              <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-10 max-w-2xl mx-auto">
                Comprando hoje você concorre a um <span className="text-brand-strong font-bold underline decoration-brand-light">Kit Maternidade completo</span>
              </p>
              
              <div className="flex justify-center gap-4">
                <div className="flex items-center gap-2 text-base text-gray-600 bg-white/70 px-6 py-3 rounded-2xl backdrop-blur-sm border border-pink-100">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  Válido apenas para compras realizadas hoje
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. DOIS CARDS DE OFERTA */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 {...fadeIn} className="text-3xl font-bold mb-8">
            Escolha seu plano:
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-stretch pt-4">
            {/* ESSENCIAL */}
            <motion.div {...fadeIn} className="bg-white border-2 border-brand-light rounded-2xl p-8 flex flex-col shadow-card">
              <div>
                <span className="pill">ESSENCIAL</span>
              </div>
              <div className="mb-6">
                <span className="text-text-muted line-through text-base">R$ 47,00</span>
                <div className="text-4xl font-bold text-brand-dark">R$ 19,90</div>
              </div>
              <ul className="text-left space-y-3 mb-8 flex-grow text-sm">
                {["Guia completo 7 módulos", "Técnicas de alívio das dores", "Acesso imediato em PDF"].map((item, i) => (
                  <li key= { i } className="flex items-center gap-2">
                    <Check className="text-brand-strong" size={16} />
                    <span className="text-text-main">{item}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={LINK_1990}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInitiateCheckout}
                className="w-full bg-brand-strong text-white font-bold py-3 rounded-lg hover:bg-brand-dark transition-colors text-sm shadow-sleek"
              >
                QUERO O BÁSICO
              </a>
            </motion.div>

            {/* PREMIUM */}
            <motion.div {...fadeIn} className="bg-brand-light border-2 border-brand-strong rounded-2xl p-8 flex flex-col shadow-sleek relative transform md:scale-105">
              <div className="absolute -top-3 right-6 bg-brand-strong text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                MAIS POPULAR
              </div>
              <div>
                <span className="pill bg-white">PREMIUM</span>
              </div>
              <div className="mb-6 mt-2">
                <span className="text-brand-medium line-through text-base">R$ 67,00</span>
                <div className="text-4xl font-bold text-brand-strong">R$ 27,00</div>
              </div>
              <ul className="text-left space-y-3 mb-6 flex-grow text-sm">
                {[
                  "Tudo do básico",
                  "MAIS Plano alimentar anti-inchaço",
                  "MAIS Guia do sono na gravidez",
                  "MAIS Guia emocional da gestante",
                  "MAIS Checklist por trimestre"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="text-brand-strong font-bold" size={16} />
                    <span className="text-brand-dark font-bold">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-brand-strong font-bold text-xs mb-6 italic">
                Apenas R$7 a mais pelo dobro do conteúdo!
              </p>
              <a 
                href={LINK_2700}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInitiateCheckout}
                className="w-full bg-brand-strong text-white font-bold py-3 rounded-lg hover:bg-brand-dark transition-colors shadow-sleek text-sm"
              >
                EDIÇÃO COMPLETA
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. GARANTIA */}
      <section className="py-12 px-6 bg-white border-t border-brand-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn} className="flex justify-center mb-4">
            <div className="bg-brand-light p-4 rounded-full text-brand-strong">
              <Shield size={48} />
            </div>
          </motion.div>
          <motion.h2 {...fadeIn} className="text-3xl font-bold mb-4">
            Garantia incondicional de 7 dias
          </motion.h2>
          <motion.p {...fadeIn} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Se por qualquer motivo você não gostar do guia, basta nos enviar uma mensagem em até 7 dias após a compra e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. Você não tem nada a perder.
          </motion.p>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-16 px-6 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-serif text-white mb-4">
            Sua gravidez pode ser muito mais leve do que você imagina
          </motion.h2>
          <motion.p {...fadeIn} className="text-xl text-brand-light mb-8 opacity-90">
            Mais de 30 técnicas práticas esperando por você. Acesso imediato após o pagamento.
          </motion.p>
          <motion.a 
            href={LINK_1990}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            {...fadeIn}
            className="inline-block bg-brand-strong text-white font-bold py-5 px-12 rounded-full text-xl md:text-2xl transform transition hover:scale-105 active:scale-95 shadow-2xl mb-6"
          >
            QUERO COMEÇAR AGORA — R$19,90
          </motion.a>
          <motion.div {...fadeIn} className="flex flex-col items-center gap-3 text-sm text-brand-light opacity-80">
            <div className="flex items-center gap-2">
              <Lock size={16} />
              <span>Pagamento 100% seguro | Pix, Cartão ou Boleto</span>
            </div>
            <p>PDF enviado por e-mail em menos de 1 minuto</p>
          </motion.div>
        </div>
      </section>

      {/* 10. RODAPÉ */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-200 text-center text-gray-500">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm mb-4 leading-relaxed">
            Este guia tem caráter informativo e educativo. Não substitui consulta médica. Sempre consulte seu obstetra.
          </p>
          <p className="text-xs">
            © 2024 Gravidez Sem Dor. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

