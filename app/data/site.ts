export const siteConfig = {
  whatsapp: {
    number: "258857291945",
    url: "https://wa.me/258857291945",
  },
  social: {
    instagram: "https://instagram.com/flafla",
    facebook: "https://facebook.com/flafla",
  },
} as const;

export function buildWhatsAppUrl(message?: string): string {
  if (message) {
    return `${siteConfig.whatsapp.url}?text=${encodeURIComponent(message)}`;
  }
  return siteConfig.whatsapp.url;
}
