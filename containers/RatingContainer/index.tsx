import React, {useCallback, useState} from "react";
import RatingCard from "../../components/RatingCard";
import RatingResultCard from "../../components/RatingResultCard";
import FadeIn from "../../components/FadeIn";

const RatingContainer: React.FC = () => {
    const [rating, setRating] = useState<number | undefined>(undefined);

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        const value = e.target[0].value;
        if (!value) {
            alert('You didn\'t choose anything!');
            return;
        }
        setRating(value);
    }, []);

    return (
        <>
            {!rating ? (
                <FadeIn key={'ratingCard'}
                        offsetY={-50}
                >
                    <RatingCard title={'How did we do?'}
                                description={'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'}
                                onSubmit={onSubmit}
                    />
                </FadeIn>
            ) : (
                <FadeIn key={'ratingResultCard'}
                        offsetY={-50}
                >
                    <RatingResultCard rating={rating}/>
                </FadeIn>
            )}
        </>
    );
};

export default RatingContainer;
