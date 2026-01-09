import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Notre histoire"
};

const Story = () => {
  return (
    <div>
      {/*HERO - IMAGE FLOUTÉE AVEC TITRE */}
      <section className="relative w-full h-[400px] md:h-[520px]">
        <Image
          src="/images/story/fondteam02.png"
          alt="Notre histoire"
          fill
          priority
          className="object-cover blur-sm"
          quality={95}
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <div className="max-w-xl mx-auto space-y-3 md:space-y-4 text-center">
              <h1 className="text-[#cae9ff] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Notre histoire
              </h1>
              <p className="text-[#5FA8D3] text-sm md:text-base lg:text-lg px-4">
                L'histoire de BluLab, une communauté née de la passion pour le streetwear et la culture urbaine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ÉQUIPE avec GRILLE 2x2 */}
      <section className="relative py-0 md:py-20">
        {/* FOND DESKTOP UNIQUEMENT */}
        <div className="absolute inset-0 -z-10 hidden md:block">
          <Image
            src="/images/story/fondteam01-blue.svg"
            alt=""
            fill
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Titre section equipe (sans fond sur mobile) */}
        <div className="relative py-10 md:py-0 md:mb-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#1B4965] md:text-[#cae9ff] uppercase">
                L'équipe
              </h2>
              <p className="text-base md:text-lg text-[#5FA8D3] mt-2 md:mt-3 font-medium">
                Les visages derrière BluLab.
              </p>
            </div>
          </div>
        </div>

        {/* Container de la grille */}
        <div className="max-w-7xl mx-auto md:px-6">
          {/* Grille des membres */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-8 lg:gap-12">
            
            {/* ============ MEMBRE 1 ============ */}
            <MemberCard
              name="Eric Kouassi"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
              imageSrc="/images/story/team01.png"
              bgImageSrc="/images/story/fondteam01-blue.svg"
              layout="right"
              rotation={6}
            />

            {/* ============ MEMBRE 2 ============ */}
            <MemberCard
              name="Membre 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
              imageSrc="/images/story/team02.png"
              bgImageSrc="/images/story/fondteam01-blue.svg"
              layout="left"
              rotation={-6}
            />

            {/* ============ MEMBRE 3 ============ */}
            <MemberCard
              name="Membre 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
              imageSrc="/images/story/team03.png"
              bgImageSrc="/images/story/fondteam01-blue.svg"
              layout="right"
              rotation={-6}
            />

            {/* ============ MEMBRE 4 ============ */}
            <MemberCard
              name="Membre 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
              imageSrc="/images/story/team04.png"
              bgImageSrc="/images/story/fondteam01-blue.svg"
              layout="left"
              rotation={6}
            />
          </div>
        </div>
      </section>

      {/*  SÉPARATEUR */}
      <section className="relative w-full h-[300px] hidden md:block">
        <Image
          src="/images/story/fondteam02.png"
          alt=""
          fill
          className="object-cover blur-sm"
          quality={95}
        />
        <div className="absolute inset-0 bg-black/35" />
      </section>

      {/* SECTION MEMBRE PRINCIPAL (CENTRÉ)*/}
      <section className="relative py-16 md:py-24">
        {/* Fond adaptatif */}
        <div className="absolute inset-0 -z-10">
          {/* Mobile image de fond */}
          <div className="absolute inset-0 md:hidden">
            <Image
              src="/images/story/fondteam01-blue.svg"
              alt=""
              fill
              className="object-cover"
              quality={100}
            />
          </div>
          {/* Desktop image de fond */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/images/story/fondteam01-blue.svg"
              alt=""
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Nom */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#cae9ff] mb-8 md:mb-12 text-center">
            Eric Kouassi
          </h3>

          {/* Layout texte-image-texte */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Texte gauche (desktop only) */}
            <div className="hidden lg:block flex-1 text-right max-w-sm">
              <p className="text-white/90 font-medium text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>

            {/* Image centrée */}
            <div className="relative w-[280px] sm:w-[300px] md:w-[320px] h-[380px] sm:h-[420px] md:h-[480px] flex-shrink-0 rounded-xl overflow-hidden md:rotate-3">
              <Image
                src="/images/story/team05.png"
                alt="Eric Kouassi"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Texte droite (ou unique sur mobile) */}
            <div className="flex-1 text-center lg:text-left max-w-sm">
              <p className="text-white/90 font-medium text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR (DESKTOP UNIQUEMENT) */}
      <section className="relative w-full h-[300px] hidden md:block">
        <Image
          src="/images/story/fondteam02.png"
          alt=""
          fill
          className="object-cover blur-sm"
          quality={95}
        />
        <div className="absolute inset-0 bg-black/35" />
      </section>
    </div>
  );
};

/* COMPOSANT CARTE MEMBRE
   - Mobile: fond individuel par carte
   - Desktop: transparent (fond global)
*/
interface MemberCardProps {
  name: string;
  description: string;
  imageSrc: string;
  bgImageSrc: string;
  layout: "left" | "right";
  rotation: number;
}

const MemberCard = ({ 
  name, 
  description, 
  imageSrc, 
  bgImageSrc, 
  layout, 
  rotation 
}: MemberCardProps) => {
  return (
    <div className="relative">
      {/* FOND MOBILE UNIQUEMENT - par carte */}
      <div className="absolute inset-0 -z-10 md:hidden">
        <Image
          src={bgImageSrc}
          alt=""
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Contenu de la carte */}
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-6 px-4 py-12 md:p-6 lg:p-8">
        {/* Image */}
        <div 
          className={`
            relative w-[260px] sm:w-[280px] md:w-[240px] lg:w-[280px] 
            h-[340px] sm:h-[380px] md:h-[360px] lg:h-[400px] 
            flex-shrink-0 rounded-xl overflow-hidden
            ${rotation > 0 ? 'md:rotate-6' : 'md:-rotate-6'}
            ${layout === "right" ? 'md:order-last' : ''}
          `}
        >
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        
        {/* Texte */}
        <div className={`
          flex-1 flex flex-col justify-center gap-3
          text-center ${layout === "right" ? 'md:text-right' : 'md:text-left'}
        `}>
          <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold text-[#cae9ff]">
            {name}
          </h3>
          <p className="text-white/90 text-sm md:text-sm lg:text-base leading-relaxed max-w-xs mx-auto md:mx-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;