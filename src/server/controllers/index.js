import router from 'koa-simple-router';
import BooksController from '@controllers/BooksController';
import IndexController from '@controllers/IndexController';
import ApiController from '@controllers/ApiController';
const booksController = new BooksController();
const apiController = new ApiController();
const indexController = new IndexController();
export default (app) => {
  app.use(
    router((_) => {
      _.get('/', indexController.actionIndex);
      _.get('/index.html', indexController.actionIndex);
      _.get('/books/list', booksController.actionIndex);
      _.get('/api/list', apiController.actionIndex);
    })
  );
};
