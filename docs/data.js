// CIS Controls Data
const controlsData = [
  {
    id: 1,
    name_en: "Inventory and Control of Enterprise Assets",
    name_ar: "جرد ومراقبة أصول المؤسسة",
    description_en: "Actively manage all enterprise assets connected to the infrastructure to prevent unauthorized devices, track devices to enable protection, maintain an asset inventory with detailed information.",
    description_ar: "إدارة جميع أصول المؤسسة المتصلة بالبنية التحتية بنشاط لمنع الأجهزة غير المصرح بها، وتتبع الأجهزة لتفعيل الحماية، والحفاظ على جرد الأصول بمعلومات مفصلة.",
    objective_en: "Ensure complete visibility and control of all enterprise assets in the IT environment",
    objective_ar: "ضمان الرؤية الكاملة والتحكم في جميع أصول المؤسسة في بيئة تكنولوجيا المعلومات",
    safeguards_count: 5,
    security_functions: ["Identify", "Protect", "Detect"],
    asset_types: ["Devices"],
    implementation_groups: {
      IG1: [1, 2, 3],
      IG2: [1, 2, 3, 4, 5],
      IG3: [1, 2, 3, 4, 5]
    },
    safeguards: [
      {
        number: 1.1,
        title_en: "Establish and maintain a detailed enterprise asset inventory",
        title_ar: "إنشاء والحفاظ على جرد أصول مفصل للمؤسسة",
        description_en: "Maintain a documented, comprehensive list of all enterprise assets including hardware, software, virtual and cloud assets.",
        description_ar: "الحفاظ على قائمة موثقة وشاملة لجميع أصول المؤسسة بما في ذلك الأجهزة والبرامج والأصول الافتراضية والسحابية."
      },
      {
        number: 1.2,
        title_en: "Address unauthorized assets",
        title_ar: "التعامل مع الأصول غير المصرح بها",
        description_en: "Implement processes and technical controls to identify unauthorized assets.",
        description_ar: "تنفيذ عمليات والتحكم التقني لتحديد الأصول غير المصرح بها."
      },
      {
        number: 1.3,
        title_en: "Use an active discovery tool",
        title_ar: "استخدام أداة الاكتشاف النشطة",
        description_en: "Utilize active asset discovery tools to continuously identify connected network assets.",
        description_ar: "استخدام أدوات اكتشاف الأصول النشطة لتحديد أصول الشبكة المتصلة بشكل مستمر."
      }
    ]
  },
  {
    id: 2,
    name_en: "Inventory and Control of Software Assets",
    name_ar: "جرد ومراقبة أصول البرامج",
    description_en: "Actively manage all software installed on enterprise assets to ensure only authorized software is installed and can execute.",
    description_ar: "إدارة جميع البرامج المثبتة على أصول المؤسسة بنشاط للتأكد من تثبيت البرامج المصرح بها فقط وتنفيذها.",
    objective_en: "Maintain strict control over software deployed across the organization",
    objective_ar: "الحفاظ على التحكم الصارم في البرامج المنتشرة عبر المؤسسة",
    safeguards_count: 5,
    security_functions: ["Identify", "Protect", "Detect"],
    asset_types: ["Applications"],
    implementation_groups: {
      IG1: [1, 2],
      IG2: [1, 2, 3, 4],
      IG3: [1, 2, 3, 4, 5]
    },
    safeguards: []
  },
  {
    id: 3,
    name_en: "Data Protection",
    name_ar: "حماية البيانات",
    description_en: "Develop processes and technical controls to identify, classify, securely handle, retain, and dispose of data.",
    description_ar: "تطوير العمليات والتحكم التقني لتحديد وتصنيف البيانات والتعامل الآمن معها والاحتفاظ بها والتخلص منها.",
    objective_en: "Protect sensitive data throughout its lifecycle",
    objective_ar: "حماية البيانات الحساسة طوال دورة حياتها",
    safeguards_count: 14,
    security_functions: ["Identify", "Protect"],
    asset_types: ["Data", "Devices"],
    implementation_groups: {
      IG1: [1, 2, 3, 4, 5, 6],
      IG2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      IG3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    },
    safeguards: []
  },
  {
    id: 4,
    name_en: "Secure Configuration of Enterprise Assets and Software",
    name_ar: "التكوين الآمن لأصول المؤسسة والبرامج",
    description_en: "Establish and maintain secure configuration standards for all enterprise assets and software.",
    description_ar: "إنشاء والحفاظ على معايير التكوين الآمن لجميع أصول المؤسسة والبرامج.",
    objective_en: "Prevent unauthorized system changes and maintain secure baselines",
    objective_ar: "منع التغييرات غير المصرح بها على النظام والحفاظ على الخطوط الأساسية الآمنة",
    safeguards_count: 6,
    security_functions: ["Protect"],
    asset_types: ["Devices", "Applications", "Network"],
    implementation_groups: {
      IG1: [1, 2],
      IG2: [1, 2, 3, 4, 5],
      IG3: [1, 2, 3, 4, 5, 6]
    },
    safeguards: []
  },
  {
    id: 5,
    name_en: "Account Management",
    name_ar: "إدارة الحسابات",
    description_en: "Use processes and tools to create, assign, manage, and revoke access credentials and privileges.",
    description_ar: "استخدام العمليات والأدوات لإنشاء وتعيين وإدارة وإلغاء بيانات اعتماد الوصول والامتيازات.",
    objective_en: "Ensure proper lifecycle management of all accounts",
    objective_ar: "ضمان إدارة دورة حياة صحيحة لجميع الحسابات",
    safeguards_count: 6,
    security_functions: ["Identify", "Protect"],
    asset_types: ["Users"],
    implementation_groups: {
      IG1: [1, 2, 3, 4],
      IG2: [1, 2, 3, 4, 5, 6],
      IG3: [1, 2, 3, 4, 5, 6]
    },
    safeguards: []
  },
  {
    id: 6,
    name_en: "Access Control Management",
    name_ar: "إدارة التحكم بالوصول",
    description_en: "Develop and implement a formalized access control methodology to ensure only authorized users can access enterprise assets.",
    description_ar: "تطوير وتنفيذ منهجية التحكم بالوصول الرسمية لضمان أن يتمكن فقط المستخدمون المصرح بهم من الوصول إلى أصول المؤسسة.",
    objective_en: "Implement least privilege and role-based access control",
    objective_ar: "تنفيذ امتيازات الحد الأدنى والتحكم بالوصول القائم على الأدوار",
    safeguards_count: 8,
    security_functions: ["Protect"],
    asset_types: ["Users", "Data", "Applications"],
    implementation_groups: {
      IG1: [1, 2, 3],
      IG2: [1, 2, 3, 4, 5, 6, 7],
      IG3: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    safeguards: []
  },
  {
    id: 7,
    name_en: "Continuous Vulnerability Management",
    name_ar: "إدارة الثغرات الأمنية المستمرة",
    description_en: "Develop a plan to continuously assess and track vulnerabilities on all enterprise assets.",
    description_ar: "وضع خطة لتقييم وتتبع الثغرات الأمنية بشكل مستمر على جميع أصول المؤسسة.",
    objective_en: "Minimize attack surface through proactive vulnerability management",
    objective_ar: "تقليل سطح الهجوم من خلال إدارة استباقية للثغرات الأمنية",
    safeguards_count: 7,
    security_functions: ["Identify", "Detect"],
    asset_types: ["Devices", "Applications", "Network"],
    implementation_groups: {
      IG1: [1, 2, 3],
      IG2: [1, 2, 3, 4, 5, 6],
      IG3: [1, 2, 3, 4, 5, 6, 7]
    },
    safeguards: []
  },
  {
    id: 8,
    name_en: "Audit Log Management",
    name_ar: "إدارة سجلات التدقيق",
    description_en: "Collect, alert, review, and retain audit logs of events that could help detect, understand, or recover from an attack.",
    description_ar: "جمع وتنبيه ومراجعة والاحتفاظ بسجلات التدقيق للأحداث التي قد تساعد في الكشف عن الهجوم أو فهمه أو التعافي منه.",
    objective_en: "Enable detection and forensic investigation of security incidents",
    objective_ar: "تفعيل الكشف والتحقيق الجنائي في حوادث الأمان",
    safeguards_count: 12,
    security_functions: ["Protect", "Detect", "Respond"],
    asset_types: ["Network", "Devices", "Data"],
    implementation_groups: {
      IG1: [1, 2, 3, 4, 5],
      IG2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      IG3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    safeguards: []
  },
  {
    id: 9,
    name_en: "Email and Web Browser Protections",
    name_ar: "حماية البريد الإلكتروني والمتصفحات",
    description_en: "Improve protections and detections of threats from email and web vectors, primary mechanisms for phishing and malware delivery.",
    description_ar: "تحسين الحماية والكشف عن التهديدات من البريد الإلكتروني وناقلات الويب.",
    objective_en: "Prevent email and web-based attacks",
    objective_ar: "منع الهجمات القائمة على البريد الإلكتروني والويب",
    safeguards_count: 7,
    security_functions: ["Protect", "Detect"],
    asset_types: ["Applications", "Network", "Devices"],
    implementation_groups: {
      IG1: [1, 2, 3],
      IG2: [1, 2, 3, 4, 5],
      IG3: [1, 2, 3, 4, 5, 6, 7]
    },
    safeguards: []
  },
  {
    id: 10,
    name_en: "Malware Defenses",
    name_ar: "الدفاعات ضد البرامج الضارة",
    description_en: "Prevent, detect, and remediate malware infections on enterprise assets.",
    description_ar: "منع والكشف عن وإصلاح عدوى البرامج الضارة على أصول المؤسسة.",
    objective_en: "Reduce malware infections and ransomware attacks",
    objective_ar: "تقليل عدوى البرامج الضارة وهجمات الفدية",
    safeguards_count: 8,
    security_functions: ["Protect", "Detect"],
    asset_types: ["Devices", "Applications"],
    implementation_groups: {
      IG1: [1, 2],
      IG2: [1, 2, 3, 4, 5],
      IG3: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    safeguards: []
  },
  {
    id: 11,
    name_en: "Data Recovery",
    name_ar: "استعادة البيانات",
    description_en: "Establish and maintain data recovery practices capable of restoring key assets in a resilient manner.",
    description_ar: "إنشاء والحفاظ على ممارسات استعادة البيانات القادرة على استعادة الأصول الرئيسية بطريقة مرنة.",
    objective_en: "Ensure business continuity and rapid recovery from incidents",
    objective_ar: "ضمان استمرارية الأعمال والتعافي السريع من الحوادث",
    safeguards_count: 4,
    security_functions: ["Protect", "Recover"],
    asset_types: ["Data", "Devices"],
    implementation_groups: {
      IG1: [1, 2, 3],
      IG2: [1, 2, 3, 4],
      IG3: [1, 2, 3, 4]
    },
    safeguards: []
  },
  {
    id: 12,
    name_en: "Network Infrastructure Management",
    name_ar: "إدارة البنية التحتية للشبكة",
    description_en: "Establish and maintain secure network architecture to protect enterprise assets.",
    description_ar: "إنشاء والحفاظ على معمارية شبكة آمنة لحماية أصول المؤسسة.",
    objective_en: "Harden network infrastructure and minimize exposure",
    objective_ar: "تقوية البنية التحتية للشبكة وتقليل التعرض",
    safeguards_count: 8,
    security_functions: ["Protect"],
    asset_types: ["Network", "Devices"],
    implementation_groups: {
      IG1: [1],
      IG2: [1, 2, 3, 4, 5, 6, 7],
      IG3: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    safeguards: []
  },
  {
    id: 13,
    name_en: "Network Monitoring and Defense",
    name_ar: "مراقبة الشبكة والدفاع",
    description_en: "Establish and maintain the capability to detect and contain anomalous network behavior.",
    description_ar: "إنشاء والحفاظ على القدرة على الكشف واحتواء السلوك الشبكي الشاذ.",
    objective_en: "Detect and respond to network-based attacks",
    objective_ar: "الكشف والرد على الهجمات القائمة على الشبكة",
    safeguards_count: 11,
    security_functions: ["Detect", "Respond"],
    asset_types: ["Network", "Devices", "Data"],
    implementation_groups: {
      IG1: [1],
      IG2: [1, 2, 3, 4, 5, 6],
      IG3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    safeguards: []
  },
  {
    id: 14,
    name_en: "Security Awareness and Skills Training",
    name_ar: "توعية الأمان والتدريب على المهارات",
    description_en: "Establish and maintain a security awareness program to influence security behavior.",
    description_ar: "إنشاء والحفاظ على برنامج توعية الأمان للتأثير على السلوك الأمني.",
    objective_en: "Build security-conscious workforce",
    objective_ar: "بناء قوة عاملة واعية بالأمان",
    safeguards_count: 9,
    security_functions: ["Protect"],
    asset_types: ["Users"],
    implementation_groups: {
      IG1: [1, 2, 3, 4],
      IG2: [1, 2, 3, 4, 5, 6, 7],
      IG3: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    safeguards: []
  },
  {
    id: 15,
    name_en: "Service Provider Management",
    name_ar: "إدارة مقدمي الخدمات",
    description_en: "Establish processes to evaluate and manage the risks introduced by third-party service providers.",
    description_ar: "إنشاء العمليات لتقييم وإدارة المخاطر التي يقدمها مقدمو الخدمات من الجهات الخارجية.",
    objective_en: "Manage third-party risks and supply chain security",
    objective_ar: "إدارة مخاطر الجهات الخارجية وأمان سلسلة التوريد",
    safeguards_count: 7,
    security_functions: ["Identify", "Protect", "Detect"],
    asset_types: ["Data", "Applications", "Network"],
    implementation_groups: {
      IG1: [1],
      IG2: [1, 2, 3, 4, 5],
      IG3: [1, 2, 3, 4, 5, 6, 7]
    },
    safeguards: []
  },
  {
    id: 16,
    name_en: "Application Software Security",
    name_ar: "أمان برامج التطبيقات",
    description_en: "Establish processes to manage security in application development and deployment.",
    description_ar: "إنشاء عمليات لإدارة الأمان في تطوير ونشر التطبيقات.",
    objective_en: "Reduce application vulnerabilities and secure the development lifecycle",
    objective_ar: "تقليل ثغرات التطبيقات وتأمين دورة حياة التطوير",
    safeguards_count: 7,
    security_functions: ["Identify", "Protect"],
    asset_types: ["Applications", "Data"],
    implementation_groups: {
      IG1: [],
      IG2: [1, 2, 3],
      IG3: [1, 2, 3, 4, 5, 6, 7]
    },
    safeguards: []
  },
  {
    id: 17,
    name_en: "Incident Response Management",
    name_ar: "إدارة الاستجابة للحوادث",
    description_en: "Establish and maintain a documented incident response plan and testing procedures.",
    description_ar: "إنشاء والحفاظ على خطة استجابة موثقة للحوادث وإجراءات الاختبار.",
    objective_en: "Minimize damage and reduce recovery time",
    objective_ar: "تقليل الأضرار وتقليل وقت التعافي",
    safeguards_count: 8,
    security_functions: ["Respond", "Recover"],
    asset_types: ["Applications", "Data", "Network"],
    implementation_groups: {
      IG1: [1, 2, 3],
      IG2: [1, 2, 3, 4, 5, 6],
      IG3: [1, 2, 3, 4, 5, 6, 7, 8]
    },
    safeguards: []
  },
  {
    id: 18,
    name_en: "Penetration Testing",
    name_ar: "اختبار الاختراق",
    description_en: "Conduct penetration tests and simulations to validate the effectiveness of security controls.",
    description_ar: "إجراء اختبارات الاختراق والمحاكاة للتحقق من فعالية الضوابط الأمنية.",
    objective_en: "Identify and remediate security weaknesses",
    objective_ar: "تحديد وإصلاح نقاط الضعف الأمنية",
    safeguards_count: 3,
    security_functions: ["Detect"],
    asset_types: ["Devices", "Applications", "Network"],
    implementation_groups: {
      IG1: [],
      IG2: [1, 2],
      IG3: [1, 2, 3]
    },
    safeguards: []
  }
];

const nistMappings = [
  { control_id: 1, nist_function: "Identify", nist_category_code: "ID.AM", nist_category_name_en: "Asset Management", nist_category_name_ar: "إدارة الأصول" },
  { control_id: 2, nist_function: "Identify", nist_category_code: "ID.AM", nist_category_name_en: "Asset Management", nist_category_name_ar: "إدارة الأصول" },
  { control_id: 3, nist_function: "Protect", nist_category_code: "PR.DS", nist_category_name_en: "Data Security", nist_category_name_ar: "أمان البيانات" },
  { control_id: 4, nist_function: "Protect", nist_category_code: "PR.PS", nist_category_name_en: "Platform Security", nist_category_name_ar: "أمان المنصة" },
  { control_id: 5, nist_function: "Protect", nist_category_code: "PR.AC", nist_category_name_en: "Access Control", nist_category_name_ar: "التحكم بالوصول" },
  { control_id: 6, nist_function: "Protect", nist_category_code: "PR.AC", nist_category_name_en: "Access Control", nist_category_name_ar: "التحكم بالوصول" },
  { control_id: 7, nist_function: "Identify", nist_category_code: "ID.RA", nist_category_name_en: "Risk Assessment", nist_category_name_ar: "تقييم المخاطر" },
  { control_id: 8, nist_function: "Detect", nist_category_code: "DE.AE", nist_category_name_en: "Anomalies and Events", nist_category_name_ar: "الشذوذ والأحداث" },
  { control_id: 9, nist_function: "Protect", nist_category_code: "PR.PT", nist_category_name_en: "Protective Technology", nist_category_name_ar: "التكنولوجيا الوقائية" },
  { control_id: 10, nist_function: "Protect", nist_category_code: "PR.PT", nist_category_name_en: "Protective Technology", nist_category_name_ar: "التكنولوجيا الوقائية" },
  { control_id: 11, nist_function: "Recover", nist_category_code: "RC.RP", nist_category_name_en: "Recovery Planning", nist_category_name_ar: "تخطيط التعافي" },
  { control_id: 12, nist_function: "Protect", nist_category_code: "PR.PT", nist_category_name_en: "Protective Technology", nist_category_name_ar: "التكنولوجيا الوقائية" },
  { control_id: 13, nist_function: "Detect", nist_category_code: "DE.AE", nist_category_name_en: "Anomalies and Events", nist_category_name_ar: "الشذوذ والأحداث" },
  { control_id: 14, nist_function: "Protect", nist_category_code: "PR.AT", nist_category_name_en: "Awareness and Training", nist_category_name_ar: "الوعي والتدريب" },
  { control_id: 15, nist_function: "Identify", nist_category_code: "ID.RM", nist_category_name_en: "Risk Management Strategy", nist_category_name_ar: "استراتيجية إدارة المخاطر" },
  { control_id: 16, nist_function: "Protect", nist_category_code: "PR.PS", nist_category_name_en: "Platform Security", nist_category_name_ar: "أمان المنصة" },
  { control_id: 17, nist_function: "Respond", nist_category_code: "RS.CO", nist_category_name_en: "Communications", nist_category_name_ar: "الاتصالات" },
  { control_id: 18, nist_function: "Detect", nist_category_code: "DE.AE", nist_category_name_en: "Anomalies and Events", nist_category_name_ar: "الشذوذ والأحداث" }
];

const isoMappings = [
  { control_id: 1, iso_section: "A.8", iso_title_en: "Asset Management", iso_title_ar: "إدارة الأصول", iso_subsection: "A.8.1" },
  { control_id: 2, iso_section: "A.8", iso_title_en: "Asset Management", iso_title_ar: "إدارة الأصول", iso_subsection: "A.8.1" },
  { control_id: 3, iso_section: "A.8.2", iso_title_en: "Information and Other Assets", iso_title_ar: "المعلومات والأصول الأخرى", iso_subsection: "A.8.2.1" },
  { control_id: 4, iso_section: "A.5", iso_title_en: "Organizational Controls", iso_title_ar: "الضوابط التنظيمية", iso_subsection: "A.5.1" },
  { control_id: 5, iso_section: "A.9", iso_title_en: "Access Control", iso_title_ar: "التحكم بالوصول", iso_subsection: "A.9.1" },
  { control_id: 6, iso_section: "A.9", iso_title_en: "Access Control", iso_title_ar: "التحكم بالوصول", iso_subsection: "A.9.1" },
  { control_id: 7, iso_section: "A.12", iso_title_en: "Operations Security", iso_title_ar: "أمان العمليات", iso_subsection: "A.12.6" },
  { control_id: 8, iso_section: "A.12", iso_title_en: "Operations Security", iso_title_ar: "أمان العمليات", iso_subsection: "A.12.4" },
  { control_id: 9, iso_section: "A.13", iso_title_en: "Communications Security", iso_title_ar: "أمان الاتصالات", iso_subsection: "A.13.1" },
  { control_id: 10, iso_section: "A.12", iso_title_en: "Operations Security", iso_title_ar: "أمان العمليات", iso_subsection: "A.12.2" },
  { control_id: 11, iso_section: "A.12", iso_title_en: "Operations Security", iso_title_ar: "أمان العمليات", iso_subsection: "A.12.3" },
  { control_id: 12, iso_section: "A.13", iso_title_en: "Communications Security", iso_title_ar: "أمان الاتصالات", iso_subsection: "A.13.1" },
  { control_id: 13, iso_section: "A.13", iso_title_en: "Communications Security", iso_title_ar: "أمان الاتصالات", iso_subsection: "A.13.1" },
  { control_id: 14, iso_section: "A.6", iso_title_en: "People", iso_title_ar: "الأشخاص", iso_subsection: "A.6.2" },
  { control_id: 15, iso_section: "A.15", iso_title_en: "Supplier Relationships", iso_title_ar: "علاقات الموردين", iso_subsection: "A.15.1" },
  { control_id: 16, iso_section: "A.14", iso_title_en: "System Acquisition, Development and Maintenance", iso_title_ar: "الحصول على النظام والتطوير والصيانة", iso_subsection: "A.14.1" },
  { control_id: 17, iso_section: "A.16", iso_title_en: "Information Security Incident Management", iso_title_ar: "إدارة حوادث أمان المعلومات", iso_subsection: "A.16.1" },
  { control_id: 18, iso_section: "A.14", iso_title_en: "System Acquisition, Development and Maintenance", iso_title_ar: "الحصول على النظام والتطوير والصيانة", iso_subsection: "A.14.2" }
];

const assessmentQuestions = [
  {
    id: 1,
    category_en: "Asset Management",
    category_ar: "إدارة الأصول",
    control_ids: [1, 2],
    question_en: "Do you maintain a comprehensive inventory of all IT assets (hardware and software)?",
    question_ar: "هل تحافظ على جرد شامل لجميع أصول تكنولوجيا المعلومات (الأجهزة والبرامج)؟",
    options: [
      { value: 1, label_en: "No inventory exists", label_ar: "لا يوجد جرد" },
      { value: 2, label_en: "Partial inventory, manual tracking", label_ar: "جرد جزئي، تتبع يدوي" },
      { value: 3, label_en: "Complete inventory, some automated processes", label_ar: "جرد كامل، بعض العمليات الآلية" },
      { value: 4, label_en: "Comprehensive inventory, mostly automated", label_ar: "جرد شامل، معظمه مؤتمت" },
      { value: 5, label_en: "Fully automated, continuously monitored inventory", label_ar: "جرد مؤتمت بالكامل، مراقب بشكل مستمر" }
    ]
  },
  {
    id: 2,
    category_en: "Data Protection",
    category_ar: "حماية البيانات",
    control_ids: [3],
    question_en: "Do you have a data classification and protection program?",
    question_ar: "هل لديك برنامج تصنيف وحماية البيانات؟",
    options: [
      { value: 1, label_en: "No data protection program", label_ar: "لا يوجد برنامج حماية البيانات" },
      { value: 2, label_en: "Basic data handling guidelines", label_ar: "إرشادات أساسية للتعامل مع البيانات" },
      { value: 3, label_en: "Data classification in place, some encryption", label_ar: "تصنيف البيانات في مكانه، بعض التشفير" },
      { value: 4, label_en: "Comprehensive data classification, encryption for sensitive data", label_ar: "تصنيف شامل للبيانات، تشفير للبيانات الحساسة" },
      { value: 5, label_en: "Advanced data protection with encryption, DLP, and monitoring", label_ar: "حماية بيانات متقدمة مع التشفير وDLP والمراقبة" }
    ]
  },
  {
    id: 3,
    category_en: "Secure Configuration",
    category_ar: "التكوين الآمن",
    control_ids: [4],
    question_en: "Do you enforce secure configuration standards across systems?",
    question_ar: "هل تفرض معايير التكوين الآمن عبر الأنظمة؟",
    options: [
      { value: 1, label_en: "No standardized configuration", label_ar: "لا يوجد تكوين موحد" },
      { value: 2, label_en: "Informal configuration guidelines", label_ar: "إرشادات تكوين غير رسمية" },
      { value: 3, label_en: "Standard configurations documented, partial deployment", label_ar: "تكوينات موحدة موثقة، نشر جزئي" },
      { value: 4, label_en: "Standard configurations enforced on most systems", label_ar: "فرض التكوينات الموحدة على معظم الأنظمة" },
      { value: 5, label_en: "Fully automated, continuously monitored configuration compliance", label_ar: "امتثال التكوين مؤتمت بالكامل ومراقب بشكل مستمر" }
    ]
  }
];

const industries = [
  {
    name_en: "Financial Services",
    name_ar: "الخدمات المالية",
    examples_en: [
      "Banks implement CIS Controls for customer data protection and fraud prevention",
      "Implement strong multi-factor authentication for all user access",
      "Maintain comprehensive audit logs for compliance with financial regulations",
      "Establish incident response procedures for financial fraud"
    ],
    examples_ar: [
      "تنفذ البنوك ضوابط CIS لحماية بيانات العملاء والوقاية من الاحتيال",
      "تنفيذ مصادقة قوية متعددة العوامل لجميع وصول المستخدمين",
      "الحفاظ على سجلات تدقيق شاملة للامتثال للوائح المالية",
      "إنشاء إجراءات الاستجابة للحوادث للاحتيال المالي"
    ]
  },
  {
    name_en: "Healthcare",
    name_ar: "الرعاية الصحية",
    examples_en: [
      "Hospitals use CIS Controls to protect patient data under HIPAA",
      "Implement encryption for patient information at rest and in transit",
      "Conduct regular vulnerability scans on medical devices",
      "Establish access controls for medical records"
    ],
    examples_ar: [
      "تستخدم المستشفيات ضوابط CIS لحماية بيانات المرضى بموجب HIPAA",
      "تنفيذ التشفير لمعلومات المريض في الراحة والنقل",
      "إجراء فحوصات ثغرات منتظمة على الأجهزة الطبية",
      "إنشاء ضوابط الوصول للسجلات الطبية"
    ]
  },
  {
    name_en: "Technology/SaaS",
    name_ar: "التكنولوجيا / SaaS",
    examples_en: [
      "Tech companies implement CIS Controls across cloud infrastructure",
      "Implement secure application development practices",
      "Maintain continuous vulnerability management",
      "Establish third-party risk management for vendors"
    ],
    examples_ar: [
      "تنفذ شركات التكنولوجيا ضوابط CIS عبر البنية التحتية للسحابة",
      "تنفيذ ممارسات تطوير التطبيقات الآمنة",
      "الحفاظ على إدارة الثغرات الأمنية المستمرة",
      "إنشاء إدارة المخاطر من الجهات الخارجية للموردين"
    ]
  },
  {
    name_en: "Small Business",
    name_ar: "الأعمال الصغيرة",
    examples_en: [
      "Small businesses focus on IG1 controls for essential protection",
      "Implement basic asset inventory and software control",
      "Deploy endpoint protection and backup systems",
      "Conduct regular security awareness training for staff"
    ],
    examples_ar: [
      "تركز الأعمال الصغيرة على ضوابط IG1 للحماية الأساسية",
      "تنفيذ جرد الأصول الأساسي والتحكم في البرامج",
      "نشر الحماية من نقاط النهاية وأنظمة النسخ الاحتياطي",
      "إجراء تدريب منتظم على الوعي الأمني للموظفين"
    ]
  }
];