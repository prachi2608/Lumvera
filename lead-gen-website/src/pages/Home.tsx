import { Link } from 'react-router-dom';
import { Container, Title, Text, Button, Group, SimpleGrid, Card, ThemeIcon, Progress, Badge, Stack } from '@mantine/core';
import { FiZap, FiHeart, FiShield, FiCheckCircle, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Home() {
  return (
    <>
      {/* Hero Section - Mobile Optimized */}
      <Container size="lg" py={{ base: 40, md: 80 }} style={{ textAlign: 'center' }}>
        <Title
          order={1}
          size="h1"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}
        >
          Lumvera — Where bright ideas rise.
        </Title>
        <Text
          size="lg"
          c="dimmed"
          mb={40}
          style={{ maxWidth: '100%', lineHeight: 1.6 }}
        >
          The modern platform that helps you turn your ideas into reality with powerful tools and seamless collaboration.
        </Text>
        <Group justify="center" gap="md">
          <Button component={Link} to="/contact" size="lg" style={{ width: '100%', '@media (min-width: 640px)': { width: 'auto' } }}>
            Get Started - It's Free
          </Button>
          <Button component={Link} to="/products" size="lg" variant="outline" style={{ width: '100%', '@media (min-width: 640px)': { width: 'auto' } }}>
            Watch Demo
          </Button>
        </Group>
      </Container>

      {/* Lead Generation Challenge Game */}
      <Container size="lg" py={{ base: 40, md: 80 }}>
        <Title order={2} style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Test Your Lead Generation IQ! 🎯
        </Title>
        <Text size="lg" c="dimmed" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: 600, margin: '0 auto 3rem' }}>
          Think you know business growth? Take our quick challenge and discover strategies that could double your leads!
        </Text>
        <LeadGenerationGame />
      </Container>

      {/* Value Highlights - Mobile Optimized */}
      <Container size="lg" py={{ base: 40, md: 80 }}>
        <Title order={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>Value Highlights</Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <ThemeIcon variant="light" size={40} radius={40}><FiZap size={24} /></ThemeIcon>
            <Title order={3} mt="md" size="h4">Lightning Fast</Title>
            <Text c="dimmed" mt="sm" size="sm">Built with an optimized architecture for speed and performance.</Text>
          </Card>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <ThemeIcon variant="light" size={40} radius={40}><FiHeart size={24} /></ThemeIcon>
            <Title order={3} mt="md" size="h4">Growth Focused</Title>
            <Text c="dimmed" mt="sm" size="sm">Designed specifically for businesses that want to scale and succeed.</Text>
          </Card>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <ThemeIcon variant="light" size={40} radius={40}><FiShield size={24} /></ThemeIcon>
            <Title order={3} mt="md" size="h4">Secure & Reliable</Title>
            <Text c="dimmed" mt="sm" size="sm">Enterprise-grade workflows to keep your data safe.</Text>
          </Card>
        </SimpleGrid>
      </Container>

      {/* Final CTA - Mobile Optimized */}
      <Container size="lg" py={{ base: 40, md: 80 }} style={{ textAlign: 'center' }}>
        <Title order={2} style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)' }}>
          Ready to Build Something You're Proud Of?
        </Title>
        <Button component={Link} to="/contact" size="lg" style={{ width: '100%', '@media (min-width: 640px)': { width: 'auto' } }}>
          Take Me There 🚀
        </Button>
      </Container>
    </>
  );
}

// Lead Generation Challenge Game Component
function LeadGenerationGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'start' | 'playing' | 'finished'>('start');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What's the most effective way to generate high-quality leads?",
      options: [
        "Cold calling random numbers",
        "Content marketing with valuable insights",
        "Buying email lists",
        "Door-to-door sales"
      ],
      correct: 1,
      explanation: "Content marketing builds trust and attracts qualified leads who are already interested in your solutions."
    },
    {
      question: "What percentage of leads are typically qualified for your business?",
      options: [
        "100% - All leads are good leads",
        "50% - Half are usually qualified",
        "10-20% - Most need nurturing",
        "0% - Leads are worthless"
      ],
      correct: 2,
      explanation: "Only 10-20% of leads are typically sales-ready. The rest need education and nurturing."
    },
    {
      question: "Which metric is most important for measuring lead generation success?",
      options: [
        "Number of website visitors",
        "Cost per lead (CPL)",
        "Lead-to-customer conversion rate",
        "All social media followers"
      ],
      correct: 1,
      explanation: "Cost per lead helps you understand the efficiency of your lead generation efforts."
    },
    {
      question: "What's the best way to nurture leads?",
      options: [
        "Send daily sales emails",
        "Email marketing with valuable content",
        "Call them every hour",
        "Ignore them until they're ready"
      ],
      correct: 1,
      explanation: "Consistent, valuable email content builds relationships and moves leads through your funnel."
    },
    {
      question: "Which channel typically generates the highest quality B2B leads?",
      options: [
        "Social media ads",
        "LinkedIn networking",
        "Content marketing and SEO",
        "Cold outreach"
      ],
      correct: 2,
      explanation: "Content marketing attracts leads who are actively researching solutions to their problems."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameState('finished');
      }
    }, 2000);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setGameState('start');
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const startGame = () => {
    setGameState('playing');
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "🏆 Lead Generation Expert! You're ready to dominate!";
    if (percentage >= 60) return "⭐ Good job! You have solid lead gen knowledge.";
    if (percentage >= 40) return "📈 Not bad! Room for improvement.";
    return "🎯 Keep learning! Lead generation is an art worth mastering.";
  };

  if (gameState === 'start') {
    return (
      <Card shadow="md" p="xl" radius="lg" withBorder style={{ maxWidth: 600, margin: '0 auto' }}>
        <Title order={3} mb="md" ta="center">Ready to Test Your Lead Generation Skills?</Title>
        <Text c="dimmed" mb="xl" ta="center">
          Answer 5 questions about business growth and lead generation. See how you stack up against the experts!
        </Text>
        <Group justify="center" gap="md">
          <Badge size="lg" color="brand">5 Questions</Badge>
          <Badge size="lg" color="green">Quick & Fun</Badge>
          <Badge size="lg" color="blue">Learn Something</Badge>
        </Group>
        <Button fullWidth size="lg" mt="xl" onClick={startGame}>
          Start Challenge 🎯
        </Button>
      </Card>
    );
  }

  if (gameState === 'finished') {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Card shadow="md" p="xl" radius="lg" withBorder style={{ maxWidth: 600, margin: '0 auto' }}>
        <Title order={3} mb="md" ta="center">Challenge Complete!</Title>
        <Group justify="center" mb="lg">
          <Badge size="xl" color={percentage >= 60 ? 'green' : 'orange'}>
            {score}/{questions.length} Correct
          </Badge>
          <Badge size="xl" color="brand">{percentage}% Score</Badge>
        </Group>
        <Text size="lg" ta="center" mb="xl" fw={500}>
          {getScoreMessage()}
        </Text>
        <Progress value={percentage} size="xl" mb="xl" />
        {percentage < 80 && (
          <Card withBorder p="md" mb="xl" style={{ backgroundColor: '#F8F9FA' }}>
            <Text size="sm" c="dimmed" ta="center">
              💡 Want to improve your lead generation game? Our platform has proven strategies to help you generate 3x more qualified leads.
            </Text>
          </Card>
        )}
        <Group grow>
          <Button variant="outline" onClick={resetGame}>
            Try Again
          </Button>
          <Button component={Link} to="/contact">
            Get Expert Help
          </Button>
        </Group>
      </Card>
    );
  }

  return (
    <Card shadow="md" p="xl" radius="lg" withBorder style={{ maxWidth: 700, margin: '0 auto' }}>
      <Group justify="space-between" mb="lg">
        <Text size="sm" c="dimmed">Question {currentQuestion + 1} of {questions.length}</Text>
        <Badge color="brand">Score: {score}</Badge>
      </Group>
      <Progress value={(currentQuestion / questions.length) * 100} mb="xl" />

      <Title order={4} mb="xl" style={{ minHeight: 80, display: 'flex', alignItems: 'center' }}>
        {questions[currentQuestion].question}
      </Title>

      <Stack gap="md">
        {questions[currentQuestion].options.map((option, index) => (
          <Card
            key={index}
            shadow="sm"
            p="md"
            radius="md"
            withBorder
            style={{
              cursor: 'pointer',
              borderColor: showResult
                ? (index === questions[currentQuestion].correct ? 'green' :
                   selectedAnswer === index ? 'red' : undefined)
                : undefined,
              backgroundColor: showResult
                ? (index === questions[currentQuestion].correct ? '#F0FFF0' :
                   selectedAnswer === index ? '#FFF0F0' : undefined)
                : undefined
            }}
            onClick={() => !showResult && handleAnswerSelect(index)}
          >
            <Group>
              <div style={{ flex: 1 }}>{option}</div>
              {showResult && (
                <div>
                  {index === questions[currentQuestion].correct && <FiCheckCircle color="green" />}
                  {selectedAnswer === index && index !== questions[currentQuestion].correct && <FiX color="red" />}
                </div>
              )}
            </Group>
          </Card>
        ))}
      </Stack>

      {showResult && (
        <Card withBorder p="md" mt="xl" style={{ backgroundColor: '#F8F9FA' }}>
          <Text size="sm" fw={500} mb="sm">💡 Explanation:</Text>
          <Text size="sm" c="dimmed">{questions[currentQuestion].explanation}</Text>
        </Card>
      )}
    </Card>
  );
}


