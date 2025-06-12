"use client"
import { Banner, Benefits, Core, Footer, FormContact, Header, Reviews, TeamInfo } from "@/components";
import { FundFilled, ScheduleFilled, SmileFilled } from "@ant-design/icons";
import { useRef } from "react";
import { BenefitsRef, Container, HeaderWrapper, ReviewsRef, Section } from "./styles";

const benefits = [
  {
    title: "Transparência",
    subtitle: "Informamos cada etapa do serviço com clareza.",
    icon: <ScheduleFilled style={{ fontSize: "76px", color: "#2C2C2C" }} />
  },
  {
    title: "Custo-benefício",
    subtitle: "Oferecemos serviços de qualidade por um preço justo.",
    icon: <FundFilled style={{ fontSize: "76px", color: "#2C2C2C" }} />
  },
  {
    title: "Sem preocupações",
    subtitle: "Cuidamos de tudo para que você tenha tranquilidade.",
    icon: <SmileFilled style={{ fontSize: "76px", color: "#2C2C2C" }} />
  }
]

const reviews = [
  {
    name: "José Afonso",
    text: "Já sou cliente a 30 anos, com um serviço honesto, profissional, custo ótimo.",
    rating: 5,
  },
  {
    name: "Pedro Henrique",
    text: "Deixei meu carro para resolver problemas de motor, depois de ter passado por várias mecânicos. Chegando no Nilton, resolveu meu problema com precisão. Indico de olhos fechados.",
    rating: 5,
  },
  {
    name: "Paulo Zaninetti",
    text: "Nilton, parabéns pela competência. Resolveu meu problema. Depois de várias negativas de mecanicas empurrando p outros p mexer no meu carro, se prontificou a fazer e resolveu, gente bonissima,um salve p a equipe tbm manjam da arte, abc.",
    rating: 5,
  },
];

const team_info = [
  {
    name: "Matheus Garbrecht",
    photo: "/retrato-ma.jpeg",
    info: "Matheus Garbrecht é o responsável por manter a organização e as finanças da nossa oficina sempre em ordem. Com muita dedicação, ele garante que tudo funcione bem nos bastidores, para que você tenha um atendimento rápido, eficiente e de qualidade. Graças ao trabalho dele, nossa equipe técnica pode se concentrar no mais importante: cuidar do seu veículo com excelência.",
    alt: "Imagem Matheus"
  },
  {
    name: "Nilton Cesar",
    photo: "/retrato-nilton.png",
    info: "Nilton é o proprietário da oficina e quem comanda toda a parte técnica. Com anos de experiência em concessionárias e um vasto conhecimento em mecânica, ele garante que cada serviço seja feito com precisão e qualidade. Sempre atualizado com as novidades do setor, Nilton lidera a equipe com dedicação, oferecendo diagnósticos certeiros e soluções eficientes para que seu veículo esteja sempre em boas mãos.",
    alt: "Imagem Nilton"
  }
]

export default function HomePage() {
  const benefitsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Benefícios", onClick: () => scrollToSection(benefitsRef) },
    { label: "Depoimentos", onClick: () => scrollToSection(reviewsRef) },
    { label: "Nossa Equipe", onClick: () => scrollToSection(teamRef) },
  ];

  return (
    <Container>
      <HeaderWrapper>
        <Header navItems={navItems} />
      </HeaderWrapper>
      <Core>


        <Banner media="https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <BenefitsRef ref={benefitsRef} />

        <Section>
          <Benefits benefit_info={benefits} />
        </Section>

        <ReviewsRef ref={reviewsRef} />

        <Section>
          <Reviews reviews={reviews} />
        </Section>

        <div className="flex flex-col items-center" ref={teamRef} />
          <Section>
            <TeamInfo
              team_info={team_info}
            />
          </Section>

        <Section>
          <FormContact />
        </Section>
      </Core>
      <Footer />
    </Container>
  );
}
