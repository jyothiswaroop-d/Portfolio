export const projectsData = [
  {
    id: "fs-1",
    title: "Student Monitoring & Attendance Management System",
    category: "fullstack",
    categoryName: "Full Stack Development / Web",
    image: "/assets/projects/proj_1-1.png",
    date: "Jan 2026",
    shortDescription: "Developed a web-based student transportation management platform with real-time bus tracking, automated attendance, and route visualization dashboards.",

    problem: "Schools lack a unified system to track student transportation and attendance in real time, leading to unreliable records, safety concerns, and poor communication with parents.",

    solution: "Developed a web-based platform using React and Node.js that provides real-time attendance tracking, live bus location updates, and automated notifications, ensuring transparency between school administration and parents.",
    technologies: [
      "React (Vite.js)",
      "Node.js (Express)",
      "MongoDB Atlas",
      "OpenStreetMap API",
      "REST APIs"
    ],

    keyFeatures: [
      "Live Bus Tracking with Map-Based Visualization",
      "Automated Attendance Management System",
      "Parent Dashboard for Real-Time Student Status",
      "Admin Panel for Monitoring Routes and Attendance Logs",
      "Instant SMS & Email Notifications for Safety Alerts",
      "Secure Backend with Role-Based Access Control"
    ],
    github: "https://github.com/jyothiswaroop-d",
    demo: "",
    challengesLearnings: "Focused on building a reliable real-time system by optimizing API response times and ensuring consistent data synchronization between frontend dashboards and cloud database. Learned to design user-centric dashboards for both parents and administrators."
  },



{
    id: "ml-2",
    title: "GeoVision AI",
    category: "aiml",
    categoryName: "AI / Machine Learning",
    image: "/assets/projects/proj_2-1.png",
    date: "January 2025",
    shortDescription: "Developed an end-to-end AI pipeline for automated extraction and mapping of rural infrastructure from high-resolution drone orthophotos using deep learning and geospatial processing.",

    problem: "Manual extraction of infrastructure data from large-scale drone imagery is slow, expensive, and non-scalable, limiting the effectiveness of rural planning and government initiatives like SVAMITVA.",

    solution: "Built a multi-stage deep learning pipeline that performs semantic segmentation, rooftop classification, and object detection on drone orthophotos, generating GIS-ready outputs for automated rural infrastructure mapping.",

    technologies: [
      "PyTorch",
      "DeepLabV3+",
      "YOLOv8",
      "ResNet18",
      "OpenCV",
      "Rasterio",
      "GeoPandas",
      "Shapely",
      "QGIS",
      "Albumentations"
    ],

    keyFeatures: [
      "Semantic Segmentation of Buildings, Roads, and Water Bodies",
      "Rooftop Classification (RCC, Tiled, Sheet, etc.) using CNN",
      "Object Detection for Utilities (Transformers, Tanks, Wells)",
      "End-to-End Pipeline: GeoTIFF → GIS Shapefile Output",
      "Automated Vectorization of Segmentation Masks",
      "Scalable Processing for Large-Scale Village Datasets"
    ],
    github: "https://github.com/iakpathan/GeoVisionAI",
    demo : "",
    challengesLearnings: "Handled extremely large GeoTIFF datasets (100K+ resolution) by implementing a memory-efficient 512×512 patch-based pipeline. Addressed class imbalance and improved segmentation performance, achieving a mean IoU of 0.696 with strong building detection accuracy."
},

  {
    id: "ml-1",
    title: "GrocBankX",
    category: "aiml",
    categoryName: "AI / Machine Learning",
    image: "/assets/projects/proj_2-2.png",
    date: "April 2026",

    shortDescription: "Developed a secure grocery payment system integrating machine learning-based fraud detection with real-time face verification to reduce false transaction blocking.",
    problem: "Traditional fraud detection systems often block legitimate high-value or unusual transactions due to imbalanced data, leading to poor user experience and unnecessary payment failures.",

    solution: "Designed a risk-based authentication system where suspicious transactions are validated using a Random Forest fraud detection model, followed by real-time face verification with liveness detection instead of outright rejection.",

    technologies: [
      "React",
      "Next.js",
      "Flask",
      "Scikit-learn",
      "PostgreSQL",
      "Computer Vision",
      "Face Recognition"
    ],

    keyFeatures: [
      "ML-Based Fraud Detection using Random Forest",
      "SMOTE-Based Handling of Imbalanced Transaction Data",
      "Risk-Based Authentication Instead of Direct Blocking",
      "Real-Time Face Verification via Webcam",
      "Eye-Blink Liveness Detection to Prevent Spoofing",
      "Secure Payment Flow with Reduced False Declines"
    ],

    github: "https://github.com/jyothiswaroop-d/GrocBankX",
    demo: "",
    challengesLearnings: "Handled highly imbalanced fraud data using SMOTE and optimized model performance to minimize false positives. Designed a multi-layer authentication flow combining ML predictions with real-time computer vision to improve both security and user experience."
  },




  {
    id: "exp-1",
    title: "Human Development Index (HDI) Predictor",
    category: "experience",
    categoryName: "Experience",
    company: "SmartBridge Educational Services Pvt. Ltd.",
    startDate: "May 2026",
    endDate: "July 2026",
    image: "/assets/projects/proj_3-1.png",
    shortDescription: "Developed a machine learning web application to predict the Human Development Index (HDI) of countries using socio-economic indicators with high accuracy.",
    problem: "Analyzing and estimating a country's development level requires interpreting multiple socio-economic indicators, which can be complex and time-consuming without a predictive system.",

    solution: "Built a regression-based ML model integrated with a Flask web application to predict HDI from key indicators and classify countries into development categories for easier interpretation.",

    technologies: [
        "Python",
        "Scikit-learn",
        "Flask",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "HTML",
        "CSS"
      ],

    keyFeatures: [
        "HDI Prediction using Linear Regression",
        "Classification into Development Categories (Low to Very High)",
        "End-to-End ML Pipeline (EDA → Training → Deployment)",
        "Interactive Web Interface for Real-Time Predictions",
        "Model Persistence using Pickle (.pkl)"
      ],

    github: "https://github.com/jyothiswaroop-d/Human-Development-Index-Predictor",
    demo: "",
    challengesLearnings: "Gained hands-on experience in the complete ML lifecycle including data preprocessing, feature selection, model evaluation, and deployment. Achieved strong model performance with an R² score of 97.23%, ensuring reliable predictions."
}
];

