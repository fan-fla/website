export interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

export const cookies: Product[] = [
  {
    name: "Lhaties",
    description:
      "Cookies elaborados com farinha de batata-doce de polpa alaranjada. Fonte de betacaroteno e vitamina A. Adoçados com mel puro.",
    price: "210 MT / 6 unidades",
    image: "/cookies/lhaties.png",
  },
  {
    name: "Matchies",
    description:
      "Feitos com farinha de mandioca fresca, representam o Norte moçambicano. Textura única e sabor autêntico. Sem glúten.",
    price: "210 MT / 6 unidades",
    image: "/cookies/matchies.png",
  },
  {
    name: "Mifuguies",
    description:
      "Combinação de aveia integral e banana madura do Centro de Moçambique. Rico em fibras. Perfeito para o pequeno-almoço.",
    price: "210 MT / 6 unidades",
    image: "/cookies/mifuguies.png",
  },
  {
    name: "Famicookies",
    description:
      "A receita clássica da família, feita com farinha de trigo moçambicano. O sabor tradicional que une gerações.",
    price: "200 MT / 6 unidades",
    image: "/cookies/famicookies.png",
  },
];

export const barrinhas: Product[] = [
  {
    name: "Barrinha Vegan",
    description:
      "Sementes oleaginosas (girassol, abóbora, linhaça) com amendoim e mel. 100% vegana. Rica em ómega-3 e proteínas vegetais.",
    price: "360 MT / 6 unidades",
    image: "/cookies/vegan.png",
  },
  {
    name: "Barrinha Frutmela",
    description:
      "Granola artesanal com banana madura e frutos secos. Adoçada com mel da província de Manica. Perfeita para pequeno-almoço.",
    price: "255 MT / 6 unidades",
    image: "/cookies/frutmela.png",
  },
  {
    name: "Barrinha Chocomela",
    description:
      "Granola crocante, pasta de amendoim e chocolate de qualidade. Adoçada com mel puro. Equilíbrio entre indulgência e nutrição.",
    price: "380 MT / 6 unidades",
    image: "/cookies/chocomela.png",
  },
  {
    name: "Snack Caju",
    description:
      "Castanha de caju torrada de Moçambique. Crocante, saborosa e nutritiva. Rica em magnésio e gorduras saudáveis.",
    price: "165 MT / 100g  •  255 MT / 250g",
    image: "/cookies/snack_caju.jpg",
  },
  {
    name: "Mel Puro",
    description:
      "Mel 100% natural e puro produzido na província de Manica. Sem aditivos ou processamento. Adoçante natural perfeito.",
    price: "540 MT / 500ml",
    image: "/cookies/mel_puro.png",
  },
];
