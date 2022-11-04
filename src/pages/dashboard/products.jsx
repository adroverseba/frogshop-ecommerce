import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import Modal from 'common/Modal';
import { FormProduct } from 'components/FormProduct';
import { useGetProducts } from 'hooks/useGetProducts';
import { endPoints } from 'services/api';
import Image from 'next/image';
import { useAlert } from 'hooks/useAlert';
import { Alert } from 'common/Alert';
import { deleteProduct } from 'services/api/product';
import Link from 'next/link';

const Products = () => {
  const [open, setOpen] = useState(false);
  const { alert, setAlert, toggleAlert } = useAlert();

  const API = endPoints.products.getProducts(0, 0);

  //hago uso del custom hook, el segundo argumento son los cambios que escucha
  const products = useGetProducts(API, alert);

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() => {
        setAlert({
          active: true,
          message: 'Producto eliminado con exito',
          type: 'success',
          autoClose: true,
        });
      })
      .catch((error) => {
        setAlert({
          active: true,
          message: error.message,
          type: 'error',
          autoClose: false,
        });
      });
  };

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <div className="lg:flex lg:items-center lg:justify-between p-2">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight my-7 ">List of Products</h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => setOpen(true)}
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add Product
            </button>
          </span>
        </div>
      </div>
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
                        <Link href={`edit/${prod.id}`}>
                          <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-red-600 hover:text-red-900" aria-hidden="true" onClick={() => handleDelete(prod.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <FormProduct setOpen={setOpen} setAlert={setAlert} />
      </Modal>
    </>
  );
};

export default Products;
