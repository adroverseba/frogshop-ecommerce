import { useState, Fragment } from 'react';
import { useGetProducts } from 'hooks/useGetProducts';
import Image from 'next/image';
import { endPoints } from 'services/api';
import { Pagination } from 'common/Pagination';
import { Chart } from 'common/Chart';
// import { PlusIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
// import { Menu, Transition } from '@headlessui/react';
// import Link from 'next/link';

const PRODUCT_LIMIT = 4;
const PRODUCT_OFFSET = 0;

// const elementos = [
//   { id: 1, name: 'Clothes', image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=3714' },
//   { id: 3, name: 'Furniture', image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=9014' },
//   { id: 3, name: 'Furniture', image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=9014' },
// ];

export default function Dashboard() {
  const [offset, setOffset] = useState(PRODUCT_OFFSET);

  //llamo a los productos
  const API = endPoints.products.getProducts(PRODUCT_LIMIT, offset);
  const products = useGetProducts(API);

  //obtengo la cantidad total de productos de la API
  const totalQty = useGetProducts(endPoints.products.getProducts(0, 0)).length;

  const categoryNames = products?.map((prod) => prod.category);
  const categoryCount = categoryNames?.map((elem) => elem.name);

  const countConcurrences = (arr) =>
    arr.reduce((acc, cur) => {
      acc[cur] = ++acc[cur] || 1;
      return acc;
    }, {});
  // console.log(countConcurrences(categoryCount));

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countConcurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50af95', '#f3ba2f', '#2a71d0'],
      },
    ],
  };
  return (
    <>
      <Chart className="mb-8 mt-2 h-4" chartData={data} />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((prod) => (
                    <tr key={prod.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <Image className="h-10 w-10 rounded-full" width={10} height={10} layout="responsive" src={prod.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{prod.name}</div>
                            <div className="text-sm text-gray-500">${prod.price}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{prod.description}</div>
                        <div className="text-sm text-gray-500">{prod.department}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prod.category.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/edit" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/edit" className="text-red-600 hover:text-red-900">
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {totalQty > 0 && <Pagination setOffset={setOffset} productLimit={PRODUCT_LIMIT} totalQty={totalQty} />}
      </div>
    </>
  );
}
