import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Ratings = ({ value, text, color }) => {
    return (
        <div className='flex items-center space-x-1'>
            <span style={{ color }}>
                {
                    value >= 1
                        ? <FaStar />
                        : value >= 0.5
                            ? <FaStarHalfAlt />
                            : <FaRegStar />
                }
            </span>
            <span style={{ color }}>
                {
                    value >= 2
                        ? <FaStar />
                        : value >= 1.5
                            ? <FaStarHalfAlt />
                            : <FaRegStar />
                }
            </span>
            <span style={{ color }}>
                {
                    value >= 3
                        ? <FaStar />
                        : value >= 2.5
                            ? <FaStarHalfAlt />
                            : <FaRegStar />
                }
            </span>
            <span style={{ color }}>
                {
                    value >= 4
                        ? <FaStar />
                        : value >= 3.5
                            ? <FaStarHalfAlt />
                            : <FaRegStar />
                }
            </span>
            <span style={{ color }}>
                {
                    value >= 5
                        ? <FaStar />
                        : value >= 4.5
                            ? <FaStarHalfAlt />
                            : <FaRegStar />
                }
            </span>
            <span className='ml-2'>
                {text && text}
            </span>
        </div>
    );
};

export default Ratings;