import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme_light 1.svg'
import DarkIcon from 'shared/assets/icons/theme_dark 1.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
      <Button theme={ThemeButton.CLEAN} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
          {theme === Theme.LIGHT ? <DarkIcon/> : <LightIcon />}
      </Button>
    );
};
