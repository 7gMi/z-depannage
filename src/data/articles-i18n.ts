import type { ArticleI18n } from './articles';

export type Lang = 'ar' | 'ro' | 'ru';

export const ARTICLES_I18N: Record<string, Record<Lang, ArticleI18n>> = {
  'que-faire-panne-autoroute': {
    ar: {
      title: 'ماذا تفعل في حالة عطل على الطريق السريع؟',
      excerpt: 'الإجراءات الصحيحة في حالة عطل على الطريق السريع: السلامة، الإشارات، الاتصال بالطوارئ والتكفل من قبل ميكانيكي معتمد.',
      category: 'نصائح',
    },
    ro: {
      title: 'Ce să faci în caz de pană pe autostradă?',
      excerpt: 'Reflexele bune de adoptat în caz de pană pe autostradă: siguranță, semnalizare, apel la urgențe și preluare de către un depanator autorizat.',
      category: 'Sfaturi',
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
    ro: {
      title: 'Cum funcționează preluarea asigurării pentru o depanare?',
      excerpt: 'Înțelegeți garanția asistenței dumneavoastră de asigurare auto: franciza, plafoane, proceduri. Tot ce trebuie să știți pentru a evita costurile.',
      category: 'Asigurare',
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
    ro: {
      title: 'Tarifele reglementate ale depanării auto în 2026',
      excerpt: 'Noile tarife stabilite prin ordin ministerial valabile de la 1 ianuarie 2026: autostrăzi, poliție, prestații suplimentare. Transparență totală.',
      category: 'Tarife',
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
    ro: {
      title: 'De ce să alegeți un depanator autorizat de forțele de ordine?',
      excerpt: 'Acreditare, garanții, profesionalism: criterii esențiale pentru a alege o societate de depanare de încredere. Evitați înșelăciunile.',
      category: 'Sfaturi',
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
    ro: {
      title: '10 verificări pentru a evita pana auto',
      excerpt: 'Întreținere preventivă: 10 verificări simple de făcut regulat pentru a evita panele și a prelungi durata de viață a mașinii.',
      category: 'Întreținere',
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
    ro: {
      title: 'Depanare moto și scooter: ce trebuie să știți',
      excerpt: 'Echipament specific, tarife particulare, proceduri: ghid complet pentru depanarea pe două roți în Île-de-France.',
      category: 'Servicii',
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
    ro: {
      title: 'Pene de iarnă: cum să protejați mașina de frig',
      excerpt: 'Frigul este inamicul numărul 1 al mașinii. Baterie, motorină înghețată, antigel: precauțiile esențiale pentru a trece iarna fără probleme.',
      category: 'Întreținere',
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
    ro: {
      title: 'Ce să faci după un accident rutier? Ghidul complet',
      excerpt: 'Constatare amiabilă, apel la urgențe, depanator autorizat: pașii corecți de urmat după un accident pentru a vă proteja drepturile și vehiculul.',
      category: 'Siguranță',
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
    ro: {
      title: 'Mașină electrică în pană: remorcare și precauții specifice',
      excerpt: 'Tesla, Renault Zoé, Peugeot e-208... remorcarea unui vehicul electric respectă reguli stricte. Iată tot ce trebuie să știți.',
      category: 'Sfaturi',
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
    ro: {
      title: 'Pană pe șoseaua de centură pariziană: ghidul complet',
      excerpt: 'Șoseaua de centură este una dintre cele mai periculoase axe din Franța. Ce să faci în caz de pană, cui să suni, cât costă: vă spunem tot.',
      category: 'Sfaturi',
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
    ro: {
      title: 'Cum să evitați înșelăciunile la depanarea auto',
      excerpt: 'Falși depanatori, supratarifare, devize abuzive: în caz de pană, sunteți vulnerabil. Iată cum să recunoașteți capcanele și să vă protejați.',
      category: 'Siguranță',
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
    ro: {
      title: 'Depanare utilitară și camioane: tarife și proceduri',
      excerpt: 'Camion, furgonetă, utilitar, camion până la 3,5 tone: ce trebuie să știți înainte de a apela un depanator.',
      category: 'Servicii',
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
