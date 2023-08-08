import { Disclosure } from '@headlessui/react';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Acerca de', href: '#about', current: false },
  { name: 'Galeria', href: '#gallery', current: false },
  { name: 'Clientes', href: '#clients', current: false },
  { name: 'Servicios', href: '#services', current: false },
  { name: 'Contacto', href: '#contact', current: true },
];


function NavBar() {
  return (
    <Disclosure as="nav" className="bg-gray-50 fixed top-0 w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 items-center">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`${
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-700 hover:text-white'
                        } rounded-md px-3 py-2 text-sm font-medium`}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          const target = document.querySelector(item.href);
                          const headerOffset = 60;
                          const elementPosition = target.getBoundingClientRect().top;
                          const offsetPosition = elementPosition - headerOffset;

                          window.scrollBy({
                            top: offsetPosition,
                            behavior: 'smooth',
                          });
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`${
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } block rounded-md px-3 py-2 text-base font-medium`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;
