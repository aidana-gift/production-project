import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        children,
        className,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsclosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsclosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsclosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onkeydown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onkeydown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onkeydown);
        };
    }, [isOpen, onkeydown]);

    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
