import * as React from 'react';

interface Menu4IconProps {
    fill?: string;
}

const Menu4Icon: React.FC<Menu4IconProps> = ({ fill }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
            <path
                fill={fill}
                fillRule="evenodd"
                d="M10.03 4C5.524 4 2 7.916 2 12.55c0 2.41.386 4.394 1.823 6.483 1.372 1.992 3.653 4.003 7.193 6.655L15.889 29l4.873-3.311c3.54-2.653 5.82-4.664 7.192-6.656 1.438-2.089 1.824-4.073 1.824-6.483 0-4.634-3.524-8.55-8.03-8.55-2.26 0-4.218.921-5.86 2.588C14.249 4.92 12.29 4 10.03 4zm0 2.778c-2.786 0-5.252 2.48-5.252 5.772 0 .762.043 1.433.15 2.05.18 1.036.542 1.925 1.183 2.857 1.09 1.584 3.04 3.362 6.572 6.01l3.206 2.407 3.206-2.408c3.532-2.647 5.48-4.425 6.572-6.009C26.69 15.97 27 14.59 27 12.55c0-3.292-2.466-5.772-5.252-5.772-1.716 0-3.29.814-4.743 2.775a1.389 1.389 0 01-2.232 0c-1.454-1.961-3.027-2.775-4.743-2.775z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};

export default Menu4Icon;
