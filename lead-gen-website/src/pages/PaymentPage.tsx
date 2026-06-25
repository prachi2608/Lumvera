import { useState, useEffect } from 'react';
import { Container, Title, Text, TextInput, NumberInput, Button, Card, Alert, Loader, Group } from '@mantine/core';
import { FiCreditCard, FiCheckCircle, FiX } from 'react-icons/fi';

// Razorpay TypeScript declarations
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    amount: 1000, // Default amount in paise (₹10)
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () => {
      console.error('Failed to load Razorpay script');
      setStatus('error');
      setStatusMessage('Payment gateway failed to load. Please refresh the page.');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePayment = async () => {
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields');
      return;
    }

    if (formData.amount <= 0) {
      setStatus('error');
      setStatusMessage('Please enter a valid amount');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setStatusMessage('Please enter a valid email address');
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      setStatus('error');
      setStatusMessage('Please enter a valid 10-digit phone number');
      return;
    }

    if (!razorpayLoaded) {
      setStatus('error');
      setStatusMessage('Payment gateway not loaded. Please refresh and try again.');
      return;
    }

    setLoading(true);
    setStatus('idle');
    setStatusMessage('');

    try {
      // TODO: Integrate with Firebase Cloud Function for Razorpay
      // For now, just simulate the payment process
      setTimeout(() => {
        setLoading(false);
        setStatus('success');
        setStatusMessage('Payment initiated successfully! Razorpay integration coming soon.');
      }, 2000);
    } catch (error) {
      setLoading(false);
      setStatus('error');
      setStatusMessage('Payment failed. Please try again.');
    }
  };

  return (
    <Container size="lg" py={{ base: 40, md: 80 }}>
      <Title order={1} style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Secure Payment
      </Title>

      <Card shadow="md" p="xl" radius="lg" withBorder style={{ maxWidth: 600, margin: '0 auto' }}>
        <Group justify="center" mb="lg">
          <FiCreditCard size={32} />
          <Title order={2}>StratLane Payment</Title>
        </Group>

        <Text c="dimmed" ta="center" mb="xl">
          Complete your payment securely with Razorpay
        </Text>

        {/* Amount Input */}
        <NumberInput
          label="Amount (₹)"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={(value) => handleInputChange('amount', value || 0)}
          min={1}
          max={100000}
          step={100}
          required
          mb="md"
          description="Amount in rupees (minimum ₹1)"
        />

        {/* Customer Details */}
        <TextInput
          label="Full Name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(event) => handleInputChange('name', event.currentTarget.value)}
          required
          mb="md"
        />

        <TextInput
          label="Email Address"
          placeholder="Enter your email"
          type="email"
          value={formData.email}
          onChange={(event) => handleInputChange('email', event.currentTarget.value)}
          required
          mb="md"
        />

        <TextInput
          label="Phone Number"
          placeholder="Enter your 10-digit phone number"
          value={formData.phone}
          onChange={(event) => handleInputChange('phone', event.currentTarget.value)}
          required
          mb="md"
          description="10-digit mobile number"
        />

        {/* Pay Now Button */}
        <Button
          fullWidth
          size="lg"
          color="yellow"
          onClick={handlePayment}
          loading={loading}
          leftSection={loading ? <Loader size="sm" /> : <FiCreditCard />}
          disabled={loading}
          mt="xl"
        >
          {loading ? 'Processing...' : `Pay ₹${(formData.amount / 100).toFixed(2)}`}
        </Button>

        {/* Status Messages */}
        {status === 'success' && (
          <Alert icon={<FiCheckCircle />} title="Success!" color="green" mt="lg">
            {statusMessage}
          </Alert>
        )}

        {status === 'error' && (
          <Alert icon={<FiX />} title="Error!" color="red" mt="lg">
            {statusMessage}
          </Alert>
        )}
      </Card>
    </Container>
  );
}
