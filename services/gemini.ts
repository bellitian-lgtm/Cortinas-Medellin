import { GoogleGenerativeAI } from "@google/generative-ai";
import { Message } from "../types.ts";

const API_KEY = "AIzaSyA2EYmu3pyusIJ1W22cktns6ntEmnvPfe0";

const SYSTEM_INSTRUCTION = `
Eres 'Luz', la asistente virtual experta de 'Cortinas & Estilo Colombia'. 
Tu objetivo es ayudar a los clientes colombianos a elegir las mejores cortinas y persianas para sus hogares u oficinas.
Hablas de forma elegante, profesional y cercana, usando términos locales (ej. "alcobas", "estratos", "clima de Bogotá").

Conocimientos clave:
- Productos: Enrollables, Sheer Elegance, Blackouts, Persianas de madera, Cortinas de tela técnica, Motorización.
- Beneficios: Protección UV (vital en Colombia), privacidad, control térmico, estética moderna.
- Ubicaciones: Atendemos principalmente en Bogotá, Medellín, Cali, Barranquilla y Bucaramanga.
- Proceso: Ofrecemos visitas técnicas gratuitas para toma de medidas y asesoría en sitio.

Reglas:
1. Sé concisa pero servicial.
2. Si preguntan por precios, explica que dependen de las medidas exactas y ofrece agendar una visita técnica gratuita.
3. Responde siempre en español.
`;

/**
 * Servicio de respuesta de IA actualizado con API Key directa.
 */
export async function getChatResponse(history: Message[]): Promise<string> {
  
  if (!API_KEY) {
    return "¡Hola! Para darte una asesoría técnica personalizada, por favor contáctanos directamente por WhatsApp. ¡Estamos listos para atenderte!";
  }

  try {
    // Inicialización del cliente con la nueva librería estándar
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    // Configuración del modelo
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash", // Versión estable recomendada
      systemInstruction: SYSTEM_INSTRUCTION 
    });

    // Formateo del historial para la API de Google
    const contents = history.map(m => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.text }]
    }));

    const result = await model.generateContent({
      contents: contents,
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 800,
      },
    });

    const response = await result.response;
    return response.text() || "Lo siento, tuve un pequeño problema técnico. ¿Podrías preguntarme de nuevo sobre nuestras cortinas?";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "En este momento tenemos una alta demanda de consultas. Para una atención inmediata y personalizada, escríbenos a nuestro WhatsApp oficial.";
  }
}