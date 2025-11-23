import { useEffect, useState } from 'react';
import { Link, SvgIcon, SvgIconProps, Typography, typographyClasses } from '@mui/material';
import { rootPaths } from 'routes/paths';

interface LogoProps extends SvgIconProps {
  showName?: boolean;
}

const Logo = ({ sx, viewBox = '0 0 26 40', showName = true, ...rest }: LogoProps) => {
  const [id, setId] = useState('logo');

  useEffect(() => {
    setId(`logo-${Math.floor(Math.random() * 1000) + 1}`);
  }, []);

  return (
    <Link
      href={rootPaths.root}
      underline="none"
      sx={{
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          [`& .${typographyClasses.root}`]: {
            backgroundPosition: ({ direction }) => (direction === 'rtl' ? 'right' : 'left'),
          },
        },
      }}
    >
      <SvgIcon
        viewBox={viewBox}
        sx={{
          height: 40,
          width: 26,
          ...sx,
        }}
        {...rest}
      >
        <path
          d="M0.428711 1.68945V13.9413C0.428711 16.3924 2.77965 18.5801 6.30599 19.4106L16.7827 21.8779L22.9541 23.3334C22.9602 23.3334 22.9664 23.3377 22.9725 23.3377C24.6079 23.7284 25.4287 24.7331 25.4287 25.7335V9.39644C25.4287 8.46903 24.7252 7.54162 23.3181 7.09934C23.312 7.09505 23.3058 7.09075 23.2996 7.09505L16.7827 5.55366L0.428711 1.68945Z"
          fill={`url(#paint0-${id})`}
        />
        <path
          d="M4.85352 19.0703V34.2138C4.85352 33.222 5.66196 32.2259 7.27269 31.8266C7.28499 31.8223 7.29735 31.8223 7.30971 31.818C7.31589 31.818 7.32207 31.8137 7.32819 31.8137L11.7469 30.7746L13.4995 30.3624L22.954 28.1341L22.9972 28.1212C24.6141 27.7262 25.4287 26.7301 25.4287 25.734C25.4287 24.7379 24.6079 23.7288 22.9725 23.3381C22.9663 23.3381 22.9602 23.3339 22.954 23.3339L16.7827 21.8826L4.85352 19.0703Z"
          fill={`url(#paint1-${id})`}
        />
        <path
          d="M4.85352 34.2131C4.85352 35.2178 5.68048 36.2225 7.32823 36.6132L11.7469 37.6565L13.4995 38.0687L17.2842 38.9609C19.0945 39.3876 21.0039 38.5104 21.0039 37.2519V28.5928L16.7827 29.5889L13.4995 30.3617L11.7469 30.7739L7.32823 31.813C7.32823 31.813 7.31586 31.8173 7.30968 31.8173C7.29739 31.8215 7.28502 31.8216 7.27266 31.8259C5.66196 32.2252 4.85352 33.2213 4.85352 34.2131Z"
          fill={`url(#paint2-${id})`}
        />
        <path
          d="M4.85352 19.0303V34.1737C4.85352 33.1819 5.66196 32.1858 7.27269 31.7865C7.28499 31.7822 7.29735 31.7822 7.30971 31.7779C7.31589 31.7779 7.32207 31.7736 7.32819 31.7736L11.7469 30.7346L13.4995 30.3224L22.954 28.094L22.9972 28.0811C24.6141 27.6861 25.4287 26.69 25.4287 25.6939C25.4287 24.6978 24.6079 23.6888 22.9725 23.2981C22.9663 23.2981 22.9602 23.2938 22.954 23.2938L16.7827 21.8426L4.85352 19.0303Z"
          fill={`url(#paint3-${id})`}
        />
        <path
          d="M4.85352 34.174C4.85352 35.1787 5.68047 36.1834 7.32823 36.5741L11.7469 37.6175L13.4995 38.0296L17.2842 38.9218C19.0945 39.3485 21.0039 38.4713 21.0039 37.2128V28.5537L16.7827 29.5498L13.4995 30.3227L11.7469 30.7348L7.32823 31.7739C7.32823 31.7739 7.31586 31.7782 7.30968 31.7782C7.29739 31.7825 7.28502 31.7825 7.27266 31.7868C5.66196 32.1861 4.85352 33.1822 4.85352 34.174Z"
          fill={`url(#paint4-${id})`}
        />
        <path
          d="M0.428711 1.65039V13.9023C0.428711 16.3533 2.77965 18.5411 6.30599 19.3715L16.7827 21.8388L22.9541 23.2943C22.9602 23.2943 22.9664 23.2986 22.9725 23.2986C24.6079 23.6893 25.4287 24.694 25.4287 25.6944V9.35734C25.4287 8.42993 24.7252 7.50252 23.3181 7.06029C23.312 7.056 23.3058 7.0517 23.2996 7.056L16.7827 5.51461L0.428711 1.65039Z"
          fill={`url(#paint5-${id})`}
        />
        <defs>
          <linearGradient
            id={`paint0-${id}`}
            x1="14.7322"
            y1="4.79214"
            x2="10.2932"
            y2="23.4701"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#20DE99" stopOpacity="0" />
            <stop offset="1" stopColor="#20DE99" />
          </linearGradient>
          <linearGradient
            id={`paint1-${id}`}
            x1="8.99599"
            y1="21.7626"
            x2="11.2993"
            y2="31.253"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#20DE99" stopOpacity="0" />
            <stop offset="1" stopColor="#20DE99" />
          </linearGradient>
          <linearGradient
            id={`paint2-${id}`}
            x1="16.7822"
            y1="29.8876"
            x2="14.8495"
            y2="40.1977"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#20DE99" stopOpacity="0" />
            <stop offset="1" stopColor="#20DE99" />
          </linearGradient>
          <linearGradient
            id={`paint3-${id}`}
            x1="8.19634"
            y1="20.2692"
            x2="11.769"
            y2="33.5753"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#20DE99" stopOpacity="0" />
            <stop offset="1" stopColor="#20DE99" />
          </linearGradient>
          <linearGradient
            id={`paint4-${id}`}
            x1="17.2907"
            y1="30.1393"
            x2="15.1082"
            y2="40.2682"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#20DE99" stopOpacity="0" />
            <stop offset="1" stopColor="#20DE99" />
          </linearGradient>
          <linearGradient
            id={`paint5-${id}`}
            x1="14.7322"
            y1="4.75309"
            x2="10.2932"
            y2="23.431"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#20DE99" stopOpacity="0" />
            <stop offset="1" stopColor="#20DE99" />
          </linearGradient>
        </defs>
      </SvgIcon>
      {showName && (
        <Typography
          sx={{
            color: 'text.secondary',
            fontWeight: 'medium',
            fontSize: 29.5,
            lineHeight: 1,
            margin: 1,
            marginLeft: 0.625,
            letterSpacing: '-.8px',
            background: ({ vars }) =>
              `linear-gradient(100.06deg, #20DE99 6.97%, #7DB1F5 27.63%, #5A9EF6 49.36%, ${vars.palette.text.secondary} 50.11%, ${vars.palette.text.secondary} 87.87%);`,
            backgroundSize: '240% 100%',
            backgroundPosition: 'right',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transition: 'background-position .3s cubic-bezier(0.8, 0.63, .5, 1)',
          }}
        >
          aurora
        </Typography>
      )}
    </Link>
  );
};

export default Logo;
