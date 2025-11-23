import { Link } from 'react-router-dom';
import { Container, Title, Text, Button, Group, SimpleGrid, Card, ThemeIcon } from '@mantine/core';
import { FiZap, FiHeart, FiShield } from 'react-icons/fi';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Container size="lg" py={80} style={{ textAlign: 'center' }}>
        <Title order={1} style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          Lumvera — Where bright ideas rise.
        </Title>
        <Text size="xl" c="dimmed" mb={40}>
          The modern platform that helps you turn your ideas into reality with powerful tools and seamless collaboration.
        </Text>
        <Group justify="center">
          <Button component={Link} to="/contact" size="lg">Get Started - It's Free</Button>
          <Button component={Link} to="/products" size="lg" variant="outline">Watch Demo</Button>
        </Group>
      </Container>

      {/* Value Highlights */}
      <Container size="lg" py={80}>
        <Title order={2} style={{ textAlign: 'center', marginBottom: '3rem' }}>Value Highlights</Title>
        <SimpleGrid cols={3} spacing="xl">
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <ThemeIcon variant="light" size={40} radius={40}><FiZap size={24} /></ThemeIcon>
            <Title order={3} mt="md">Lightning Fast</Title>
            <Text c="dimmed" mt="sm">Built with an optimized architecture for speed and performance.</Text>
          </Card>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <ThemeIcon variant="light" size={40} radius={40}><FiHeart size={24} /></ThemeIcon>
            <Title order={3} mt="md">Yellow. Modern. You.</Title>
            <Text c="dimmed" mt="sm">A brand identity that stands out from the crowd.</Text>
          </Card>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <ThemeIcon variant="light" size={40} radius={40}><FiShield size={24} /></ThemeIcon>
            <Title order={3} mt="md">Secure & Reliable</Title>
            <Text c="dimmed" mt="sm">Enterprise-grade workflows to keep your data safe.</Text>
          </Card>
        </SimpleGrid>
      </Container>

      {/* Final CTA */}
      <Container size="lg" py={80} style={{ textAlign: 'center' }}>
        <Title order={2} style={{ marginBottom: '1.5rem' }}>Ready to Build Something You’re Proud Of?</Title>
        <Button component={Link} to="/contact" size="lg">Take Me There 🚀</Button>
      </Container>
    </>
  );
}


