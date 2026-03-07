
import { GoogleGenAI } from "@google/genai";

// Initialization should strictly use process.env.API_KEY as a direct named parameter
export const getTravelAdvice = async (userPrompt: string) => {
  // Create a new instance right before the call to ensure the latest API state
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Tu es l'assistant de voyage de Béninéo, une agence de tourisme d'élite au Bénin. 
        Ton ton est poétique, chaleureux et professionnel. Tu mets en avant la culture Vodoun, l'authenticité et le slogan "Le monde commence au Bénin". 
        Réponds aux questions des voyageurs sur les circuits, la conciergerie (vols, visas, sim, finance), les Ebunbox (coffrets cadeaux) et les goodies. 
        Utilise des expressions comme "terre-mère", "âme du monde", "force tranquille".
        Réponds en Français.`,
      },
    });
    // Access the .text property directly (not as a method)
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Je m'excuse, une petite tempête sur la lagune m'empêche de vous répondre. Réessayez dans un instant.";
  }
};
