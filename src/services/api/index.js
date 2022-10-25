const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    recovery: `${API}/api/${VERSION}/auth/recovery`,
    changePassword: `${API}/api/${VERSION}/auth/change-password`,
  },
  products: {
    products: `${API}/api/${VERSION}/products`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    createProduct: `${API}/api/${VERSION}/products`,
  },
  updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  users: {},
  categories: {},
  customers: {},
  orders: {},
  profile: {},
};
