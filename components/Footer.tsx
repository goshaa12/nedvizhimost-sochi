import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContact {
  icon: 'phone' | 'mail' | 'map' | 'whatsapp';
  label: string;
  value: string;
}

export interface FooterProps {
  logo?: {
    icon?: string;
    text: string;
  };
  description?: string;
  navTitle?: string;
  navLinks?: FooterLink[];
  servicesTitle?: string;
  servicesLinks?: FooterLink[];
  contactsTitle?: string;
  contacts?: FooterContact[];
  copyright?: string;
}

export function Footer({
  logo = { text: 'Недвижимость Сочи' },
  description,
  navTitle = 'Навигация',
  navLinks = [
    { label: 'Каталог', href: '#catalog' },
    { label: 'О нас', href: '#about' },
    { label: 'Инвестиции', href: '#investment' },
    { label: 'Блог', href: '#blog' },
    { label: 'Контакты', href: '#contact' },
  ],
  servicesTitle = 'Услуги',
  servicesLinks = [
    { label: 'Квартиры', href: '#' },
    { label: 'Дома', href: '#' },
    { label: 'Новостройки', href: '#' },
    { label: 'Участки', href: '#' },
    { label: 'Коммерция', href: '#' },
  ],
  contactsTitle = 'Контакты',
  contacts,
  copyright,
}: FooterProps) {
  return (
    <footer className="bg-emerald-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm md:text-base">{logo.icon || 'S'}</span>
              </div>
              <span className="text-white text-sm md:text-base">{logo.text}</span>
            </div>
            {description && (
              <p className="text-white/70 text-xs md:text-sm">
                {description}
            </p>
            )}
          </div>
          
          {navLinks.length > 0 && (
          <div>
              <h4 className="mb-3 md:mb-4 text-white text-sm md:text-base">{navTitle}</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          )}
          
          {servicesLinks && servicesLinks.length > 0 && (
          <div>
              <h4 className="mb-3 md:mb-4 text-white text-sm md:text-base">{servicesTitle}</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                {servicesLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          )}
          
          {contacts && contacts.length > 0 && (
          <div>
              <h4 className="mb-3 md:mb-4 text-white text-sm md:text-base">{contactsTitle}</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                {contacts.map((contact, index) => {
                  const Icon = contact.icon === 'phone' ? Phone :
                              contact.icon === 'mail' ? Mail :
                              contact.icon === 'map' ? MapPin : MessageCircle;
                  return (
                    <li key={index} className="flex items-center gap-2 text-white/70">
                      <Icon className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{contact.value}</span>
              </li>
                  );
                })}
            </ul>
          </div>
          )}
        </div>
        
        {copyright && (
          <div className="border-t border-white/20 pt-6 md:pt-8 text-center">
            <p className="text-white/60 text-xs md:text-sm">
              {copyright}
          </p>
        </div>
        )}
      </div>
    </footer>
  );
}
