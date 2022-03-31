import React, {HTMLAttributes} from "react";
import styles from './style.module.scss';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    rating: number;
    maxRating?: number;
};

const RatingResultCard: React.FC<IProps> = ({ rating, maxRating, ...props }) => {
    return (
        <div className={styles.card}
             {...props}
        >
            <img className={styles.icon}
                 src={'/img/illustration-thank-you.svg'}
                 alt={''}
            />
            <span className={styles.ratingText}>
                You selected {rating} out of {maxRating}
            </span>
            <h2 className={styles.title}>
                Thank you!
            </h2>
            <p className={styles.description}>
                We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
        </div>
    );
};

RatingResultCard.defaultProps = {
    maxRating: 5,
};

export default RatingResultCard;
