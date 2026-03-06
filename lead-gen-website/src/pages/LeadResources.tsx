import { Container, Title, Text, Card, Group, Badge, Stack, Button, List, ThemeIcon } from '@mantine/core';
import { FiDownload, FiBookOpen, FiTrendingUp, FiTarget, FiMail, FiUsers } from 'react-icons/fi';

const resources = [
  {
    title: 'Demand Generation vs Lead Generation: Understanding the Difference',
    description: 'Learn the key differences between demand generation and lead generation strategies. Discover how to create consistent value across all buyer touchpoints.',
    type: 'Guide',
    icon: FiBookOpen,
    features: [
      'Complete buying group identification',
      'AI-driven engagement strategies',
      'Intent signal analysis'
    ]
  },
  {
    title: 'B2B Lead Generation Best Practices',
    description: 'Master the art of B2B lead generation with proven strategies and tactics that drive qualified prospects to your sales team.',
    type: 'Guide',
    icon: FiTrendingUp,
    features: [
      'Multi-channel outreach techniques',
      'Account-based marketing approaches',
      'Lead qualification frameworks'
    ]
  },
  {
    title: 'Lead Generation Templates & Checklists',
    description: 'Download ready-to-use templates and checklists to streamline your lead generation campaigns and ensure consistent execution.',
    type: 'Template',
    icon: FiDownload,
    features: [
      'Campaign planning templates',
      'Lead scoring checklists',
      'Outreach sequence frameworks'
    ]
  },
  {
    title: 'Email Outreach Strategies for B2B',
    description: 'Craft compelling email campaigns that resonate with decision-makers and drive engagement in competitive B2B markets.',
    type: 'Guide',
    icon: FiMail,
    features: [
      'Personalization techniques',
      'Subject line optimization',
      'Follow-up sequence strategies'
    ]
  },
  {
    title: 'LinkedIn Lead Generation Tactics',
    description: 'Leverage LinkedIn\'s professional network to identify and engage potential B2B clients with targeted outreach strategies.',
    type: 'Guide',
    icon: FiUsers,
    features: [
      'Profile research techniques',
      'Connection strategies',
      'Content engagement tactics'
    ]
  }
];

export default function LeadResources() {
  return (
    <Container size="lg" py={80}>
      <Stack gap="xl">
        <div style={{ textAlign: 'center' }}>
          <Title order={1} style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            Lead Generation Resources
          </Title>
          <Text size="xl" c="dimmed" mb="lg">
            Free guides, templates, and strategies to supercharge your lead generation efforts
          </Text>
        </div>

        <div>
          <Title order={2} mb="md">Featured Resources</Title>
          <Text size="lg" mb="xl">
            Access our comprehensive collection of lead generation resources designed to help you attract, engage, and convert more qualified prospects.
          </Text>
        </div>

        <Stack gap="lg">
          {resources.map((resource, index) => (
            <Card key={index} shadow="sm" p="xl" radius="md" withBorder>
              <Group align="flex-start" gap="lg">
                <ThemeIcon size={60} radius={60} variant="light" color="blue">
                  <resource.icon size={30} />
                </ThemeIcon>
                <div style={{ flex: 1 }}>
                  <Group mb="sm">
                    <Title order={3}>{resource.title}</Title>
                    <Badge variant="light" color="blue">{resource.type}</Badge>
                  </Group>
                  <Text mb="md">{resource.description}</Text>
                  <List size="sm" mb="lg">
                    {resource.features.map((feature, idx) => (
                      <List.Item key={idx}>{feature}</List.Item>
                    ))}
                  </List>
                  <Button rightSection={<FiDownload size={16} />}>
                    Download Resource
                  </Button>
                </div>
              </Group>
            </Card>
          ))}
        </Stack>

        <Card shadow="sm" p="xl" radius="md" withBorder bg="blue.0">
          <Stack align="center" gap="md">
            <ThemeIcon size={60} radius={60} variant="light" color="blue">
              <FiTarget size={30} />
            </ThemeIcon>
            <Title order={2}>Need Custom Lead Generation Strategies?</Title>
            <Text size="lg" ta="center">
              Our expert team can create personalized lead generation campaigns tailored to your industry and target audience.
            </Text>
            <Text size="lg" ta="center" fw={500}>
              Contact us to discuss your specific lead generation needs and goals.
            </Text>
            <Button size="lg" component="a" href="/contact">
              Get Started Today
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
