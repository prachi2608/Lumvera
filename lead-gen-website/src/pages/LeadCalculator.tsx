import { useState } from 'react';
import {
  Container,
  Title,
  Text,
  Card,
  NumberInput,
  Select,
  Button,
  Grid,
  Group,
  Stack,
  ThemeIcon,
  List,
  Alert
} from '@mantine/core';
import { FiTrendingUp, FiDollarSign, FiUsers, FiTarget } from 'react-icons/fi';

const industries = [
  { value: 'technology', label: 'Technology' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'finance', label: 'Finance' },
  { value: 'retail', label: 'Retail' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'other', label: 'Other' }
];

export default function LeadCalculator() {
  const [formData, setFormData] = useState({
    industry: '',
    monthlyBudget: 0,
    targetAudienceSize: 0,
    conversionRate: 0,
    averageDealValue: 0
  });

  const [results, setResults] = useState<{
    estimatedLeads: number;
    costPerLead: number;
    potentialRevenue: number;
    roi: number;
  } | null>(null);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateResults = () => {
    const { monthlyBudget, targetAudienceSize, conversionRate, averageDealValue } = formData;

    if (!monthlyBudget || !targetAudienceSize || !conversionRate || !averageDealValue) {
      return;
    }

    const estimatedLeads = Math.round((targetAudienceSize * conversionRate) / 100);
    const costPerLead = monthlyBudget / estimatedLeads;
    const potentialRevenue = estimatedLeads * averageDealValue;
    const roi = ((potentialRevenue - monthlyBudget) / monthlyBudget) * 100;

    setResults({
      estimatedLeads,
      costPerLead: Math.round(costPerLead * 100) / 100,
      potentialRevenue,
      roi: Math.round(roi * 100) / 100
    });
  };

  return (
    <Container size="lg" py={80}>
      <Stack gap="xl">
        <div style={{ textAlign: 'center' }}>
          <Title order={1} style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            Lead ROI Calculator
          </Title>
          <Text size="xl" c="dimmed" mb="lg">
            Estimate your potential leads and revenue with our advanced calculator
          </Text>
          <Text size="lg">
            Discover how much you could generate in leads and revenue with our lead generation services.
            Input your parameters below to get personalized insights.
          </Text>
        </div>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" p="xl" radius="md" withBorder>
              <Title order={2} mb="lg">Input Your Parameters</Title>
              <Stack gap="md">
                <Select
                  label="Industry"
                  placeholder="Select your industry"
                  data={industries}
                  value={formData.industry}
                  onChange={(value) => handleInputChange('industry', value)}
                />

                <NumberInput
                  label="Monthly Lead Generation Budget ($)"
                  placeholder="5000"
                  min={0}
                  value={formData.monthlyBudget}
                  onChange={(value) => handleInputChange('monthlyBudget', value)}
                />

                <NumberInput
                  label="Target Audience Size"
                  placeholder="10000"
                  min={0}
                  value={formData.targetAudienceSize}
                  onChange={(value) => handleInputChange('targetAudienceSize', value)}
                />

                <NumberInput
                  label="Expected Conversion Rate (%)"
                  placeholder="2.5"
                  min={0}
                  max={100}
                  value={formData.conversionRate}
                  onChange={(value) => handleInputChange('conversionRate', value)}
                />

                <NumberInput
                  label="Average Deal Value ($)"
                  placeholder="5000"
                  min={0}
                  value={formData.averageDealValue}
                  onChange={(value) => handleInputChange('averageDealValue', value)}
                />

                <Button
                  size="lg"
                  fullWidth
                  mt="md"
                  onClick={calculateResults}
                  disabled={!formData.industry || !formData.monthlyBudget || !formData.targetAudienceSize || !formData.conversionRate || !formData.averageDealValue}
                >
                  Calculate ROI
                </Button>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            {results ? (
              <Card shadow="sm" p="xl" radius="md" withBorder>
                <Title order={2} mb="lg">Your Results</Title>
                <Stack gap="lg">
                  <Group>
                    <ThemeIcon size={50} radius={50} variant="light" color="blue">
                      <FiUsers size={24} />
                    </ThemeIcon>
                    <div>
                      <Text size="sm" c="dimmed">Estimated Monthly Leads</Text>
                      <Text size="xl" fw={700}>{results.estimatedLeads.toLocaleString()}</Text>
                    </div>
                  </Group>

                  <Group>
                    <ThemeIcon size={50} radius={50} variant="light" color="green">
                      <FiDollarSign size={24} />
                    </ThemeIcon>
                    <div>
                      <Text size="sm" c="dimmed">Cost Per Lead</Text>
                      <Text size="xl" fw={700}>${results.costPerLead}</Text>
                    </div>
                  </Group>

                  <Group>
                    <ThemeIcon size={50} radius={50} variant="light" color="orange">
                      <FiTrendingUp size={24} />
                    </ThemeIcon>
                    <div>
                      <Text size="sm" c="dimmed">Potential Monthly Revenue</Text>
                      <Text size="xl" fw={700}>${results.potentialRevenue.toLocaleString()}</Text>
                    </div>
                  </Group>

                  <Group>
                    <ThemeIcon size={50} radius={50} variant="light" color="purple">
                      <FiTarget size={24} />
                    </ThemeIcon>
                    <div>
                      <Text size="sm" c="dimmed">Estimated ROI</Text>
                      <Text size="xl" fw={700}>{results.roi}%</Text>
                    </div>
                  </Group>

                  <Alert color="blue" mt="lg">
                    <Text fw={500}>Ready to achieve these results?</Text>
                    <Text>Contact us to start your lead generation campaign and turn these estimates into reality.</Text>
                  </Alert>

                  <Button component="a" href="/contact" size="lg" fullWidth>
                    Get Started Today
                  </Button>
                </Stack>
              </Card>
            ) : (
              <Card shadow="sm" p="xl" radius="md" withBorder style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
                <Stack align="center" gap="md">
                  <ThemeIcon size={80} radius={80} variant="light" color="gray">
                    <FiTrendingUp size={40} />
                  </ThemeIcon>
                  <Title order={3} c="dimmed">Enter Your Parameters</Title>
                  <Text c="dimmed" ta="center">
                    Fill out the form to see your personalized lead generation ROI calculations
                  </Text>
                </Stack>
              </Card>
            )}
          </Grid.Col>
        </Grid>

        <Card shadow="sm" p="xl" radius="md" withBorder bg="gray.0">
          <Title order={2} mb="md">Why Choose Our Lead Generation Services?</Title>
          <List size="lg" spacing="sm">
            <List.Item>Proven track record with 300%+ ROI for clients</List.Item>
            <List.Item>Advanced targeting using AI and machine learning</List.Item>
            <List.Item>Multi-channel approach: email, phone, LinkedIn, and more</List.Item>
            <List.Item>Dedicated account managers and real-time reporting</List.Item>
            <List.Item>Compliance with all data protection regulations</List.Item>
          </List>
        </Card>
      </Stack>
    </Container>
  );
}
