'use client';
import { HeroList } from '@/components/HeroList';
import { Heroes } from '@/data/heroes';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  Menu,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import clsx from 'clsx';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid';
import {
  AlignmentEnum,
  EffectEnum,
  HeroClassEnum,
  RaceEnum,
  RarityEnum,
  FilterData,
  Hero,
} from '@/types';
import Image from 'next/image';

type LocalOptionType = {
  value: string;
  label: string;
  checked: boolean;
  classNameLabel?: string;
  classNameInput?: string;
};

const sortOptions = [
  { name: 'A-Z', href: '#', current: true, id: 'name_asc' },
  { name: 'Z-A', href: '#', current: false, id: 'name_desc' },
  { name: 'Rarity: Low to High', href: '#', current: false, id: 'rarity_asc' },
  { name: 'Rarity: High to Low', href: '#', current: false, id: 'rarity_desc' },
];
const subCategories = [
  { name: 'Heroes', href: '#' },
  { name: 'Gauntlets', href: '#' },
];
const filters = [
  {
    id: 'heroClass',
    name: 'Class',
    options: Object.values(HeroClassEnum).map((el) => {
      return { value: el, label: el, checked: false };
    }),
  },
  {
    id: 'effect',
    name: 'Effect',
    options: Object.values(EffectEnum).map((el) => {
      return { value: el, label: el, checked: false };
    }),
  },
  {
    id: 'alignment',
    name: 'Alignment',
    options: Object.values(AlignmentEnum).map((el) => {
      return { value: el, label: el, checked: false };
    }),
  },
  {
    id: 'strongVs',
    name: 'Strong VS',
    options: Object.values(RaceEnum).map((el) => {
      return { value: el, label: el, checked: false };
    }),
  },
  {
    id: 'rarity',
    name: 'Rarity',
    options: Object.values(RarityEnum).map((el) => {
      return {
        value: el,
        label: el,
        checked: false,
        classNameLabel: 'text-' + el.toLowerCase(),
        classNameInput: `text-${el.toLowerCase()} focus:ring-${el.toLowerCase()}`,
      };
    }),
  },
];

export default function Home() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filter, setFilter] = useState<FilterData>();
  const [sort, setSort] = useState<string>('name_asc');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Hero[]>(Heroes);

  const postData = async (url = '', data = {}) => {
    const response = await fetch('/api/data', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ filter: filter, sort: sort }),
    });

    const json = await response.json();
    return json;
  };

  useEffect(() => {
    postData().then((data) => {
      setData(data.heroes);
      setSort(data.sort);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const isChecked = (id: string, value: string): boolean => {
    console.log(id, value);
    const key = id as keyof FilterData;
    const filterNode = filter && key in filter ? filter[key] || [] : [];
    return filterNode?.includes(value);
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen}>
          <Dialog
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 z-40 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900 hidden"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      checked={isChecked(
                                        section.id,
                                        option.value,
                                      )}
                                      onChange={() => {
                                        const key =
                                          section.id as keyof FilterData;
                                        const filterNode =
                                          filter && key in filter
                                            ? filter[key] || []
                                            : [];

                                        const node = filterNode?.includes(
                                          option.value,
                                        )
                                          ? filterNode.filter(
                                              (el) => el !== option.value,
                                            )
                                          : [...filterNode, option.value];

                                        setFilter((prev) => ({
                                          ...prev,
                                          [section.id]: node,
                                        }));
                                      }}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              <Image
                className="inline pe-2"
                src="/images/paragon.webp"
                alt="logo"
                width="32"
                height="32"
              />
              Paragon - Knighthood Heroes List
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ focus }) => (
                            <a
                              href={option.href}
                              className={clsx(
                                option.current
                                  ? 'font-medium text-gray-900'
                                  : 'text-gray-500',
                                focus ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm',
                              )}
                              onClick={() => {
                                setSort(option.id);
                              }}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="text-xl font-bold tracking-tight">Filters</h3>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map(
                              (option: LocalOptionType, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    checked={isChecked(
                                      section.id,
                                      option.value,
                                    )}
                                    className={clsx(
                                      'h-4 w-4 rounded border-gray-300',
                                      option.classNameInput
                                        ? option.classNameInput
                                        : 'text-indigo-600 focus:ring-indigo-500',
                                    )}
                                    onChange={() => {
                                      const key =
                                        section.id as keyof FilterData;
                                      const filterNode =
                                        filter && key in filter
                                          ? filter[key] || []
                                          : [];

                                      const node = filterNode?.includes(
                                        option.value,
                                      )
                                        ? filterNode.filter(
                                            (el) => el !== option.value,
                                          )
                                        : [...filterNode, option.value];

                                      setFilter((prev) => ({
                                        ...prev,
                                        [section.id]: node,
                                      }));
                                    }}
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className={clsx(
                                      'ml-3 text-sm',
                                      option.classNameLabel
                                        ? option.classNameLabel
                                        : 'text-gray-600',
                                    )}
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ),
                            )}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <HeroList heroes={data} isLoading={isLoading} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
