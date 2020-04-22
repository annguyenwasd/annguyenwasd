import { useMediaQuery } from 'react-responsive';

export default function useMq() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
  const isTabletOrMobileLandscape = useMediaQuery({
    query: '(max-width: 1224px) and (orientation: landscape)'
  });
  const isTabletOrMobileDeviceLandscape = useMediaQuery({
    query: '(max-device-width: 1224px) and (orientation: landscape)'
  });
  const isTabletOrMobilePortrait = useMediaQuery({
    query: '(max-width: 768px) and (orientation: portrait)'
  });
  const isTabletOrMobileDevicePortrait = useMediaQuery({
    query: '(max-device-width: 768px) and (orientation: portrait)'
  });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobileDeviceLandscape,
    isTabletOrMobileLandscape,
    isTabletOrMobileDevicePortrait,
    isTabletOrMobilePortrait,
    isPortrait,
    isRetina
  };
}
