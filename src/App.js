import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Layout/Navbar";
import { Footer } from './Components/Layout/Footer';
import { ProductProvider } from './Context/Product/ProductContext';
import { CategoryProvider } from './Context/Category/CategoryContext';
import { AlertProvider } from './Context/Alert/AlertContext';
import { CustomerLoginPage } from "./Routes/Public Routes/CustomerLoginPage";
import { AdminLoginPage } from "./Routes/Public Routes/AdminLoginPage";
import { SignupPage } from "./Routes/Public Routes/SignupPage";
import { HomePage } from './Routes/Public Routes/HomePage.js';
import { NotFoundPage } from './Routes/Public Routes/NotFoundPage';
import { AboutPage } from "./Routes/Public Routes/AboutPage";
import { ProductPage } from "./Routes/Public Routes/ProductPage";
import { CategoryPage } from "./Routes/Public Routes/CategoryPage";
import { Alert } from './Components/Layout/Alert';
import { CustomerProvider } from "./Context/Customer/CustomerContext";
import { CustomerAccountPage } from "./Routes/CustomerRoutes/CustomerAccountPage";
import { CookiesProvider } from "react-cookie";
import { AdminProvider } from "./Context/Admin/AdminContext";
import { DashboardPage } from "./Routes/Admin Routes/DashboardPage";
import { CreateProductPage } from "./Routes/Admin Routes/CreateProductPage";
import { ProductListPage } from './Routes/Admin Routes/ProductListPage'
import { LogoutPage } from "./Routes/Public Routes/LogoutPage";
import { RemoveProductPage } from "./Routes/Admin Routes/RemoveProductPage";
import { EditProductPage } from "./Routes/Admin Routes/EditProductPage";
import { CreateCategoryPage } from "./Routes/Admin Routes/CreateCategoryPage";
import { EditCategoryPage } from "./Routes/Admin Routes/EditCategoryPage";
import { RemoveCategoryPage } from "./Routes/Admin Routes/RemoveCategoryPage";
import { CustomerListPage } from "./Routes/Admin Routes/CustomerListPage";
import { CreateCustomerPage } from "./Routes/Admin Routes/CreateCustomerPage";
import { EditCustomerPage } from "./Routes/Admin Routes/EditCustomerPage";
import { RemoveCustomerPage } from "./Routes/Admin Routes/RemoveCustomerPage";
import { AdminListPage } from './Routes/SuperAdmin Routes/AdminListPage'
import { CreateAdminPage } from "./Routes/SuperAdmin Routes/CreateAdminPage";
import { EditAdminPage } from "./Routes/Admin Routes/EditAdminPage";
import { RemoveAdminPage } from "./Routes/SuperAdmin Routes/RemoveAdminPage";
import { PrivateAdminRoute } from './Routes/PrivateRoute'
import { PrivateSuperAdminRoute } from './Routes/PrivateRoute'
import { PrivateCustomerRoute } from './Routes/PrivateRoute'
import { AddressProvider } from "./Context/Address/AddressContext";
import { AddressPage } from "./Routes/CustomerRoutes/AddressPage";
import { CreateAddressPage } from "./Routes/CustomerRoutes/CreateAddressPage";
import { EditAddressPage } from "./Routes/CustomerRoutes/EditAddressPage";
import { ProductDetailsPage } from './Routes/Public Routes/ProductDetailsPage'
import CheckoutPage from "./Routes/CustomerRoutes/CheckoutPage";
import { BasketProvider } from "./Context/Basket/BasketContext";
import { CheckoutSuccessPage } from "./Routes/CustomerRoutes/CheckoutSuccessPage";
import {CategoryListPage} from './Routes/Admin Routes/CategoryListPage'
import { OrderProvider } from "./Context/Order/OrderContext";
import { OrderLineProvider } from './Context/OrderLine/OrderLineContext'
import { OrdersPage } from "./Routes/CustomerRoutes/OrdersPage";
import { OrderListPage } from "./Routes/Admin Routes/OrderListPage";
import {EditOrderPage} from './Routes/Admin Routes/EditOrderPage'
import { PopularProductsPage } from "./Routes/Public Routes/PopularProductsPage";
import { AllCategoryPage} from './Routes/Public Routes/AllCategoryPage'
import { FAQPage } from "./Routes/Public Routes/FAQPage";
import { ContactPage } from "./Routes/Public Routes/ContactPage";
import { TermsPage } from "./Routes/Public Routes/TermsPage";
import { PrivacyPolicyPage } from "./Routes/Public Routes/PrivacyPolicyPage";
import { CookiePolicyPage } from "./Routes/Public Routes/CookiePolicyPage";






function App() {






  return (

    <AddressProvider >
      <BasketProvider>
        <OrderProvider>
          <OrderLineProvider>


            <ProductProvider>
              <CategoryProvider>
                <AlertProvider>
                  <CustomerProvider>
                    <AdminProvider>
                      <CookiesProvider>
                        <Router>
                          <div className="flex flex-col justify-between h-screen">
                            <Navbar />

                            <main className="container mx-auto px-3 pb-12">
                              <Alert />

                              <Routes>

                                {/* Public Routes */}
                                <Route path="/" element={<HomePage />} />
                                <Route path="/adminlogin" element={<AdminLoginPage />} />
                                <Route path="/login" element={<CustomerLoginPage />} />
                                <Route path="/logout" element={<LogoutPage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/products" element={<ProductPage />} />
                                <Route path="/productdetails" element={<ProductDetailsPage />} />
                                <Route path="/categories" element={<CategoryPage />} />
                                <Route path="/allcategories" element={<AllCategoryPage />} />
                                <Route path="/signup" element={<SignupPage />} />
                                <Route path="/popular" element={<PopularProductsPage />} />
                                <Route path="/faq" element={<FAQPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/termsofuse" element={<TermsPage />} />
                                <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
                                <Route path="/cookiepolicy" element={<CookiePolicyPage />} />
                                <Route path="/notfound" element={<NotFoundPage />} />
                                <Route path="/*" element={<NotFoundPage />} />


                                {/* Admin Routes */}
                                <Route path="/admindashboard" element={<PrivateAdminRoute><DashboardPage /></PrivateAdminRoute>} />
                                <Route path="/admineditaccount" element={<PrivateAdminRoute><EditAdminPage /></PrivateAdminRoute>} />
                                {/* Admin Routes - Customers */}
                                <Route path="/customerlist" element={<PrivateAdminRoute><CustomerListPage /></PrivateAdminRoute>} />
                                <Route path="/createcustomer" element={<PrivateAdminRoute><CreateCustomerPage /></PrivateAdminRoute>} />
                                <Route path="/editcustomer" element={<PrivateAdminRoute><EditCustomerPage /></PrivateAdminRoute>} />
                                <Route path="/removecustomer" element={<PrivateAdminRoute><RemoveCustomerPage /></PrivateAdminRoute>} />
                                {/* Admin Routes - Products */}
                                <Route path="/createproduct" element={<PrivateAdminRoute><CreateProductPage /></PrivateAdminRoute>} />
                                <Route path="/productlist" element={<PrivateAdminRoute><ProductListPage /></PrivateAdminRoute>} />
                                <Route path="/removeproduct" element={<PrivateAdminRoute><RemoveProductPage /></PrivateAdminRoute>} />
                                <Route path="/editproduct" element={<PrivateAdminRoute><EditProductPage /></PrivateAdminRoute>} />
                                {/* Admin Routes - Categories */}
                                <Route path="/createcategory" element={<PrivateAdminRoute><CreateCategoryPage /></PrivateAdminRoute>} />
                                <Route path="/categorylist" element={<PrivateAdminRoute><CategoryListPage /></PrivateAdminRoute>} />
                                <Route path="/removecategory" element={<PrivateAdminRoute><RemoveCategoryPage /></PrivateAdminRoute>} />
                                <Route path="/editcategory" element={<PrivateAdminRoute><EditCategoryPage /></PrivateAdminRoute>} />


                                {/* Admin Routes - Orders */}
                                <Route path="/orderlist" element={<PrivateAdminRoute><OrderListPage /></PrivateAdminRoute>} />
                                <Route path="/admineditorder" element={<PrivateAdminRoute><EditOrderPage /></PrivateAdminRoute>} />
                                {/* Admin Routes - Addresses
                          <Route path="/createcategory" element={<PrivateAdminRoute><CreateCategoryPage /></PrivateAdminRoute>} />
                          <Route path="/categorylist" element={<PrivateAdminRoute><CategoryListPage /></PrivateAdminRoute>} />
                          <Route path="/removecategory" element={<PrivateAdminRoute><RemoveCategoryPage /></PrivateAdminRoute>} />
                          <Route path="/editcategory" element={<PrivateAdminRoute><EditCategoryPage /></PrivateAdminRoute>} /> */}

                                {/* only role === SuperAdmin access  below Routes */}
                                <Route path="/adminlist" element={<PrivateSuperAdminRoute><AdminListPage /></PrivateSuperAdminRoute>} />
                                <Route path="/createadmin" element={<PrivateSuperAdminRoute><CreateAdminPage /></PrivateSuperAdminRoute>} />
                                <Route path="/editadmin" element={<PrivateSuperAdminRoute><EditAdminPage /></PrivateSuperAdminRoute>} />
                                <Route path="/removeadmin" element={<PrivateSuperAdminRoute><RemoveAdminPage /></PrivateSuperAdminRoute>} />


                                {/* Customer Routes */}
                                <Route path="/account" element={<PrivateCustomerRoute><CustomerAccountPage /></PrivateCustomerRoute>} />
                                <Route path="/customereditaccount" element={<PrivateCustomerRoute><EditCustomerPage /></PrivateCustomerRoute>} />
                                <Route path="/customerremoveAccount" element={<PrivateCustomerRoute><RemoveCustomerPage /></PrivateCustomerRoute>} />
                                <Route path="/customeraddreslist" element={<PrivateCustomerRoute><AddressPage /></PrivateCustomerRoute>} />
                                <Route path="/customercreateaddress" element={<PrivateCustomerRoute><CreateAddressPage /></PrivateCustomerRoute>} />
                                <Route path="/customereditaddress" element={<PrivateCustomerRoute><EditAddressPage /></PrivateCustomerRoute>} />
                                <Route path="/checkout" element={<PrivateCustomerRoute><CheckoutPage /></PrivateCustomerRoute>} />
                                {/* <Route path="/ordersuccess:session_id" element={<PrivateCustomerRoute><CheckoutSuccessPage /></PrivateCustomerRoute>} /> */}
                                <Route path="ordersuccess" element={<PrivateCustomerRoute><CheckoutSuccessPage /></PrivateCustomerRoute>} />
                                <Route path="customerorders" element={<PrivateCustomerRoute><OrdersPage /></PrivateCustomerRoute>} />
                                customerorders


                              </Routes>
                            </main>
                            <Footer />

                          </div>
                        </Router>
                      </CookiesProvider>
                    </AdminProvider>
                  </CustomerProvider>
                </AlertProvider>
              </CategoryProvider>
            </ProductProvider>
          </OrderLineProvider>
        </OrderProvider>
      </BasketProvider>
    </AddressProvider>

  );
}

export default App;












// Spinner is taking context from elsewhere?
// Accesing the protected route with the bearer token

