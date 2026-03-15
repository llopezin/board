
export const HoldRight = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="151"
            height="195"
            viewBox="0 0 151 195"
            fill="none"
            className="hold-svg"
            style={{
                opacity: 0,
                animation: "holdFadeIn 0.8s ease-out 0.5s forwards",
            }}
        >
            <path
                fillRule="evenodd"
                fill="#ffffff50"
                stroke="#A2E635"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset="1"
                style={{
                    animation: "strokeDraw 1.6s ease-in-out 1.0s forwards",
                }}
                d="M57.9755 34.358C69.5755 -18.042 42.4755 1.85799 27.4755 18.358C13.4755 31.1222 -14.0245 86.3579 9.97551 133.858C33.9755 181.358 115.07 193.858 122.976 193.858C135.976 193.858 164.476 182.795 141.976 178.358C106.476 171.358 43.4755 99.858 57.9755 34.358Z
     M45 123 m-11 0 a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0Z"
            />
        </svg>
    );
};

