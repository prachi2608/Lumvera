import { Container, Title, Text, SimpleGrid, Card, ThemeIcon, Button } from '@mantine/core';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Products() {
  const items = products.map((product) => (
    <Card shadow="sm" p="lg" radius="md" withBorder key={product.title}>
      <ThemeIcon variant="light" size={40} radius={40}>
        <product.icon size={24} />
      </ThemeIcon>
      <Title order={3} mt="md">{product.title}</Title>
      <Text c="dimmed" mt="sm">{product.description}</Text>
      <Button component={Link} to={`/products/${product.id}`} rightSection={<FiArrowRight size={14} />} variant="light" fullWidth mt="md" radius="md">
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

      <Container size="lg" pb={{ base: 80, md: 100 }}>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {items}
        </SimpleGrid>
      </Container>
    </>
  );
}


