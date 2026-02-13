import { Phone, Mail, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { CONTACT } from "@/lib/constants";

const ITEMS = [
  {
    icon: Phone,
    label: "Телефон",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: CONTACT.address,
    href: undefined,
  },
] as const;

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="bg-dark-brown px-4 py-24 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-cream font-serif text-3xl font-bold md:text-4xl">
          Расскажите нам о вашей идее —<br />
          мы воплотим её в дереве
        </h2>
        <div className="bg-gold mx-auto mt-6 h-1 w-16" />

        <div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16">
          {ITEMS.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="bg-gold/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                <Icon className="text-gold h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-cream/50 text-xs">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="text-cream hover:text-gold text-sm font-medium transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-cream text-sm font-medium">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-cream/40 mt-12 text-sm">
          ООО «ВМ-Торг» — эксклюзивный представитель «Мобили Концепт» в России
        </p>
      </div>
    </AnimatedSection>
  );
}
