import { Container, Title, Text, Card, Group, Badge, Stack, Button, ThemeIcon, Alert } from '@mantine/core';
import { FiDownload, FiBookOpen, FiTarget, FiMail, FiUsers, FiFileText } from 'react-icons/fi';

const guides = [
  {
    title: 'Introduction to Lead Generation',
    description: 'Basic overview of lead generation concepts and why it matters for business growth.',
    type: 'Guide',
    icon: FiBookOpen
  },
  {
    title: 'Email Marketing Basics',
    description: 'Essential principles of email marketing for lead nurturing.',
    type: 'Guide',
    icon: FiMail
  },
  {
    title: 'LinkedIn Outreach Fundamentals',
    description: 'Key strategies for connecting with prospects on LinkedIn.',
    type: 'Guide',
    icon: FiUsers
  }
];

const downloadableResources = [
  {
    title: 'Lead Generation Checklist',
    description: 'A simple checklist to ensure your lead generation campaigns are complete.',
    type: 'Checklist',
    filePath: '/lead-generation-checklist.html',
    icon: FiFileText
  },
  {
    title: 'Email Template Pack',
    description: 'Basic email templates for initial outreach and follow-ups.',
    type: 'Template',
    filePath: '/email-template-pack.html',
    icon: FiMail
  },
  {
    title: 'Lead Qualification Framework',
    description: 'Simple framework to qualify leads and prioritize follow-ups.',
    type: 'Framework',
    filePath: '/lead-qualification-framework.html',
    icon: FiTarget
  }
];

export default function LeadResources() {
  const handleDownload = (filePath: string) => {
    window.open(filePath, '_blank');
  };

  return (
    <Container size="lg" py={80}>
      <Stack gap="xl">
        <div style={{ textAlign: 'center' }}>
          <Title order={1} style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            Lead Generation Resources
          </Title>
          <Text size="xl" c="dimmed" mb="lg">
            Free basic guides and downloadable resources to get started with lead generation
          </Text>
        </div>

        <Alert color="brand" mb="lg">
          <Text>
            <strong>Note:</strong> Our resources provide basic tools to help you get started. For comprehensive strategies and implementation support, contact our team for personalized assistance.
          </Text>
        </Alert>

        <div>
          <Title order={2} mb="md">Free Guides</Title>
          <Text size="lg" mb="xl">
            For guides, reach out to us.
          </Text>
        </div>

        <Stack gap="lg">
          {guides.map((guide, index) => (
            <Card key={index} shadow="sm" p="xl" radius="md" withBorder>
              <Group align="flex-start" gap="lg">
                <ThemeIcon size={60} radius={60} variant="light" color="yellow">
                  <guide.icon size={30} />
                </ThemeIcon>
                <div style={{ flex: 1 }}>
                  <Group mb="sm">
                    <Title order={3}>{guide.title}</Title>
                    <Badge variant="light" color="brand">{guide.type}</Badge>
                  </Group>
                  <Text mb="lg">{guide.description}</Text>
                </div>
              </Group>
            </Card>
          ))}
        </Stack>

        <div>
          <Title order={2} mb="md">Downloadable Resources</Title>
          <Text size="lg" mb="xl">
            Download practical tools and templates to support your lead generation efforts.
          </Text>
        </div>

        <Stack gap="lg">
          {downloadableResources.map((resource, index) => (
            <Card key={index} shadow="sm" p="xl" radius="md" withBorder>
              <Group align="flex-start" gap="lg">
                <ThemeIcon size={60} radius={60} variant="light" color="yellow">
                  <resource.icon size={30} />
                </ThemeIcon>
                <div style={{ flex: 1 }}>
                  <Group mb="sm">
                    <Title order={3}>{resource.title}</Title>
                    <Badge variant="light" color="brand">{resource.type}</Badge>
                  </Group>
                  <Text mb="lg">{resource.description}</Text>
                  <Button
                    color="yellow"
                    rightSection={<FiDownload size={16} />}
                    onClick={() => handleDownload(resource.filePath)}
                  >
                    Download
                  </Button>
                </div>
              </Group>
            </Card>
          ))}
        </Stack>

        <Card shadow="sm" p="xl" radius="md" withBorder bg="brand.0">
          <Stack align="center" gap="md">
            <ThemeIcon size={60} radius={60} variant="light" color="yellow">
              <FiTarget size={30} />
            </ThemeIcon>
            <Title order={2}>Need Advanced Strategies?</Title>
            <Text size="lg" ta="center">
              Our expert team provides comprehensive lead generation strategies and implementation support.
            </Text>
            <Text size="lg" ta="center" fw={500}>
              Contact us to access advanced tools and personalized guidance.
            </Text>
            <Button size="lg" color="yellow" component="a" href="/contact">
              Get Expert Help
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
