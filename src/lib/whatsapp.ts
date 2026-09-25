// Configurable company WhatsApp number (include country code, no + or spaces for wa.me)
export const WHATSAPP_NUMBER = "8801712345678"; // Replace with actual number

export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

export function getPropertyShareMessage(title: string): string {
  return `Hello, I am interested in ${title} property share. Please share the latest availability and project details.`;
}

export function getFlatMessage(title: string, size: string, location: string): string {
  return `Hello, I am interested in the ${size} flat (${title}) in ${location}. Please share the price and availability details.`;
}

export function getGeneralMessage(): string {
  return "Hello, I am interested in a property listed on your website. Please share the availability and details.";
}
