
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types.ts";

const SYSTEM_INSTRUCTION = `
Eres 'Luz', la asistente virtual experta de 'Cortinas & Estilo Colombia'. 
Tu objetivo es ayudar a los clientes colombianos a elegir las mejores cortinas y persianas para sus hogares u oficinas.
Hablas de forma elegante, profesional y cercana, usando términos locales si es necesario (ej. "alcobas", "estratos", "clima de Bogotá").

Conocimientos clave:
- Productos: Enrollables, Sheer Elegance, Blackouts, Persianas de madera, Cortinas de tela técnica, Motorización.
- Beneficios: Protección UV (crucial en Colombia), privacidad, control térmico, estética moderna.
- Ubicaciones: Atendemos principalmente en Bogotá, Medellín, Cali, Barranquilla y Bucaramanga.
- Proceso: Ofrecemos visitas técnicas gratuitas para toma de medidas y asesoría en sitio.

Reglas:
1. Sé concisa pero servicial.
2. Si preguntan por precios, explica que dependen de las medidas exactas y ofrece agendar una visita técnica gratuita.
3. Responde siempre en español.
`;

export async function getChatResponse(history: Message[]): Promise<string> {
  // Verificación de seguridad para evitar errores de ejecución en el cliente
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("Configuración requerida: API_KEY no encontrada en el entorno.");
    return "Hola, para darte una mejor asesoría técnica personalizada, por favor contáctanos directamente por WhatsApp al +57 300 000 0000 o agenda una visita gratuita en nuestra web.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const contents = history.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "Lo siento, tuve un pequeño problema técnico. ¿Podrías intentar preguntarme de otra forma?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "En este momento tenemos alta demanda de consultas. Para una atención inmediata sobre nuestras persianas y cortinas, escríbenos a nuestro WhatsApp oficial.";
  }
}
