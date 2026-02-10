
import { GoogleGenAI, Modality } from "@google/genai";
import { MODELS, SYSTEM_PROMPT } from "../constants";
import { ModelMode } from "../types";

// Helper to check for key selection errors as per guidelines
const isKeyError = (error: any) => error.message?.includes("Requested entity was not found");

export const generateText = async (
  prompt: string, 
  mode: ModelMode, 
  contextCode: string
): Promise<string> => {
  // Fix: Create new instance right before call using strict apiKey initialization
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const modelName = mode === 'fast' ? MODELS.FAST : mode === 'thinking' ? MODELS.THINKING : MODELS.STANDARD;
  
  const config: any = {
    systemInstruction: SYSTEM_PROMPT,
  };

  if (mode === 'thinking') {
    // thinkingBudget is only for gemini 2.5/3 series
    config.thinkingConfig = { thinkingBudget: 32768 };
  }

  const fullPrompt = `Context Code:\n\`\`\`\n${contextCode}\n\`\`\`\n\nUser Request: ${prompt}`;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: fullPrompt,
      config,
    });
    // Fix: Access .text property directly, do not call as method
    return response.text || "No response generated.";
  } catch (error: any) {
    console.error("AI Generation Error:", error);
    if (isKeyError(error)) {
        // Reset key selection if error occurs
        if (typeof window !== 'undefined' && (window as any).aistudio) {
            (window as any).aistudio.openSelectKey();
        }
        return "API Key error. Please select a valid paid project key.";
    }
    return `Error: ${error.message}`;
  }
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  // Fix: Create new instance for image generation tasks
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: MODELS.IMAGE,
      contents: { parts: [{ text: prompt }] },
      config: {
        imageConfig: { aspectRatio: "1:1" }
      }
    });

    // Fix: Iterate through parts to find the image part
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error: any) {
    console.error("Image Generation Error:", error);
    if (isKeyError(error)) {
        (window as any).aistudio?.openSelectKey();
    }
    return null;
  }
};

export const generateSpeech = async (text: string): Promise<Uint8Array | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: MODELS.TTS,
      contents: [{ parts: [{ text: `Say clearly: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    // Fix: Properly handle raw PCM audio bytes without standard file headers
    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      const binaryString = atob(base64Audio);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes;
    }
    return null;
  } catch (error: any) {
    console.error("Speech Generation Error:", error);
    if (isKeyError(error)) {
        (window as any).aistudio?.openSelectKey();
    }
    return null;
  }
};

export const generateVideo = async (prompt: string, progressCallback: (msg: string) => void): Promise<string | null> => {
    // Fix: Always create new instance for Veo models to ensure current API key
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
        progressCallback("Initiating video generation (this may take a few minutes)...");
        let operation = await ai.models.generateVideos({
            model: MODELS.VIDEO,
            prompt,
            config: {
                numberOfVideos: 1,
                resolution: '720p',
                aspectRatio: '16:9'
            }
        });

        // Polling loop for video operations as required
        while (!operation.done) {
            progressCallback("Amīritas is dreaming your frames... hang tight.");
            await new Promise(resolve => setTimeout(resolve, 10000));
            operation = await ai.operations.getVideosOperation({ operation: operation });
        }

        const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
        if (downloadLink) {
            // Fix: Append API key to the download link as per guidelines
            const res = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
            const blob = await res.blob();
            return URL.createObjectURL(blob);
        }
        return null;
    } catch (error: any) {
        console.error("Video Generation Error:", error);
        if (isKeyError(error)) {
            (window as any).aistudio?.openSelectKey();
        }
        return null;
    }
};
