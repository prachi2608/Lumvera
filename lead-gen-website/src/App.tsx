import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import { AppShell, Text, Group, Button, Container } from '@mantine/core';
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';

// Pages
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

export default function App() {
  const location = useLocation();
  
  const links = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Solutions', link: '/solutions' },
    { label: 'About Us', link: '/about' },
    { label: 'Contact', link: '/contact' },
  ];

  const socialLinks = [
    { icon: IconBrandGithub, url: 'https://github.com' },
    { icon: IconBrandTwitter, url: 'https://twitter.com' },
    { icon: IconBrandLinkedin, url: 'https://linkedin.com' },
  ];

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 100, offset: false }}
      padding="md"
    >
      <AppShell.Header withBorder={false}>
        <Container size="xl" h="100%">
          <Group justify="space-between" h="100%">
            <Text size="xl" fw={700} component={RouterLink} to="/" c="yellow.7">
              Lumvera
            </Text>
            
            <Group gap="sm" visibleFrom="sm">
              {links.map((item) => (
                <Button
                  key={item.label}
                  component={RouterLink}
                  to={item.link}
                  variant={location.pathname === item.link ? 'light' : 'subtle'}
                  color={location.pathname === item.link ? 'yellow' : 'gray'}
                >
                  {item.label}
                </Button>
              ))}
            </Group>

            <Button variant="light" color="yellow" size="sm" hiddenFrom="sm">
              Menu
            </Button>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AppShell.Main>

      <AppShell.Footer withBorder={false} bg="dark.8" c="white">
        <Container size="xl" py="lg">
          <Group justify="space-between" align="flex-start">
            <div>
              <Text size="xl" fw={700} mb="md">Lumvera</Text>
              <Text size="sm" c="dimmed">Empowering your digital journey</Text>
            </div>
            
            <Group gap="xs">
              {socialLinks.map((item, index) => (
                <Button
                  key={index}
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="subtle"
                  color="gray"
                  px="xs"
                >
                  <item.icon size={20} />
                </Button>
              ))}
            </Group>
          </Group>
          
          <Text size="sm" ta="center" mt="xl" c="dimmed">
            © {new Date().getFullYear()} Lumvera. All rights reserved.
          </Text>
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}