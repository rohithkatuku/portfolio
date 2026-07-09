export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  repoUrl: string;
  demoUrl?: string;
  highlight?: string;
}

export const projects: Project[] = [
  {
    slug: "pipeline-sentinel",
    name: "Pipeline Sentinel",
    tagline: "AI-powered anomaly detection with a Claude-powered explanation layer",
    description:
      "Monitors data pipelines for anomalies using statistical and ML detectors (Z-score, IQR, Isolation Forest), then uses the Claude API to generate root-cause analysis and ranked remediation suggestions. FastAPI backend, Streamlit dashboard, full CI/CD.",
    tech: ["Python", "FastAPI", "scikit-learn", "Claude API", "Streamlit", "GitHub Actions"],
    repoUrl: "https://github.com/rohithkatuku/pipeline-sentinel",
    highlight: "44/44 tests passing",
  },
  {
    slug: "sales-forecast",
    name: "Sales Forecast Prediction Engine",
    tagline: "Retail sales forecasting comparing XGBoost, ARIMA, and Linear Regression",
    description:
      "Time-series decomposition and model comparison for retail sales forecasting, with interactive Plotly visualizations of forecast accuracy across models.",
    tech: ["Python", "XGBoost", "SARIMA", "Pandas", "Plotly"],
    repoUrl: "https://github.com/rohithkatuku/sales-forecast",
  },
  {
    slug: "credit-card-fraud-detection",
    name: "Credit Card Fraud Detection",
    tagline: "Fraud detection on highly imbalanced transaction data",
    description:
      "Detects fraudulent credit card transactions using Isolation Forest and SMOTE resampling to handle severe class imbalance, evaluated against baseline classifiers.",
    tech: ["Python", "scikit-learn", "SMOTE", "Isolation Forest"],
    repoUrl: "https://github.com/rohithkatuku/credit-card-fraud-detection",
  },
  {
    slug: "nlp-classifier",
    name: "NLP Text Classifier",
    tagline: "Feature extraction and model comparison for text categorization",
    description:
      "Explores TF-IDF and other feature extraction techniques across Naive Bayes and Logistic Regression models for text categorization tasks.",
    tech: ["Python", "scikit-learn", "TF-IDF", "NLTK"],
    repoUrl: "https://github.com/rohithkatuku/nlp-classifier",
  },
  {
    slug: "spam-detector",
    name: "Spam Detector",
    tagline: "Text classification pipeline for spam detection",
    description:
      "A spam-detection pipeline using classic ML models over NLP-derived features, benchmarked for precision/recall tradeoffs.",
    tech: ["Python", "scikit-learn", "NLP"],
    repoUrl: "https://github.com/rohithkatuku/spam-detector",
  },
];
