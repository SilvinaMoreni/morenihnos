import './Detalle.css';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MapPin, Calendar } from 'lucide-react';

const AboutUs = () => {
  const testimonials = [
    { name: "Juan Pérez", company: "Naviera Austral", text: "Excelente servicio y profesionalismo en cada trabajo." },
    { name: "María González", company: "Pesquera del Sur", text: "Confiamos plenamente en MORENI HNOS. para el mantenimiento de nuestros equipos." },
  ];

  const timelineEvents = [
    { year: 1986, event: "Fundación de MORENI HNOS. S.R.L." },
    { year: 2008, event: "Desarrollo de nueva unidad de negocios para mantenimiento de extintores" },
    { year: 2022, event: "Certificación ISO 9001-2015" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">SOBRE NOSOTROS</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">MORENI HNOS. S.R.L.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700">
              <p>"MORENI HNOS. S.R.L." es una empresa patagónica que desde 1986 brinda en forma continua el servicio de mantenimiento de balsas 
                y dispositivos salvavidas. La empresa, posee dos estaciones de mantenimiento una en la ciudad de Puerto Madryn y otra en la 
                localidad de Punta Alta, Provincia de Buenos aires, ambas aprobadas por la Prefectura Naval Argentina, según la resolución 761(18)
                 de la Organización Marítima Internacional (OMI). La firma brinda servicios y soluciones a gran parte de los barcos que arriban a 
                 Puertos Patagónicos comunicados entre Bahía Blanca y Río Gallegos. En toda su trayectoria siempre ha tenido la premisa de 
                 satisfacer las necesidades y requisitos del cliente a través de la provisión de servicios con altos niveles de confiabilidad. 
                 Es por esta razón que la empresa obtuvo la aprobación y calificación de distintos fabricantes de dispositivos salvavidas para 
                 realizar el servicio de tan importantes medios de seguridad, salvamento y supervivencia. Partiendo de la misma premisa, y cómo 
                 resultado de la mejora continua del sistema de gestión de calidad, en 2008 se desarrolló una nueva unidad de negocios dedicada al 
                 mantenimiento de extintores y sistemas de lucha contra incendios con certificación IRAM, electrónica de supervivencia, 
                 desarrollo de nuevas instalaciones, renovación de equipos y rodados. Además, se han desarrollado proveedores internacionales 
                 y alianzas con fábricas para la importación directa de repuestos y equipos, lo que favoreció la comercialización. 
                 La mejora continua y enfoque al cliente ha llevado a la organización a certificar la norma IRAM 3517-2 “Control mantenimiento
                 y recarga de extintores”, siendo la única empresa de la ciudad de Puerto Madryn en poseer tal distinción. La renovación permanente 
                 del SGC junto con la certificación de la norma ISO 9001-2015 obtenida en el año 2022, para mejorar la competitividad de la empresa, 
                 reafirma el compromiso asumido para satisfacer las necesidades de los clientes y de las demás partes interesadas.</p>
            </div>
            <div className="space-y-4">
              <img src="/img/carrusel/carrusel1.JPG" alt="Instalaciones de MORENI HNOS." className="carrusel" />
              <img src="/img/carrusel/carrusel2.JPG" alt="Equipo de trabajo" className="carrusel" />
              <img src="/img/carrusel/carrusel3.JPG" alt="Equipo de trabajo" className="carrusel" />
              <img src="/img/carrusel/carrusel4.JPG" alt="Equipo de trabajo" className="carrusel" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Nuestras Ubicaciones</h2>
          <div className="aspect-w-16 aspect-h-9">
          <iframe src="https://www.google.com/maps/d/embed?mid=1e8vQGYKjXvBFhfjf_DPP9eC1gRxypyI&ehbc=2E312F" width="250" height="480"></iframe>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Testimonios de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
                <p className="italic mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Nuestra Historia</h2>
          <VerticalTimeline>
            {timelineEvents.map((event, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={event.year}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Calendar />}
              >
                <h3 className="vertical-timeline-element-title">{event.event}</h3>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;