import { SVGProps } from 'react';

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3656 0.2344C11.5156 0.384422 11.5998 0.587869 11.5998 0.8C11.5998 1.01213 11.5156 1.21558 11.3656 1.3656L4.96562 7.7656C4.8156 7.91558 4.61215 7.99983 4.40002 7.99983C4.18789 7.99983 3.98444 7.91558 3.83442 7.7656L0.63442 4.5656C0.488694 4.41472 0.408059 4.21264 0.409881 4.00288C0.411704 3.79312 0.495839 3.59247 0.644166 3.44414C0.792492 3.29582 0.993142 3.21168 1.2029 3.20986C1.41266 3.20804 1.61474 3.28867 1.76562 3.4344L4.40002 6.0688L10.2344 0.2344C10.3844 0.0844231 10.5879 0.000170708 10.8 0.000170708C11.0122 0.000170708 11.2156 0.0844231 11.3656 0.2344Z"
        fill="white"
      />
    </svg>
  );
}
