import React, { useState } from 'react';

// Path for your own image in deployment
const headshotPath = "./assets/headshot.jpg";
const fallbackUrl = "https://ui-avatars.com/api/?name=Rodolfo+Gaspary&background=135bec&color=fff&size=512";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    website: '',
    situacion: '',
    problema: '',
    exito: '',
    inversion: '',
    plazos: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu interés. En breve me pondré en contacto contigo.');
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12">
      <section className="flex flex-col gap-4 text-center">
        <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">Contacto</span>
        <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
          Hablemos de tu sitio web, <span className="text-primary">correctamente.</span>
        </h1>
        <div className="max-w-xl mx-auto flex flex-col gap-4">
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Mi objetivo es entender a fondo tu proyecto para determinar si mi enfoque estratégico es el adecuado para ayudarte a escalar.
          </p>
          <div className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium border border-slate-200 dark:border-slate-700 mx-auto">
            <span className="material-symbols-outlined text-sm">info</span>
            Esta no es una llamada de ventas y no hay obligación.
          </div>
        </div>
      </section>

      {/* Bio Card */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-5 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
          <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-md border-2 border-white dark:border-slate-700 overflow-hidden">
             <img 
                src={headshotPath} 
                alt="Rodolfo Gaspary" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = fallbackUrl;
                }}
              />
          </div>
          <div className="flex flex-col">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold">Rodolfo Gaspary</h3>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider">Consultor de Estrategia Digital</p>
            <div className="flex items-center gap-2 mt-1 text-slate-500 text-xs">
               <span className="material-symbols-outlined text-[14px]">location_on</span>
               <span>Remoto / Global</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">Nombre</label>
              <input 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base" 
                placeholder="Tu nombre" required type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">Correo electrónico</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base" 
                placeholder="tu@correo.com" required type="email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">Empresa / Proyecto</label>
              <input 
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base" 
                placeholder="Nombre del negocio" required type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">Sitio web actual <span className="text-[10px] opacity-60">(opcional)</span></label>
              <input 
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base" 
                placeholder="https://..." type="url"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">¿Qué describe mejor tu situación?</label>
            <div className="relative">
              <select 
                name="situacion"
                value={formData.situacion}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base appearance-none bg-none shadow-none" 
                style={{ backgroundImage: 'none' }}
                required
              >
                <option disabled value="">Selecciona una opción</option>
                <option value="nuevo">Necesito un sitio web nuevo</option>
                <option value="mejorar">Quiero mejorar un sitio existente</option>
                <option value="orientacion">No estoy seguro, necesito orientación</option>
                <option value="opinion">Busco una segunda opinión experta</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">¿Qué problema intentas resolver?</label>
            <p className="text-slate-500 dark:text-slate-400 text-xs italic mb-1">Ej: mejorar conversiones, clarificar el mensaje, problemas técnicos, etc.</p>
            <textarea 
              name="problema"
              value={formData.problema}
              onChange={handleChange}
              className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base min-h-[100px]" 
              placeholder="Cuéntame sobre el desafío principal..." required
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">¿Qué resultado haría que este proyecto fuera un éxito para ti?</label>
            <textarea 
              name="exito"
              value={formData.exito}
              onChange={handleChange}
              className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base min-h-[100px]" 
              placeholder="Define tu objetivo ideal..." required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">Rango de inversión estimada</label>
              <div className="relative">
                <select 
                  name="inversion"
                  value={formData.inversion}
                  onChange={handleChange}
                  className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base appearance-none bg-none shadow-none" 
                  style={{ backgroundImage: 'none' }}
                  required
                >
                  <option disabled value="">Selecciona un rango</option>
                  <option value="low">Menos de $3,000</option>
                  <option value="mid"> $3,000 – $6,000</option>
                  <option value="high"> $6,000 – $12,000</option>
                  <option value="enterprise">Más de $12,000</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-widest">Plazos</label>
              <div className="relative">
                <select 
                  name="plazos"
                  value={formData.plazos}
                  onChange={handleChange}
                  className="w-full rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-3.5 text-base appearance-none bg-none shadow-none" 
                  style={{ backgroundImage: 'none' }}
                  required
                >
                  <option disabled value="">¿Para cuándo lo necesitas?</option>
                  <option value="now">Inmediatamente</option>
                  <option value="1m">En 1 mes</option>
                  <option value="3m">En 3 meses</option>
                  <option value="explorando">Solo estoy explorando</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-4">
            <button 
              className="w-full flex cursor-pointer items-center justify-center rounded-2xl h-16 bg-primary text-white text-lg font-bold transition-all hover:bg-blue-700 active:scale-[0.98] gap-3 shadow-lg shadow-primary/20" 
              type="submit"
            >
              <span>Iniciar la conversación</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="text-center text-slate-500 dark:text-slate-400 text-xs italic">
              Si tu proyecto no encaja, te lo haré saber con honestidad.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;