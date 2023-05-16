import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import RestaurantPage from './pages/RestaurantPage/RestaurantPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

const AppLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: (
			<>
				<Header />
				<Error />
				<Footer />
			</>
		),
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/offers',
				element: <Home />,
			},
			{
				path: '/help',
				element: <Home />,
			},
			{
				path: '/signin',
				element: <Home />,
			},
			{
				path: '/checkout',
				element: <CheckoutPage />,
			},
			{
				path: '/restaurants/:slug',
				element: <RestaurantPage />,
			},
		],
	},
]);

const App = () => {
	return (
		<Provider store={store}>
			<RouterProvider router={appRouter} />
		</Provider>
	);
};
export default App;
