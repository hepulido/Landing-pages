'use client'

import React from 'react'
import Link from 'next/link'

export default function HomeES() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Language Switcher */}
      <div className="flex justify-end p-6">
        <Link 
          href="/"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-sm"
        >
          English
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="ml-4 text-2xl font-bold text-gray-900">MissedCall Bot</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Convierte llamadas perdidas en trabajos reservados — automáticamente
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            SMS instantáneo, resúmenes de buzón de voz y alertas de &ldquo;a quién llamar primero&rdquo;.<br />
            <span className="font-semibold text-gray-900">Funciona con tu número actual. Sin cambiar de sistema.</span>
          </p>

          <div className="flex flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center text-green-600 font-semibold">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Prueba gratuita de 14 días
            </div>
            <div className="flex items-center text-green-600 font-semibold">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sin configuración requerida
            </div>
            <div className="flex items-center text-green-600 font-semibold">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cancela cuando quieras
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-8">
            Acceso anticipado • 14 días gratis • Luego $29/mes
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-20 text-center">
          <a 
            href="#form"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xl rounded-2xl shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-3xl"
          >
            Obtén 14 días gratis
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Who It's For Section */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Para quién es</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Perfecto para plomeros, HVAC, electricistas, reparación de autos, clínicas médicas, dentistas — y funciona muy bien para salones, restaurantes, bienes raíces, servicios de limpieza también.
          </p>
        </div>

        {/* Trust Strip */}
        <div className="mb-20 text-center">
          <p className="text-sm text-gray-500">
            No se necesita tarjeta de crédito. Cancela cuando quieras. Privacidad primero.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Cómo Funciona</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Llamada perdida? Enviamos SMS automático</h3>
              <p className="text-gray-600">Enviamos SMS automático al llamante para que no pierdas el lead.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Buzón de voz a resumen</h3>
              <p className="text-gray-600">Transcribimos y detectamos la intención (ej., &ldquo;emergencia&rdquo;, &ldquo;solicitud de cotización&rdquo;).</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Alertas prioritarias</h3>
              <p className="text-gray-600">Te decimos a quién llamar primero para ganar el trabajo.</p>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Beneficios Clave</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Captura trabajos que normalmente perderías</h3>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Responde más rápido con el mensaje correcto</h3>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Configuración simple — mantén tu número actual</h3>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Preguntas Frecuentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Necesito cambiar de proveedor telefónico?</h3>
              <p className="text-gray-600">No. Mantén tu número.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Funcionará después del horario laboral?</h3>
              <p className="text-gray-600">Sí. Podemos pausar o enviar respuestas fuera de horario.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Es complicado configurarlo?</h3>
              <p className="text-gray-600">No. La mayoría de las empresas están funcionando en ~5 minutos.</p>
            </div>
          </div>
        </div>

        {/* Tally Form Embed */}
        <div id="form" className="mt-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Obtén 14 Días Gratis
            </h2>
            
            <div className="tally-form-container">
              <iframe
                src="https://tally.so/embed/npQeVE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Formulario de Registro MissedCall Bot"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 