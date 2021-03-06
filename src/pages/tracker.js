import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';
import { Icon } from '../components';

const Table = ({ query = '', packages = {} }) => {
  const names = Object.keys(packages).filter(
    (name) => name.indexOf(query) !== -1
  );

  return (
    <div className="flex flex-col pt-10">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-blue-500 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 bg-blue-500 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 bg-blue-500 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Version
                  </th>
                  <th className="px-6 py-3 bg-blue-500 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    OS
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {names.map((name, index) => (
                  <tr key={`table-row-${index}`}>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      <Link href={`/package?name=${name}`}>
                        <a className="text-blue-500 hover:underline">{name}</a>
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      {packages[name].Description}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      {packages[name].LatestRelease}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      {packages[name].Releases[packages[name].LatestRelease]
                        .map((p) => p.OS)
                        .join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TrackerPage() {
  const { data, error } = useSWR('https://archive.gopkg.org/index.json');
  const [query, setQuery] = useState('');

  return (
    <>
      <Head>
        <title>Tracker - Gopkg</title>
      </Head>
      <div className="relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-20 xl:pb-20">
            <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
              <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
                    Tracker
                  </h2>
                  <p className="mt-2 text-base leading-6 text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                  <div className="w-full mt-5">
                    <label for="search" className="sr-only">
                      Search packages
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon.Search size={20} className="text-gray-400" />
                      </div>
                      <input
                        onChange={(event) => setQuery(event.target.value)}
                        id="search"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
                        placeholder="Search packages"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {error && (
                <p className="mt-10 text-base leading-6 text-gray-500">
                  Failed to load packages.
                </p>
              )}
              {!error && !data && (
                <p className="mt-10 text-base leading-6 text-gray-500">
                  Loading...
                </p>
              )}
              {!error && data && (
                <Table query={query} packages={data.Packages} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
