@echo off
REM ---- יצירת תיקיות ----
mkdir backend
mkdir backend\src
mkdir frontend
mkdir frontend\src

REM ---- יצירת CSV ----
echo ׳©׳ ׳¨׳׳©׳™	׳×׳•׳׳¨	׳©׳ ׳׳™׳©׳ ׳™	׳§׳‘׳•׳¦׳”	׳§׳‘׳•׳¦׳” ׳ ׳•׳¡׳₪׳×	׳¡׳•׳’	׳§׳•׳“	׳©׳›׳•׳ ׳” > backend\src\data.csv
echo ׳׳•׳¡׳™׳©׳§׳™׳		׳׳ ׳—׳ (׳׳ ׳“׳)	׳“. ׳”׳¡׳˜׳•׳¨׳™׳” ׳™׳”׳•׳“׳™׳×		׳¨׳—׳•׳‘	801	׳ >> backend\src\data.csv

REM ---- Backend package.json ----
echo {^
  "name": "streets-backend",^
  "version": "1.0.0",^
  "main": "dist/index.js",^
  "scripts": {^
    "build": "tsc",^
    "start": "node dist/index.js"^
  },^
  "dependencies": {^
    "@elastic/elasticsearch": "^8.9.0",^
    "csv-parser": "^3.0.0",^
    "express": "^4.18.2",^
    "cors": "^2.8.5"^
  },^
  "devDependencies": {^
    "typescript": "^5.2.2",^
    "@types/node": "^20.5.1",^
    "@types/express": "^4.17.21",^
    "@types/csv-parser": "^2.3.2"^
  }^
} > backend\package.json

REM ---- Backend tsconfig.json ----
echo {^
  "compilerOptions": {^
    "target": "ES2020",^
    "module": "commonjs",^
    "outDir": "dist",^
    "strict": true,^
    "esModuleInterop": true^
  },^
  "include": ["src"]^
} > backend\tsconfig.json

REM ---- Frontend package.json ----
echo {^
  "name": "streets-frontend",^
  "version": "1.0.0",^
  "scripts": {^
    "start": "react-scripts start",^
    "build": "react-scripts build"^
  },^
  "dependencies": {^
    "react": "^18.2.0",^
    "react-dom": "^18.2.0",^
    "axios": "^1.5.1"^
  },^
  "devDependencies": {^
    "typescript": "^5.2.2",^
    "@types/react": "^18.2.14",^
    "@types/react-dom": "^18.2.7"^
  }^
} > frontend\package.json

REM ---- docker-compose.yml ----
echo version: "3.9" > docker-compose.yml
echo services: >> docker-compose.yml
echo ^  elasticsearch: >> docker-compose.yml
echo ^    image: docker.elastic.co/elasticsearch/elasticsearch:8.9.0 >> docker-compose.yml
echo ^    container_name: elasticsearch >> docker-compose.yml
echo ^    environment: >> docker-compose.yml
echo ^      - discovery.type=single-node >> docker-compose.yml
echo ^      - ES_JAVA_OPTS=-Xms512m -Xmx512m >> docker-compose.yml
echo ^    ports: >> docker-compose.yml
echo ^      - "9200:9200" >> docker-compose.yml
echo ^  backend: >> docker-compose.yml
echo ^    build: ./backend >> docker-compose.yml
echo ^    depends_on: >> docker-compose.yml
echo ^      - elasticsearch >> docker-compose.yml
echo ^    ports: >> docker-compose.yml
echo ^      - "3001:3001" >> docker-compose.yml
echo ^  frontend: >> docker-compose.yml
echo ^    build: ./frontend >> docker-compose.yml
echo ^    ports: >> docker-compose.yml
echo ^      - "3000:3000" >> docker-compose.yml

REM ---- README.md ----
echo # מטלת בית – חיפוש בבאר הרחובות > README.md
echo. >> README.md
echo פרויקט זה נבנה לצורך מטלת בית למשרת מפתח בכיר/מומחה טכנולוגי – מיקוד בחיפוש, עבור אגף התקשוב ומערכות מידע של משרד הביטחון. >> README.md
echo. >> README.md
echo הפרויקט כולל: >> README.md
echo - Backend ב-Node + TypeScript לטעינת CSV ל-Elasticsearch. >> README.md
echo - Frontend ב-React לחיפוש והצגת תוצאות. >> README.md
echo - Docker Compose להרצת כל המערכת. >> README.md
echo - חיפוש לפי שדות, חיפוש חופשי, הצגת 6 שדות בלבד לכל תוצאה, כפתור DELETE לוגי. >> README.md
echo. >> README.md
echo ## התקנה והרצה >> README.md
echo 1. התקן Docker ו-Docker Compose >> README.md
echo 2. הרץ את הפרויקט: >> README.md
echo ^```bash >> README.md
echo docker-compose up --build >> README.md
echo ^``` >> README.md
echo 3. Backend יפעל על port 3001 >> README.md
echo 4. Frontend יפעל על port 3000 >> README.md

echo הקבצים נוצרו בהצלחה!
pause