import React, { useState, useEffect } from 'react';
import { Hammer, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    "/img/1.jpg", 
    "/img/2.jpg",
    "/img/3.jpg"
  ];

  const galleryImages = [
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.jpg",
  "/img/8.jpg",
  "/img/9.jpg",
  "/img/10.jpg"
  ];

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-stone-900 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Hammer className="h-6 w-6" />
            <span className="text-xl font-bold">Kovačnica Mustafić</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-amber-400">Početna</a>
            <a href="#about" className="hover:text-amber-400">O nama</a>
            <a href="#gallery" className="hover:text-amber-400">Galerija</a>
            <a href="#contact" className="hover:text-amber-400">Kontakt</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="hover:text-amber-400">Početna</a>
              <a href="#about" className="hover:text-amber-400">O nama</a>
              <a href="#gallery" className="hover:text-amber-400">Galerija</a>
              <a href="#contact" className="hover:text-amber-400">Kontakt</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="flex-grow">
        {/* Hero Section with Carousel */}
        <section id="home" className="h-screen relative overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHeroImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative h-full container mx-auto flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <h1 className="text-5xl font-bold mb-4">Tradicionalno kovačko umeće</h1>
                    <p className="text-xl max-w-2xl mx-auto">Ručno izrađeni metalni radovi sa strašću i preciznošću kroz generacije.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentHeroImage ? 'bg-amber-400 w-6' : 'bg-white/50 hover:bg-white/75'
                }`}
                onClick={() => setCurrentHeroImage(index)}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">O nama</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/img/11.jpg"
                  alt="Kovač na poslu"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Kovačnica Mustafić predstavlja tradicionalno zanatstvo i modernu obradu metala. Generacijama izrađujemo visokokvalitetne kovačke radove za naše klijente u Srbiji i šire.
                </p>
                <p className="text-lg text-gray-700">
                  Od umetničkih kapija preko elegantnih ograda do individualnih metalnih skulptura - svaki komad je izrađen sa najvišom preciznošću i pažnjom prema detaljima.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-stone-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Naši radovi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image}
                    alt={`Kovački rad ${index + 1}`}
                    className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
{/* Contact Section */}
<section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Kontakt</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-stone-800">Pošaljite nam poruku</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-600 mb-2">Ime i prezime</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Unesite vaše ime i prezime"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-2">E-mail adresa</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="vasa@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-600 mb-2">Vaša poruka</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Kako vam možemo pomoći?"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-amber-600 transform transition-all duration-200 hover:scale-[1.02] focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                  >
                    Pošalji poruku
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-stone-900 text-white rounded-2xl shadow-xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-8">Kontakt informacije</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-500/20 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-amber-400 mb-1">Adresa</h4>
                        <p className="text-stone-300">Glavna ulica 123<br />11000 Beograd<br />Srbija</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-500/20 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-amber-400 mb-1">Telefon</h4>
                        <p className="text-stone-300">+381 11 123 4567</p>
                        <p className="text-stone-300">+381 64 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-500/20 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-amber-400 mb-1">E-mail</h4>
                        <p className="text-stone-300">info@kovacnica-mustafic.rs</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-stone-700">
                  <h4 className="font-medium text-amber-400 mb-3">Radno vreme</h4>
                  <div className="space-y-2 text-stone-300">
                    <p>Ponedeljak - Petak: 08:00 - 17:00</p>
                    <p>Subota: 09:00 - 14:00</p>
                    <p>Nedelja: Zatvoreno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Hammer className="h-6 w-6" />
              <span className="text-xl font-bold">Kovačnica Mustafić</span>
            </div>
            <p className="text-gray-400">© {new Date().getFullYear()} Kovačnica Mustafić. Sva prava zadržana.</p>
          </div>
        </footer>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full">
            <img 
              src={selectedImage} 
              alt="Uvećana slika"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-amber-400"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
