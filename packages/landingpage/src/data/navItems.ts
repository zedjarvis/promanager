import { ref } from 'vue'

export const features = ref([
  {
    icon: 'mdi-cookie',
    title: 'Views',
    text: 'View your team’s projects from every angle.',
  },
  {
    icon: 'mdi-robot',
    title: 'Automation',
    text: 'Automate tasks and workflows with Buttler automation.'
  },
  {
    icon: 'mdi-firework',
    title: 'Power-UPs',
    text: 'Power up your teams by linking their favourite tools with ProManager plugins.',
  },
  {
    icon: 'mdi-laptop',
    title: 'Templates',
    text: 'Give your team blueprints for success with easy-to-use templates from industry leaders and the PM community.',
  },
  {
    icon: 'mdi-timeline',
    title: 'Integrations',
    text: 'Find the apps your team is already using or Discover new ways to get things done.'
  }
])


export const solutions = ref([
  {
    icon: 'mdi-store',
    title: 'Marketing teams',
    text: 'Whether launching a new product, campaign, or creating content, PM helps marketing teams succeed.'
  },
  {
    icon: 'mdi-printer-3d',
    title: 'Product management',
    text: 'PM’s management boards and roadmap features to simplify complex projects and processes.'
  },
  {
    icon: 'mdi-code-braces',
    title: 'Engineering teams',
    text: 'Ship more code, faster, and give your developers the freedom to be more agile with PM.',
  },
  {
    icon: 'mdi-desktop-tower-monitor',
    title: 'Disign teams',
    text: 'Empower your design teams by using PM to streamline creative requests and promote more fluid cross-team collaboration.'
  },
  {
    icon: 'mdi-ab-testing',
    title: 'Startups',
    text: 'From hitting revenue goals to managing workflows, small businesses thrive with PM.'
  },
  {
    icon: 'mdi-remote-desktop',
    title: 'Remote teams',
    text: 'Keep your remote team connected and motivated, no matter where they’re located around the world.'
  }
])


export const plans = ref([
  {
    icon: 'mdi-lightbulb',
    color: '#79e3f2',
    title: 'Standard',
    text: 'For teams that need to manage more work and scale collaboration.'
  },
  {
    icon: 'mdi-star',
    color: '#f29cdb',
    title: 'Premium',
    text: 'Best for teams of upto 100 that needs to track multiple projects and visualize work in a variety of ways.'
  },
  {
    icon: 'mdi-office-building',
    color: '#4d99fb',
    title: 'Enterprice',
    text: 'Everything your enterprice teams and admins needs to manage projects.'
  },
])


export const resources = ref([
  {
    title: 'ProManager guide',
    text: 'Our easy to follow workflow guide will take you from project set-up to PM expert in no time.',
  },
  {
    title: 'Remote work guide',
    text: 'The complete guide to setting up your team for remote work success.',
  },
  {
    title: 'Webinars',
    text: 'Enjoy our free PM webinars and become a productivity professional.',
  },
  {
    title: 'Customer Stories',
    text: 'See how businesses have adopted PM as a vital part of their workflow.'
  },
  {
    title: 'Developers',
    text: 'The sky\'s the limit in what you can deliver to PM users in your Power-Up!'
  },
  {
    title: 'Help resources',
    text: 'Need help? Articles and FAQs to get you unstuck.'
  }
])
