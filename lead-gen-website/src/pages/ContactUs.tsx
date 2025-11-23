import { Container, Title, Text, SimpleGrid, Card, TextInput, Textarea, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function ContactUs() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) => (value.length === 0 ? 'Message is required' : null),
    },
  });

  return (
    <>
      <Container size="lg" py={80} style={{ textAlign: 'center' }}>
        <Title order={1} style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Contact Us</Title>
        <Text size="xl" c="dimmed">
          We reply faster than your morning coffee kicks in ☕⚡.
        </Text>
      </Container>

      <Container size="lg" pb={80}>
        <SimpleGrid cols={2} spacing="xl">
          <div>
            <Card shadow="sm" p="lg" radius="md" withBorder mb="xl">
              <Group>
                <FiMail size={24} />
                <div>
                  <Text fw={500}>Email</Text>
                  <Text c="dimmed" size="sm">contact@windsurf.com</Text>
                </div>
              </Group>
            </Card>
            <Card shadow="sm" p="lg" radius="md" withBorder mb="xl">
              <Group>
                <FiPhone size={24} />
                <div>
                  <Text fw={500}>Phone</Text>
                  <Text c="dimmed" size="sm">(123) 456-7890</Text>
                </div>
              </Group>
            </Card>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Group>
                <FiMapPin size={24} />
                <div>
                  <Text fw={500}>Office</Text>
                  <Text c="dimmed" size="sm">123 Surf St, Ocean View</Text>
                </div>
              </Group>
            </Card>
          </div>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              label="Name"
              placeholder="Your name"
              required
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              mt="md"
              {...form.getInputProps('email')}
            />
            <TextInput
              label="Phone"
              placeholder="(123) 456-7890"
              mt="md"
              {...form.getInputProps('phone')}
            />
            <Textarea
              label="Message"
              placeholder="Your message"
              required
              mt="md"
              {...form.getInputProps('message')}
            />
            <Button type="submit" fullWidth mt="xl">
              Submit
            </Button>
          </form>
        </SimpleGrid>
      </Container>
    </>
  );
}


