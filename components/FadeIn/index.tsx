import React, {CSSProperties, HTMLAttributes} from "react";
import styles from './style.module.scss';
import cn from "classnames";

interface IProps extends HTMLAttributes<HTMLDivElement> {
    offsetX?: number;
    offsetY?: number;
    duration?: number;
};

const FadeIn: React.FC<IProps> = ({
                                      offsetX, offsetY, duration, children,
                                      ...props
                                  }) => {
    return (
        <div className={cn(styles.fadeIn)}
             style={{
                 '--duration': `${duration}s`,
                 '--offsetX': `${offsetX}px`,
                 '--offsetY': `${offsetY}px`,
             } as CSSProperties}
             {...props}
        >
            {children}
        </div>
    );
};

FadeIn.defaultProps = {
    duration: 1.2,
};

export default FadeIn;
