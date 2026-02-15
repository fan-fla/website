export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "Início", href: "#", active: true },
  { label: "Sabores", href: "#sabores" },
  { label: "A Nossa História", href: "#historia" },
  { label: "Presente", href: "#presente" },
  { label: "Contacto", href: "#contacto" },
];

export const footerLinks: NavLink[] = [
  { label: "Sabores", href: "#sabores" },
  { label: "A Nossa História", href: "#historia" },
  { label: "Encomendas", href: "#contacto" },
  { label: "Contacto", href: "#contacto" },
];
