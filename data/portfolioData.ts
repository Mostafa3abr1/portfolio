export interface Project {
  id: string;
  title: string;
  category: "nlp" | "cv" | "ml";
  categoryLabel: string;
  date: string;
  summary: string;
  architecture: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  link?: string;
  github?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  points: string[];
}

export const PERSONAL_INFO = {
  fullName: "Mostafa Aber Mahmoud",
  displayName: "Mostafa Aber",
  title: "AI / Machine Learning Engineer",
  email: "mostafa10107899@gmail.com",
  phone: "+201101840376",
  whatsappUrl: "https://wa.me/201101840376",
  location: "Cairo & Mansoura, Egypt",
  github: "https://github.com/Mostafa3abrl",
  linkedin: "https://linkedin.com/in/mostafa-abr-747003325",
  education: {
    degree: "B.Sc. Computer Science & Engineering - AI Division",
    university: "New Mansoura University",
    location: "New Mansoura, Egypt",
    period: "2022 – 2026"
  },
  summary: "AI Engineer passionate about building intelligent systems that bridge cutting-edge research and real-world impact. My journey spans the full AI spectrum — from classical Machine Learning and Deep Learning foundations, through Natural Language Processing, to modern Generative AI, autonomous AI Agents, and Retrieval-Augmented Generation (RAG) systems. I specialize in designing end-to-end Arabic NLP pipelines, LLM-powered conversational agents, and production-ready predictive models — taking projects from raw data to deployed solutions."
};

export const PROJECTS: Project[] = [
  {
    id: "sal7ly-pricing",
    title: "Sal7ly Smart Pricing Platform",
    category: "nlp",
    categoryLabel: "Arabic NLP & Pricing",
    date: "09/2025 – 06/2026",
    summary: "Interactive marketplace web app for Arabic home maintenance pricing with 100% Egyptian dialect normalization.",
    architecture: "Engineered a custom NLP preprocessing pipeline normalizing unstructured Egyptian dialect text queries. Integrated a Multilingual Sentence-Transformer (MiniLM) to encode queries against a historical database of 1,000+ service logs, predicting pricing brackets with 85%+ estimated accuracy.",
    metrics: [
      { label: "Pricing Accuracy", value: "85%+ Estimated" },
      { label: "Egyptian Slang Norm", value: "100% Covered" },
      { label: "Vector Search DB", value: "1,000+ Logs" }
    ],
    tags: ["Python", "Sentence-Transformers", "Scikit-learn", "Cosine Similarity", "Pandas", "NumPy", "Streamlit"],
    github: "https://github.com/Mostafa3abrl"
  },
  {
    id: "sal7ly-chatbot",
    title: "Sal7ly AI Troubleshooting Chatbot",
    category: "nlp",
    categoryLabel: "Hybrid RAG & MARBERT",
    date: "09/2025 – 06/2026",
    summary: "Sub-second hybrid RAG troubleshooting agent for plumbing, electrical, carpentry, and painting.",
    architecture: "Built a hybrid RAG troubleshooting chatbot for 4 major maintenance domains. Combined FAISS vector search and BM25 to achieve sub-second (<800ms) information retrieval. Fine-tuned MARBERT embeddings on a specialized dialect dataset, improving intent recognition accuracy by 20% over baseline LLM prompts.",
    metrics: [
      { label: "Retrieval Latency", value: "<800ms Sub-second" },
      { label: "Intent Recognition", value: "+20% over baseline" },
      { label: "LLM Orchestration", value: "Gemini 2.5 Flash" }
    ],
    tags: ["Python", "MARBERT", "FAISS", "BM25", "SymSpell", "Cross-Encoder", "Gemini 2.5", "RAG"],
    github: "https://github.com/Mostafa3abrl"
  },
  {
    id: "fake-image-detection",
    title: "Fake Image & Defect Detection",
    category: "cv",
    categoryLabel: "Computer Vision & CNN",
    date: "01/2026 – 04/2026",
    summary: "Deep learning CNN classifier to verify authentic defect photos and filter irrelevant submissions.",
    architecture: "Developed a deep learning CNN classifier to filter irrelevant uploaded images, utilizing data augmentation to expand the training sample size by 3x. Achieved 95% validation accuracy and a 0.94 ROC-AUC score in distinguishing genuine defect images from noise, successfully automating report verification.",
    metrics: [
      { label: "Validation Accuracy", value: "95.0%" },
      { label: "ROC-AUC Score", value: "0.94" },
      { label: "Data Augmentation", value: "3x Expansion" }
    ],
    tags: ["Python", "PyTorch", "CNN", "Transfer Learning", "Computer Vision", "OpenCV"],
    github: "https://github.com/Mostafa3abrl"
  },
  {
    id: "age-group-classification",
    title: "Age Group Classification",
    category: "cv",
    categoryLabel: "Deep Learning & EfficientNet",
    date: "04/2025 – 06/2025",
    summary: "Facial age classifier trained on ~5,000 images across 6 demographic classes with fast convergence.",
    architecture: "Built a facial age classifier trained on ~5,000 images across 6 demographic classes, utilizing advanced regularization (MixUp, CutMix, RandAugment) to prevent model overfitting. Achieved an overall classification accuracy of 88.4%, leveraging OneCycleLR scheduling and GeM pooling to converge 25% faster than standard baseline CNN models.",
    metrics: [
      { label: "Overall Accuracy", value: "88.4%" },
      { label: "Convergence Rate", value: "25% Faster" },
      { label: "Demographic Tiers", value: "6 Age Classes" }
    ],
    tags: ["Python", "EfficientNet-B3", "Transfer Learning", "PyTorch", "RandAugment", "MixUp", "CutMix", "GeM Pooling"],
    github: "https://github.com/Mostafa3abrl"
  },
  {
    id: "movie-recommender",
    title: "Hybrid Movie Recommendation System",
    category: "ml",
    categoryLabel: "Hybrid Recommender",
    date: "01/2025 – 03/2025",
    summary: "Sub-500ms hybrid recommendation engine analyzing 3,000+ movie titles with Streamlit UI.",
    architecture: "Developed a hybrid recommendation engine analyzing 3,000+ movie titles, combining TF-IDF plot vectors (70% weight) and categorical genre encoding (30% weight). Built a real-time Streamlit dashboard rendering customized top-10 movie suggestions with <500ms user query response time.",
    metrics: [
      { label: "Response Latency", value: "<500ms" },
      { label: "Movie Catalog", value: "3,000+ Titles" },
      { label: "Vector Weight", value: "70% Plot / 30% Genre" }
    ],
    tags: ["Python", "Scikit-learn", "TF-IDF", "Cosine Similarity", "MultiLabelBinarizer", "Streamlit"],
    github: "https://github.com/Mostafa3abrl"
  },
  {
    id: "heart-disease-prediction",
    title: "Heart Disease Prediction & Clinical Analysis",
    category: "ml",
    categoryLabel: "Healthcare ML & Power BI",
    date: "09/2024 – 11/2024",
    summary: "Clinical machine learning system with 8 classifiers, ANN, XGBoost, and interactive Power BI dashboard.",
    architecture: "Engineered a clinical dataset by executing mean imputation for missing records and IQR outlier removal, training 8 distinct machine learning classifiers. Achieved a peak accuracy of 91.3% and an F1-score of 94% using Artificial Neural Networks (ANN) and Logistic Regression, deploying results to an interactive Power BI dashboard.",
    metrics: [
      { label: "Peak Accuracy", value: "91.3%" },
      { label: "F1-Score", value: "94.0%" },
      { label: "Tested Algorithms", value: "8 ML Classifiers" }
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "ANN", "XGBoost", "Power BI"],
    github: "https://github.com/Mostafa3abrl"
  },
  {
    id: "ecg-detection",
    title: "ECG-Based Heart Disease Detection",
    category: "cv",
    categoryLabel: "1D/2D CNN Signal Processing",
    date: "08/2024 – 10/2024",
    summary: "Multi-class CNN categorizing 1D/2D ECG signal representations across 5 cardiac conditions.",
    architecture: "Implemented a multi-class Convolutional Neural Network to categorize 1D/2D ECG signal representations across 5 distinct cardiac arrhythmia conditions. Evaluated the PyTorch training pipeline on test split data, yielding a reliable 90%+ classification rate in identifying irregular cardiac patterns.",
    metrics: [
      { label: "Classification Rate", value: "90%+ Reliable" },
      { label: "Cardiac Conditions", value: "5 Classes" },
      { label: "Input Modality", value: "1D Waveform & 2D Spectrogram" }
    ],
    tags: ["Python", "CNN", "PyTorch", "Signal Processing", "NumPy", "SciPy"],
    github: "https://github.com/Mostafa3abrl"
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    role: "Machine Learning Intern",
    organization: "CREATIVA",
    location: "Mansoura, Egypt",
    period: "07/2025 – 10/2025",
    points: [
      "Gained a strong, hands-on foundation in Machine Learning by learning and applying the full workflow (regression, classification, data cleaning, EDA, feature engineering, and hyperparameter tuning) on real datasets exceeding 10,000+ records using Scikit-learn.",
      "Strengthened practical ML engineering skills by deploying 2 trained models into web applications using Flask and Streamlit, reducing inference latency by 15% for live demos."
    ]
  },
  {
    role: "NLP & Deep Learning Trainee",
    organization: "NTI (National Telecommunication Institute)",
    location: "Mansoura, Egypt",
    period: "07/2025 – 08/2025",
    points: [
      "Completed an intensive 120-hour NLP & Deep Learning training, building strong theoretical and practical foundations in tokenization techniques, neural network architectures, transformers, and LLM fine-tuning frameworks.",
      "Developed a deep, hands-on understanding of the NLP pipeline by building and evaluating 3 AI deployment pipelines, mastering the optimization of HuggingFace transformer models for real-world inference."
    ]
  },
  {
    role: "Business Development Trainee",
    organization: "X-Clan",
    location: "Mansoura, Egypt",
    period: "07/2025 – 10/2025",
    points: [
      "Completed a 60-day intensive simulation program covering analytical problem-solving, B2B sales, and client negotiation across 18 distinct industry case studies.",
      "Achieved a 100% program completion rate and earned certified qualification, collaborating in 5+ cross-functional team presentations."
    ]
  }
];
