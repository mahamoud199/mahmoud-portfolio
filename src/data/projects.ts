export type Project = {
  id: string
  title: string
  category: 'Networking' | 'Mobile' | 'Web'
  tags: string[]
  descriptionAr: string
  descriptionEn: string
  images: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    id: 'enterprise-network-ccna',
    title: 'Enterprise Network Design (CCNA)',
    category: 'Networking',
    tags: ['VLAN', 'VTP', 'Routing', 'ACL', 'Subnetting', 'Wireless'],
    descriptionAr:
      'مشروع تصميم وتنفيذ شبكة مؤسسية متعددة الأقسام باستخدام مفاهيم CCNA، يشمل تقسيم VLANs (IT/HR/Users)، إدارة VLAN عبر VTP، ربط LAN/WAN باستخدام Routing و Serial links، تطبيق ACL للتحكم في الوصول، دمج Wireless APs، وتخطيط IP احترافي باستخدام Subnetting و /30 links.',
    descriptionEn:
      'Designed and implemented a multi-department enterprise network using CCNA concepts: VLAN segmentation (IT/HR/Users), VTP-based VLAN management, LAN/WAN routing with serial links, ACL security controls, wireless integration, and structured IP addressing with subnetting and /30 links.',
    images: [
      { src: '/assets/projects/network-1.svg', alt: 'Network topology diagram' },
      { src: '/assets/projects/network-2.svg', alt: 'Routing, VLANs, and ACL configuration overview' }
    ]
  },
  {
    id: 'school-management-flutter',
    title: 'School Management System (Flutter)',
    category: 'Mobile',
    tags: ['Flutter', 'Admin Panel', 'CRUD', 'Reports', 'Charts', 'Dark Mode'],
    descriptionAr: 'تطبيق Flutter لإدارة مدرسة بواجهة عربية RTL: لوحة تحكم، إدارة الطلاب والمعلمين والفصول والمواد، إدارة النتائج والحضور، وتقارير ورسوم بيانية، مع دعم الوضع الداكن/الفاتح.',
    descriptionEn: 'Flutter Android app for school administration: dashboard; manage students, teachers, classes, subjects, grades, and attendance; reports & charts; Arabic RTL UI; dark/light theme.',
    images: [
      { src: '/assets/projects/school/collage-1.webp', alt: 'UI collage (dashboard, login, menu, reports)' },
      { src: '/assets/projects/school/collage-2.webp', alt: 'UI collage (management & settings screens)' },
      { src: '/assets/projects/school/login.webp', alt: 'Login screen (Arabic RTL)' },
      { src: '/assets/projects/school/dashboard.webp', alt: 'Admin dashboard' },
      { src: '/assets/projects/school/students.webp', alt: 'Students management' },
      { src: '/assets/projects/school/teachers.webp', alt: 'Teachers management' },
      { src: '/assets/projects/school/classes.webp', alt: 'Classes management' },
      { src: '/assets/projects/school/reports_overview.webp', alt: 'Reports & charts' },
      { src: '/assets/projects/school/menu.webp', alt: 'Side menu navigation' },
      { src: '/assets/projects/school/settings.webp', alt: 'Settings (theme & language)' },
    ]
  },
  {
    id: 'sudo-humanitarian-platform',
    title: 'SUDO Humanitarian Platform',
    category: 'Web',
    tags: ['PHP', 'MySQL', 'Tailwind CSS', 'HTML5', 'CSS', 'JavaScript'],
    descriptionAr:
      'منصة ويب عربية RTL لإدارة العمل الإنساني في السودان، تربط المتبرعين والمستفيدين والمتطوعين وإدارة المنظمة: حملات تبرع بنسب تمويل، تبرعات إلكترونية بإيصالات QR، طلبات مساعدة متعددة الخطوات، إدارة متطوعين، مخزون إغاثي مع تنبيهات نفاد، تقارير ميدانية، ومؤشرات متابعة وتقييم. مبنية بـ PHP خام وMySQL مع نظام صلاحيات مخصص وحماية CSRF، وواجهة Tailwind عربية، وبوابة دفع محاكاة للبنوك السودانية.',
    descriptionEn:
      'Arabic RTL web platform for managing humanitarian work in Sudan, connecting donors, beneficiaries, volunteers and organisation management: donation campaigns with funding progress, electronic donations with QR e-receipts, multi-step aid requests, volunteer management, relief inventory with low-stock alerts, field reports, and monitoring and evaluation indicators. Built with raw PHP and MySQL (prepared statements, custom Auth with roles and CSRF protection) and Tailwind CSS, with a mock payment gateway for Sudanese banks.',
    images: [
      { src: '/assets/projects/sudo/sudo-campaigns.jpg', alt: 'Active campaigns with funding progress' },
      { src: '/assets/projects/sudo/sudo-receipts.png', alt: 'Donor e-receipt with QR code' },
      { src: '/assets/projects/sudo/sudo-dashboard.png', alt: 'Admin dashboard' }
    ]
  },
]
