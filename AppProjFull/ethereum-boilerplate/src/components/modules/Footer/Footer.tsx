import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  github: 'https://github.com/sergeyalh',
  linkedin: 'https://www.linkedin.com/in/sergey-alhazov-ba3b1292/',
  moralis: 'https://moralis.io/?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Text>
        ⭐️ Feel free to visit my Github account by clicking{' '}
        <Link href={links.github} isExternal alignItems={'center'}>
          here <ExternalLinkIcon />
        </Link>
      </Text>
      <Text>
        🙋 You have questions? Ask them on my{' '}
        <Link href={links.linkedin} isExternal alignItems={'center'}>
          Linkedin Account <ExternalLinkIcon />
        </Link>
      </Text>
      <Text>
        📖 Read more about Moralis{' '}
        <Link href={links.moralis} isExternal alignItems={'center'}>
          here <ExternalLinkIcon />
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
