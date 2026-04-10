export const siteConfig = {
  whatsapp: {
    number: "258857291945",
    url: "https://wa.me/258857291945",
  },
  social: {
    instagram: "https://www.instagram.com/fanflaonline?igsh=ZDNidnY0eXVuamc1",
    facebook: "https://facebook.com/flafla",
  },
} as const;

export function buildWhatsAppUrl(message?: string): string {
  if (message) {
    return `${siteConfig.whatsapp.url}?text=${encodeURIComponent(message)}`;
  }
  return siteConfig.whatsapp.url;
}
