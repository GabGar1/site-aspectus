"use client"
import { Banner, Benefits, Core, Footer, Header, Reviews, TeamInfo } from "@/components";
import { FundFilled, ScheduleFilled, SmileFilled } from "@ant-design/icons";
import { Typography } from "antd";
import { useRef } from "react";

const benefits = [
  {
    title: "Transparência",
    subtitle: "Informamos cada etapa do serviço com clareza.",
    icon: <ScheduleFilled style={{ fontSize: "76px", color: "#471c1c" }} />
  },
  {
    title: "Custo-benefício",
    subtitle: "Oferecemos serviços de qualidade por um preço justo.",
    icon: <FundFilled style={{ fontSize: "76px", color: "#471c1c" }} />
  },
  {
    title: "Sem preocupações",
    subtitle: "Cuidamos de tudo para que você tenha tranquilidade.",
    icon: <SmileFilled style={{ fontSize: "76px", color: "#471c1c" }} />
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
    photo: "https://cdn.pixabay.com/photo/2017/06/05/21/26/skateboard-2375364_1280.jpg",
    info: "Matheus Garbrecht é o responsável por toda a parte financeira e organizacional da nossa oficina. Com sua expertise, ele garante que cada processo seja bem estruturado, permitindo que nossa equipe técnica foque no que faz de melhor: cuidar do seu veículo com excelência. Além de manter as finanças em dia, Matheus também trabalha para otimizar o funcionamento da oficina, garantindo um atendimento ágil, eficiente e de qualidade. Seu compromisso com a organização e planejamento reflete diretamente na experiência dos nossos clientes, tornando cada visita mais prática e satisfatória.",
    alt: "Imagem Matheus"
  },
  {
    name: "Nilton Cesar",
    photo: "https://cdn.pixabay.com/photo/2020/04/24/18/02/man-5087967_1280.jpg",
    info: "Nilton é o proprietário da oficina e o responsável por toda a parte técnica. Com um conhecimento amplo na área da mecânica, adquirido ao longo de anos de experiência em diversas concessionárias, ele garante que cada serviço seja realizado com precisão e qualidade. Sua expertise permite diagnósticos assertivos e soluções eficientes, assegurando que os veículos recebam o melhor atendimento possível. Sempre atento às inovações do setor, Nilton lidera a equipe com dedicação e comprometimento, garantindo a confiança e a satisfação dos clientes.",
    alt: "Imagem Nilton"
  },
  {
    name: "Miguel Perez",
    photo: "https://cdn.pixabay.com/photo/2022/06/27/00/07/fashion-7286505_1280.jpg",
    alt: "Imagem Miguel",
    info: "Miguel é o funcionário mais novo da oficina e chegou recentemente da Venezuela, trazendo consigo uma bagagem de experiência e dedicação. Com muita vontade de aprender e crescer na área, ele se destaca pelo comprometimento e pela atenção aos detalhes em cada serviço realizado. Sua determinação e habilidade contribuem para a qualidade do atendimento, agregando ainda mais valor à equipe. Sempre disposto a enfrentar novos desafios, Miguel vem se tornando uma peça fundamental no dia a dia da oficina."
  }
]

export default function Home() {
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
    <div style={{ position: "relative" }}>
      <div className="w-full justify-center flex pt-4 sticky top-0 z-1000 h-[64px]" style={{background: "#dddddd"}}>
        <Header navItems={navItems} />
      </div>
      <Core>
        <Banner media="https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <div style={{ width: "100%", height: "150px" }} ref={benefitsRef} />
        <Benefits benefit_info={benefits} />
        <div style={{ width: "100%", height: "150px" }} ref={reviewsRef} />
        <Reviews reviews={reviews} />
        <div className="flex flex-col items-center" ref={teamRef}>
          <Typography.Title style={{ color: "#471c1c", alignSelf: "start", marginLeft: 24 }}>Nossa equipe</Typography.Title>
          <TeamInfo
            team_info={team_info}
          />
        </div>
      </Core>
      <Footer />
    </div>
  );
}
