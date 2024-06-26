import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ onClick }) => {
  return (
    <Disclosure as="nav" className="bg-gray-800 fixed top-0 z-30 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />

                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <p className="text-white font-medium">My Site</p>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      //NOTE: change this to anchor tag
                      <div
                        key={item.name}
                        // href={item.href}
                        role="button"
                        className={classNames(
                          //uncomment once anchor tag is implemented
                          // item.current
                          //   ? "bg-gray-400 text-white"
                          //   : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 text-white"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => onClick(item.name)}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden sticky top-20 z-30">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  // href={item.href}
                  className={classNames(
                    // item.current
                    //   ? "bg-gray-900 text-white"
                    //   : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 text-white"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => onClick(item.name)}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

Navbar.propTypes = {
  onClick: PropTypes.func,
};

export default Navbar;
