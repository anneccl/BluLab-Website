import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Notre histoire"
};

const Story = () => {
  return (
    <div>
      {/* IMAGE FLOUTÉE AVEC GRAND TITRE NOTRE HISTOIRE */}
      <section className="relative w-full h-[520px]">
        <Image
          src="/images/story/fondteam02.png"
          alt="Notre histoire"
          fill
          priority
          className="object-cover blur-sm"
          quality={95}
        />

        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Texte par dessus - CENTRÉ */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl mx-auto space-y-4 text-center">
              <h1 className="text-[#cae9ff] text-4xl md:text-5xl font-bold tracking-tight">
                Notre histoire
              </h1>
              <p className="text-[#5FA8D3] text-base md:text-lg">
                L'histoire de BluLab, une communauté née de la passion pour le streetwear et la culture urbaine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TEAM AVEC GRANDE IMAGE DE FOND */}
      <section className="relative min-h-screen py-20">
        {/* Grande image de fond haute résolution */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/story/fondteam01-blue.svg"
            alt="Image fond BluLab"
            fill
            quality={100}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Titre avec fond stylé */}
          <div className="relative mb-12">
            {/* Fond stylé derrière le titre */}
            <div className="absolute -left-4 -top-6 w-72 h-32 bg-gradient-to-r from-[#283AFE]/10 to-[#4B5EFF]/5 blur-2xl -z-10" />

            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#cae9ff] uppercase">
                L'équipe
              </h2>
              <p className="text-lg text-[#1B4965] mt-3 font-medium tracking-wide">
                Les visages derrière BluLab.
              </p>
            </div>
          </div>

          {/* Grille 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Élément 1 - COLONNE GAUCHE */}
            <div className="flex gap-6 p-15">
              {/* Texte à gauche, aligné à droite */}
              <div className="flex-1 flex flex-col justify-between text-right">
                <h3 className="text-4xl font-bold text-[#061a40]">
                  Eric Kouassi
                </h3>
                <p className="text-white font-bold text-md leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              {/* Image à droite */}
              <div className="relative  w-70 h-100 flex-shrink-0 rounded-xl overflow-hidden  rotate-6">
                <Image
                  src="/images/story/team01.png"
                  alt="Eric"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>

            {/* Élément 2 - COLONNE DROITE */}
            <div className="flex gap-6 p-15">
              {/* Image à gauche */}
              <div className="relative w-70 h-100 flex-shrink-0 rounded-xl overflow-hidden  -rotate-6">
                <Image
                  src="/images/story/team02.png"
                  alt="Eric"
                  fill
                  className="object-cover grayscale"
                />
              </div>

              {/* Texte à droite, aligné à gauche */}
              <div className="flex-1 flex flex-col justify-between text-left">
                <h3 className="text-4xl font-bold text-[#061a40]">
                  Eric Kouassi
                </h3>
                <p className="text-white font-bold text-md leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            {/* Élément 3 - COLONNE GAUCHE */}
            <div className="flex gap-6 p-15">
              {/* Texte à gauche, aligné à droite */}
              <div className="flex-1 flex flex-col justify-between text-right">
                <h3 className="text-4xl font-bold text-[#061a40]">
                  Eric Kouassi
                </h3>
                <p className="text-white font-bold text-md leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>

              {/* Image à droite */}
              <div className="relative   w-70 h-95 flex-shrink-0 rounded-xl overflow-hidden  -rotate-6">
                <Image
                  src="/images/story/team03.png"
                  alt="Eric"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>

            {/* Élément 4 - COLONNE DROITE */}
            <div className="flex gap-6 p-15">
              {/* Image à gauche */}
              <div className="relative   w-70 h-95 flex-shrink-0 rounded-xl overflow-hidden rotate-6">
                <Image
                  src="/images/story/team04.png"
                  alt="Eric"
                  fill
                  className="object-cover grayscale"
                />
              </div>

              {/* Texte à droite, aligné à gauche */}
              <div className="flex-1 flex flex-col justify-between text-left">
                <h3 className="text-4xl font-bold text-[#061a40]">
                  Eric Kouassi
                </h3>
                <p className="text-white font-bold text- leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <section className="relative w-full h-[300px]">
        <Image
          src="/images/story/fondteam02.png"
          alt="Séparateur"
          fill
          className="object-cover blur-sm"
          quality={95}
        />
        {/* Overlay pour effet */}
        <div className="absolute inset-0 bg-black/35" />
      </section>


      {/* SECTION MEMBRE CENTRÉ - FOND AVEC SPIRALES */}
      <section className="relative min-h-screen py-20">
        {/* Grande image de fond haute résolution */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/story/fondteam01-blue.svg"
            alt="Image fond BluLab"
            fill
            quality={100}
          />
        </div>

        {/* Container avec centrage vertical et horizontal */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            {/* Élément centré unique */}
            <div className="flex flex-col items-center max-w-5xl mx-auto p-15">
              {/* Nom en haut, centré */}
              <h3 className="text-5xl font-bold text-[#061a40] mb-12 text-center">
                Eric Kouassi
              </h3>

              {/* Container pour texte-image-texte */}
              <div className="flex gap-8 items-center w-full">
                {/* Texte à gauche */}
                <div className="flex-1 text-right">
                  <p className="text-white font-bold text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </p>
                </div>

                {/* Image au centre */}
                <div className="relative w-80 h-120 flex-shrink-0 rounded-xl overflow-hidden rotate-3">
                  <Image
                    src="/images/story/team05.png"
                    alt="Eric Kouassi"
                    fill
                    className="object-cover grayscale"
                  />
                </div>

                {/* Texte à droite */}
                <div className="flex-1 text-left">
                  <p className="text-white font-bold text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <section className="relative w-full h-[300px]">
        <Image
          src="/images/story/fondteam02.png"
          alt="Séparateur"
          fill
          className="object-cover blur-sm"
          quality={95}
        />
        {/* Overlay pour effet */}
        <div className="absolute inset-0 bg-black/35" />
      </section>

    </div>
  );
};

export default Story;