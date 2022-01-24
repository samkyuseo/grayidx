import { Box, Flex, Text } from '@chakra-ui/react';
import { WatchTableItem, IWatchTableItemProps } from './WatchTableItem';

interface IWatchCollectionTableProps {
  watches: IWatchTableItemProps[];
}

const WatchCollectionTable = ({ watches }: IWatchCollectionTableProps) => {
  return (
    <Box
      // position='-webkit-sticky'
      position='sticky'
      top='110px'
      left='900px'
      width='300px'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      boxShadow='md'
    >
      {/* Header */}
      <Flex borderBottom='1px' borderColor='gray.200' width='100%' p='10px'>
        <Text variant='bold-text' fontSize='lg'>
          Watches
        </Text>
      </Flex>
      {/* Table content */}
      {watches.map((watch, index) => {
        return <WatchTableItem key={index} {...watch} />;
      })}
      {/* Footer */}
      <Flex width='100%' p='23px' />
    </Box>
  );
};

export { WatchCollectionTable };
