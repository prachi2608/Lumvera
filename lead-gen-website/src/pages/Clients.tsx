import InfiniteScroller from '../components/InfiniteScroller';

const clientLogos = [
  { name: 'Company A', logo: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg' },
  { name: 'Company B', logo: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg' },
  { name: 'Company C', logo: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg' },
  { name: 'Company D', logo: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg' },
  { name: 'Company E', logo: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg' },
  { name: 'Company F', logo: 'https://tailwindui.com/img/logos/158x48/statickit-logo-gray-900.svg' },
  { name: 'Company G', logo: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg' },
  { name: 'Company H', logo: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg' },
  { name: 'Company I', logo: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg' },
];

const Clients = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Trusted by the Best</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">We're proud to have worked with some of the world's leading companies. Here are just a few of them.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <InfiniteScroller speed="slow">
            <div className="flex space-x-16">
              {clientLogos.map((client) => (
                <div key={client.name} className="flex-shrink-0">
                  <img src={client.logo} alt={client.name} className="h-12" />
                </div>
              ))}
            </div>
          </InfiniteScroller>
        </div>
      </section>
    </div>
  );
};

export default Clients;
