import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';

export const Paragraph = ({ children, size = 'm' }: ParagraphProps) => {
    return <p className={cn(styles.p, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
    })}>{children}</p>;
};