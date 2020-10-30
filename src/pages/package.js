import { useRouter } from 'next/router';
import { Icon } from '../components';

export default function PackagePage() {
  const router = useRouter();
  const { name } = router.query;
  const pkg = name;

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-20 xl:pb-20">
          <div className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
            <div className="md:flex md:justify-between min-w-full">
              {/* intro */}
              <div className="w-full md:w-3/6 lg:w-4/6">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
                  {pkg}
                </h2>
                <p className="mt-5 text-base text-gray-500 sm:mt-5 sm:max-w-xl md:mt-5 lg:mx-0">
                  Lorem Ipsum is simply dummy text of the printing and standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book.
                </p>

                {/* installation */}
                <div className="mt-5 sm:mt-10 min-w-full">
                  <h3 className="text-xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
                    Installation
                  </h3>
                  <div className="bg-blue-900 text-white p-5 rounded mt-2">
                    <code className="">gopkg install {pkg}</code>
                  </div>
                </div>
              </div>
              {/* details */}
              <div className="mt-5 w-full md:w-2/5 lg:w-1/4">
                <h3 className="text-xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
                  Details
                </h3>

                <ul className="mt-5 text-base text-gray-500">
                  <li className="border-b border-gray-300 pb-2 mb-2">
                    <div className="flex justify-between">
                      <div className="">Published</div>
                      <div className="text-sm font-bold">Oct 18, 2020</div>
                    </div>
                  </li>
                  <li className="border-b border-gray-300 pb-2 mb-2">
                    <div className="flex justify-between">
                      <div className="">Source</div>
                      <div className="text-sm">
                        <a href={pkg} className="text-blue-500 hover:underline">
                          {pkg}
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="pb-2 mb-2">
                    <div className="flex justify-between">
                      <div className="">
                        Package Score{' '}
                        <span className="text-sm text-yellow-500">66/100</span>
                      </div>
                      <div className="text-sm">
                        <a href="#" className="text-blue-500 hover:underline">
                          learn more
                        </a>
                      </div>
                    </div>
                    <div>
                      <ul className="mt-1">
                        <li>
                          <Icon.Check
                            color="green"
                            className="inline"
                            size={20}
                          />
                          Changelog
                        </li>
                        <li>
                          <Icon.Check
                            color="green"
                            className="inline"
                            size={20}
                          />
                          README
                        </li>
                        <li>
                          <Icon.X color="orange" className="inline" size={20} />
                          Metadata
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
