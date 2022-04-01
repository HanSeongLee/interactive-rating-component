import React, {FormEventHandler, HTMLAttributes} from "react";
import styles from './style.module.scss';
import RatingForm from "../../containers/RatingForm";

interface IProps extends HTMLAttributes<HTMLDivElement> {
    icon?: string;
    title: string;
    description: string;
    onSubmit?: FormEventHandler;
};

const RatingCard: React.FC<IProps> = ({
                                          icon, title, description,
                                          onSubmit, ...props
                                      }) => {
    return (
        <div className={styles.card}
             {...props}
        >
            <div className={styles.icon}>
                <img src={icon}
                     alt={''}
                />
            </div>
            <div>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.description}>
                    {description}
                </p>
                <RatingForm className={styles.ratingForm}
                            activeClassName={styles.active}
                            onSubmit={onSubmit}
                            min={1}
                            max={5}
                />
            </div>
        </div>
    );
};

RatingCard.defaultProps = {
    icon: '/img/icon-star.svg',
};

export default RatingCard;
