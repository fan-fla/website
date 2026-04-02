export interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  whatsappMessage?: string;
}

export const cookies: Product[] = [
  {
    name: "Lhaties",
    description:
      "Cookies elaborados com farinha de batata-doce de polpa alaranjada. Fonte de betacaroteno e vitamina A. Adoçados com mel puro.",
    price: "210 MT / 6 unidades",
    image: "/cookies/lhaties.png",
    whatsappMessage:
      "Olá! Gostaria de encomendar os cookies Lhaties de batata-doce. Podem ajudar-me?",
  },
  {
    name: "Matchies",
    description:
      "Feitos com farinha de mandioca fresca, representam o Norte moçambicano. Textura única e sabor autêntico. Sem glúten.",
    price: "210 MT / 6 unidades",
    image: "/cookies/matchies.png",
    whatsappMessage:
      "Olá! Quero encomendar os cookies Matchies de mandioca. Como posso fazer?",
  },
  {
    name: "Mifuguies",
    description:
      "Combinação de aveia integral e banana madura do Centro de Moçambique. Rico em fibras. Perfeito para o pequeno-almoço.",
    price: "210 MT / 6 unidades",
    image: "/cookies/mifuguies.png",
    whatsappMessage:
      "Olá! Gostaria de encomendar os cookies Mifuguies de aveia e banana. Podem ajudar?",
  },
  {
    name: "Famicookies",
    description:
      "A receita clássica da família, feita com farinha de trigo moçambicano. O sabor tradicional que une gerações.",
    price: "200 MT / 6 unidades",
    image: "/cookies/famicookies.png",
    whatsappMessage:
      "Olá! Quero encomendar os Famicookies, a receita clássica da família. Como faço?",
  },
];

export const barrinhas: Product[] = [
  {
    name: "Barrinha Vegan",
    description:
      "Sementes oleaginosas (girassol, abóbora, linhaça) com amendoim e mel. 100% vegana. Rica em ómega-3 e proteínas vegetais.",
    price: "360 MT / 6 unidades",
    image: "/cookies/vegan.png",
    whatsappMessage:
      "Olá! Gostaria de encomendar a Barrinha Vegan de sementes e amendoim. Podem ajudar?",
  },
  {
    name: "Barrinha Frutmela",
    description:
      "Granola artesanal com banana madura e frutos secos. Adoçada com mel da província de Manica. Perfeita para pequeno-almoço.",
    price: "255 MT / 6 unidades",
    image: "/cookies/frutmela.png",
    whatsappMessage:
      "Olá! Quero encomendar a Barrinha Frutmela de granola e mel. Como posso fazer?",
  },
  {
    name: "Barrinha Chocomela",
    description:
      "Granola crocante, pasta de amendoim e chocolate de qualidade. Adoçada com mel puro. Equilíbrio entre indulgência e nutrição.",
    price: "380 MT / 6 unidades",
    image: "/cookies/chocomela.png",
    whatsappMessage:
      "Olá! Gostaria de encomendar a Barrinha Chocomela de chocolate e amendoim. Podem ajudar?",
  },
  {
    name: "Snack Caju",
    description:
      "Castanha de caju torrada de Moçambique. Crocante, saborosa e nutritiva. Rica em magnésio e gorduras saudáveis.",
    price: "165 MT / 100g  •  255 MT / 250g",
    image: "/cookies/snack_caju.jpg",
    whatsappMessage:
      "Olá! Quero encomendar o Snack Caju de castanha torrada. Como faço?",
  },
  {
    name: "Mel Puro",
    description:
      "Mel 100% natural e puro produzido na província de Manica. Sem aditivos ou processamento. Adoçante natural perfeito.",
    price: "540 MT / 500ml",
    image: "/cookies/mel_puro.png",
    whatsappMessage:
      "Olá! Gostaria de encomendar o Mel Puro de Manica. Podem ajudar-me?",
  },
];
