import React, { useState, useEffect } from 'react';
import { 
  Menu, X, CheckCircle, Smartphone, 
  ShieldCheck, Clock, Brain, Mail, 
  ChevronDown, Send, ArrowRight, Package,
  MessageCircle, Scale, Building2, HelpCircle
} from 'lucide-react';

// --- Components ---

const StickyBar = () => (
  <div className="bg-yellow-400 text-brand-navy font-bold text-center py-2 px-4 text-sm md:text-base sticky top-0 z-50 shadow-md animate-pulse-slow">
    <span className="inline-block mr-2">🔥 OFERTA DE LANZAMIENTO:</span>
    Únete a la revolución legal. Primer mes por solo <span className="underline decoration-black decoration-2">$1.000 COP</span>. Oferta válida para los primeros 5.000 abogados.
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cómo Funciona', href: '#como-funciona' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Precios', href: '#precios' },
    { name: 'Empresas', href: '#empresas' },
    { name: 'Mensajería Física', href: '#mensajeria' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'top-0 bg-white shadow-lg py-2' : 'top-[40px] md:top-[44px] bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-brand-navy p-1.5 rounded">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-brand-navy">DataCredito<span className="text-blue-600">Postal</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#precios" className="bg-brand-navy text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-800 transition-colors text-sm">
              Activar SonIA
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#precios" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-brand-navy text-white px-5 py-3 rounded-lg font-bold">
              Activar SonIA
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const WhatsAppMockup = () => {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#E5DDD5] relative flex flex-col">
        {/* Header */}
        <div className="bg-[#075E54] p-3 flex items-center gap-3 text-white shadow-sm z-10">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <Brain className="w-5 h-5 text-[#075E54]" />
          </div>
          <div>
            <p className="font-bold text-sm">SonIA - Asistente Legal</p>
            <p className="text-[10px] opacity-80">En línea</p>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 p-3 space-y-3 overflow-hidden flex flex-col justify-end pb-4">
          <div className="bg-white p-2 rounded-lg rounded-tl-none shadow text-xs max-w-[85%] self-start text-gray-800">
            ¡Hola Doctor! Soy SonIA. ¿En qué te ayudo hoy? 👩‍⚖️
          </div>
          
          <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none shadow text-xs max-w-[85%] self-end text-gray-800">
            SonIA, notifica a demandante@gmail.com sobre la admisión de la demanda. Rad: 2023-0054
            <span className="flex justify-end mt-1 text-[9px] text-gray-500 gap-0.5 items-center">
              10:42 AM <CheckCircle className="w-2.5 h-2.5 text-blue-500" />
            </span>
          </div>

          <div className="bg-white p-2 rounded-lg rounded-tl-none shadow text-xs max-w-[85%] self-start text-gray-800">
            <p>✅ <strong>Correo Certificado Enviado</strong></p>
            <p className="mt-1">He enviado la notificación conforme a la Ley 527.</p>
            <div className="mt-2 bg-gray-100 p-2 rounded border border-gray-200 flex items-center gap-2">
              <div className="bg-red-500 w-6 h-8 rounded-sm flex items-center justify-center text-white text-[8px] font-bold">PDF</div>
              <span className="text-[10px] truncate">Prueba_Entrega_2023-0054.pdf</span>
            </div>
            <span className="flex justify-end mt-1 text-[9px] text-gray-500">10:43 AM</span>
          </div>

           <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none shadow text-xs max-w-[85%] self-end text-gray-800">
            Gracias! Recuérdame la audiencia el jueves.
            <span className="flex justify-end mt-1 text-[9px] text-gray-500 gap-0.5 items-center">
              10:43 AM <CheckCircle className="w-2.5 h-2.5 text-blue-500" />
            </span>
          </div>
          
          <div className="bg-white p-2 rounded-lg rounded-tl-none shadow text-xs max-w-[85%] self-start text-gray-800">
            Agendado 📅. Te avisaré 2 horas antes de la audiencia del jueves.
          </div>
        </div>

        {/* Input area */}
        <div className="bg-[#F0F0F0] p-2 flex items-center gap-2">
            <div className="bg-white flex-1 rounded-full h-8 px-3 text-xs flex items-center text-gray-400">Escribe un mensaje...</div>
            <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center text-white">
                <Send className="w-4 h-4" />
            </div>
        </div>
      </div>
    </div>
  );
}

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Tecnología Legal Colombiana
            </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-brand-navy sm:text-5xl md:text-6xl lg:leading-tight">
            Tu nueva Asistente Legal vive en <span className="text-[#25D366]">WhatsApp</span>
            <span className="block text-2xl sm:text-3xl mt-2 text-gray-500 font-medium">(y cuesta menos que un tinto).</span>
          </h1>
          <p className="mt-6 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Automatiza tu agenda, vigila tus términos judiciales y envía <strong>Correos Electrónicos Certificados (CEC)</strong> con plena validez jurídica conforme a la Ley 527. Todo sin salir de tu chat, todo con <strong>SonIA</strong>.
          </p>
          <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <a href="#precios" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-brand-navy hover:bg-blue-800 md:text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              ACTIVAR A SONIA POR $1.000 COP
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <p className="mt-3 text-xs text-gray-500">
              *Sin cláusulas de permanencia. Cancela cuando quieras.
            </p>
          </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 flex justify-center lg:justify-end">
            <WhatsAppMockup />
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="como-funciona" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-brand-navy sm:text-4xl">
          Olvídate de plataformas complejas
        </h2>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          SonIA funciona donde tú ya estás. Sin instalar apps, sin contraseñas nuevas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 text-center">
        <div className="group">
            <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors">
                <MessageCircle className="w-10 h-10 text-[#25D366]" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">1. Escribe a SonIA</h3>
            <p className="text-gray-600">
                Abre WhatsApp y da una instrucción simple: "Envía un correo certificado a cliente@empresa.com adjuntando este PDF".
            </p>
        </div>
        <div className="group">
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <Brain className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">2. IA Jurídica Procesa</h3>
            <p className="text-gray-600">
                SonIA analiza tu solicitud, prepara el envío certificado, encripta los adjuntos y realiza la entrega digital.
            </p>
        </div>
        <div className="group">
            <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-100 transition-colors">
                <ShieldCheck className="w-10 h-10 text-brand-navy" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">3. Recibe tu Prueba</h3>
            <p className="text-gray-600">
                En segundos, recibes en el mismo chat la estampa cronológica y el certificado de entrega con validez probatoria.
            </p>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section id="beneficios" className="py-20 bg-brand-navy text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-teal-400 font-bold tracking-wider uppercase text-sm">¿Por qué usar SonIA?</span>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
          Los 5 Poderes que SonIA te da hoy mismo
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Mail, title: "CEC con Validez Legal", desc: "Equivalente al correo físico (Ley 527/99). Trazabilidad total de apertura y contenido." },
          { icon: Clock, title: "Agendamiento Inteligente", desc: "Simplemente di: 'Recuérdame llamar al cliente mañana a las 3' y SonIA lo hará." },
          { icon: Scale, title: "Guardián de Términos", desc: "Vigila tus términos judiciales. Alertas preventivas para que nunca se te pase una fecha." },
          { icon: Smartphone, title: "Recepción Centralizada", desc: "Recibe todas tus notificaciones electrónicas en un solo lugar, organizadas por la IA." },
          { icon: Brain, title: "Consultas Jurídicas", desc: "Pregunta sobre jurisprudencia o leyes. SonIA busca en bases de datos actualizadas al instante." },
          { icon: ShieldCheck, title: "Seguridad Bancaria", desc: "Tus datos y los de tus clientes están protegidos con encriptación de grado militar." }
        ].map((item, idx) => (
          <div key={idx} className="bg-blue-900/50 p-6 rounded-xl border border-blue-700 hover:border-teal-400 transition-all">
            <item.icon className="w-8 h-8 text-teal-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="precios" className="py-24 bg-slate-50 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-extrabold text-brand-navy sm:text-5xl">
          Precios diseñados para <br/>la realidad del litigante
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Comienza con nuestra oferta imbatible de lanzamiento.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        {/* Basic / Prepaid */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 lg:mt-8">
            <h3 className="text-xl font-semibold text-gray-900">Usuario Ocasional</h3>
            <p className="mt-4 text-sm text-gray-500 h-10">Para quienes solo necesitan enviar un correo certificado hoy.</p>
            <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight text-gray-900">$15.000</span>
                <span className="ml-1 text-xl font-semibold text-gray-500">COP</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">por paquete de 3 envíos</p>

            <ul className="mt-6 space-y-4">
                <li className="flex items-start"><CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" /><span className="ml-3 text-sm text-gray-600">3 Correos Electrónicos Certificados</span></li>
                <li className="flex items-start"><CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" /><span className="ml-3 text-sm text-gray-600">Certificado probatorio PDF</span></li>
                <li className="flex items-start"><CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" /><span className="ml-3 text-sm text-gray-600">Sin vencimiento mensual</span></li>
                <li className="flex items-start text-gray-400"><X className="flex-shrink-0 h-5 w-5" /><span className="ml-3 text-sm">Sin Asistente SonIA</span></li>
            </ul>
            <button className="mt-8 block w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-6 text-sm font-semibold text-brand-navy hover:bg-gray-100 transition-colors">
                Comprar Paquete
            </button>
        </div>

        {/* Featured: Plan Starter */}
        <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-brand-navy relative transform scale-105 z-10">
            <div className="absolute top-0 right-0 -mt-4 mr-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Oferta Limitada
            </div>
            <h3 className="text-2xl font-bold text-brand-navy">Plan Starter (SonIA)</h3>
            <p className="mt-4 text-sm text-gray-500 h-10">La herramienta definitiva para el abogado independiente.</p>
            
            <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-gray-900">$1.000</span>
                <span className="ml-1 text-2xl font-semibold text-gray-500">COP</span>
            </div>
            <p className="text-sm font-bold text-red-500 mt-1">PRIMER MES</p>

            <ul className="mt-8 space-y-4">
                <li className="flex items-start"><CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" /><span className="ml-3 text-sm text-gray-600"><strong>Asistente SonIA</strong> ilimitada en WhatsApp</span></li>
                <li className="flex items-start"><CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" /><span className="ml-3 text-sm text-gray-600"><strong>20 Correos Certificados</strong> / mes</span></li>
                <li className="flex items-start"><CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" /><span className="ml-3 text-sm text-gray-600">Alertas de términos judiciales</span></li>
                <li className="flex items-start"><CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" /><span className="ml-3 text-sm text-gray-600">Consultas de jurisprudencia</span></li>
            </ul>
            
            <button className="mt-8 block w-full bg-brand-navy border border-transparent rounded-lg py-4 px-6 text-base font-bold text-white hover:bg-blue-800 transition-colors shadow-lg">
                RECLAMAR OFERTA
            </button>
            <p className="mt-4 text-[10px] text-gray-400 text-center leading-tight">
                Autorizo el cobro recurrente mensual de $59.900 a partir del segundo mes. Puedes cancelar en cualquier momento sin penalidad.
            </p>
        </div>

         {/* Plan Pro */}
         <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 lg:mt-8">
            <h3 className="text-xl font-semibold text-gray-900">Plan Pro</h3>
            <p className="mt-4 text-sm text-gray-500 h-10">Para litigantes de alto volumen de notificaciones.</p>
            <div className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight text-gray-900">$99.900</span>
                <span className="ml-1 text-xl font-semibold text-gray-500">COP</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">/ mes</p>

            <ul className="mt-6 space-y-4">
                <li className="flex items-start"><CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" /><span className="ml-3 text-sm text-gray-600">Asistente SonIA ilimitada</span></li>
                <li className="flex items-start"><CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" /><span className="ml-3 text-sm text-gray-600"><strong>80 Correos Certificados</strong> / mes</span></li>
                <li className="flex items-start"><CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" /><span className="ml-3 text-sm text-gray-600">Soporte prioritario</span></li>
                <li className="flex items-start"><CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" /><span className="ml-3 text-sm text-gray-600">Custodia de archivos por 5 años</span></li>
            </ul>
            <button className="mt-8 block w-full bg-white border-2 border-brand-navy rounded-lg py-3 px-6 text-sm font-semibold text-brand-navy hover:bg-gray-50 transition-colors">
                Elegir Pro
            </button>
        </div>
      </div>
    </div>
  </section>
);

const Corporate = () => (
  <section id="empresas" className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:justify-between bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-12 lg:w-1/2">
          <div className="flex items-center space-x-2 text-brand-navy mb-4">
            <Building2 className="h-6 w-6" />
            <span className="font-bold tracking-wide uppercase text-sm">Para Bufetes y Empresas</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
            Gestión centralizada para equipos legales
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Asigna una SonIA a cada uno de tus abogados y comparte una bolsa de correos certificados corporativa. Mantén el control total de las notificaciones, trazabilidad centralizada y reduce costos operativos drásticamente.
          </p>
          <a href="https://wa.me/1234567890" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors">
            <MessageCircle className="mr-2 h-5 w-5" />
            Hablar con Ventas (Humano)
          </a>
        </div>
        <div className="lg:w-1/2 h-64 lg:h-auto bg-brand-navy flex items-center justify-center p-12">
            <div className="text-white opacity-80 text-center">
                <ShieldCheck className="w-24 h-24 mx-auto mb-4" />
                <p className="text-xl font-light">Control y Auditoría Total</p>
            </div>
        </div>
      </div>
    </div>
  </section>
);

const PhysicalServices = () => (
  <section id="mensajeria" className="py-20 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Más allá de lo digital</h2>
        <p className="mt-4 text-gray-600">
            DataCreditoPostal integra el mundo físico y digital. ¿Necesitas enviar un paquete o un documento físico original?
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="bg-orange-100 p-6 rounded-full">
            <Package className="w-12 h-12 text-orange-600" />
        </div>
        <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-brand-navy mb-2">Mensajería Física Certificada</h3>
            <p className="text-gray-600">
                Realizamos envíos nacionales de paquetería y documentos con la misma seguridad jurídica. Rastreo en tiempo real, prueba de entrega física digitalizada y cobertura en todo el territorio colombiano.
            </p>
        </div>
        <button className="px-6 py-3 border-2 border-orange-500 text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-colors whitespace-nowrap">
            Cotizar Envío Físico
        </button>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Es legalmente válido un correo enviado por SonIA?",
      a: "Absolutamente. Nuestros Correos Electrónicos Certificados cumplen estrictamente con la Ley 527 de 1999 y la Ley 2213 de 2022. Emitimos un certificado con estampa cronológica y firma digital que garantiza la integridad, autenticidad y no repudio del mensaje."
    },
    {
      q: "¿Cómo funciona la oferta de $1.000 pesos?",
      a: "Es una promoción de bienvenida para que pruebes el servicio sin riesgo. Pagas $1.000 el primer mes y obtienes acceso completo al Plan Starter. Si decides continuar, a partir del segundo mes la tarifa es de $59.900. Puedes cancelar antes del mes si no estás satisfecho."
    },
    {
      q: "¿Necesito instalar alguna aplicación extra?",
      a: "No. SonIA vive dentro de WhatsApp. Si ya tienes WhatsApp instalado en tu celular, ya tienes todo lo necesario para usar nuestros servicios."
    },
    {
      q: "¿Mis datos y los de mis clientes están seguros?",
      a: "La seguridad es nuestra prioridad. Toda la comunicación está encriptada de extremo a extremo. No compartimos datos con terceros y cumplimos con la normativa de Habeas Data vigente en Colombia."
    },
    {
      q: "¿Qué pasa si se me acaban los envíos del mes?",
      a: "SonIA te avisará cuando estés cerca del límite. Puedes adquirir paquetes adicionales de envíos (top-ups) o actualizar tu plan al nivel Pro directamente desde el chat."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 text-left transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === idx ? 'transform rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="p-4 bg-white text-gray-600 border-t border-gray-200 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-brand-navy text-gray-300 py-12 border-t border-gray-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
                <Mail className="h-6 w-6 text-white" />
                <span className="font-bold text-xl text-white">DataCredito<span className="text-blue-400">Postal</span></span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
                Soluciones de comunicación certificada física y digital para el sector legal y corporativo colombiano. Innovación con seguridad jurídica.
            </p>
        </div>
        
        <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-white">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-white">Regulación Postal (CRC)</a></li>
                <li><a href="#" className="hover:text-white">Validez Jurídica (Ley 527)</a></li>
            </ul>
        </div>

        <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contacto</h4>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Soporte Técnico</a></li>
                <li><a href="#" className="hover:text-white">Ventas Corporativas</a></li>
                <li><a href="#" className="hover:text-white">Bogotá, Colombia</a></li>
                <li className="flex gap-4 mt-4">
                    <a href="#" className="text-gray-400 hover:text-white"><MessageCircle size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><Mail size={20} /></a>
                </li>
            </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} DataCreditoPostal S.A.S. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <StickyBar />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Corporate />
        <PhysicalServices />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;