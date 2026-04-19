import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Globe, Instagram, Facebook, Download, MessageCircle, Sun, Calendar, ChevronRight } from 'lucide-react';

const colors = {
  primary: '#3E4A2F',     // texto principal y contrastes fuertes
  secondary: '#5A6C44',   // texto secundario
  accent: '#A9D87A',      // botones/acento
  accentHover: '#98C66A', 
  bgMain: '#F4FAEE',      // fondos suaves
  bgCard: '#E7F5D8',      // tarjetas claras
  white: '#FFFFFF',
};

const ToldosHub = () => {
  const [showWa, setShowWa] = useState(false);

  useEffect(() => {
    // Show WhatsApp CTA after a short delay for smooth enter
    const timer = setTimeout(() => setShowWa(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const data = {
    name: "Toldos Al Kamas",
    person: "Rosario Pacheco Gómez",
    activity: "Fabricación e instalación de sistemas de protección solar",
    slogan: "🍀 Vas a Tener Suerte 🍀",
    email: "toldos.al.kamas@gmail.com",
    phone: "+34 625 024 109",
    whatsapp: "34625024109",
    web: "http://toldos-al-kamas.blogspot.com.es",
    instagram: "https://www.instagram.com/toldos_alkamas",
    facebook: "https://www.facebook.com/toldosalkamas",
    maps: "https://www.google.com/maps/dir//TOLDOS+AL+KAMAS,+C.+Julio+C%C3%A9sar,+bloque+4+-+Local+2,+41900+Camas,+Sevilla/@37.3911475,-5.9938349,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd126b63a40a8953:0x939e2b454992dfdd!2m2!1d-6.0392119!2d37.4034115?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D",
    address: "C. Julio César, bloque 4 - Local 2, 41900 Camas, Sevilla",
    hours: "Lunes a Viernes: 9:00 a 17:00h",
    hubUrl: "https://hub-hub-rosario.npfusf.easypanel.host/", // Provisional actualizada
    bgImg: "/rosario_foto.jpg", // Fondo general (opcional)
    heroImg: "/equipo_rosario.jpg", // Banner cabecera
    profileImg: "/rosario_foto.jpg" // Círculo de perfil
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:${data.name}\r\nORG:${data.name}\r\nTITLE:${data.person}\r\nTEL;TYPE=WORK,VOICE:${data.phone}\r\nEMAIL;TYPE=INTERNET:${data.email}\r\nURL:${data.web}\r\nURL:${data.hubUrl}\r\nADR;TYPE=WORK:;;C. Julio César\\, bloque 4 - Local 2;Camas;Sevilla;41900;España\r\nNOTE:${data.activity}\r\nEND:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Toldos_Al_Kamas.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen font-sans relative selection:bg-[#A9D87A] selection:text-[#1F2517] overflow-x-hidden flex flex-col" style={{ backgroundColor: colors.bgMain, color: colors.primary }}>
      
      {/* Background layer */}
      <div 
        className="fixed inset-0 z-0 opacity-10 bg-cover bg-center bg-no-repeat mix-blend-multiply" 
        style={{ backgroundImage: `url('${data.bgImg}')` }}
      />

      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col flex-1 pb-16 shadow-2xl shadow-black/5 bg-white/40 backdrop-blur-3xl min-h-screen">
        
        {/* Hero Banner */}
        <div className="w-full h-48 md:h-56 relative rounded-b-3xl overflow-hidden shadow-md -mb-16 z-0">
           <img 
              src={data.heroImg} 
              alt="Equipo Toldos Al Kamas" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
           />
           <div className="absolute inset-0 bg-gradient-to-b from-[#3E4A2F]/40 to-transparent"></div>
        </div>

        {/* Floating VCard Button (Top Right) */}
        <button 
          onClick={handleSaveContact}
          className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-20 group hover:scale-105 active:scale-95"
          style={{ backgroundColor: colors.white, border: `1px solid ${colors.bgCard}` }}
          title="Guardar Contacto"
        >
          <Download className="w-5 h-5 transition-colors" style={{ color: colors.primary }} />
        </button>

        {/* Header Content Area */}
        <div className="px-6 pt-0 pb-6 flex flex-col items-center text-center relative z-10">
          
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 shadow-xl relative border-4" style={{ borderColor: colors.white, backgroundColor: colors.bgCard }}>
            <img 
              src={data.profileImg} 
              alt="Rosario Pacheco" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.currentTarget.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:${colors.primary};font-weight:bold;">ROSARIO</div>`;
              }}
            />
          </div>

          <h1 className="text-3xl font-black mb-1 tracking-tight" style={{ color: colors.primary }}>
            {data.name}
          </h1>
          
          <p className="text-sm font-bold uppercase tracking-widest mb-4 inline-block px-3 py-1 rounded-full text-xs" style={{ backgroundColor: colors.bgCard, color: colors.secondary }}>
            {data.person}
          </p>

          <p className="text-lg leading-snug mb-6 font-medium italic opacity-90 max-w-sm px-4">
            {data.activity}
          </p>

          {/* Slogan provisional */}
          <div className="w-full py-3 mb-6 rounded-2xl flex items-center justify-center text-base font-bold shadow-sm border border-black/5" style={{ backgroundColor: colors.accent, color: '#1A2211' }}>
            {data.slogan}
          </div>

          {/* Contact Direct Links */}
          <div className="w-full flex flex-col gap-3">
             <a href={`tel:${data.phone.replace(/ /g, '')}`} className="flex items-center justify-center gap-3 w-full p-4 rounded-2xl font-bold text-sm shadow-sm transition-all hover:shadow-md border active:scale-[0.98]" style={{ backgroundColor: colors.white, color: colors.primary, borderColor: colors.bgCard }}>
               <Phone className="w-5 h-5 flex-shrink-0" style={{ color: colors.secondary }} />
               <span className="tracking-wide">{data.phone}</span>
             </a>
             
             <a href={`mailto:${data.email}`} className="flex items-center justify-center gap-3 w-full p-4 rounded-2xl font-bold text-sm shadow-sm transition-all hover:shadow-md border active:scale-[0.98]" style={{ backgroundColor: colors.white, color: colors.primary, borderColor: colors.bgCard }}>
               <Mail className="w-5 h-5 flex-shrink-0" style={{ color: colors.secondary }} />
               <span className="tracking-wide overflow-hidden text-ellipsis whitespace-nowrap">{data.email}</span>
             </a>
          </div>
        </div>

        {/* Link List */}
        <div className="px-6 flex flex-col gap-4 mb-10 w-full">
          <a href={data.web} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-transparent hover:border-[#A9D87A]/50 transition-all hover:-translate-y-1 group">
             <div className="w-12 h-12 flex items-center justify-center rounded-xl" style={{ backgroundColor: colors.bgCard, color: colors.primary }}>
               <Globe className="w-6 h-6 group-hover:scale-110 transition-transform" />
             </div>
             <div className="flex flex-col">
               <span className="font-bold text-[15px]">Visitar web</span>
               <span className="text-[11px] font-medium opacity-60">Sitio oficial del negocio</span>
             </div>
             <ChevronRight className="w-5 h-5 ml-auto opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: colors.secondary }} />
          </a>

          <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-transparent hover:border-[#A9D87A]/50 transition-all hover:-translate-y-1 group">
             <div className="w-12 h-12 flex items-center justify-center rounded-xl" style={{ backgroundColor: colors.bgCard, color: colors.primary }}>
               <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
             </div>
             <div className="flex flex-col">
               <span className="font-bold text-[15px]">Instagram</span>
               <span className="text-[11px] font-medium opacity-60">@toldos_alkamas</span>
             </div>
             <ChevronRight className="w-5 h-5 ml-auto opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: colors.secondary }} />
          </a>

          <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-transparent hover:border-[#A9D87A]/50 transition-all hover:-translate-y-1 group">
             <div className="w-12 h-12 flex items-center justify-center rounded-xl" style={{ backgroundColor: colors.bgCard, color: colors.primary }}>
               <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
             </div>
             <div className="flex flex-col">
               <span className="font-bold text-[15px]">Facebook</span>
               <span className="text-[11px] font-medium opacity-60">Novedades y comunidad</span>
             </div>
             <ChevronRight className="w-5 h-5 ml-auto opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: colors.secondary }} />
          </a>
        </div>

        {/* Location Box */}
        <div className="px-6 mb-8 w-full">
           <div className="w-full bg-white rounded-3xl p-6 shadow-sm border group" style={{ borderColor: colors.bgCard }}>
             <h3 className="flex items-center gap-2 font-black mb-4 text-base" style={{ color: colors.primary }}>
               <MapPin className="w-5 h-5" style={{ color: colors.accentHover }} /> Ubicación
             </h3>
             <p className="text-[13px] leading-relaxed font-medium mb-5 opacity-90">
               {data.address}
             </p>
             <a href={data.maps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full py-3 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow" style={{ backgroundColor: colors.bgCard, color: colors.primary }}>
               Ver en Google Maps
             </a>
           </div>
        </div>

        {/* Hours Box */}
        <div className="px-6 mb-12 w-full">
           <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border" style={{ borderColor: colors.bgCard }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.primary, color: colors.white }}>
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-widest font-black" style={{ color: colors.secondary }}>Horario de atención</span>
                <span className="font-bold text-sm">{data.hours}</span>
              </div>
           </div>
        </div>

        
        {/* Footer SeviAI Ecosystem */}
        <div style={{ marginTop: '2rem', padding: '0 2rem 2rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.8, transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}>
          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: '500', color: 'rgba(0,0,0,0.8)', textAlign: 'center', marginBottom: '1rem', margin: 0, paddingBottom: '16px' }}>
            © 2026 Toldos Al Kamas
          </p>
          <a href="https://www.seviai.es/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', color: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#DCAE56'; if(e.currentTarget.querySelector('img')) e.currentTarget.querySelector('img').style.opacity = '1'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(0,0,0,0.7)'; if(e.currentTarget.querySelector('img')) e.currentTarget.querySelector('img').style.opacity = '0.7'; }}>
            SeviAI Ecosystem
            <img src="/logo_sin_fondo.png" alt="SeviAI" style={{ height: '16px', width: 'auto', opacity: 0.7, filter: 'grayscale(100%)', transition: 'opacity 0.3s ease' }} />
          </a>
        </div>

      </div>

      {/* Floating WhatsApp fixed to bottom, but constrained inside the container width */}
      <div className="fixed bottom-6 z-50 pointer-events-none flex justify-end px-6 max-w-lg w-full left-1/2 -translate-x-1/2">
        <a 
          href={`https://wa.me/${data.whatsapp}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 pointer-events-auto rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group hover:scale-105 active:scale-95"
          title="Contactar por WhatsApp"
          style={{ backgroundColor: colors.accent, border: `2px solid ${colors.white}` }}
        >
          <svg className="w-7 h-7 fill-current group-hover:scale-110 transition-transform" style={{ color: '#1A2211' }} viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>

    </div>
  );
};

export default ToldosHub;
