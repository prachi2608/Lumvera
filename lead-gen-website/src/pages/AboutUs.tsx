import { Container, Title, Text, Timeline, SimpleGrid, Avatar, Card } from '@mantine/core';

const timeline = [
  { year: '2020', event: 'Windsurf was founded with a mission to revolutionize lead generation.' },
  { year: '2021', event: 'Launched our flagship product, the Windsurf Platform.' },
  { year: '2022', event: 'Reached 1,000 customers and expanded our team.' },
  { year: '2023', event: 'Introduced AI-powered features to enhance lead qualification.' },
];

const team = [
  { name: 'John Doe', role: 'CEO', image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { name: 'Jane Smith', role: 'CTO', image: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
  { name: 'Peter Jones', role: 'COO', image: 'https://i.pravatar.cc/150?u=a042581f4e29026706d' },
];

export default function AboutUs() {
  const teamCards = team.map((member) => (
    <Card key={member.name} shadow="sm" p="lg" radius="md" withBorder style={{ textAlign: 'center' }}>
      <Avatar src={member.image} size={120} radius={120} mx="auto" />
      <Text ta="center" fz="lg" fw={500} mt="md">{member.name}</Text>
      <Text ta="center" c="dimmed" fz="sm">{member.role}</Text>
    </Card>
  ));

  return (
    <>
      <Container size="lg" py={80} style={{ textAlign: 'center' }}>
        <Title order={1} style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>About Us</Title>
        <Text size="xl" c="dimmed">
          We're a team of passionate innovators dedicated to helping businesses grow.
        </Text>
      </Container>

      <Container size="lg" py={80}>
        <Title order={2} style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Journey</Title>
        <Timeline active={timeline.length} bulletSize={24} lineWidth={2}>
          {timeline.map((item, index) => (
            <Timeline.Item key={index} title={item.year}>
              <Text c="dimmed" size="sm">{item.event}</Text>
            </Timeline.Item>
          ))}
        </Timeline>
      </Container>

      <Container size="lg" py={80}>
        <Title order={2} style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Team</Title>
        <SimpleGrid cols={3} spacing="xl">
          {teamCards}
        </SimpleGrid>
      </Container>
    </>
  );
}


