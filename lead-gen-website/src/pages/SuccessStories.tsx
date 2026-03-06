import { Container, Title, Text, Card, Group, Badge, Stack, Blockquote, Avatar } from '@mantine/core';
import { FiTrendingUp, FiUsers, FiDollarSign } from 'react-icons/fi';

const successStories = [
  {
    company: 'TechStart Inc.',
    industry: 'Technology',
    challenge: 'Struggling to generate qualified leads for their SaaS product',
    solution: 'Implemented our outbound lead generation service with AI-powered targeting',
    results: {
      leads: '+400%',
      conversion: '+250%',
      revenue: '$2.5M'
    },
    testimonial: {
      quote: 'Lumvera transformed our lead generation process. We went from struggling to find prospects to having a consistent pipeline of qualified leads.',
      author: 'Sarah Chen',
      position: 'VP of Sales',
      avatar: 'SC'
    }
  },
  {
    company: 'GreenBuild Construction',
    industry: 'Construction',
    challenge: 'Limited online presence and inbound leads',
    solution: 'Multi-channel outbound strategy focusing on LinkedIn and email campaigns',
    results: {
      leads: '+300%',
      conversion: '+180%',
      revenue: '$1.8M'
    },
    testimonial: {
      quote: 'Our sales team now has more qualified opportunities than they can handle. Lumvera\'s approach works.',
      author: 'Mike Rodriguez',
      position: 'CEO',
      avatar: 'MR'
    }
  },
  {
    company: 'HealthCare Plus',
    industry: 'Healthcare',
    challenge: 'Difficulty reaching decision-makers in healthcare organizations',
    solution: 'Targeted account-based marketing with personalized outreach sequences',
    results: {
      leads: '+280%',
      conversion: '+320%',
      revenue: '$3.2M'
    },
    testimonial: {
      quote: 'The quality of leads from Lumvera is exceptional. Every meeting is with someone who has buying authority.',
      author: 'Dr. Emily Watson',
      position: 'Chief Medical Officer',
      avatar: 'EW'
    }
  }
];

export default function SuccessStories() {
  return (
    <Container size="lg" py={80}>
      <Stack gap="xl">
        <div style={{ textAlign: 'center' }}>
          <Title order={1} style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            Success Stories
          </Title>
          <Text size="xl" c="dimmed" mb="lg">
            Real results from real clients using our lead generation services
          </Text>
        </div>

        <Stack gap="lg">
          {successStories.map((story, index) => (
            <Card key={index} shadow="sm" p="xl" radius="md" withBorder>
              <Stack gap="lg">
                <Group justify="space-between" align="flex-start">
                  <div>
                    <Title order={2} mb="xs">{story.company}</Title>
                    <Badge variant="light" color="blue">{story.industry}</Badge>
                  </div>
                  <Group gap="xs">
                    <FiTrendingUp size={20} />
                    <Text size="sm" fw={500}>Success Story</Text>
                  </Group>
                </Group>

                <div>
                  <Title order={3} size="h4" mb="sm">Challenge</Title>
                  <Text c="dimmed">{story.challenge}</Text>
                </div>

                <div>
                  <Title order={3} size="h4" mb="sm">Our Solution</Title>
                  <Text>{story.solution}</Text>
                </div>

                <div>
                  <Title order={3} size="h4" mb="sm">Results</Title>
                  <Group gap="xl">
                    <div style={{ textAlign: 'center' }}>
                      <Group gap="xs" justify="center">
                        <FiUsers size={20} color="var(--mantine-color-blue-6)" />
                        <Text size="lg" fw={700}>{story.results.leads}</Text>
                      </Group>
                      <Text size="sm" c="dimmed">Lead Increase</Text>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <Group gap="xs" justify="center">
                        <FiTrendingUp size={20} color="var(--mantine-color-green-6)" />
                        <Text size="lg" fw={700}>{story.results.conversion}</Text>
                      </Group>
                      <Text size="sm" c="dimmed">Conversion Rate</Text>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <Group gap="xs" justify="center">
                        <FiDollarSign size={20} color="var(--mantine-color-orange-6)" />
                        <Text size="lg" fw={700}>{story.results.revenue}</Text>
                      </Group>
                      <Text size="sm" c="dimmed">Revenue Generated</Text>
                    </div>
                  </Group>
                </div>

                <Card withBorder p="lg" bg="gray.0">
                  <Blockquote cite={`- ${story.testimonial.author}, ${story.testimonial.position}`}>
                    "{story.testimonial.quote}"
                  </Blockquote>
                  <Group mt="md">
                    <Avatar size="md" radius="xl">{story.testimonial.avatar}</Avatar>
                    <div>
                      <Text fw={500}>{story.testimonial.author}</Text>
                      <Text size="sm" c="dimmed">{story.testimonial.position}</Text>
                    </div>
                  </Group>
                </Card>
              </Stack>
            </Card>
          ))}
        </Stack>

        <Card shadow="sm" p="xl" radius="md" withBorder bg="blue.0">
          <Stack align="center" gap="md">
            <Title order={2}>Ready to Write Your Success Story?</Title>
            <Text size="lg" ta="center">
              Join hundreds of companies that have transformed their lead generation with our proven strategies.
            </Text>
            <Text size="lg" ta="center" fw={500}>
              Contact us today to start your journey to lead generation success.
            </Text>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
