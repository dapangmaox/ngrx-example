import { createAction, props } from '@ngrx/store';
import { Article } from '../article.interface';

export const getArticleList = createAction('[Article] Get Article List');
export const getArticleListSuccess = createAction(
  '[Article] Get Article List Success',
  props<{ payload: Article[] }>()
);
export const getArticleListFailure = createAction(
  '[Article] Get Article List Failure',
  props<{ error: any }>()
);
