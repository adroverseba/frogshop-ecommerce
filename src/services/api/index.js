const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    recovery: `${API}/api/${VERSION}/auth/recovery`,
    changePassword: `${API}/api/${VERSION}/auth/change-password`,
  },
  products: {
    getProducts: (limit, offset) => (limit === 0 && offset === 0 ? `${API}/api/${VERSION}/products` : `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`),
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    createProduct: `${API}/api/${VERSION}/products`,
    updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    createUser: `${API}/api/${VERSION}/users`,
    updateUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    deleteUser: (id) => `${API}/api/${VERSION}/users/${id}`,
  },
  categories: {
    getCategories: `${API}/api/${VERSION}/categories`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    createCategories: `${API}/api/${VERSION}/categories`,
  },
  customers: {
    getCustomers: `${API}/api/${VERSION}/customers`,
    createCustomer: `${API}/api/${VERSION}/customers`,
    deleteCustomer: (id) => `${API}/api/${VERSION}/customers/${id}`,
  },
  orders: {
    getOrders: `${API}/api/${VERSION}/orders`,
    createOrders: `${API}/api/${VERSION}/orders`,
    addItemToOrders: `${API}/api/${VERSION}/orders/add-item`,
  },
  profile: {
    getMyOrders: `${API}/api/${VERSION}/profile/my-orders`,
  },
};
