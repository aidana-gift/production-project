import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <h3>{t('main_page')}</h3>
        </div>
    );
};

export default MainPage;
