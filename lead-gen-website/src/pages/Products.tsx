import { Container, Title, Text, SimpleGrid, Card, ThemeIcon, Button } from '@mantine/core';
import { FiBox, FiBriefcase, FiZap, FiArrowRight } from 'react-icons/fi';

const products = [
  {
    icon: FiBox,
    title: 'Product A',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: FiBriefcase,
    title: 'Product B',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: FiZap,
    title: 'Product C',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: FiBox,
    title: 'Product D',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: FiBriefcase,
    title: 'Product E',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: FiZap,
    title: 'Product F',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function Products() {
  const items = products.map((product) => (
    <Card shadow="sm" p="lg" radius="md" withBorder key={product.title}>
      <ThemeIcon variant="light" size={40} radius={40}>
        <product.icon size={24} />
      </ThemeIcon>
      <Title order={3} mt="md">{product.title}</Title>
      <Text c="dimmed" mt="sm">{product.description}</Text>
      <Button rightSection={<FiArrowRight size={14} />} variant="light" fullWidth mt="md" radius="md">
        Learn More
      </Button>
    </Card>
  ));

  return (
    <>
      <Container size="lg" py={80} style={{ textAlign: 'center' }}>
        <Title order={1} style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our Products</Title>
        <Text size="xl" c="dimmed">
          A suite of powerful tools designed to help you grow your business.
        </Text>
      </Container>

      <Container size="lg" pb={80}>
        <SimpleGrid cols={3} spacing="xl">
          {items}
        </SimpleGrid>
      </Container>
    </>
  );
}


