import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const documentContent = `
# Propuesta Económica SYSDE para Banco Atlas — Paraguay

## Información Principal:
- **Cliente**: Banco Atlas — Paraguay
- **Solución**: Sistema integral SYSDE SAF+ (Core Bancario)
- **Empresa**: SYSDE — Especialistas en soluciones tecnológicas para el sector financiero

## Contexto de Banco Atlas:
- US$1,400M en activos, 27 sucursales, 500+ colaboradores
- Calificación AA-py Estable
- Cartera de créditos con crecimiento del 15.36% interanual
- Líder en préstamos AFD para vivienda
- 66% de transacciones ya son digitales
- Estrategia centrada en digitalización y PYMES

## ¿Qué es SYSDE SAF+?
La herramienta financiera de alta tecnología que automatiza e integra de forma eficiente los procesos y operaciones de los intermediarios financieros.
Características: Flexible y Adaptable, Canales Digitales Integrados, APIs y Conectividad, Tecnología de Última Generación, Gestión de Datos Centralizada, Orientado al Cliente.

## 10 Módulos Incluidos:
1. Seguridad
2. Clientes 360°
3. Préstamos
4. Cajas
5. Cuentas de Efectivo
6. Contabilidad
7. Bancos / Tesorería
8. Depósitos a Plazo
9. Activos Fijos
10. Reportes Regulatorios

## Modelo de Servicio Ilimitado:
- Usuarios Ilimitados: sin restricción, crezca sin costos adicionales por licencia
- Agencias Ilimitadas: las 27 agencias actuales y las futuras están cubiertas
- Cambios y Mejoras: ajustes funcionales y nuevos productos sin costo extra
- Reportes Regulatorios: actualizaciones BCP, SEPRELAD incluidas
- Soporte y Capacitación: correctivo, evolutivo y capacitación permanente
- Infraestructura Cloud: Microsoft Azure, respaldos diarios, sitio de contingencia

## Modelo de Inversión Escalonado:
| Fase | Período | Precio Mensual USD |
|------|---------|-------------------|
| Fase 1: Arranque | Meses 1-18 | $9,999 |
| Fase 2: Crecimiento | Meses 19-36 | $14,999 |
| Fase 3: Consolidación | Mes 37+ | $18,999 |

Todos los precios en USD. No incluyen IVA. Contrato mínimo de 5 años. Facturación local en Paraguay.

## Comparación vs Modelo Tradicional:
- Licenciamiento: Suscripción SaaS (vs Compra + Mantenimiento)
- Usuarios: ILIMITADOS (vs Pago por usuario)
- Agencias: ILIMITADAS (vs Pago por agencia)
- Cambios regulatorios: INCLUIDOS (vs Cobro adicional)
- Mejoras funcionales: INCLUIDAS (vs Cobro por hora)
- Soporte: INCLUIDO (vs Contrato separado)
- Capacitación: INCLUIDA (vs Cobro adicional)
- Infraestructura: Azure incluido (vs Inversión propia)
- Implementación: 6 meses (vs 6-18 meses)

## Reportes Regulatorios Paraguay:
- Banco Central del Paraguay (BCP): solvencia, liquidez, calce de monedas, estados financieros
- SEPRELAD: prevención lavado de activos, operaciones sospechosas, KYC
- Superintendencia de Bancos (SIB): central de riesgos, gobierno corporativo, auditoría
- FATF / GAFI: estándares internacionales prevención financiamiento terrorismo
- Cualquier nuevo reporte o modificación regulatoria se implementa sin costo adicional

## Cronograma de Implementación (6 meses):
- Mes 1-2: Configuración Nube y Entendimiento del Negocio
- Mes 2-4: Parametrización Base y Ajustes
- Mes 4-5: Capacitación Funcional
- Mes 5: Pruebas Integrales
- Mes 6: Puesta en Producción
- Metodología SYSDE "Agile - Answers"

## Infraestructura ON-CLOUD:
- Servidor de Aplicaciones: 4 cores, 16GB RAM, 128GB SSD, Windows Server 2019
- Servidor de Base de Datos: SQL SaaS 4 núcleos, 16GB RAM, 500GB, MS SQL 2019
- Servidor Web/Servicios: 4 cores, 16GB RAM, 128GB SSD, Linux
- Servicios de Red: Respaldo diario, retención 15 días, sitio de contingencia, Microsoft Azure

## Términos y Condiciones:
- Precios en USD, no incluyen IVA, facturación local en Paraguay
- Contrato mínimo de 5 años
- Incluye servidor de contingencia
- Modificaciones funcionales sin costo adicional
- Soporte y capacitación incluidos
- Reportes regulatorios incluidos
- Usuarios y agencias ilimitados
- Información confidencial y propiedad de SYSDE

## Contacto:
- Eduardo Wheelock, Presidente, Sysde Inc.
- Teléfono: +506 8657 0390
- Email: info@sysde.com
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Eres un asistente especializado en la propuesta económica de SYSDE para Banco Atlas Paraguay. Tu trabajo es responder preguntas sobre esta propuesta de manera clara, profesional y útil.

INFORMACIÓN DEL DOCUMENTO:
${documentContent}

INSTRUCCIONES:
1. Responde SOLO sobre la información contenida en la propuesta de SYSDE para Banco Atlas
2. Si la pregunta no está relacionada con el documento, redirige educadamente hacia los temas de la propuesta
3. Sé claro, conciso y profesional en tus respuestas
4. Usa emojis moderadamente para hacer las respuestas más amigables
5. Si no tienes información específica sobre algo, sugiere contactar al equipo de SYSDE
6. Formatea las respuestas en markdown para mejor legibilidad`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Demasiadas consultas. Por favor intenta de nuevo en un momento." }), 
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Servicio de IA temporalmente no disponible." }), 
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Error del servicio de IA. Por favor intenta de nuevo." }), 
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || 
      "Lo siento, no pude procesar tu pregunta. ¿Podrías reformularla?";

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Error desconocido" }), 
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
