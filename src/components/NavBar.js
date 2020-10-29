import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classed from 'react-classed';

const StyledDesktopLink = classed.a(({ className = '' }) => [
  'ml-8 inline-flex',
  'items-center',
  'px-1',
  'pt-1',
  'border-b-2',
  'text-sm',
  'font-medium',
  'leading-5',
  'transition',
  'duration-150',
  'ease-in-out',

  className.indexOf('active') !== -1
    ? ['border-blue-500', 'text-gray-900']
    : [
        'text-gray-500',
        'border-transparent',
        'hover:text-gray-700',
        'hover:border-gray-300',
        'focus:outline-none',
        'focus:text-gray-700',
        'focus:border-gray-300',
      ],
]);

const StyledMobileLink = classed.a(({ className = '' }) => [
  'mt-1',
  'block',
  'pl-3',
  'pr-4',
  'py-2',
  'border-l-4',
  'text-base',
  'font-medium',
  'transition',
  'duration-150',
  'ease-in-out',

  className.indexOf('active') !== -1
    ? ['border-blue-500', 'text-blue-700']
    : [
        'border-transparent',
        'text-gray-600',
        'hover:text-gray-800',
        'hover:bg-gray-50',
        'hover:border-gray-300',
        'focus:outline-none',
        'focus:text-gray-800',
        'focus:bg-gray-50',
        'focus:border-gray-300',
      ],
]);

const links = [
  { href: '/docs', label: 'Docs' },
  { href: '/tracker', label: 'Tracker' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a>
                  <img
                    className="h-8 w-auto"
                    src="/images/logo.png"
                    alt="Gopkg"
                  />
                </a>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex">
              {links.map((link, index) => (
                <Link
                  key={`navbar-desktop-link-${index}`}
                  href={link.href}
                  passHref
                >
                  <StyledDesktopLink
                    className={router.pathname === link.href ? 'active' : ''}
                  >
                    {link.label}
                  </StyledDesktopLink>
                </Link>
              ))}
            </div>
          </div>
          <div class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div class="max-w-lg w-full lg:max-w-xs">
              <label for="search" class="sr-only">
                Search packages
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Search packages"
                  type="search"
                />
              </div>
            </div>
          </div>

          <div class="-mr-2 flex items-center sm:hidden">
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setOpen(!open)}
            >
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className={open ? '' : 'hidden sm:hidden'}>
        <div className="pt-2 pb-3">
          {links.map((link, index) => (
            <Link key={`navbar-mobile-link-${index}`} href={link.href} passHref>
              <StyledMobileLink className="todo">{link.label}</StyledMobileLink>
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">{/* body */}</div>
      </div>
    </nav>
  );
}
