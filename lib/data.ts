import { BlogPost, Author } from "./types";

export const DEFAULT_AUTHOR: Author = {
  name: "Jennifer Taylor",
  avatar: "/images/jennifer-taylor.jpg",
  role: "Lead Product Designer & Design Systems Architect",
  bio: "Hello! My name is Jennifer Taylor, working from Chile. I create some UI Kits and Design Systems for Figma and also, I offer live support to designers.",
  location: "Santiago, Chile",
  figmaUrl: "https://www.figma.com/@beyondui",
};

export const POPULAR_TAGS = [
  "Design",
  "Development",
  "UX Research",
  "Front-end development",
  "QA Engineering",
  "Management",
  "Digital Marketing",
];

export const CATEGORIES = [
  "All Posts",
  "Design",
  "Management",
  "Web Development",
  "UX Research",
  "Engineering",
];

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Mastering UI Elements: A Practical Guide for Designers",
    slug: "mastering-ui-elements-practical-guide",
    excerpt:
      "Dive into the world of user interfaces with our expert guides, latest trends, and practical tips.",
    content: `
User interface design is not merely about decorating screens with pleasing colors and trendy gradients. At its core, UI design is a disciplined communication craft: translating user intention into actionable, frictionless software behavior.

### 1. Consistent Token Architecture
One of the most common pitfalls in interface design is token fragmentation. When multiple team members arbitrarily choose font sizes (e.g. 15px vs 16px) or border radii (8px vs 10px), visual cohesion dissolves. By declaring rigid design tokens for spacing, typography, and color scales, you guarantee visual harmony across every screen.

### 2. Micro-Interactions and Spatial Feedback
Buttons should not merely invert their colors on hover. Subtle spring animations, spatial elevation transitions, and focus rings provide the user with tactile confidence that their interaction was recognized.

### 3. Clear Visual Hierarchy
Directing the viewer's gaze requires conscious control of typography contrast, whitespace, and badge accents. Notice how grouping primary tags with pastel backgrounds allows rapid scanning without overwhelming the editorial headline.

### Conclusion
Mastering UI elements requires treating components as living building blocks rather than static artboards. Once your design system reflects genuine production code constraints, handoffs become effortless.
    `,
    image: "/images/post-1.jpg",
    author: DEFAULT_AUTHOR,
    tags: ["Design", "Management", "Web Development"],
    category: "Design",
    date: "May 12, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "2",
    title: "Mastering UI Elements: A Practical Guide for Designers",
    slug: "mastering-the-art-of-user-interface-design",
    excerpt:
      "Dive into the world of user interfaces with our expert guides, latest trends, and practical tips.",
    content: `
Great interfaces feel invisible because they anticipate what the user requires before cognitive fatigue sets in. In this comprehensive guide, we dissect the anatomy of award-winning enterprise dashboards and SaaS landing pages.

### The Power of Whitespace (Negative Space)
Negative space is not empty space; it is an active design element that provides breathing room and cognitive clarity. Cramming widgets together increases anxiety and reduces task completion speed.

### Type Scale Consistency
Using a modular scale (such as a 1.25 Major Third or 1.333 Perfect Fourth ratio) establishes natural harmonic relationships between your headings, subheads, and body copy.
    `,
    image: "/images/post-2.jpg",
    author: DEFAULT_AUTHOR,
    tags: ["Design", "Management", "Web Development"],
    category: "Design",
    date: "May 10, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "3",
    title: "Mastering UI Elements: A Practical Guide for Designers",
    slug: "navigating-user-centric-landscape-ux",
    excerpt:
      "Dive into the world of user interfaces with our expert guides, latest trends, and practical tips.",
    content: `
Understanding the human on the other side of the glass requires moving beyond abstract user personas into direct qualitative observation.

### Contextual Inquiries
Interviews conducted in a sterile testing lab often miss the real-world interruptions and bandwidth constraints users experience daily. Observing workflows in situ uncovers hidden pain points that quantitative telemetry never captures.

### Iterative Prototyping
Don't wait for high-fidelity mockups to test information architecture. Wireframe prototypes tested with five targeted participants will expose 80% of navigational friction.
    `,
    image: "/images/post-3.jpg",
    author: DEFAULT_AUTHOR,
    tags: ["Design", "Management", "Web Development"],
    category: "UX Research",
    date: "May 8, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "4",
    title: "Mastering UI Elements: A Practical Guide for Designers",
    slug: "advanced-techniques-innovative-ui-ux",
    excerpt:
      "Dive into the world of user interfaces with our expert guides, latest trends, and practical tips.",
    content: `
Modern design systems are dynamic software products in their own right. Leveraging Figma variables, token aliases, and code generator pipelines allows designers to speak the exact same language as engineers.

### Multi-Brand Theming
By structuring tokens into primitive, semantic, and component levels, a single set of core components can seamlessly morph across dark mode, high-contrast mode, and multiple sub-brand color themes.
    `,
    image: "/images/post-4.jpg",
    author: DEFAULT_AUTHOR,
    tags: ["Design", "Management", "Web Development"],
    category: "Design",
    date: "May 5, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "5",
    title: "Exploring the Depths of UI/UX Creativity and Functionality",
    slug: "exploring-depths-creativity-functionality",
    excerpt:
      "Striking the perfect equilibrium between artistic visual expression and rigorous accessibility compliance in enterprise software.",
    content: `
Too often in digital product development, aesthetics and accessibility are framed as opposing forces. In reality, the most accessible products are also the most aesthetically refined.

### Color Contrast and WCAG Standards
Ensuring a minimum 4.5:1 contrast ratio for normal text and 3:1 for large display text benefits not only visually impaired users, but anyone reading your app under direct sunlight on a mobile device.
    `,
    image: "/images/post-5.jpg",
    author: DEFAULT_AUTHOR,
    tags: ["Design", "Management", "Web Development"],
    category: "Web Development",
    date: "May 2, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "6",
    title: "Building Scalable Design Systems with Figma and Tailwind CSS",
    slug: "scalable-design-systems-figma-tailwind",
    excerpt:
      "A step-by-step technical blueprint for translating complex Figma variable systems into clean, responsive Tailwind CSS tokens.",
    content: `
When engineering teams and design teams share unified naming conventions, implementation speed triples and design regression bugs virtually disappear.

### Mapping Variables to Tailwind Config
Aligning your spacing scale (e.g., 4px base increments), typography classes, and semantic color palettes ensures that both Figma and Tailwind share a single source of truth.
    `,
    image: "/images/post-6.jpg",
    author: DEFAULT_AUTHOR,
    tags: ["Design", "Management", "Web Development"],
    category: "Web Development",
    date: "April 28, 2026",
    readTime: "5 min read",
    featured: false,
  },
];
