import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <span className={styles.rights}>OwlTop © 2023 Всі права захищені</span>
            <a href='#' className={styles.agreement}>Угода користувача</a>
            <a href='#' className={styles.policy}>Політика конфіденційності</a>
        </footer>
    );
};