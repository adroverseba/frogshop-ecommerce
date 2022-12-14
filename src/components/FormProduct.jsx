import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';
import { createProductSchema } from 'schemas/product.schema';
import { addProduct, updateProduct } from 'services/api/product';

export function FormProduct({ setOpen, setAlert, product }) {
  const formRef = useRef(null);
  const [errorFormData, setErrorFormData] = useState([]);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const name = formData.get('title');
    const price = parseInt(formData.get('price'));
    const image = formData.get('image');
    const description = formData.get('description');
    const categoryId = parseInt(formData.get('category'));
    const data = { name, price, description, image, categoryId };

    const { error } = createProductSchema.validate(data, { abortEarly: false });

    if (error) {
      const errorFormValidation = error.details.map((err) => err.message);
      return setErrorFormData(errorFormValidation);
      // console.log(error.details.map((err) => err.message));
    }

    //para cuando existe product pasado por [id].js
    if (product) {
      // console.log(data);
      return updateProduct(product.id, data)
        .then(() => {
          setAlert({
            active: true,
            message: 'Producto Actualizado con exito',
            type: 'success',
            autoClose: false,
          });
          console.log('producto actualizado');
          setTimeout(() => {
            router.push('/dashboard/products');
          }, 2500);
        })
        .catch((error) => {
          setAlert({
            active: true,
            message: error.message,
            type: 'error',
            autoClose: false,
          });
        });
    } else {
      return addProduct(data)
        .then(() => {
          setAlert({
            active: true,
            message: 'Producto creado con exito',
            type: 'success',
            autoClose: true,
          });
          formRef.current.reset();
          setOpen(false);
        })
        .catch((error) => {
          setAlert({
            active: true,
            message: error.message,
            type: 'error',
            autoClose: true,
          });
          setOpen(false);
        });
    }
  };

  //para cambiar el valor de category segun categoryId de product
  const categorySelectRef = useRef(null);
  useEffect(() => {
    categorySelectRef.current.value = product?.categoryId;
  }, [product]);

  return (
    <form ref={formRef}>
      <div className="overflow-hidden">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                defaultValue={product?.name}
                type="text"
                name="title"
                id="title"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                defaultValue={product?.price}
                type="number"
                name="price"
                id="price"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                ref={categorySelectRef}
                id="category"
                defaultValue={product?.categoryId}
                name="category"
                autoComplete="category-name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="1">Clothes</option>
                <option value="2">Electronics</option>
                <option value="3">Furniture</option>
                <option value="4">Toys</option>
                <option value="5">Others</option>
              </select>
            </div>

            <div className="col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={product?.description}
                id="description"
                autoComplete="description"
                rows="3"
                className="form-textarea mt-1 block w-full mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Image url
                </label>
                <input
                  type="text"
                  defaultValue={product?.image}
                  name="image"
                  id="image"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {/* <div>
                <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="images"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="images" name="images" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 flex justify-between sm:px-6 items-center">
          <button
            type="submit"
            className="justify-center  shrink-0 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-16 max-h-10"
            onClick={handleSubmit}
          >
            Save
          </button>
          {errorFormData && (
            <ul className=" bg-red-50 rounded-md w-9/12 list-disc px-2">
              {errorFormData.map((err, i) => (
                <li className="text-red-700 " key={i}>
                  {err}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </form>
  );
}
