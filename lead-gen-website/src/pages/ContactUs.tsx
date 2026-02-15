import { Container, Title, Text, SimpleGrid, Card, TextInput, Textarea, Button, Group, Loader, Alert } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FiMail, FiPhone, FiMapPin, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { useState } from 'react';
import { showNotification } from '@mantine/notifications';

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (values: typeof form.values) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        showNotification({
          title: 'Message Sent!',
          message: data.message,
          color: 'green',
          icon: <FiCheck size={16} />,
        });
        form.reset();
      } else {
        setSubmitStatus('error');
        showNotification({
          title: 'Error',
          message: data.error || 'Failed to send message. Please try again.',
          color: 'red',
          icon: <FiAlertCircle size={16} />,
        });
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
      showNotification({
        title: 'Error',
        message: 'Network error. Please check your connection and try again.',
        color: 'red',
        icon: <FiAlertCircle size={16} />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div>
            {submitStatus === 'success' && (
              <Alert color="green" icon={<FiCheck />} mb="md">
                Thank you for your message! We'll get back to you soon.
              </Alert>
            )}

            {submitStatus === 'error' && (
              <Alert color="red" icon={<FiAlertCircle />} mb="md">
                Failed to send message. Please try again.
              </Alert>
            )}

            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                label="Name"
                placeholder="Your name"
                required
                {...form.getInputProps('name')}
                disabled={isSubmitting}
              />
              <TextInput
                label="Email"
                placeholder="your@email.com"
                required
                mt="md"
                {...form.getInputProps('email')}
                disabled={isSubmitting}
              />
              <TextInput
                label="Phone"
                placeholder="(123) 456-7890"
                mt="md"
                {...form.getInputProps('phone')}
                disabled={isSubmitting}
              />
              <Textarea
                label="Message"
                placeholder="Your message"
                required
                mt="md"
                {...form.getInputProps('message')}
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                fullWidth
                mt="xl"
                disabled={isSubmitting}
                leftSection={isSubmitting ? <Loader size="sm" /> : null}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </Button>
            </form>
          </div>
        </SimpleGrid>
      </Container>
    </>
  );
}


