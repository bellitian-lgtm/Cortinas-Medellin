
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types.ts";

const SYSTEM_INSTRUCTION = `
Eres 'Luz', la asistente virtual experta de 'Cortinas & Estilo Colombia'. 
Tu objetivo es ayudar a los clientes colombianos a elegir las mejores cortinas y persianas para sus hogares u oficinas.
Hablas de forma elegante, profesional y cercana.

Conocimientos clave:
- Productos: Enrollables, Sheer Elegance, Blackouts, Persianas de madera, Cortinas de tela técnica, Motorización.
- Beneficios: Protección UV, privacidad, control térmico, estética moderna.
- Ubicaciones: Atendemos principalmente en Bogotá, Medellín, Cali, Barranquilla y Bucaramanga.
- Proceso: Ofrecemos visitas técnicas gratuitas para toma de medidas.

Reglas:
1. Sé concisa pero servicial.
2. Si preguntan por precios específicos, explica que dependen de las medidas exactas y ofrece una visita técnica.
3. Responde siempre en español.
`;

export async function getChatResponse(history: Message[]): Promise<string> {
  try {
    // Se inicializa la instancia dentro de la función para evitar que errores 
    // de configuración de la clave bloqueen el renderizado inicial del sitio.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const contents = history.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Lo siento, tuve un problema procesando tu solicitud. ¿Podrías intentar de nuevo?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "En este momento no puedo responder, pero puedes contactarnos por WhatsApp al +57 300 000 0000.";
  }
}
