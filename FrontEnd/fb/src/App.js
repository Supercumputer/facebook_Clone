import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { privateRouter, publicRouter } from './Routes';
import { Fragment } from 'react';
import PrivateRoute from './Components/PrivateRouter/PrivateRouter';
function App() {
    
    return (
        <>
            <Router>
                <Routes>
                    {publicRouter.map((item, index) => {
                        let Container = item.component;
                        let LayOut;
                        if (item.layout) {
                            LayOut = item.layout;
                        } else {
                            LayOut = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <LayOut>
                                        <Container />
                                    </LayOut>
                                }
                            />
                        );
                    })}

                    <Route path="/" element={<PrivateRoute/>}>
                        {privateRouter.map((item, index) => {
                            let Container = item.component;
                            let LayOut;
                            if (item.layout) {
                                LayOut = item.layout;
                            } else {
                                LayOut = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={item.path}
                                    element={
                                        <LayOut>
                                            <Container />
                                        </LayOut>
                                    }
                                />
                            );
                        })}
                    </Route>
                </Routes>
            </Router>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
