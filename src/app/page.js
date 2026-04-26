import HeroSection from "@/widgets/HeroSection";
import QuestionBlock from "@/widgets/QuestionBlock";
import WhyItMatters from "@/widgets/WhyItMatters";
import WhoIsShe from "@/widgets/WhoIsShe";
import PureIntentions from "@/widgets/PureIntentions";
import IntentionBlock from "@/widgets/IntentionBlock";
import EthicsCards from "@/widgets/EthicsCards";
import FaithBlock from "@/widgets/FaithBlock";
import ReflectionBlock from "@/widgets/ReflectionBlock";
import FinalBlock from "@/widgets/FinalBlock";
import Divider from "@/shared/ui/Divider";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />      {/* СТОП — "Подожди." */}
      <QuestionBlock />    {/* ВОПРОС — "Зачем?" (интерактив) */}
      <Divider />
      <WhyItMatters />     {/* ПОНИМАНИЕ — почему важно */}
      <WhoIsShe />         {/* ЧЕЛОВЕК — кому ты это отправляешь */}
      <Divider />
      <PureIntentions />   {/* ПРАВИЛА — что нельзя */}
      <IntentionBlock />   {/* НИЙЯТ — философия намерения */}
      <EthicsCards />      {/* ЭТИКА — принципы */}
      <FaithBlock />       {/* ВЕРА — хадисы */}
      <ReflectionBlock />  {/* ПАУЗА — признание */}
      <FinalBlock />       {/* ФИНАЛ — разрешение действовать */}
    </main>
  );
}
