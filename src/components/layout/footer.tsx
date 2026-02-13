import { CONTACT } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-gold/20 bg-dark-brown border-t py-8">
      <div className="text-cream/60 mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center text-sm md:flex-row md:justify-between md:px-8">
        <p>&copy; {year} ООО «ВМ-Торг». Все права защищены.</p>
        <div className="flex gap-6">
          <a href={CONTACT.phoneHref} className="hover:text-gold transition-colors">
            {CONTACT.phone}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-gold transition-colors">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
