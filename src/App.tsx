import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/common/Header/Header'
import Home from './page/home'

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
])

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
