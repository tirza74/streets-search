# מטלת בית – חיפוש בבאר הרחובות 
 
פרויקט זה נבנה לצורך מטלת בית למשרת מפתח בכיר/מומחה טכנולוגי – מיקוד בחיפוש, עבור אגף התקשוב ומערכות מידע של משרד הביטחון. 
 
הפרויקט כולל: 
- Backend ב-Node + TypeScript לטעינת CSV ל-Elasticsearch. 
- Frontend ב-React לחיפוש והצגת תוצאות. 
- Docker Compose להרצת כל המערכת. 
- חיפוש לפי שדות, חיפוש חופשי, הצגת 6 שדות בלבד לכל תוצאה, כפתור DELETE לוגי. 
 
## התקנה והרצה 
1. התקן Docker ו-Docker Compose 
2. הרץ את הפרויקט: 
```bash 
docker-compose up --build 
``` 
3. Backend יפעל על port 3001 
4. Frontend יפעל על port 3000 
