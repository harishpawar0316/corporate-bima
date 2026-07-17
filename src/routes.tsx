import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';
import ProdNotFoundPage from './pages/_404';

const NotFoundPage = ProdNotFoundPage;

const AboutPage = lazy(() => import('./pages/about'));
const ClaimsPage = lazy(() => import('./pages/claims'));
const PartnersPage = lazy(() => import('./pages/partners'));
const ContactPage = lazy(() => import('./pages/contact'));

export const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/claims', element: <ClaimsPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export type Path = '/' | '/about' | '/claims' | '/partners' | '/contact';
export type Params = Record<string, string | undefined>;
