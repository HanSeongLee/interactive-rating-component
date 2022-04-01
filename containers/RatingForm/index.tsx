import React, {FormHTMLAttributes, useState} from "react";
import cn from 'classnames';

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    defaultValue?: number;
    min: number;
    max: number;
    activeClassName?: any;
};

const RatingForm: React.FC<IProps> = ({
                                          activeClassName, defaultValue, min, max,
                                          ...props
                                      }) => {
    const [value, setValue] = useState(defaultValue ? defaultValue : min);

    return (
        <form {...props}>
            <ul>
                {Array.from(Array(max - min + 1).keys()).map((number, index) => (
                    <li onClick={_ => setValue(number + min)}
                        className={cn({
                            [activeClassName]: number + min === value,
                        })}
                    >
                        {number + min}
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

RatingForm.defaultProps = {
    defaultValue: 0,
};

export default RatingForm;
