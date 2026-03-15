import { Container, Title, Text, Card, Group, Stack, ThemeIcon } from '@mantine/core';
import { FiTarget, FiTrendingUp, FiUsers, FiCheck } from 'react-icons/fi';

const phases = [
  {
    title: 'Define ICP & Target Accounts',
    description: 'Identify the companies most likely to benefit from your product through market analysis and customer research.',
    icon: FiTarget
  },
  {
    title: 'Build Outreach Systems',
    description: 'Design and implement multi-channel campaigns using email, LinkedIn, and targeted outbound strategies.',
    icon: FiTrendingUp
  },
  {
    title: 'Generate Qualified Conversations',
    description: 'Book demos and discovery calls with relevant decision-makers who have genuine interest and budget.',
    icon: FiUsers
  },
  {
    title: 'Support Sales Conversion',
    description: 'Help move conversations toward revenue through pipeline management and sales process optimization.',
    icon: FiCheck
  }
];

export default function HowWeWork() {
  return (
    <>
      <Container size="lg" py={80} style={{ textAlign: 'center' }}>
        <Title order={1} style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          How We Work
        </Title>
        <Text size="xl" c="dimmed" mb="lg">
          A proven four-phase approach to building predictable outbound pipeline
        </Text>
      </Container>

      <Container size="lg" pb={80}>
        <Stack gap="xl">
          {phases.map((phase, index) => (
            <Card key={index} shadow="sm" p="xl" radius="md" withBorder>
              <Group align="flex-start" gap="lg">
                <ThemeIcon size={60} radius={60} variant="light" color="violet">
                  <phase.icon size={30} />
                </ThemeIcon>
                <div style={{ flex: 1 }}>
                  <Title order={2} mb="md">{phase.title}</Title>
                  <Text size="lg">{phase.description}</Text>
                </div>
              </Group>
            </Card>
          ))}
        </Stack>
      </Container>
    </>
  );
}
