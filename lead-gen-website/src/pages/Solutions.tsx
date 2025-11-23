import { Container, Title, Text, Tabs, ThemeIcon, Center } from '@mantine/core';
import { FiTarget, FiUsers } from 'react-icons/fi';

export default function Solutions() {
  return (
    <>
      <Container size="lg" py={80} style={{ textAlign: 'center' }}>
        <Title order={1} style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our Solutions</Title>
        <Text size="xl" c="dimmed">
          A comprehensive suite of solutions to help you build your brand, create demand, and drive growth.
        </Text>
      </Container>

      <Container size="sm" pb={80}>
        <Tabs defaultValue="startups">
          <Tabs.List grow>
            <Tabs.Tab value="startups" leftSection={<FiTarget size={16} />}>
              For Startups
            </Tabs.Tab>
            <Tabs.Tab value="enterprises" leftSection={<FiUsers size={16} />}>
              For Enterprises
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="startups" pt="xl">
            <Center style={{ flexDirection: 'column', textAlign: 'center' }}>
              <ThemeIcon variant="light" size={60} radius={60} mb="lg"><FiTarget size={32} /></ThemeIcon>
              <Title order={3}>For Startups</Title>
              <Text c="dimmed" mt="sm">Get off the ground with a lean, mean, lead-generating machine.</Text>
            </Center>
          </Tabs.Panel>

          <Tabs.Panel value="enterprises" pt="xl">
            <Center style={{ flexDirection: 'column', textAlign: 'center' }}>
              <ThemeIcon variant="light" size={60} radius={60} mb="lg"><FiUsers size={32} /></ThemeIcon>
              <Title order={3}>For Enterprises</Title>
              <Text c="dimmed" mt="sm">Scale your growth with our robust, enterprise-grade solutions.</Text>
            </Center>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </>
  );
}


