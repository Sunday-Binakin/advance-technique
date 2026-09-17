import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type InfoCard = {
  icon: LucideIcon;
  eyebrow: string;
  value: string;
  href?: string;
};

function ContactInfoCards() {
  const infoCards: InfoCard[] = [
    {
      icon: MapPin,
      eyebrow: "Our Office Location",
      value: siteConfig.address,
    },
    {
      icon: Phone,
      eyebrow: "Have a Question?",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: Mail,
      eyebrow: "Email Us On",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {infoCards.map((card) => {
        const Icon = card.icon;
        const content = (
          <div className="flex h-full flex-col items-center gap-3 rounded-xl bg-primary p-6 text-center text-primary-foreground">
            <span className="flex size-12 items-center justify-center rounded-full bg-white/15">
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <p className="text-xs font-semibold tracking-wide uppercase opacity-90">
              {card.eyebrow}
            </p>
            <p className="font-heading text-base font-bold">{card.value}</p>
          </div>
        );

        return card.href ? (
          <a key={card.eyebrow} href={card.href} className="transition-opacity hover:opacity-90">
            {content}
          </a>
        ) : (
          <div key={card.eyebrow}>{content}</div>
        );
      })}
    </div>
  );
}

export { ContactInfoCards };
