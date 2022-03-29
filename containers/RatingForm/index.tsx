import React, {FormHTMLAttributes, useState} from "react";
import cn from 'classnames';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    activeClassName?: any;
};

const RatingForm: React.FC<IProps> = ({activeClassName, ...props}) => {
    const [value, setValue] = useState(0);

    return (
        <form {...props}>
            <ul>
                {Array.from(Array(5).keys()).map((number, index) => (
                    <li onClick={_ => setValue(number)}
                        className={cn({
                            [activeClassName]: number === value,
                        })}
                    >
                        {number}
                    </li>
                ))}
            </ul>
            <input type={'number'}
                   name={'rating'}
                   value={value}
                   hidden
            />
            <button type={'submit'}>
                Submit
            </button>
        </form>
    );
};

export default RatingForm;
