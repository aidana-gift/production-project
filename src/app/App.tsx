import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Approuter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            {/* for using i18n */}
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <Approuter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
