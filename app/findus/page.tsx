import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Retrouvez nous"
};

const Findus = () => {
    return (
        <div>
            {/* IMAGE FLOUTÉE AVEC GRAND TITRE */}
            <section className="relative w-full h-[400px] md:h-[520px]">
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
                    <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
                        <div className="max-w-xl mx-auto space-y-3 md:space-y-4 text-center">
                            <h1 className="text-[#cae9ff] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                                Nous Trouver
                            </h1>
                            <p className="text-[#5FA8D3] text-sm md:text-base lg:text-lg">
                                Venez nous rencontrer en boutique
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION HORAIRES + LOCALISATION */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                        
                        {/* HORAIRES - GAUCHE */}
                        <div className="space-y-6 md:space-y-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6 md:mb-8">
                                    Heures d'ouverture
                                </h2>
                                
                                <div className="space-y-3 md:space-y-4 text-base md:text-lg">
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-900">Lundi</span>
                                        <span className="text-gray-600">11h00 - 19h00</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-900">Mardi</span>
                                        <span className="text-gray-600">11h00 - 19h00</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-900">Mercredi</span>
                                        <span className="text-gray-600">11h00 - 19h00</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-900">Jeudi</span>
                                        <span className="text-gray-600">11h00 - 19h00</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-900">Vendredi</span>
                                        <span className="text-gray-600">11h00 - 22h00</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-900">Samedi</span>
                                        <span className="text-gray-600">11h00 - 22h00</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="font-medium text-gray-900">Dimanche</span>
                                        <span className="text-gray-600">Fermé</span>
                                    </div>
                                </div>
                            </div>

                            {/* INFORMATIONS CONTACT */}
                            <div className="pt-6 md:pt-8">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6 md:mb-8">
                                    Contact
                                </h2>
                                <div className="space-y-3 text-gray-600">
                                    <p className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                                        <span className="font-medium text-black">Adresse:</span>
                                        <span>Abidjan, Côte d'Ivoire</span>
                                    </p>
                                    <p className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                                        <span className="font-medium text-black">Téléphone:</span>
                                        <span>[Votre numéro]</span>
                                    </p>
                                    <p className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                                        <span className="font-medium text-black">Instagram:</span>
                                        <a 
                                            href="https://www.instagram.com/blulab.inc" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="hover:text-[#5FA8D3] transition-colors"
                                        >
                                            @blulab
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* GOOGLE MAPS */}
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6 md:mb-8">
                                Localisation
                            </h2>
                            <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3415600075273!2d-3.9689533!3d5.3647587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1edd0cb2c997f%3A0x777464187bcb57ac!2sBLU%20LAB!5e0!3m2!1sfr!2sca!4v1767927355890!5m2!1sfr!2sca" 
                                    width="100%" 
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localisation BluLab"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Findus;