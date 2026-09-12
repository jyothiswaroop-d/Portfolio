import fs from 'fs';
import path from 'path';

const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 450 >>
stream
BT
/F1 24 Tf
50 720 Td
(D. JYOTHI SWAROOP - RESUME) Tj
0 -36 Td
/F1 14 Tf
(Full Stack Developer | AI & Machine Learning Engineer) Tj
0 -30 Td
/F1 12 Tf
(Email: jyothiswaroop@example.com) Tj
0 -30 Td
(--------------------------------------------------------------------------------) Tj
0 -30 Td
/F1 14 Tf
(EDUCATION) Tj
0 -24 Td
/F1 12 Tf
(Bachelor of Technology - Computer Science & Engineering) Tj
0 -40 Td
/F1 14 Tf
(TECHNICAL SKILLS) Tj
0 -24 Td
/F1 12 Tf
(Languages: Python, Java, JavaScript, C++) Tj
0 -20 Td
(Web: React, Node.js, Express, HTML5, CSS3, REST APIs) Tj
0 -20 Td
(Databases: MySQL, MongoDB) Tj
0 -20 Td
(AI/ML: Machine Learning, NLP, Data Analysis, Scikit-Learn, PyTorch) Tj
0 -40 Td
/F1 14 Tf
(PROJECTS) Tj
0 -24 Td
/F1 12 Tf
(1. Full Stack Web Application - E-Commerce Platform) Tj
0 -20 Td
(2. AI Sentiment Analysis System - Intelligent NLP Engine) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000745 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
815
%%EOF`;

const dir = path.join(process.cwd(), 'public', 'assets');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}
fs.writeFileSync(path.join(dir, 'resume.pdf'), pdfContent);
console.log('PDF created successfully at public/assets/resume.pdf');
