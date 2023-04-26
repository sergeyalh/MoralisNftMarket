import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MyLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/swanSwapblack.svg' : '/swanSwapwhite.svg'}
      height={45}
      width={150}
      alt="Moralis"
    />
  );
};

export default MyLogo;
