// ===== EMBEDDED PROJECTS DATA (Categorized) =====
const PROJECTS_DATA = [
  // ===== AI & MACHINE LEARNING =====
  { 
    name: "Federated-Cognitive-Multi-Agent-GraphRAG-System", 
    details: "Elite-tier cognitive architecture implementing Federated Knowledge Retrieval across Decentralized Graph Networks", 
    primaryLanguage: "Python", 
    updated: "Updated 1 minute ago", 
    category: "AI/ML", 
    repo: "Federated-Cognitive-Multi-Agent-GraphRAG-System",
    linkedin: null
  },
  { 
    name: "GRAPHRAG", 
    details: "Research-level, production-grade Graph-Augmented Retrieval-Augmented Generation (GraphRAG) system for hybrid search patterns", 
    primaryLanguage: "Python", 
    updated: "Updated 12 minutes ago", 
    category: "AI/ML", 
    repo: "GRAPHRAG",
    linkedin: null
  },
  { 
    name: "Agentic_rag", 
    details: "Production-grade RAG architecture with Self-Reflection & Multi-Agent Verification Loops", 
    primaryLanguage: "Python", 
    updated: "Updated 23 minutes ago", 
    category: "AI/ML", 
    repo: "Agentic_rag",
    linkedin: null
  },
  { 
    name: "SmartUniversity_RAG", 
    details: "Enterprise-ready local RAG architecture using Python, Streamlit, ChromaDB, and Ollama for institutional search", 
    primaryLanguage: "Python", 
    updated: "Updated 33 minutes ago", 
    category: "AI/ML", 
    repo: "SmartUniversity_RAG",
    linkedin: null
  },
  { 
    name: "POCKETBRAIN_RAG", 
    details: "100% free, fully local Retrieval-Augmented Generation (RAG) system built with Python, Streamlit, ChromaDB, and Ollama", 
    primaryLanguage: "Python", 
    updated: "Updated 3 hours ago", 
    category: "AI/ML", 
    repo: "POCKETBRAIN_RAG",
    linkedin: null
  },
  { 
    name: "AI-Smart-Quiz-Learning-Systems", 
    details: "MERN + Google Gemini AI - Intelligent adaptive quiz platform", 
    primaryLanguage: "JavaScript", 
    updated: "Updated on May 26", 
    category: "AI/ML", 
    repo: "AI-Smart-Quiz-Learning-Systems_WEBE_MERN",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_mern-vite-fullstackdeveloper-activity-7434714702355550209-8q44"
  },
  { 
    name: "Agentic-Ai", 
    details: "Python, Gemini 2.5 - AI chatbot with autonomous reasoning", 
    primaryLanguage: "Python", 
    updated: "Updated on Jan 7", 
    category: "AI/ML", 
    repo: "Agentic-Ai",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },
  { 
    name: "SentimentAi", 
    details: "C#, ML.NET, WinForms - Real-time sentiment analysis desktop app", 
    primaryLanguage: "C#", 
    updated: "Updated on Mar 30", 
    category: "AI/ML", 
    repo: "SentimentAi",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_csharp-cpp-dotnet-activity-7433441533443502081-fmt0"
  },
  { 
    name: "ADV_VISUAL_PROGRAMMING", 
    details: "C#, ML.NET Console - Text classification and sentiment prediction", 
    primaryLanguage: "C#", 
    updated: "Updated on Mar 30", 
    category: "AI/ML", 
    repo: "ADV_VISUAL_PROGRAMMING",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_csharp-cpp-dotnet-activity-7433441533443502081-fmt0"
  },
  { 
    name: "AiImageDetector", 
    details: "ML.NET, C# - 88.67% accuracy distinguishing authentic vs AI-generated images", 
    primaryLanguage: "C#", 
    updated: "Updated on Apr 29", 
    category: "AI/ML", 
    repo: "AiImageDetector",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_csharp-cpp-dotnet-activity-7433441533443502081-fmt0"
  },
  { 
    name: "cnn-image-classifier", 
    details: "PyTorch - CNN for Cat vs Dog classification with Data Augmentation", 
    primaryLanguage: "Python", 
    updated: "Updated on Mar 6", 
    category: "AI/ML", 
    repo: "cnn-image-classifier",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_machinelearning-datascience-python-activity-7436180550266085378-DdZ4"
  },
  { 
    name: "Task3_Heart_Disease", 
    details: "Python, Scikit-Learn - Predict heart disease risk from health data", 
    primaryLanguage: "Python", 
    updated: "Updated on May 31", 
    category: "AI/ML", 
    repo: "Task3_Heart_Disease",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_machinelearning-datascience-python-activity-7436180550266085378-DdZ4"
  },
  { 
    name: "Task6_House_Price", 
    details: "Python, Scikit-Learn - Predict house prices using property features", 
    primaryLanguage: "Python", 
    updated: "Updated on May 31", 
    category: "AI/ML", 
    repo: "Task6_House_Price",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_machinelearning-datascience-python-activity-7436180550266085378-DdZ4"
  },
  { 
    name: "Task1_Iris_Analysis", 
    details: "Python, Pandas, Matplotlib - Iris dataset analysis and visualization", 
    primaryLanguage: "Python", 
    updated: "Updated on May 31", 
    category: "AI/ML", 
    repo: "Task1_Iris_Analysis",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_machinelearning-datascience-python-activity-7436180550266085378-DdZ4"
  },
  { 
    name: "intermediate-ml", 
    details: "Python, XGBoost, LSTM, K-Means - Fraud detection, segmentation, stock prediction", 
    primaryLanguage: "Python", 
    updated: "Updated on Mar 6", 
    category: "AI/ML", 
    repo: "intermediate-ml",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_machinelearning-datascience-python-activity-7436180550266085378-DdZ4"
  },
  { 
    name: "movie-recommendation-pro", 
    details: "Python, Matrix Factorization - Collaborative filtering recommendation engine", 
    primaryLanguage: "Python", 
    updated: "Updated on Mar 5", 
    category: "AI/ML", 
    repo: "movie-recommendation-pro",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_machinelearning-datascience-python-activity-7436180550266085378-DdZ4"
  },
  { 
    name: "federated-mnist", 
    details: "Python - Framework-free Federated Learning for privacy-preserving ML", 
    primaryLanguage: "Python", 
    updated: "Updated on Jun 10", 
    category: "AI/ML", 
    repo: "federated-mnist",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_machinelearning-datascience-python-activity-7436180550266085378-DdZ4"
  },
  { 
    name: "Federated-Linear-Regression-Research-Inspired", 
    details: "Python - Federated Learning architecture from FedAvg paper", 
    primaryLanguage: "Python", 
    updated: "Updated on May 30", 
    category: "AI/ML", 
    repo: "Federated-Linear-Regression-Research-Inspired-",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_machinelearning-datascience-python-activity-7436180550266085378-DdZ4"
  },
  { 
    name: "federated-linear-regression", 
    details: "Python - Federated learning using linear regression", 
    primaryLanguage: "Python", 
    updated: "Updated on May 30", 
    category: "AI/ML", 
    repo: "federated-linear-regression",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_machinelearning-datascience-python-activity-7436180550266085378-DdZ4"
  },
  { 
    name: "mini-federated-learning", 
    details: "Python - Fake federated learning implementation", 
    primaryLanguage: "Python", 
    updated: "Updated on May 30", 
    category: "AI/ML", 
    repo: "mini-federated-learning",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_machinelearning-datascience-python-activity-7436180550266085378-DdZ4"
  },
  { 
    name: "FedPulse-Simulator", 
    details: "Python - Privacy-Preserving Federated Learning Simulator for Healthcare AI", 
    primaryLanguage: "Python", 
    updated: "Updated on May 25", 
    category: "AI/ML", 
    repo: "FedPulse-Simulator",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_machinelearning-datascience-python-activity-7436180550266085378-DdZ4"
  },
  { 
    name: "AI-ML-Internship-Tasks", 
    details: "Jupyter Notebook - AI/ML Engineering Internship Tasks for DevelopersHub", 
    primaryLanguage: "Jupyter Notebook", 
    updated: "Updated on Apr 24", 
    category: "AI/ML", 
    repo: "AI-ML-Internship-Tasks",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },
  { 
    name: "fed-learn", 
    details: "Python - Private federated learning repository", 
    primaryLanguage: "Python", 
    updated: "Updated on May 30", 
    category: "AI/ML", 
    repo: "fed-learn",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_machinelearning-datascience-python-activity-7436180550266085378-DdZ4"
  },
  { 
    name: "ai-ml-beginner-journey", 
    details: "13-Project Roadmap: From Python Logic to Multimodal Vision AI", 
    primaryLanguage: "Python", 
    updated: "Updated on Mar 1", 
    category: "AI/ML", 
    repo: "ai-ml-beginner-journey",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_my-13-project-journey-from-python-logic-activity-7433903132876795904-XNJN"
  },

  // ===== .NET/C# (Including ML.NET projects) =====
  { 
    name: "Sky-Link-Airlines", 
    details: "C# .NET 6.0, MongoDB, WPF - Complete flight booking management", 
    primaryLanguage: "C#", 
    updated: "Updated on May 1", 
    category: ".NET/C#", 
    repo: "Sky-Link-Airlines",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_csharp-cpp-dotnet-activity-7433441533443502081-fmt0"
  },
  { 
    name: "Airline-reservation-system-gui-based", 
    details: "C#/C++, WPF/WinForms - Flight booking, passenger management", 
    primaryLanguage: "C#", 
    updated: "Updated on Feb 28", 
    category: ".NET/C#", 
    repo: "Airline-reservation-system-gui-based",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_csharp-cpp-dotnet-activity-7433441533443502081-fmt0"
  },
  { 
    name: "Artistryhub_openendedlab", 
    details: "C# - Web/App development project", 
    primaryLanguage: "C#", 
    updated: "Updated on May 6", 
    category: ".NET/C#", 
    repo: "Artistryhub_openendedlab",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_csharp-cpp-dotnet-activity-7433441533443502081-fmt0"
  },
  
  // ===== ML.NET Projects (DUPLICATED in .NET/C# category) =====
  { 
    name: "SentimentAi", 
    details: "C#, ML.NET, WinForms - Real-time sentiment analysis desktop app", 
    primaryLanguage: "C#", 
    updated: "Updated on Mar 30", 
    category: ".NET/C#", 
    repo: "SentimentAi",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_csharp-cpp-dotnet-activity-7433441533443502081-fmt0"
  },
  { 
    name: "ADV_VISUAL_PROGRAMMING", 
    details: "C#, ML.NET Console - Text classification and sentiment prediction", 
    primaryLanguage: "C#", 
    updated: "Updated on Mar 30", 
    category: ".NET/C#", 
    repo: "ADV_VISUAL_PROGRAMMING",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_csharp-cpp-dotnet-activity-7433441533443502081-fmt0"
  },
  { 
    name: "AiImageDetector", 
    details: "ML.NET, C# - 88.67% accuracy distinguishing authentic vs AI-generated images", 
    primaryLanguage: "C#", 
    updated: "Updated on Apr 29", 
    category: ".NET/C#", 
    repo: "AiImageDetector",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_csharp-cpp-dotnet-activity-7433441533443502081-fmt0"
  },

  // ===== CYBERSECURITY =====
  { 
    name: "port_scanner", 
    details: "Flask, Python - Real-time port scanning, traffic analysis, geographic visualization", 
    primaryLanguage: "Python", 
    updated: "Updated on Jan 11", 
    category: "Cybersecurity", 
    repo: "port_scanner",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_projectshowcase-webengineering-ai-activity-7464839870000222208-TWUa"
  },
  { 
    name: "Metasploit-Cybersecurity", 
    details: "JavaScript, Web UI - Web-based interface for Metasploit Framework", 
    primaryLanguage: "JavaScript", 
    updated: "Updated on Jun 4", 
    category: "Cybersecurity", 
    repo: "Metasploit-Cybersecurity",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_projectshowcase-webengineering-ai-activity-7464839870000222208-TWUa"
  },
  { 
    name: "MPI-Synchronization-Project", 
    details: "Python, MPI - Ricart-Agrawala Algorithm for distributed synchronization", 
    primaryLanguage: "Python", 
    updated: "Updated on May 18", 
    category: "Cybersecurity", 
    repo: "MPI-Synchronization-Project",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_projectshowcase-webengineering-ai-activity-7464839870000222208-TWUa"
  },
  { 
    name: "Face-Detection-using-OpenCV", 
    details: "Python, OpenCV - Haar cascades for frontal and profile face detection", 
    primaryLanguage: "Python", 
    updated: "Updated on Apr 22", 
    category: "Cybersecurity", 
    repo: "Face-Detection-using-OpenCV-in-Python",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },
  { 
    name: "hexsoftware_Gender-Prediction-Age-Estimation", 
    details: "Python, OpenCV - Gender prediction and age estimation from facial features", 
    primaryLanguage: "Python", 
    updated: "Updated on Apr 22", 
    category: "Cybersecurity", 
    repo: "hexsoftware_Gender-Prediction-Age-Estimation-using-AI",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },
  { 
    name: "hexsoftware_Emotion_Detection", 
    details: "Python, OpenCV - AI-powered emotion recognition from facial expressions", 
    primaryLanguage: "Python", 
    updated: "Updated on Apr 22", 
    category: "Cybersecurity", 
    repo: "hexsoftware_Emotion_Detection_using_Ai",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },

  // ===== WEB DEVELOPMENT (MERN + Flask/Django) =====
  { 
    name: "foundry-ecommerce-mern", 
    details: "MERN Stack - Full-stack e-commerce with premium product marketplace", 
    primaryLanguage: "JavaScript", 
    updated: "Updated 5 days ago", 
    category: "Web Development", 
    repo: "foundry-ecommerce-mern",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_webdevelopment-softwareengineering-frontendarchitecture-activity-7432901051210633216-fkO6"
  },
  { 
    name: "PropTrack-MERN", 
    details: "MERN Stack - Real estate marketplace with property listings and search", 
    primaryLanguage: "JavaScript", 
    updated: "Updated on May 10", 
    category: "Web Development", 
    repo: "PropTrack-MERN",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_mern-vite-fullstackdeveloper-activity-7434714702355550209-8q44"
  },
  { 
    name: "flockby", 
    details: "React, Vite, Tailwind, Framer Motion - Modern interactive React frontend", 
    primaryLanguage: "JavaScript", 
    updated: "Updated 5 days ago", 
    category: "Web Development", 
    repo: "flockby",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_mern-vite-fullstackdeveloper-activity-7434714702355550209-8q44"
  },
  { 
    name: "loan-site", 
    details: "React, Vite, Tailwind CSS - Financial loan processing platform frontend", 
    primaryLanguage: "JavaScript", 
    updated: "Updated 5 days ago", 
    category: "Web Development", 
    repo: "loan-site",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_mern-vite-fullstackdeveloper-activity-7434714702355550209-8q44"
  },
  { 
    name: "ecommerce-flask", 
    details: "Flask, MongoDB, JWT - Lightweight e-commerce backend API", 
    primaryLanguage: "Python", 
    updated: "Updated 5 days ago", 
    category: "Web Development", 
    repo: "ecommerce-flask",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_webdevelopment-softwareengineering-frontendarchitecture-activity-7432901051210633216-fkO6"
  },
  { 
    name: "event-management-django", 
    details: "Django, Python - Event Management application backend", 
    primaryLanguage: "Python", 
    updated: "Updated 5 days ago", 
    category: "Web Development", 
    repo: "event-management-django",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_webdevelopment-softwareengineering-frontendarchitecture-activity-7432901051210633216-fkO6"
  },

  // ===== PHP =====
  { 
    name: "Trip_booking_php", 
    details: "PHP, Sessions - Travel booking with form validation and group discounts", 
    primaryLanguage: "PHP", 
    updated: "Updated 5 days ago", 
    category: "PHP", 
    repo: "Trip_booking_php",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_projectshowcase-webengineering-ai-activity-7464839870000222208-TWUa"
  },
  { 
    name: "doctor_appointment_php", 
    details: "PHP, MySQL, Tailwind - Patient registration, doctor management, appointment booking", 
    primaryLanguage: "PHP", 
    updated: "Updated 3 weeks ago", 
    category: "PHP", 
    repo: "doctor_appointment_php",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_projectshowcase-webengineering-ai-activity-7464839870000222208-TWUa"
  },
  { 
    name: "CLINIC_PROJECT", 
    details: "PHP, MySQL - Clinic management system with patient registration and appointments", 
    primaryLanguage: "PHP", 
    updated: "Updated on Apr 26", 
    category: "PHP", 
    repo: "CLINIC_PROJECT",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_projectshowcase-webengineering-ai-activity-7464839870000222208-TWUa"
  },
  { 
    name: "PHP_PROJECTS", 
    details: "PHP, MySQL - Complete PHP assignment with 4 systems: University, Library, Hotel, Restaurant", 
    primaryLanguage: "PHP", 
    updated: "Updated on Apr 26", 
    category: "PHP", 
    repo: "PHP_PROJECTS",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_projectshowcase-webengineering-ai-activity-7464839870000222208-TWUa"
  },

  // ===== MOBILE DEVELOPMENT (Android - Java/Kotlin) =====
  { 
    name: "Smart-Recipe-Assistant", 
    details: "Java, Gemini AI, TTS/STT - Android app with hands-free voice mode", 
    primaryLanguage: "Java", 
    updated: "Updated on Jan 11", 
    category: "Mobile Development", 
    repo: "Smart-Recipe-Assistant",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },
  { 
    name: "ExpenseTrackerApp", 
    details: "Kotlin, Android Studio - Track, categorize, and monitor daily expenses", 
    primaryLanguage: "Kotlin", 
    updated: "Updated on Jan 7", 
    category: "Mobile Development", 
    repo: "ExpenseTrackerApp",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },
  { 
    name: "Custom-Dice-Grid-Application", 
    details: "Android - Advanced custom GridView with parent grid framework and individual component row layouts", 
    primaryLanguage: "Java", 
    updated: "Updated 10 minutes ago", 
    category: "Mobile Development", 
    repo: "Custom-Dice-Grid-Application",
    linkedin: null
  },
  { 
    name: "loginpage", 
    details: "Android - Clean user authentication interface with structured validation and navigation routing", 
    primaryLanguage: "Java", 
    updated: "Updated 17 minutes ago", 
    category: "Mobile Development", 
    repo: "loginpage",
    linkedin: null
  },
  { 
    name: "WebView", 
    details: "Android - Web content integration using native WebView with multi-activity navigation using ConstraintLayout", 
    primaryLanguage: "Java", 
    updated: "Updated 22 minutes ago", 
    category: "Mobile Development", 
    repo: "WebView",
    linkedin: null
  },
  { 
    name: "GridView", 
    details: "Android - Data presentation inside a clean grid layout framework with adaptive grid structure", 
    primaryLanguage: "Java", 
    updated: "Updated 25 minutes ago", 
    category: "Mobile Development", 
    repo: "GridView",
    linkedin: null
  },
  { 
    name: "DICE_ROLLER", 
    details: "Android - Fully responsive dice rolling simulation using ConstraintLayout with responsive UI design", 
    primaryLanguage: "Java", 
    updated: "Updated 37 minutes ago", 
    category: "Mobile Development", 
    repo: "DICE_ROLLER",
    linkedin: null
  },
  { 
    name: "DICE_APP", 
    details: "Android - Simple interactive dice rolling app with random face generation on tap", 
    primaryLanguage: "Java", 
    updated: "Updated 40 minutes ago", 
    category: "Mobile Development", 
    repo: "DICE_APP",
    linkedin: null
  },

  // ===== INTERNSHIPS (HexSoftware & DevelopersHub) =====
  { 
    name: "HexSoftwares_Fraud_Detection", 
    details: "Python, ML - AI-driven anomaly detection for identifying fraudulent financial transactions", 
    primaryLanguage: "Python", 
    updated: "Updated on Apr 18", 
    category: "Internships", 
    repo: "HexSoftwares_Fraud_Detection",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },
  { 
    name: "HexSoftwares_AI_Chatbot", 
    details: "Python, NLP, LLMs - AI-powered virtual agent for customer inquiries and intelligent support", 
    primaryLanguage: "Python", 
    updated: "Updated on Apr 18", 
    category: "Internships", 
    repo: "HexSoftwares_AI_Chatbot",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },
  { 
    name: "HexSoftwares_Virtual_Assistant", 
    details: "Python, Gemini 2.5 - AI-driven virtual assistant with voice interaction and smart task management", 
    primaryLanguage: "Python", 
    updated: "Updated on Apr 18", 
    category: "Internships", 
    repo: "HexSoftwares_Virtual_Assistant",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },
  { 
    name: "hexsoftware_Gender-Prediction-Age-Estimation", 
    details: "Python, OpenCV - Gender prediction and age estimation from facial features", 
    primaryLanguage: "Python", 
    updated: "Updated on Apr 22", 
    category: "Internships", 
    repo: "hexsoftware_Gender-Prediction-Age-Estimation-using-AI",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },
  { 
    name: "hexsoftware_Emotion_Detection", 
    details: "Python, OpenCV - AI-powered emotion recognition from facial expressions", 
    primaryLanguage: "Python", 
    updated: "Updated on Apr 22", 
    category: "Internships", 
    repo: "hexsoftware_Emotion_Detection_using_Ai",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },
  { 
    name: "Hexsoftware_Personality-Prediction-System-Through-CV-Analysis", 
    details: "Python, ML - OCEAN (Big Five) personality prediction from candidate resumes/CVs", 
    primaryLanguage: "Python", 
    updated: "Updated on May 2", 
    category: "Internships", 
    repo: "Hexsoftware_Personality-Prediction-System-Through-CV-Analysis",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },
  { 
    name: "AI-ML-Internship-Tasks", 
    details: "Jupyter Notebook - AI/ML Engineering Internship Tasks for DevelopersHub Corporation", 
    primaryLanguage: "Jupyter Notebook", 
    updated: "Updated on Apr 24", 
    category: "Internships", 
    repo: "AI-ML-Internship-Tasks",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_aiml-machinelearning-artificialintelligence-activity-7471150573564817408-Fum5"
  },

  // ===== OTHER =====
  { 
    name: "learning-management-system-python", 
    details: "Python - Modular LMS with role-based user interfaces", 
    primaryLanguage: "Python", 
    updated: "Updated 5 days ago", 
    category: "Other", 
    repo: "learning-management-system-python",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_projectshowcase-webengineering-ai-activity-7464839870000222208-TWUa"
  },
  { 
    name: "library-management-system", 
    details: "Python - Command-line Library Management with authentication", 
    primaryLanguage: "Python", 
    updated: "Updated 5 days ago", 
    category: "Other", 
    repo: "library-management-system",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_projectshowcase-webengineering-ai-activity-7464839870000222208-TWUa"
  },
  { 
    name: "web-development-projects", 
    details: "HTML, CSS, JS - Collection of frontend projects from 5th semester", 
    primaryLanguage: "HTML", 
    updated: "Updated on Jan 7", 
    category: "Other", 
    repo: "web-development-projects",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_webdevelopment-softwareengineering-frontendarchitecture-activity-7432901051210633216-fkO6"
  },
  { 
    name: "web-development-demo-videos", 
    details: "Source code unavailable - Documentation of project features", 
    primaryLanguage: "Documentation", 
    updated: "Updated on Jan 11", 
    category: "Other", 
    repo: "web-development-demo-videos",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_webdevelopment-softwareengineering-frontendarchitecture-activity-7432901051210633216-fkO6"
  },
  { 
    name: "portfolio", 
    details: "Personal portfolio website", 
    primaryLanguage: "CSS", 
    updated: "Updated 4 days ago", 
    category: "Other", 
    repo: "portfolio",
    linkedin: "https://www.linkedin.com/posts/visha-hameed-a23202373_projectshowcase-webengineering-ai-activity-7464839870000222208-TWUa"
  },
];

// ===== MAIN APPLICATION =====
document.addEventListener('DOMContentLoaded', function() {

  // ===== MOBILE HAMBURGER MENU TOGGLE =====
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navLinks = document.getElementById('navLinks');

  if (hamburgerMenu && navLinks) {
    hamburgerMenu.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      
      const icon = this.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = hamburgerMenu.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });

    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        if (!navLinks.contains(e.target) && !hamburgerMenu.contains(e.target)) {
          navLinks.classList.remove('open');
          const icon = hamburgerMenu.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      }
    });
  }

  // --- Dark Mode Toggle ---
  const themeToggleButton = document.querySelector('.theme-toggle-button');
  const body = document.body;

  if (themeToggleButton) {
    const themeIcon = themeToggleButton.querySelector('i');

    function setTheme(isDarkMode) {
      if (isDarkMode) {
        body.classList.add('dark-mode');
        if (themeIcon) {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
        }
        themeToggleButton.setAttribute('aria-label', 'Switch to light mode');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark-mode');
        if (themeIcon) {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
        }
        themeToggleButton.setAttribute('aria-label', 'Switch to dark mode');
        localStorage.setItem('theme', 'light');
      }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(true);
    } else {
      setTheme(false);
    }

    themeToggleButton.addEventListener('click', () => {
      setTheme(!body.classList.contains('dark-mode'));
    });
  }

  // --- Smooth Scroll for Navigation ---
  document.querySelectorAll('nav.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Weather Widget (Mock) ---
  function updateWeather() {
    const weatherWidget = document.querySelector('.weather-widget span');
    if (weatherWidget) {
      const temperatures = [24, 26, 28, 30, 32];
      const conditions = ['Sunny', 'Cloudy', 'Partly Cloudy', 'Clear'];
      const temp = temperatures[Math.floor(Math.random() * temperatures.length)];
      const condition = conditions[Math.floor(Math.random() * conditions.length)];
      weatherWidget.textContent = `${temp}°C ${condition}`;
    }
  }
  updateWeather();
  setInterval(updateWeather, 300000);

  // --- Render Projects (with Duplication Support & Correct Links) ---
  function renderProjects(projectsToRender, filterCategory) {
    const projectsGrid = document.getElementById('github-projects-grid');
    projectsGrid.innerHTML = '';

    // If "All" is selected, show unique projects (remove duplicates by name)
    let filtered;
    if (filterCategory === 'All') {
      const seen = new Set();
      filtered = projectsToRender.filter(project => {
        if (seen.has(project.name)) return false;
        seen.add(project.name);
        return true;
      });
    } else {
      // For specific categories, show all projects (including duplicates)
      filtered = projectsToRender.filter(project => project.category === filterCategory);
    }

    if (filtered.length === 0) {
      projectsGrid.innerHTML = '<p class="loading-message">No projects found for this category.</p>';
      return;
    }

    filtered.forEach(project => {
      // Use the repo field for the GitHub link
      const repoName = project.repo || project.name.replace(/\s/g, '-');
      const projectLink = `https://github.com/VishaHameed1/${repoName}`;
      
      // Add internship badge if category is Internships
      const isInternship = project.category === 'Internships';
      
      // Add LinkedIn link if available
      const linkedinLink = project.linkedin || null;
      
      projectsGrid.innerHTML += `
        <div class="project-card ${isInternship ? 'internship-card' : ''}">
          <div class="project-card-header">
            <h3><i class="fas fa-${isInternship ? 'briefcase' : 'folder-open'}"></i> ${project.name}</h3>
            ${isInternship ? '<span class="internship-badge"><i class="fas fa-award"></i> Internship</span>' : ''}
          </div>
          <p class="project-card-description">${project.details || 'No description available.'}</p>
          <div class="project-card-meta">
            <span><i class="fas fa-circle" style="color: var(--accent);"></i> ${project.primaryLanguage}</span>
            <span><i class="fas fa-calendar-alt"></i> ${project.updated}</span>
          </div>
          <div class="project-card-links">
            <a href="${projectLink}" target="_blank" rel="noopener noreferrer" class="project-link github-link">
              <i class="fab fa-github"></i> GitHub
            </a>
            ${linkedinLink ? `
              <a href="${linkedinLink}" target="_blank" rel="noopener noreferrer" class="project-link linkedin-link">
                <i class="fab fa-linkedin"></i> LinkedIn Post
              </a>
            ` : ''}
          </div>
        </div>
      `;
    });
  }

  // --- Setup Category Filter Buttons ---
  function setupCategoryFilters(projects) {
    const categoryContainer = document.getElementById('project-categories');
    categoryContainer.innerHTML = '';

    // Define custom order for categories
    const categoryOrder = ['All', 'AI/ML', '.NET/C#', 'Cybersecurity', 'Web Development', 'PHP', 'Mobile Development', 'Internships', 'Other'];
    
    // Get unique categories and sort by custom order
    const categories = [...new Set(projects.map(p => p.category))];
    const sortedCategories = categoryOrder.filter(cat => categories.includes(cat));

    sortedCategories.forEach(category => {
      const button = document.createElement('button');
      button.textContent = category;
      button.classList.add('category-button');
      if (category === 'All') button.classList.add('active');

      // Add icons to specific categories
      if (category === 'Internships') {
        button.innerHTML = '<i class="fas fa-briefcase"></i> Internships';
      }
      if (category === 'Mobile Development') {
        button.innerHTML = '<i class="fas fa-mobile-alt"></i> Mobile Development';
      }
      if (category === 'AI/ML') {
        button.innerHTML = '<i class="fas fa-brain"></i> AI/ML';
      }
      if (category === 'Web Development') {
        button.innerHTML = '<i class="fas fa-globe"></i> Web Development';
      }
      if (category === 'Cybersecurity') {
        button.innerHTML = '<i class="fas fa-shield-alt"></i> Cybersecurity';
      }
      if (category === '.NET/C#') {
        button.innerHTML = '<i class="fas fa-code"></i> .NET/C#';
      }
      if (category === 'PHP') {
        button.innerHTML = '<i class="fab fa-php"></i> PHP';
      }

      button.addEventListener('click', () => {
        document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderProjects(projects, category);
      });

      categoryContainer.appendChild(button);
    });
  }

  // --- Initialize Projects ---
  setupCategoryFilters(PROJECTS_DATA);
  renderProjects(PROJECTS_DATA, 'All');

  // --- Display Project Count in Console ---
  console.log(`✅ Total projects loaded: ${PROJECTS_DATA.length}`);
  console.log(`📊 Categories: ${[...new Set(PROJECTS_DATA.map(p => p.category))].join(', ')}`);
  
  // --- Internship Stats ---
  const internshipProjects = PROJECTS_DATA.filter(p => p.category === 'Internships');
  console.log(`🎓 Internship projects: ${internshipProjects.length}`);
  console.log(`   - HexSoftware: ${internshipProjects.filter(p => p.name.includes('HexSoftware') || p.name.includes('hexsoftware')).length}`);
  console.log(`   - DevelopersHub: ${internshipProjects.filter(p => p.name.includes('AI-ML-Internship-Tasks')).length}`);
  
  // --- Mobile Development Stats ---
  const mobileProjects = PROJECTS_DATA.filter(p => p.category === 'Mobile Development');
  console.log(`📱 Mobile Development projects: ${mobileProjects.length}`);
  
});
