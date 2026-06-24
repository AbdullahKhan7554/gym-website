import {
  Dumbbell,
  Cog,
  HeartPulse,
  Weight,
  Users,
  Target,
  ClipboardCheck,
  CalendarRange,
  Apple,
  LineChart,
  Trophy,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Journey", href: "#journey" },
  { label: "Facilities", href: "#facilities" },
  { label: "Trainers", href: "#trainers" },
  { label: "Plans", href: "#plans" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const FEATURES = [
  {
    icon: Users,
    title: "Professional Trainers",
    desc: "Internationally certified coaches with decades of combined experience in strength, conditioning and rehab.",
  },
  {
    icon: Cog,
    title: "Modern Equipment",
    desc: "Commercial-grade Technogym and Hammer Strength machines, calibrated and maintained weekly.",
  },
  {
    icon: HeartPulse,
    title: "Cardio Zone",
    desc: "A dedicated floor of treadmills, assault bikes, rowers and stair climbers with private screens.",
  },
  {
    icon: Weight,
    title: "Weight Training Area",
    desc: "Olympic platforms, calibrated plates, dumbbells to 60kg and a full rack of power cages.",
  },
  {
    icon: HeartPulse,
    title: "Female Timings",
    desc: "Reserved women-only hours every morning and evening with female coaches on the floor.",
  },
  {
    icon: Target,
    title: "Personalized Coaching",
    desc: "1:1 programming built around your goals, schedule and biomechanics — reviewed every two weeks.",
  },
];

export const JOURNEY = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Assessment",
    desc: "A full-body movement screen, InBody composition scan and goal-setting session with a head coach.",
  },
  {
    step: "02",
    icon: CalendarRange,
    title: "Training Plan",
    desc: "A periodised program engineered for your level — progressively overloaded and tracked every session.",
  },
  {
    step: "03",
    icon: Apple,
    title: "Nutrition Guidance",
    desc: "Macro targets and local-friendly meal frameworks built for Lahori kitchens, not generic templates.",
  },
  {
    step: "04",
    icon: LineChart,
    title: "Progress Tracking",
    desc: "Monthly re-scans, strength benchmarks and photo reviews keep you accountable and adjusting.",
  },
  {
    step: "05",
    icon: Trophy,
    title: "Transformation",
    desc: "Sustainable results that compound — a stronger, leaner, more capable version of you.",
  },
];

export const FACILITIES = [
  {
    title: "The Strength Floor",
    desc: "1,200 sq ft of platforms, racks and calibrated iron.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Cardio Theatre",
    desc: "Skyline views, private screens, zero queues.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    title: "Recovery Lounge",
    desc: "Sauna, cold plunge and physio on site.",
    img: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    title: "Functional Arena",
    desc: "Turf track, rigs, sleds and battle ropes.",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-2",
  },
];

export const TRAINERS = [
  {
    name: "Bilal Ahmed",
    role: "Head Strength Coach",
    spec: "Powerlifting · Hypertrophy",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ayesha Khan",
    role: "Women's Performance Lead",
    spec: "Fat Loss · Pre/Post-Natal",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hamza Sheikh",
    role: "Conditioning Specialist",
    spec: "HIIT · Athletic Prep",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sara Malik",
    role: "Nutrition & Recovery Coach",
    spec: "Macros · Mobility",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
  },
];

export const PLANS = [
  {
    name: "Basic",
    price: "8,000",
    period: "/ month",
    tagline: "Everything you need to start strong.",
    featured: false,
    features: [
      "Full gym floor access",
      "Cardio & weight training zones",
      "Locker & shower facilities",
      "Group class entry (2 / week)",
      "Free initial assessment",
    ],
  },
  {
    name: "Elite",
    price: "15,000",
    period: "/ month",
    tagline: "For members serious about results.",
    featured: true,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Monthly InBody composition scan",
      "Personalized training program",
      "Nutrition guidance & macro plan",
      "Recovery lounge access",
    ],
  },
  {
    name: "Premium VIP",
    price: "30,000",
    period: "/ month",
    tagline: "Concierge-level performance coaching.",
    featured: false,
    features: [
      "Everything in Elite",
      "12 x 1:1 personal training / month",
      "Dedicated head coach",
      "Priority booking & private locker",
      "Physio & mobility sessions",
      "Quarterly performance review",
    ],
  },
];

export const GALLERY = [
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=900&q=80",
];

export const STATS = [
  { value: 12, suffix: "+", label: "Years in Lahore" },
  { value: 3500, suffix: "+", label: "Active Members" },
  { value: 28, suffix: "", label: "Certified Coaches" },
  { value: 95, suffix: "%", label: "Member Retention" },
];

export const FAQS = [
  {
    q: "Where is Iron Elite located?",
    a: "We're in the heart of Gulberg III, Lahore — on M.M. Alam Road with dedicated member parking and easy access from DHA, Model Town and Johar Town.",
  },
  {
    q: "Do you offer women-only timings?",
    a: "Yes. We reserve women-only hours every morning (7–10 AM) and evening (5–8 PM), staffed by our female coaching team, with private changing and recovery areas.",
  },
  {
    q: "Can I freeze or pause my membership?",
    a: "Elite and Premium VIP members can freeze their membership for up to 30 days per year at no cost — ideal for travel or recovery from injury.",
  },
  {
    q: "Do I need experience to join?",
    a: "Not at all. Every membership starts with a full assessment and a coach-built plan. Whether it's your first session or your thousandth, we meet you where you are.",
  },
  {
    q: "What's included in the free consultation?",
    a: "A facility tour, a movement and posture screen, a body-composition scan and a one-on-one goal session with a head coach — completely free, no commitment.",
  },
  {
    q: "Are personal training sessions extra?",
    a: "Group programming and floor coaching are included in Elite. Dedicated 1:1 personal training is bundled into Premium VIP, or can be added to any plan as a package.",
  },
];

export const CONTACT = {
  address: "M.M. Alam Road, Gulberg III, Lahore, Pakistan",
  phone: "+92 300 1234567",
  email: "hello@ironelite.pk",
  hours: "Mon–Sun · 6:00 AM – 11:00 PM",
};
