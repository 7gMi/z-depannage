import type { ArticleI18n } from './articles';

export type Lang = 'ar' | 'en' | 'ru';

export const ARTICLES_I18N: Record<string, Record<Lang, ArticleI18n>> = {
  'que-faire-panne-autoroute': {
    ar: {
      title: 'ماذا تفعل في حالة عطل على الطريق السريع؟',
      excerpt: 'الإجراءات الصحيحة في حالة عطل على الطريق السريع: السلامة، الإشارات، الاتصال بالطوارئ والتكفل من قبل ميكانيكي معتمد.',
      category: 'نصائح',
    },
    en: {
      title: 'What to do if you break down on the highway?',
      excerpt: 'The right reflexes in case of a highway breakdown: safety, signalling, calling for help and pickup by an approved tow truck operator.',
      category: 'Tips',
    },
    ru: {
      title: 'Что делать в случае поломки на автомагистрали?',
      excerpt: 'Правильные действия при поломке на автомагистрали: безопасность, сигнализация, вызов помощи и обслуживание лицензированным эвакуатором.',
      category: 'Советы',
    },
  },
  'prise-en-charge-assurance-depannage': {
    ar: {
      title: 'كيف تعمل تغطية التأمين للإعطال؟',
      excerpt: 'افهم تغطية التأمين الخاصة بك للإعطال: المقدمات، الحدود، الإجراءات. كل ما تحتاج معرفته لتجنب التكاليف.',
      category: 'تأمين',
    },
    en: {
      title: 'How does insurance breakdown coverage work?',
      excerpt: 'Understand your auto insurance assistance guarantee: deductibles, limits, procedures. Everything you need to know to avoid out-of-pocket costs.',
      category: 'Insurance',
    },
    ru: {
      title: 'Как работает страховое покрытие при поломке?',
      excerpt: 'Разберитесь в гарантии помощи вашей автостраховки: франшиза, лимиты, процедуры. Всё, что нужно знать, чтобы избежать расходов.',
      category: 'Страхование',
    },
  },
  'tarifs-reglementés-depannage-2026': {
    ar: {
      title: 'الأسعار المنظمة لإعطال السيارات في 2026',
      excerpt: 'الأسعار الجديدة المحددة بقرار وزاري ساري المفعول في 1 يناير 2026: الطرق السريعة، الشرطة، الخدمات الإضافية. شفافية كاملة.',
      category: 'الأسعار',
    },
    en: {
      title: 'Regulated breakdown assistance rates in 2026',
      excerpt: 'The new rates set by ministerial decree effective January 1, 2026: highways, police, additional services. Full transparency.',
      category: 'Pricing',
    },
    ru: {
      title: 'Регулируемые тарифы автомобильной эвакуации в 2026',
      excerpt: 'Новые тарифы, установленные министерским приказом с 1 января 2026 года: автомагистрали, полиция, дополнительные услуги. Полная прозрачность.',
      category: 'Тарифы',
    },
  },
  'pourquoi-choisir-depanneur-agree': {
    ar: {
      title: 'لماذا تختار ميكانيكيًا معتمدًا من قبل قوات الأمن؟',
      excerpt: 'الاعتماد، الضمانات، الاحتراف: المعايير الأساسية لاختيار شركة إعطال موثوقة. تجنب الاحتيال.',
      category: 'نصائح',
    },
    en: {
      title: 'Why choose a tow truck company approved by law enforcement?',
      excerpt: 'Accreditation, guarantees, professionalism: the essential criteria for choosing a trusted breakdown company. Avoid scams.',
      category: 'Tips',
    },
    ru: {
      title: 'Почему стоит выбирать эвакуатор, аккредитованный полицией?',
      excerpt: 'Аккредитация, гарантии, профессионализм: ключевые критерии выбора надёжной эвакуационной службы. Избегайте мошенничества.',
      category: 'Советы',
    },
  },
  'entretien-voiture-eviter-panne': {
    ar: {
      title: '10 فحوصات لتجنب عطل السيارة',
      excerpt: 'الصيانة الوقائية: 10 فحوصات بسيطة للقيام بها بانتظام لتجنب الأعطال وإطالة عمر سيارتك.',
      category: 'صيانة',
    },
    en: {
      title: '10 checks to avoid a car breakdown',
      excerpt: 'Preventive maintenance: 10 simple checks to do regularly to avoid breakdowns and extend your car\'s lifespan.',
      category: 'Maintenance',
    },
    ru: {
      title: '10 проверок, чтобы избежать поломки автомобиля',
      excerpt: 'Профилактическое обслуживание: 10 простых проверок, которые нужно делать регулярно, чтобы избежать поломок и продлить срок службы автомобиля.',
      category: 'Обслуживание',
    },
  },
  'depannage-moto-scooter-idf': {
    ar: {
      title: 'إعطال الدراجات النارية والسكوتر: ما يجب معرفته',
      excerpt: 'معدات خاصة، أسعار محددة، إجراءات: دليل كامل لإعطال ذوي العجلتين في جزيرة فرنسا.',
      category: 'الخدمات',
    },
    en: {
      title: 'Motorcycle & scooter breakdown: what you need to know',
      excerpt: 'Specific equipment, particular rates, procedures: complete guide to two-wheeler breakdown assistance in Île-de-France.',
      category: 'Services',
    },
    ru: {
      title: 'Эвакуация мотоциклов и скутеров: что нужно знать',
      excerpt: 'Специальное оборудование, особые тарифы, процедуры: полное руководство по эвакуации двухколёсного транспорта в Иль-де-Франс.',
      category: 'Услуги',
    },
  },
  'panne-hiver-froid-batterie': {
    ar: {
      title: 'الأعطال الشتوية: كيفية حماية سيارتك من البرد',
      excerpt: 'البرد هو العدو الأول لسيارتك. البطارية، الديزل المتجمد، مضاد التجمد: الاحتياطات الأساسية لقضاء شتاء آمن.',
      category: 'صيانة',
    },
    en: {
      title: 'Winter breakdowns: how to protect your car from the cold',
      excerpt: 'Cold is your car\'s number one enemy. Battery, frozen diesel, antifreeze: essential precautions to get through winter safely.',
      category: 'Maintenance',
    },
    ru: {
      title: 'Зимние поломки: как защитить машину от холода',
      excerpt: 'Холод — враг номер один для вашей машины. Аккумулятор, замёрзшая солярка, антифриз: основные меры предосторожности для спокойной зимы.',
      category: 'Обслуживание',
    },
  },
  'que-faire-apres-accident-route': {
    ar: {
      title: 'ماذا تفعل بعد حادث طريق؟ الدليل الكامل',
      excerpt: 'الإقرار الودي، الاتصال بالطوارئ، الميكانيكي المعتمد: الخطوات الصحيحة بعد حادث لحماية حقوقك ومركبتك.',
      category: 'سلامة',
    },
    en: {
      title: 'What to do after a road accident? The complete guide',
      excerpt: 'Accident report form, emergency call, approved tow truck: the right steps to follow after an accident to protect your rights and your vehicle.',
      category: 'Safety',
    },
    ru: {
      title: 'Что делать после ДТП? Полное руководство',
      excerpt: 'Европротокол, вызов помощи, аккредитованный эвакуатор: правильные шаги после ДТП для защиты ваших прав и автомобиля.',
      category: 'Безопасность',
    },
  },
  'voiture-electrique-panne-remorquage': {
    ar: {
      title: 'سيارة كهربائية معطلة: القطر والاحتياطات الخاصة',
      excerpt: 'تيسلا، رينو زوي، بيجو e-208... قطر سيارة كهربائية يخضع لقواعد صارمة. إليك كل ما يجب معرفته.',
      category: 'نصائح',
    },
    en: {
      title: 'Electric car breakdown: towing and specific precautions',
      excerpt: 'Tesla, Renault Zoé, Peugeot e-208... towing an electric vehicle follows strict rules. Here is everything you need to know.',
      category: 'Tips',
    },
    ru: {
      title: 'Поломка электромобиля: эвакуация и особые меры',
      excerpt: 'Tesla, Renault Zoé, Peugeot e-208... эвакуация электромобиля подчиняется строгим правилам. Вот всё, что нужно знать.',
      category: 'Советы',
    },
  },
  'panne-peripherique-paris-guide': {
    ar: {
      title: 'عطل على الطريق الدائري الباريسي: الدليل الكامل',
      excerpt: 'الطريق الدائري من أخطر المحاور في فرنسا. ماذا تفعل في حالة العطل، من تتصل، كم تكلف: نخبرك بكل شيء.',
      category: 'نصائح',
    },
    en: {
      title: 'Breakdown on the Paris ring road: the complete guide',
      excerpt: 'The Paris ring road is one of the most dangerous routes in France. What to do in case of breakdown, who to call, how much it costs: we tell you everything.',
      category: 'Tips',
    },
    ru: {
      title: 'Поломка на парижской кольцевой: полное руководство',
      excerpt: 'Кольцевая — одна из самых опасных трасс Франции. Что делать при поломке, кому звонить, сколько стоит: рассказываем всё.',
      category: 'Советы',
    },
  },
  'arnaques-depannage-comment-eviter': {
    ar: {
      title: 'كيفية تجنب الاحتيال في إعطال السيارات',
      excerpt: 'ميكانيكيون مزيفون، فواتير مبالغ فيها، عروض أسعار تعسفية: في حالة العطل، أنت ضعيف. إليك كيفية التعرف على الفخاخ وحماية نفسك.',
      category: 'سلامة',
    },
    en: {
      title: 'How to avoid breakdown assistance scams',
      excerpt: 'Fake tow truck operators, inflated invoices, abusive quotes: when you break down, you are vulnerable. Here is how to spot the traps and protect yourself.',
      category: 'Safety',
    },
    ru: {
      title: 'Как избежать мошенничества при эвакуации автомобиля',
      excerpt: 'Поддельные эвакуаторы, завышенные счета, неправомерные сметы: при поломке вы уязвимы. Вот как распознать ловушки и защитить себя.',
      category: 'Безопасность',
    },
  },
  'depannage-utilitaire-poids-lourd': {
    ar: {
      title: 'إعطال المركبات النفعية والشاحنات: الأسعار والإجراءات',
      excerpt: 'شاحنة، فان، نفعية، شاحنة حتى 3.5 طن: ما يجب أن تعرفه قبل الاتصال بميكانيكي.',
      category: 'الخدمات',
    },
    en: {
      title: 'Van and truck breakdown: rates and procedures',
      excerpt: 'Truck, van, utility vehicle, truck up to 3.5 tons: what you need to know before calling a tow truck operator.',
      category: 'Services',
    },
    ru: {
      title: 'Эвакуация коммерческого транспорта и грузовиков: тарифы и процедура',
      excerpt: 'Грузовик, фургон, коммерческий транспорт, грузовик до 3,5 тонн: что нужно знать перед вызовом эвакуатора.',
      category: 'Услуги',
    },
  },
};

export function getArticleI18n(slug: string, lang: string): ArticleI18n | null {
  if (lang === 'fr') return null;
  return ARTICLES_I18N[slug]?.[lang as Lang] ?? null;
}
