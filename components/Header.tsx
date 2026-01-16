"use client";

import { useState, useRef, useEffect } from 'react';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { navigationData, type NavItem } from '@/lib/navigation-data';
import Link from 'next/link';

export interface HeaderProps {
  logo?: {
    icon?: string;
    text: string;
  };
  phone?: {
    number: string;
    href: string;
  };
  ctaButton?: {
    text: string;
    onClick?: () => void;
  };
}

interface DropdownMenuProps {
  item: NavItem;
  onClose?: () => void;
}

function DropdownMenuItem({ item, parentOpen, onClose }: { item: NavItem; parentOpen: boolean; onClose?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen && parentOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen, parentOpen]);

  const hasChildren = item.children && item.children.length > 0;

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (hasChildren) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (hasChildren) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150);
    }
  };

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className="block px-4 py-2.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors text-sm font-medium rounded-md mx-1"
        onClick={onClose}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={itemRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="w-full flex items-center justify-between px-4 py-2.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors text-left text-sm font-medium rounded-md mx-1"
        aria-expanded={isOpen}
      >
        <span>{item.label}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-90' : '-rotate-90'}`} />
      </button>
      {isOpen && parentOpen && (
        <div className="absolute left-full top-0 ml-1 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[220px] z-50 opacity-100">
          {item.children!.map((child, index) => (
            <DropdownMenuItem
              key={index}
              item={child}
              parentOpen={isOpen}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function DropdownMenu({ item, onClose }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        className="text-gray-600 hover:text-emerald-900 transition-colors whitespace-nowrap text-sm lg:text-base font-medium relative group"
        onClick={onClose}
      >
        {item.label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-900 transition-all group-hover:w-full"></span>
      </Link>
    );
  }

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-0.5">
        <Link
          href={item.href}
          className="text-gray-600 hover:text-emerald-900 transition-colors whitespace-nowrap text-sm lg:text-base cursor-pointer font-medium relative group"
          onClick={onClose}
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-900 transition-all group-hover:w-full"></span>
        </Link>
        <button
          className="p-0.5 text-gray-600 hover:text-emerald-900 transition-colors shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          aria-label="Открыть меню"
          aria-expanded={isOpen}
        >
          <ChevronDown
            className={`w-3 h-3 sm:w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[220px] z-50 opacity-100">
          {item.children.map((child, index) => (
            <DropdownMenuItem
              key={index}
              item={child}
              parentOpen={isOpen}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (label: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(label)) {
      newOpenItems.delete(label);
    } else {
      newOpenItems.add(label);
    }
    setOpenItems(newOpenItems);
  };

  const renderMobileNavItem = (item: NavItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isItemOpen = openItems.has(item.label);

    return (
      <div key={item.label} className="border-b border-gray-100">
        {hasChildren ? (
          <>
            <div className="flex items-center">
              <Link
                href={item.href}
                className="flex-1 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={onClose}
              >
                {item.label}
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.label);
                }}
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                aria-label="Открыть меню"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isItemOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
            {isItemOpen && (
              <div className="bg-gray-50 pl-4">
                {item.children!.map((child) => (
                  <div key={child.label}>
                    {child.children && child.children.length > 0 ? (
                      renderMobileNavItem(child, depth + 1)
                    ) : (
                      <Link
                        href={child.href}
                        className="block px-4 py-2 text-gray-600 hover:text-emerald-900 transition-colors"
                        onClick={onClose}
                      >
                        {child.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link
            href={item.href}
            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={onClose}
          >
            {item.label}
          </Link>
        )}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
          <span className="text-emerald-900 font-semibold">Меню</span>
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="py-4">
          {navigationData.map((item) => renderMobileNavItem(item))}
        </nav>
      </div>
    </div>
  );
}

// Тип для JSON-LD схемы навигации
interface NavigationSchema {
  '@type': 'SiteNavigationElement';
  name: string;
  url: string;
  hasPart?: NavigationSchema[];
}

// Функция для преобразования навигационных данных в JSON-LD структуру
function buildNavigationSchema(items: NavItem[], baseUrl: string = ''): NavigationSchema[] {
  return items.map(item => {
    const url = item.href.startsWith('http') ? item.href : `${baseUrl}${item.href}`;
    const schema: NavigationSchema = {
      '@type': 'SiteNavigationElement',
      name: item.label,
      url: url,
    };
    
    if (item.children && item.children.length > 0) {
      schema.hasPart = buildNavigationSchema(item.children, baseUrl);
    }
    
    return schema;
  });
}

export function Header({
  logo = { text: 'Недвижимость Сочи' },
  phone,
  ctaButton = { text: 'Связаться' },
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Получаем базовый URL для JSON-LD
  useEffect(() => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const navigationSchema = {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: 'Основная навигация',
      hasPart: buildNavigationSchema(navigationData, baseUrl),
    };

    // Удаляем старый скрипт, если он существует
    const existingScript = document.getElementById('navigation-schema');
    if (existingScript) {
      existingScript.remove();
    }

    // Создаем новый script элемент для JSON-LD
    const script = document.createElement('script');
    script.id = 'navigation-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(navigationSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('navigation-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 [@media(orientation:landscape)_and_(max-height:500px)]:py-1">
      <div className="container mx-auto px-2 sm:px-4 py-1.5 sm:py-2 md:py-2.5 [@media(orientation:landscape)_and_(max-height:500px)]:py-1.5">
        <div className="flex items-center justify-between gap-1.5 sm:gap-2 md:gap-3 [@media(orientation:landscape)_and_(max-height:500px)]:gap-1.5">
            <Link href="/" className="flex items-center gap-1 sm:gap-1.5 shrink-0 [@media(orientation:landscape)_and_(max-height:500px)]:gap-1">
              <div className="w-7 h-7 sm:w-9 sm:h-9 bg-emerald-900 rounded-lg flex items-center justify-center [@media(orientation:landscape)_and_(max-height:500px)]:w-7 [@media(orientation:landscape)_and_(max-height:500px)]:h-7">
                <span className="text-white text-xs sm:text-sm [@media(orientation:landscape)_and_(max-height:500px)]:text-xs">{logo.icon || 'S'}</span>
            </div>
              <span className="text-emerald-900 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] sm:max-w-none [@media(orientation:landscape)_and_(max-height:500px)]:text-xs [@media(orientation:landscape)_and_(max-height:500px)]:max-w-[100px]">{logo.text}</span>
            </Link>
          
            <nav 
              className="hidden lg:flex items-center gap-3 xl:gap-4 flex-wrap [@media(orientation:landscape)_and_(max-height:500px)]:gap-1.5 [@media(orientation:landscape)_and_(max-height:500px)]:text-sm"
              role="navigation"
              aria-label="Основная навигация"
            >
              {navigationData.map((item, index) => (
                <DropdownMenu key={index} item={item} />
              ))}
          </nav>
          
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 shrink-0 [@media(orientation:landscape)_and_(max-height:500px)]:gap-1">
              {phone && (
                <a
                  href={phone.href}
                  className="hidden sm:flex items-center gap-1.5 sm:gap-2 text-gray-900 hover:text-emerald-900 transition-colors [@media(orientation:landscape)_and_(max-height:500px)]:hidden"
                >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden md:inline text-sm lg:text-base">{phone.number}</span>
            </a>
              )}
              <button
                onClick={ctaButton.onClick}
                className="bg-emerald-900 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg hover:bg-emerald-800 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap [@media(orientation:landscape)_and_(max-height:500px)]:px-2 [@media(orientation:landscape)_and_(max-height:500px)]:py-1 [@media(orientation:landscape)_and_(max-height:500px)]:text-xs"
              >
                {ctaButton.text}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 text-gray-600 hover:text-gray-900 shrink-0 [@media(orientation:landscape)_and_(max-height:500px)]:p-1"
                aria-label="Открыть меню"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 [@media(orientation:landscape)_and_(max-height:500px)]:w-4 [@media(orientation:landscape)_and_(max-height:500px)]:h-4" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 [@media(orientation:landscape)_and_(max-height:500px)]:w-4 [@media(orientation:landscape)_and_(max-height:500px)]:h-4" />
                )}
            </button>
          </div>
        </div>
      </div>
    </header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
