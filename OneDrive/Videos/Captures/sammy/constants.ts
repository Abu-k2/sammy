import { Project, ProjectCategory } from './types';

export const PROJECTS: Project[] = [
  // Residential (4)
  {
    name: "OBANGE RESIDENT",
    location: "Kisumu",
    year: "2 years ago",
    workDone: "Building Construction and Structural Design",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "/images/OBANGE.jpg",
  },
  {
    name: "Modern Villa",
    location: "Nairobi",
    year: "6 months ago",
    workDone: "Building Construction",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "/images/morden.jpeg",
  },
  {
    name: "Riverside Family Home",
    location: "Nairobi",
    year: "1 year ago",
    workDone: "Full Construction & Interior Finishing",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "/images/riverside home.jpeg",
  },
  {
    name: "Hilltop Estate",
    location: "Kisumu",
    year: "Ongoing",
    workDone: "Structural Design and Supervision",
    category: ProjectCategory.RESIDENTIAL,
    imageUrl: "/images/unsplash_a8K-puaPyVk.jpg",
  },
  // Commercial (2)
  {
    name: "Lakeside Mall Facade",
    location: "Kisumu",
    year: "1 year ago",
    workDone: "Structural Design & Construction Supervision",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "/images/lakeside.jpg",
  },
  {
    name: "City Office Block",
    location: "Nairobi",
    year: "2 years ago",
    workDone: "Structural Design",
    category: ProjectCategory.COMMERCIAL,
    imageUrl: "/images/city.jpg",
  },
  // Renovating (1)
  {
    name: "Heritage Building Restoration",
    location: "Kisumu",
    year: "1.5 years ago",
    workDone: "Structural Renovation & Modernization",
    category: ProjectCategory.RENOVATING,
    imageUrl: "/images/renovating.jpg",
  },
];

export const GALLERY_IMAGES = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/OBANGE.jpg",
  "/images/morden.jpeg",
  "/images/riverside home.jpeg",
  "/images/lakeside.jpg",
  "/images/city.jpg",
];

export const SERVICES_LIST = [
  {
    title: "Building Construction",
    description: "High-quality construction services for residential and commercial buildings, from foundation to finish.",
  },
  {
    title: "Structural Design",
    description: "Creating robust and efficient structural plans for buildings of all scales, ensuring safety and compliance.",
  },
  {
    title: "Construction Supervision",
    description: "On-site management to ensure projects are executed according to design, on time, and within budget.",
  },
  {
    title: "Site Inspection",
    description: "Thorough site evaluations to assess progress, quality of work, and adherence to safety standards.",
  },
  {
    title: "Consultation",
    description: "Expert advice on material selection, construction methods, and regulatory compliance for your project.",
  },
  {
    title: "Cost Estimation",
    description: "Detailed and accurate cost analysis to help you plan your budget and make informed financial decisions.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Sammy's attention to detail and commitment to quality were exceptional. He transformed our vision into a reality, and we couldn't be happier with our new commercial space.",
    name: "Jane Doe",
    title: "Business Owner, Lakeside Mall",
    avatarUrl: "/images/about.jpg",
  },
  {
    quote: "Working with Sammy was a seamless experience. His structural designs are not only safe and robust but also innovative. He's a true professional who delivers on his promises.",
    name: "John Smith",
    title: "Homeowner, Modern Villa",
    avatarUrl: "/images/complex-aerial-view-city.jpg",
  },
  {
    quote: "From the initial consultation to the final inspection, Sammy provided invaluable guidance. His supervision ensured our community project was completed on time and to the highest standards.",
    name: "Alice Johnson",
    title: "Project Manager, Community Library",
    avatarUrl: "/images/IMG-20251024-WA0018.jpg",
  }
];