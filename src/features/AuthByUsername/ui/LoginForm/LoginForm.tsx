import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                className={cls.input}
                type="text"
                placeholder={t('enter_username')}
                autofocus
            />
            <Input
                className={cls.input}
                type="text"
                placeholder={t('enter_password')}
            />
            <Button className={cls.loginBtn}>
                {t('login')}
            </Button>
        </div>
    );
};
