import { Container, Title, Text, Timeline, Avatar, Card } from '@mantine/core';

const timeline = [
  { year: '2020', event: 'Lumvera was founded with a mission to revolutionize lead generation.' },
  { year: '2021', event: 'Launched our flagship product, the Lumvera Platform.' },
  { year: '2022', event: 'Reached 1,000 customers and expanded our team.' },
  { year: '2023', event: 'Introduced AI-powered features to enhance lead qualification.' },
];

export default function AboutUs() {
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

      <Container size="lg" py={80} pb={{ base: 80, md: 100 }}>
        <Title order={2} style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Founder</Title>
        <Card shadow="sm" p="lg" radius="md" withBorder style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <Avatar src="https://i.pravatar.cc/150?u=dwijal" size={120} radius={120} mx="auto" />
          <Text ta="center" fz="lg" fw={500} mt="md">Dwijal Trivedi</Text>
          <Text ta="center" c="dimmed" fz="sm">Founder</Text>
          <Text ta="center" mt="md">
            Dwijal is passionate about empowering businesses through innovative lead generation solutions. With extensive experience in sales and marketing, she founded Lumvera to bridge the gap between businesses and their ideal customers, driving sustainable growth and measurable results.
          </Text>
        </Card>
      </Container>
    </>
  );
}


