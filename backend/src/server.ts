import { app } from './app';

const port = 3000;
app.listen(port, () => {
   console.log(`Server has been started on port: http://localhost:${port}/ 🚀`);
});
