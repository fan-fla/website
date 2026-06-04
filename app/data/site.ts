export const siteConfig = {
  whatsapp: {
    number: "258857291945",
    url: "https://wa.me/258857291945",
  },
  social: {
    instagram: "https://www.instagram.com/fanflaonline?igsh=ZDNidnY0eXVuamc1",
    facebook: "https://facebook.com/flafla",
  },
  seo: {
    siteUrl: "https://www.fanfla.com",
    description:
      "Fan Fla — cookies caseiros e saudáveis, feitos à mão em Maputo com ingredientes naturais da nossa terra. Sem açúcar refinado, sem conservantes.",
    brandAliases: ["Fan Fla", "Fla Fla", "FlaFla", "fanfla"],
    keywords: [
      "Fan Fla",
      "Fla Fla",
      "FlaFla",
      "fanfla",
      "fan fla cookies",
      "cookies",
      "bolachas",
      "Moçambique",
      "Maputo",
      "artesanal",
      "saudável",
      "sem açúcar",
      "natural",
    ],
  },
} as const;

export function buildWhatsAppUrl(message?: string): string {
  if (message) {
    return `${siteConfig.whatsapp.url}?text=${encodeURIComponent(message)}`;
  }
  return siteConfig.whatsapp.url;
}
