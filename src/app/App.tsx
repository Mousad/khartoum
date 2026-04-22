import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}