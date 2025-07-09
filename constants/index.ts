export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
    role: "Gyneacologist"
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
    role: "Pediatrist"
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
    role: "General Practioner"
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
    role: "Gyneacologist"
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
    role: "Oncologist"
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
    role: "Dentist"
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
    role: "Orthopedic Surgeon"
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
    role: "General Practioner"
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
    role: "Surgeon"
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};

export const steps = [
    {
      step: 1,
      title: 'Create Your Account',
      description: 'Sign up for a free ONMED Care account to access our platform and start booking appointments.',
    },
    {
      step: 2,
      title: 'Find a Doctor',
      description: 'Browse our network of experienced doctors and select the right specialist for your needs.',
    },
    {
      step: 3,
      title: 'Book Your Appointment',
      description: 'Schedule a convenient appointment time and connect with your doctor for quality care.',
    },
  ];

  export const stats = [
    {
      value: '5+',
      title: 'Years of Service',
      description: 'Delivering quality healthcare',
    },
    {
      value: '10K+',
      title: 'Appointments Booked',
      description: 'Connecting patients with care',
    },
    {
      value: '50+',
      title: 'Doctors on Platform',
      description: 'Trusted medical professionals',
    },
  ];

  export const faqs = [
  {
    question: "How do I book an appointment on ONMED Care?",
    answer: "You can book an appointment by creating an account, browsing our list of doctors, selecting your preferred specialist, and choosing a convenient time slot through our secure platform.",
  },
  {
    question: "What types of doctors are available on ONMED Care?",
    answer: "We offer access to a wide range of specialists, including gynecologists, pediatricians, general practitioners, oncologists, and more. Browse our doctor directory to find the right professional for your needs.",
  },
  {
    question: "How long does it take to get an appointment?",
    answer: "Appointment availability varies by doctor and specialty. Many doctors offer same-day or next-day appointments. You’ll see available time slots during the booking process.",
  },
  {
    question: "Can I cancel or reschedule an appointment?",
    answer: 'Yes, you can cancel or reschedule appointments through your ONMED Care account. Visit the patient portal or contact our support team at <a href="mailto:support@onmedcare.com" class="underline">support@onmedcare.com</a> for assistance.',
  },
  {
    question: "Is my personal information secure on ONMED Care?",
    answer: "Absolutely. We use advanced encryption and comply with healthcare privacy regulations to protect your personal and medical information.",
  },
  {
    question: "How can I contact ONMED Care support?",
    answer: 'Our support team is available Monday to Saturday, 9 AM to 6 PM. Call us at +1-800-555-1234 or email <a href="mailto:support@onmedcare.com" class="underline">support@onmedcare.com</a> for help.',
  },
  {
    question: "What are ONMED Care’s terms of service?",
    answer: 'You can review our terms of service on our <a href="/terms" class="underline">Terms of Service</a> page, which outlines our policies and user guidelines.',
  },
];
