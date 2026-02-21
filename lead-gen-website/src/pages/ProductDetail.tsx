import { useParams, Link } from 'react-router-dom';
import { Container, Title, Text, Card, ThemeIcon, List, Button, Group, Stack } from '@mantine/core';
import { FiArrowLeft } from 'react-icons/fi';
import { products } from '../data/products';

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <Container size="lg" py={80}>
        <Title order={1}>Product Not Found</Title>
        <Text>The requested product could not be found.</Text>
        <Button component={Link} to="/products" leftSection={<FiArrowLeft size={16} />} mt="md">
          Back to Products
        </Button>
      </Container>
    );
  }

  return (
    <Container size="lg" py={80}>
      <Group mb="xl">
        <Button
          component={Link}
          to="/products"
          variant="light"
          leftSection={<FiArrowLeft size={16} />}
        >
          Back to Products
        </Button>
      </Group>

      <Card shadow="sm" p="xl" radius="md" withBorder>
        <Group align="flex-start" mb="lg">
          <ThemeIcon variant="light" size={60} radius={60}>
            <product.icon size={32} />
          </ThemeIcon>
          <div style={{ flex: 1 }}>
            <Title order={1} mb="sm">{product.title}</Title>
            <Text size="lg" c="dimmed">{product.description}</Text>
          </div>
        </Group>

        <Stack gap="xl">
          <div>
            <Title order={2} mb="md">Overview</Title>
            <Text size="lg">{product.detailedDescription}</Text>
          </div>

          <div>
            <Title order={2} mb="md">Key Features</Title>
            <List size="lg">
              {product.features.map((feature, index) => (
                <List.Item key={index}>{feature}</List.Item>
              ))}
            </List>
          </div>

          <div>
            <Title order={2} mb="md">Get Started</Title>
            <Text mb="md">
              Ready to implement {product.title} in your business? Contact our team to learn more about how we can help you achieve your goals.
            </Text>
            <Button component={Link} to="/contact" size="lg">
              Contact Us
            </Button>
          </div>
        </Stack>
      </Card>
    </Container>
  );
}
