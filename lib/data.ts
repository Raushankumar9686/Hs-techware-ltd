// HS Techware Limited - Mock Data Store
// All data is stored in-memory. Replace with a real database for production.

export interface Service {
  slug: string
  title: string
  description: string
  longDescription: string
  icon: string
  category: "it" | "hardware"
  features: string[]
}

export interface PortfolioItem {
  id: string
  title: string
  description: string
  technologies: string[]
  category: string
  image: string
  client: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  review: string
  rating: number
  avatar: string
}

export interface ContactRequest {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  createdAt: string
}

export interface QuoteRequest {
  id: string
  name: string
  email: string
  phone: string
  serviceCategory: string
  details: string
  budget: string
  status: "pending" | "reviewed" | "approved" | "rejected"
  createdAt: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
  category: string
}

// --- Services ---
export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
    longDescription: "We build responsive, high-performance websites and web applications tailored to your business needs. From corporate websites to complex web platforms, our team leverages the latest technologies including React, Next.js, and Node.js to deliver exceptional digital experiences that drive results.",
    icon: "Globe",
    category: "it",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "CMS Integration", "API Development", "Progressive Web Apps"],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    description: "Full-featured online stores with secure payment integration and inventory management.",
    longDescription: "Launch your online store with our comprehensive e-commerce solutions. We build scalable platforms with secure payment gateways, inventory management, order tracking, and customer analytics. Whether you need a Shopify store or a custom-built marketplace, we deliver solutions that convert visitors into customers.",
    icon: "ShoppingCart",
    category: "it",
    features: ["Payment Gateway Integration", "Inventory Management", "Order Tracking", "Customer Analytics", "Multi-Currency Support", "Mobile Commerce"],
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    description: "Professional WordPress websites with custom themes, plugins, and ongoing maintenance.",
    longDescription: "Get a powerful WordPress website tailored to your brand. We create custom themes, develop specialized plugins, and provide ongoing maintenance to keep your site secure and up-to-date. From blogs to business websites, we make WordPress work for you.",
    icon: "FileCode",
    category: "it",
    features: ["Custom Theme Development", "Plugin Development", "WooCommerce Setup", "Speed Optimization", "Security Hardening", "Ongoing Maintenance"],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    description: "Bespoke software solutions designed to streamline your business operations.",
    longDescription: "Transform your business with custom software solutions. We analyze your workflows, identify inefficiencies, and build tailored applications that automate processes, improve productivity, and give you a competitive edge. From CRM systems to enterprise applications, we deliver software that fits your exact needs.",
    icon: "Code",
    category: "it",
    features: ["Requirements Analysis", "UI/UX Design", "Agile Development", "Quality Assurance", "Deployment & DevOps", "Post-Launch Support"],
  },
  {
    slug: "laptop-repair",
    title: "Laptop & PC Repair",
    description: "Expert diagnosis and repair for all laptop and desktop computer issues.",
    longDescription: "Our certified technicians diagnose and repair all types of laptop and desktop issues. From hardware failures to software problems, we provide fast and reliable repair services. We work with all major brands including Dell, HP, Lenovo, Asus, and Apple, ensuring your devices are back to peak performance quickly.",
    icon: "Laptop",
    category: "hardware",
    features: ["Hardware Diagnosis", "Motherboard Repair", "Data Recovery", "Virus Removal", "OS Installation", "Performance Upgrade"],
  },
  {
    slug: "screen-replacement",
    title: "Screen Replacement",
    description: "Quick and affordable screen replacement for laptops, monitors, and mobile devices.",
    longDescription: "Cracked or malfunctioning screen? We provide fast, affordable screen replacements for laptops, desktop monitors, and tablets. Using genuine or high-quality compatible parts, we restore your display to perfect condition with a warranty on all replacements.",
    icon: "Monitor",
    category: "hardware",
    features: ["Laptop Screen Replacement", "Monitor Repair", "Touch Screen Fix", "Display Calibration", "Genuine Parts", "Same-Day Service"],
  },
  {
    slug: "computer-accessories",
    title: "Computer Accessories & Sales",
    description: "Wide range of computer accessories, peripherals, and components at competitive prices.",
    longDescription: "Find everything you need for your computer setup. We stock a comprehensive range of accessories including keyboards, mice, monitors, storage devices, networking equipment, and more. Our team provides expert advice to help you choose the right products for your needs and budget.",
    icon: "Keyboard",
    category: "hardware",
    features: ["Keyboards & Mice", "Storage Devices", "Networking Equipment", "Cables & Adapters", "Laptop Bags & Cases", "Printers & Scanners"],
  },
  {
    slug: "maintenance-amc",
    title: "Annual Maintenance Contracts",
    description: "Comprehensive AMC plans for businesses to keep their IT infrastructure running smoothly.",
    longDescription: "Protect your IT investment with our Annual Maintenance Contracts. We provide regular preventive maintenance, priority support, and discounted repair services to keep your systems running at peak efficiency. Our AMC plans are customized to match your infrastructure size and business requirements.",
    icon: "Wrench",
    category: "hardware",
    features: ["Preventive Maintenance", "Priority Support", "Hardware Replacement", "Network Monitoring", "Software Updates", "On-Site Support"],
  },
]

// --- Portfolio ---
let portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Metro Healthcare Portal",
    description: "A comprehensive patient management and appointment booking system for a multi-branch hospital chain.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "Web Application",
    image: "/portfolio/healthcare.jpg",
    client: "Metro Healthcare Group",
  },
  {
    id: "2",
    title: "FreshMart E-Commerce",
    description: "Full-featured online grocery store with real-time inventory tracking and delivery management.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
    category: "E-Commerce",
    image: "/portfolio/ecommerce.jpg",
    client: "FreshMart Stores",
  },
  {
    id: "3",
    title: "EduLearn LMS Platform",
    description: "A learning management system with video streaming, quizzes, and progress tracking for an education institute.",
    technologies: ["React", "Express", "MySQL", "Socket.io"],
    category: "Web Application",
    image: "/portfolio/lms.jpg",
    client: "EduLearn Academy",
  },
  {
    id: "4",
    title: "TravelBuddy Booking Site",
    description: "Travel booking website with hotel and flight search, comparison, and secure booking capabilities.",
    technologies: ["Next.js", "GraphQL", "Prisma", "Vercel"],
    category: "Web Application",
    image: "/portfolio/travel.jpg",
    client: "TravelBuddy Pvt Ltd",
  },
  {
    id: "5",
    title: "AutoParts Pro WordPress",
    description: "Custom WordPress WooCommerce store for an auto parts retailer with advanced filtering and search.",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    category: "WordPress",
    image: "/portfolio/autoparts.jpg",
    client: "AutoParts Pro",
  },
  {
    id: "6",
    title: "Corporate Network Setup",
    description: "Complete IT infrastructure setup including networking, server configuration, and AMC for a 200-seat office.",
    technologies: ["Cisco", "Windows Server", "Active Directory", "VPN"],
    category: "Hardware & Networking",
    image: "/portfolio/network.jpg",
    client: "Nexus Industries",
  },
]

// --- Testimonials ---
let testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Patel",
    company: "Metro Healthcare Group",
    review: "HS Techware delivered our patient portal on time and exceeded our expectations. The system has streamlined our operations significantly. Their team was professional and responsive throughout the project.",
    rating: 5,
    avatar: "RP",
  },
  {
    id: "2",
    name: "Priya Sharma",
    company: "FreshMart Stores",
    review: "Our e-commerce platform has been running flawlessly since launch. The team understood our complex requirements and delivered a solution that our customers love. Sales have increased by 40% since going online.",
    rating: 5,
    avatar: "PS",
  },
  {
    id: "3",
    name: "Amit Desai",
    company: "EduLearn Academy",
    review: "The LMS platform built by HS Techware transformed our institute. Students and teachers find it intuitive and feature-rich. Their ongoing support has been excellent.",
    rating: 4,
    avatar: "AD",
  },
  {
    id: "4",
    name: "Neha Gupta",
    company: "TravelBuddy Pvt Ltd",
    review: "Working with HS Techware was a great experience. They built us a modern, fast booking platform that our users love. The attention to detail in the UI/UX was impressive.",
    rating: 5,
    avatar: "NG",
  },
  {
    id: "5",
    name: "Vikram Singh",
    company: "Nexus Industries",
    review: "HS Techware set up our entire office IT infrastructure and continues to maintain it under their AMC plan. Response time is quick and the team is knowledgeable. Highly recommended for hardware services.",
    rating: 4,
    avatar: "VS",
  },
]

// --- Contact Requests ---
let contactRequests: ContactRequest[] = [
  {
    id: "1",
    name: "Sanjay Mehta",
    email: "sanjay@example.com",
    phone: "+91 98765 43210",
    service: "Web Development",
    message: "I need a website for my restaurant business. Looking for an attractive design with online ordering capability.",
    createdAt: "2026-02-10T10:30:00Z",
  },
  {
    id: "2",
    name: "Kavita Reddy",
    email: "kavita@example.com",
    phone: "+91 87654 32109",
    service: "Laptop Repair",
    message: "My HP laptop screen is flickering and sometimes goes black. Need urgent repair.",
    createdAt: "2026-02-09T14:15:00Z",
  },
  {
    id: "3",
    name: "Deepak Kumar",
    email: "deepak@example.com",
    phone: "+91 76543 21098",
    service: "E-Commerce Solutions",
    message: "Looking to build an online store for my clothing brand. Need payment integration and inventory management.",
    createdAt: "2026-02-08T09:45:00Z",
  },
]
console.log("Initial contact requests:", contactRequests)

// --- Quote Requests ---
let quoteRequests: QuoteRequest[] = [
  {
    id: "1",
    name: "Arjun Nair",
    email: "arjun@example.com",
    phone: "+91 96543 21098",
    serviceCategory: "Custom Software Development",
    details: "Need a custom CRM system for our sales team of 50 people. Should include lead tracking, pipeline management, and reporting.",
    budget: "5,00,000 - 10,00,000",
    status: "pending",
    createdAt: "2026-02-11T08:20:00Z",
  },
  {
    id: "2",
    name: "Meera Joshi",
    email: "meera@example.com",
    phone: "+91 85432 10987",
    serviceCategory: "Annual Maintenance Contracts",
    details: "We have 100 computers and 5 servers that need regular maintenance. Looking for a comprehensive AMC plan.",
    budget: "2,00,000 - 5,00,000",
    status: "reviewed",
    createdAt: "2026-02-10T16:45:00Z",
  },
  {
    id: "3",
    name: "Rohit Verma",
    email: "rohit@example.com",
    phone: "+91 74321 09876",
    serviceCategory: "Web Development",
    details: "Need a company website with about 10 pages, blog section, and contact form. Should be mobile responsive.",
    budget: "50,000 - 1,00,000",
    status: "approved",
    createdAt: "2026-02-09T11:30:00Z",
  },
]

// --- FAQ ---
export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "What services does HS Techware offer?",
    answer: "We offer a comprehensive range of IT and computer services including web development, e-commerce solutions, WordPress development, custom software development, laptop and PC repair, screen replacement, computer accessories sales, and annual maintenance contracts.",
    category: "General",
  },
  {
    id: "2",
    question: "How long does it take to build a website?",
    answer: "The timeline depends on the complexity of the project. A simple informational website typically takes 2-4 weeks, while complex web applications or e-commerce platforms may take 6-12 weeks. We provide detailed timelines during the project planning phase.",
    category: "IT Services",
  },
  {
    id: "3",
    question: "Do you provide post-launch support for websites?",
    answer: "Yes, we offer comprehensive post-launch support including bug fixes, feature updates, security patches, and performance optimization. We have flexible support plans ranging from monthly retainers to per-incident support.",
    category: "IT Services",
  },
  {
    id: "4",
    question: "What brands of laptops do you repair?",
    answer: "We repair all major laptop brands including Dell, HP, Lenovo, Asus, Acer, Apple MacBook, MSI, Samsung, and more. Our technicians are experienced with both Windows and macOS systems.",
    category: "Hardware",
  },
  {
    id: "5",
    question: "How quickly can you repair my laptop?",
    answer: "Most common repairs like screen replacement, battery replacement, and software issues are completed within 1-2 business days. Complex repairs like motherboard issues may take 3-5 business days. We offer express service for urgent repairs.",
    category: "Hardware",
  },
  {
    id: "6",
    question: "Do you offer on-site support?",
    answer: "Yes, we provide on-site support for businesses, especially under our AMC plans. For individual customers, we primarily operate from our service center but can arrange on-site visits for special cases.",
    category: "Hardware",
  },
  {
    id: "7",
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including UPI, net banking, credit/debit cards, and bank transfers. For large projects, we offer flexible payment plans with milestone-based payments.",
    category: "General",
  },
  {
    id: "8",
    question: "Where is HS Techware located?",
    answer: "We are located in Vadodara (Baroda), Gujarat, India. Our office is easily accessible and we serve clients both locally and remotely across India and internationally.",
    category: "General",
  },
]

// --- CRUD helpers ---
export function getPortfolioItems() { return [...portfolioItems] }
export function getPortfolioItem(id: string) { return portfolioItems.find(i => i.id === id) }
export function addPortfolioItem(item: Omit<PortfolioItem, "id">) {
  const newItem = { ...item, id: String(Date.now()) }
  portfolioItems.push(newItem)
  return newItem
}
export function updatePortfolioItem(id: string, data: Partial<PortfolioItem>) {
  const idx = portfolioItems.findIndex(i => i.id === id)
  if (idx === -1) return null
  portfolioItems[idx] = { ...portfolioItems[idx], ...data }
  return portfolioItems[idx]
}
export function deletePortfolioItem(id: string) {
  const idx = portfolioItems.findIndex(i => i.id === id)
  if (idx === -1) return false
  portfolioItems.splice(idx, 1)
  return true
}

export function getTestimonials() { return [...testimonials] }
export function getTestimonial(id: string) { return testimonials.find(t => t.id === id) }
export function addTestimonial(item: Omit<Testimonial, "id">) {
  const newItem = { ...item, id: String(Date.now()) }
  testimonials.push(newItem)
  return newItem
}
export function deleteTestimonial(id: string) {
  const idx = testimonials.findIndex(t => t.id === id)
  if (idx === -1) return false
  testimonials.splice(idx, 1)
  return true
}

export function getContactRequests() { return [...contactRequests] }
export function addContactRequest(item: Omit<ContactRequest, "id" | "createdAt">) {
  const newItem = { ...item, id: String(Date.now()), createdAt: new Date().toISOString() }
  contactRequests.push(newItem)
  console.log("Added contact request:", newItem)
  console.log("Contact requests count:", contactRequests.length)
  return newItem
}
export function deleteContactRequest(id: string) {
  const idx = contactRequests.findIndex(c => c.id === id)
  if (idx === -1) return false
  contactRequests.splice(idx, 1)
  return true
}

export function getQuoteRequests() { return [...quoteRequests] }
export function addQuoteRequest(item: Omit<QuoteRequest, "id" | "createdAt" | "status">) {
  const newItem = { ...item, id: String(Date.now()), status: "pending" as const, createdAt: new Date().toISOString() }
  quoteRequests.push(newItem)
  return newItem
}
export function updateQuoteStatus(id: string, status: QuoteRequest["status"]) {
  const idx = quoteRequests.findIndex(q => q.id === id)
  if (idx === -1) return null
  quoteRequests[idx] = { ...quoteRequests[idx], status }
  return quoteRequests[idx]
}
export function deleteQuoteRequest(id: string) {
  const idx = quoteRequests.findIndex(q => q.id === id)
  if (idx === -1) return false
  quoteRequests.splice(idx, 1)
  return true
}
