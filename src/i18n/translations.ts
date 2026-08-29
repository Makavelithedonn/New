export type Lang = 'ar' | 'en';

export const translations = {
  ar: {
    lang_switch: 'EN',
    dir: 'rtl' as const,

    // Header
    nav_home: 'الرئيسية',
    nav_products: 'منتجاتنا',
    nav_about: 'عن بي كير',
    nav_blog: 'المدونة',
    nav_contact: 'اتصل بنا',
    nav_login: 'تسجيل الدخول',

    // Hero
    hero_title: 'المنصة الأذكى لمقارنة عروض تأمين السيارات في السعودية',
    hero_subtitle:
      'المنصة الأذكى لمقارنة عروض أكثر من 20 شركة تأمين. احصل على أرخص تأمين سيارات مع إصدار فوري وربط مباشر بنجم.',
    hero_badge: 'مصرح من هيئة التأمين',

    // Tabs
    tab_vehicles: 'مركبات',
    tab_medical: 'طبي',
    tab_medical_errors: 'أخطاء طبية',
    tab_travel: 'سفر',
    tab_domestic: 'العمالة المنزلية',

    // Vehicle form
    insurance_purpose: 'الغرض من التأمين',
    new_insurance: 'تأمين جديد',
    ownership_transfer: 'نقل ملكية',
    vehicle_reg_type: 'نوع تسجيل المركبة',
    estmara: 'استمارة',
    customs_card: 'بطاقة جمركية',
    id_iqama: 'رقم الهوية / الإقامة',
    serial_number: 'الرقم التسلسلي',
    repair_type: 'نوع الإصلاح',
    repair_agency: 'وكالة',
    repair_garage: 'ورشة',
    agree_inquiry: 'أوافق على منح حق الاستعلام',
    show_offers: 'إظهار العروض',
    captcha_label: 'رمز التحقق',
    captcha_placeholder: 'أدخل الأرقام',
    insurance_authority: 'هيئة التأمين',
    insurance_companies: 'شركة تأمين',

    // Features
    features_title: 'طريقك آمن مع بي كير',
    features_subtitle: 'كل ما تحتاجه لتأمينك في منصة واحدة',
    feature_1_title: 'تأمينك في دقيقة',
    feature_1_desc: 'نقارن لك كل عروض الأسعار بشكل فوري من كل شركات التأمين المتنوعة',
    feature_2_title: 'فضل تأمينك',
    feature_2_desc: 'أنواع تأمين متعددة. تأمين ضد الغير تأمين شامل وشبه شامل وقيم متنوعة تحكم فيها',
    feature_3_title: 'أسعار أقل',
    feature_3_desc: 'عندنا فريق يراقب كل صغيرة وكبيرة في السوق ويضمن أن سعرك الأقل والمناسب لك وفق احتياجك',
    feature_4_title: 'جدول تأمينك',
    feature_4_desc: 'نرسل لك إشعارات تذكيرية كاملة لتحديد وتقدير تجديد تأمينك وقدر يحدد تاريخ بدايته',
    feature_5_title: 'هب ريح',
    feature_5_desc: 'ربط ونفذك في أسرع وقت مع نظام المرور ونجم',
    feature_6_title: 'خصومات تضبطك',
    feature_6_desc: 'خصومات لبعض القطاعات الحكومية وشبه الحكومية والخاصة',
    feature_7_title: 'منافع تحميك',
    feature_7_desc: 'خطط تأمين منوعة مع المرونة في تحديد المنافع الإضافية التي تناسبك',
    feature_8_title: 'مكان واحد',
    feature_8_desc: 'تدير كل تأمينك وثائقك الإلكترونية كاملة من مكان واحد وتحدثها في أي وقت',

    // Why BCare
    why_title: 'ليش بي كير خيارك الأول في التأمين؟',
    why_subtitle: 'نقدم لك تجربة تأمينية مختلفة تضعك في الصورة',
    why_1: 'منك وفيك',
    why_1_desc: 'منصة مصممة لك وحدك',
    why_2: 'عروض تفهمك',
    why_2_desc: 'عروض تناسب احتياجك بالضبط',
    why_3: 'سعر يرضيك',
    why_3_desc: 'أفضل الأسعار في السوق',
    why_4: 'إصدار سريع',
    why_4_desc: 'وثيقتك في دقائق',
    why_5: 'نقسط تأمينك',
    why_5_desc: 'تقسيط مريح بدون فوائد',
    why_6: 'تفزع لك',
    why_6_desc: 'فريق دعم جاهز دائماً',

    // Insurance companies
    companies_title: 'نقدم لك عروض من أكثر من 20 شركة تأمين',
    companies_subtitle: 'قارن بين أفضل عروض شركات التأمين في المملكة',

    // Stats
    stats_customers: 'عميل سعيد',
    stats_policies: 'وثيقة صادرة',
    stats_companies: 'شركة تأمين',
    stats_years: 'سنوات خبرة',

    // CTA
    cta_title: 'احصل على تأمينك الآن',
    cta_subtitle: 'قارن بين أفضل عروض شركات التأمين في دقائق',
    cta_button: 'ابدأ المقارنة',

    // Footer
    footer_about: 'عن بي كير',
    footer_about_desc: 'بي كير أول منصة لمقارنة وشراء جميع أنواع التأمين في المملكة العربية السعودية، مرخصة من هيئة التأمين.',
    footer_discounts: 'خصومات وريف',
    footer_privacy: 'سياسة الخصوصية',
    footer_terms: 'الشروط والأحكام',
    footer_jobs: 'وظائف',
    footer_products: 'منتجاتنا',
    footer_vehicle_ins: 'تأمين المركبات',
    footer_medical_ins: 'التأمين الطبي',
    footer_travel_ins: 'تأمين السفر',
    footer_medical_err: 'تأمين الأخطاء الطبية',
    footer_domestic_ins: 'تأمين العمالة المنزلية',
    footer_support: 'الدعم الفني',
    footer_blog: 'المدونة',
    footer_cancel: 'إلغاء وثيقتك',
    footer_ticket: 'رفع تذكرة',
    footer_print: 'اطبع وثيقتك',
    footer_links: 'روابط مهمة',
    footer_authority: 'هيئة التأمين',
    footer_complaint: 'طريقة رفع شكوى لهيئة التأمين',
    footer_rules: 'قواعد ولوائح هيئة التأمين',
    footer_vat: 'شهادة ضريبة القيمة المضافة',
    footer_copyright: 'جميع الحقوق محفوظة، شركة بي كير لوساطة التأمين',

    // Chat
    chat_title: 'كيف يمكننا مساعدتك؟',
    chat_subtitle: 'فريقنا جاهز لمساعدتك',
    chat_placeholder: 'اكتب رسالتك لخدمة العملاء',
    chat_start: 'ابدأ الدردشة',
    chat_name: 'الاسم بالكامل',
    chat_phone: 'رقم الجوال',
    chat_send: 'إرسال',
    chat_greeting: 'مرحباً! كيف يمكننا مساعدتك اليوم؟',

    // Months
    month_1: 'يناير',
    month_2: 'فبراير',
    month_3: 'مارس',
    month_4: 'أبريل',
    month_5: 'مايو',
    month_6: 'يونيو',
    month_7: 'يوليو',
    month_8: 'أغسطس',
    month_9: 'سبتمبر',
    month_10: 'أكتوبر',
    month_11: 'نوفمبر',
    month_12: 'ديسمبر',

    // Misc
    searching: 'جاري البحث...',
    required: 'هذا الحقل مطلوب',
    agree_required: 'يجب الموافقة على الشروط',
    captcha_error: 'رمز التحقق غير صحيح',
  },
  en: {
    lang_switch: 'ع',
    dir: 'ltr' as const,

    // Header
    nav_home: 'Home',
    nav_products: 'Products',
    nav_about: 'About BCare',
    nav_blog: 'Blog',
    nav_contact: 'Contact Us',
    nav_login: 'Login',

    // Hero
    hero_title: 'The Smartest Platform to Compare Car Insurance Offers in Saudi Arabia',
    hero_subtitle:
      'The smartest platform to compare offers from more than 20 insurance companies. Get the cheapest car insurance with instant issuance and direct Najm integration.',
    hero_badge: 'Authorized by Insurance Authority',

    // Tabs
    tab_vehicles: 'Vehicles',
    tab_medical: 'Medical',
    tab_medical_errors: 'Medical Errors',
    tab_travel: 'Travel',
    tab_domestic: 'Domestic Workers',

    // Vehicle form
    insurance_purpose: 'Insurance Purpose',
    new_insurance: 'New Insurance',
    ownership_transfer: 'Ownership Transfer',
    vehicle_reg_type: 'Vehicle Registration Type',
    estmara: 'Istimara',
    customs_card: 'Customs Card',
    id_iqama: 'National ID / Iqama',
    serial_number: 'Serial Number',
    repair_type: 'Repair Type',
    repair_agency: 'Agency',
    repair_garage: 'Garage',
    agree_inquiry: 'I agree to grant inquiry rights',
    show_offers: 'Show Offers',
    captcha_label: 'Verification Code',
    captcha_placeholder: 'Enter the numbers',
    insurance_authority: 'Insurance Authority',
    insurance_companies: 'Insurance Companies',

    // Features
    features_title: 'Your Journey is Safe with BCare',
    features_subtitle: 'Everything you need for your insurance in one platform',
    feature_1_title: 'Insurance in a Minute',
    feature_1_desc: 'We instantly compare all price offers from all insurance companies',
    feature_2_title: 'Best Insurance',
    feature_2_desc: 'Multiple insurance types. Third-party, comprehensive, semi-comprehensive with various values you control',
    feature_3_title: 'Lower Prices',
    feature_3_desc: 'Our team monitors every detail in the market to ensure you get the best price for your needs',
    feature_4_title: 'Insurance Schedule',
    feature_4_desc: 'We send you full reminder notifications to track and renew your insurance on time',
    feature_5_title: 'Easy & Fast',
    feature_5_desc: 'Connect and execute quickly with the traffic system and Najm',
    feature_6_title: 'Discounts for You',
    feature_6_desc: 'Discounts for government, semi-government and private sector employees',
    feature_7_title: 'Benefits that Protect',
    feature_7_desc: 'Diverse insurance plans with flexibility to choose additional benefits that suit you',
    feature_8_title: 'One Place',
    feature_8_desc: 'Manage all your insurance and electronic documents from one place, update anytime',

    // Why BCare
    why_title: 'Why BCare is Your First Choice in Insurance?',
    why_subtitle: 'We offer a different insurance experience that puts you first',
    why_1: 'Made for You',
    why_1_desc: 'A platform designed just for you',
    why_2: 'Offers You Understand',
    why_2_desc: 'Offers that fit your exact needs',
    why_3: 'Price You Love',
    why_3_desc: 'Best prices in the market',
    why_4: 'Fast Issuance',
    why_4_desc: 'Your policy in minutes',
    why_5: 'Installment Plans',
    why_5_desc: 'Easy installments with no interest',
    why_6: 'We Got Your Back',
    why_6_desc: 'Support team always ready',

    // Insurance companies
    companies_title: 'We Offer Quotes from More Than 20 Insurance Companies',
    companies_subtitle: 'Compare the best offers from insurance companies in the Kingdom',

    // Stats
    stats_customers: 'Happy Customers',
    stats_policies: 'Policies Issued',
    stats_companies: 'Insurance Companies',
    stats_years: 'Years of Experience',

    // CTA
    cta_title: 'Get Your Insurance Now',
    cta_subtitle: 'Compare the best insurance offers in minutes',
    cta_button: 'Start Comparing',

    // Footer
    footer_about: 'About BCare',
    footer_about_desc: 'BCare is the first platform for comparing and purchasing all types of insurance in Saudi Arabia, licensed by the Insurance Authority.',
    footer_discounts: 'Discounts & Rewards',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms & Conditions',
    footer_jobs: 'Careers',
    footer_products: 'Our Products',
    footer_vehicle_ins: 'Vehicle Insurance',
    footer_medical_ins: 'Medical Insurance',
    footer_travel_ins: 'Travel Insurance',
    footer_medical_err: 'Medical Errors Insurance',
    footer_domestic_ins: 'Domestic Workers Insurance',
    footer_support: 'Technical Support',
    footer_blog: 'Blog',
    footer_cancel: 'Cancel Your Policy',
    footer_ticket: 'Submit a Ticket',
    footer_print: 'Print Your Policy',
    footer_links: 'Important Links',
    footer_authority: 'Insurance Authority',
    footer_complaint: 'How to File a Complaint',
    footer_rules: 'Insurance Authority Rules',
    footer_vat: 'VAT Certificate',
    footer_copyright: 'All rights reserved, BCare Insurance Brokerage Company',

    // Chat
    chat_title: 'How can we help you?',
    chat_subtitle: 'Our team is ready to help you',
    chat_placeholder: 'Type your message to customer service',
    chat_start: 'Start Chat',
    chat_name: 'Full Name',
    chat_phone: 'Phone Number',
    chat_send: 'Send',
    chat_greeting: 'Hello! How can we help you today?',

    // Months
    month_1: 'January',
    month_2: 'February',
    month_3: 'March',
    month_4: 'April',
    month_5: 'May',
    month_6: 'June',
    month_7: 'July',
    month_8: 'August',
    month_9: 'September',
    month_10: 'October',
    month_11: 'November',
    month_12: 'December',

    // Misc
    searching: 'Searching...',
    required: 'This field is required',
    agree_required: 'You must agree to the terms',
    captcha_error: 'Verification code is incorrect',
  },
};

export type TranslationKey = keyof typeof translations.ar;
