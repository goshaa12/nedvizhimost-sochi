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
  level?: number;
  onClose?: () => void;
}

function DropdownMenuItem({ item, parentOpen, onClose }: { item: NavItem; parentOpen: boolean; onClose?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

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
    };
  }, [isOpen, parentOpen]);

  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
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
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors text-left"
      >
        <span>{item.label}</span>
        <ChevronDown className={`w-3 h-3 rotate-[-90deg] transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && parentOpen && (
        <div className="absolute left-full top-0 ml-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[220px] z-50">
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

function DropdownMenu({ item, level = 0, onClose }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
    };
  }, [isOpen]);

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        className="text-gray-600 hover:text-emerald-900 transition-colors whitespace-nowrap"
        onClick={onClose}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={menuRef}
      className="relative"
    >
      <div className="flex items-center gap-0.5 sm:gap-1">
        <Link
          href={item.href}
          className="text-gray-600 hover:text-emerald-900 transition-colors whitespace-nowrap text-sm lg:text-base"
          onClick={onClose}
        >
          {item.label}
        </Link>
        <button
          className="p-0.5 sm:p-1 text-gray-600 hover:text-emerald-900 transition-colors flex-shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          aria-label="Открыть меню"
        >
          <ChevronDown
            className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] sm:min-w-[220px] z-50">
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
            <button
              onClick={() => toggleItem(item.label)}
              className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span>{item.label}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${isItemOpen ? 'rotate-180' : ''}`}
              />
            </button>
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

export function Header({
  logo = { text: 'Недвижимость Сочи' },
  phone,
  ctaButton = { text: 'Связаться' },
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 [@media(orientation:landscape)_and_(max-height:500px)]:py-1">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 md:py-4 [@media(orientation:landscape)_and_(max-height:500px)]:py-1.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4 [@media(orientation:landscape)_and_(max-height:500px)]:gap-1.5">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 [@media(orientation:landscape)_and_(max-height:500px)]:gap-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-900 rounded-lg flex items-center justify-center [@media(orientation:landscape)_and_(max-height:500px)]:w-7 [@media(orientation:landscape)_and_(max-height:500px)]:h-7">
                <span className="text-white text-sm sm:text-base [@media(orientation:landscape)_and_(max-height:500px)]:text-xs">{logo.icon || 'S'}</span>
            </div>
              <span className="text-emerald-900 font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] sm:max-w-none [@media(orientation:landscape)_and_(max-height:500px)]:text-xs [@media(orientation:landscape)_and_(max-height:500px)]:max-w-[100px]">{logo.text}</span>
            </Link>
          
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-wrap [@media(orientation:landscape)_and_(max-height:500px)]:gap-2 [@media(orientation:landscape)_and_(max-height:500px)]:text-sm">
              {navigationData.map((item, index) => (
                <DropdownMenu key={index} item={item} />
              ))}
          </nav>
          
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0 [@media(orientation:landscape)_and_(max-height:500px)]:gap-1">
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
                className="bg-emerald-900 text-white px-2.5 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg hover:bg-emerald-800 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap [@media(orientation:landscape)_and_(max-height:500px)]:px-2 [@media(orientation:landscape)_and_(max-height:500px)]:py-1 [@media(orientation:landscape)_and_(max-height:500px)]:text-xs"
              >
                {ctaButton.text}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 text-gray-600 hover:text-gray-900 flex-shrink-0 [@media(orientation:landscape)_and_(max-height:500px)]:p-1"
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
