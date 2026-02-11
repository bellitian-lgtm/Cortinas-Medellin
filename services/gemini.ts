
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
Eres 'Luz', la asistente virtual experta de 'Cortinas & Estilo Colombia'. 
Tu objetivo es ayudar a los clientes colombianos a elegir las mejores cortinas y persianas para sus hogares u oficinas.
Hablas de forma elegante, profesional y cercana (tuteo respetuoso o voseo si es apropiado para regiones específicas de Colombia, pero el estándar neutral profesional es mejor).

Conocimientos clave:
- Productos: Enrollables, Sheer Elegance, Blackouts, Persianas de madera, Cortinas de tela técnica, Motorización (compatible con Alexa/Google Home).
- Beneficios: Protección UV, privacidad, control térmico, estética moderna.
- Ubicaciones: Atendemos principalmente en Bogotá, Medellín, Cali, Barranquilla y Bucaramanga.
- Proceso: Ofrecemos visitas técnicas gratuitas para toma de medidas en las ciudades principales.
- Precios: Varían según la medida y el tipo de tela. Sugiere agendar una visita.

Reglas:
1. Sé concisa pero servicial.
2. Si preguntan por precios específicos, explica que dependen de las medidas exactas y ofrece una visita técnica.
3. Responde siempre en español.
`;

export async function getChatResponse(history: Message[]): Promise<string> {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // We send only the last message as the current 'message' and use history for context if needed, 
    // but the simplest chat implementation is to rebuild history in the contents if using chat.sendMessage.
    // However, Gemini SDK's chat object manages history internally if we send messages sequentially.
    
    // For this simple implementation, we'll use a direct generateContent for robustness with the whole history
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
