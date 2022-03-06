import { createFeature, createReducer, on } from '@ngrx/store';
import { Features } from 'src/app/core/models/features';
import { Article } from '../article.interface';
import {
  getArticleList,
  getArticleListFailure,
  getArticleListSuccess,
} from './article.actions';

export interface ArticleState {
  articles: Article[];
  loading: boolean;
  error: any;
}

export const initialState: ArticleState = {
  articles: [],
  loading: false,
  error: null,
};

const _articleReducer = createReducer(
  initialState,
  on(getArticleList, (state) => ({ ...state, loading: true })),
  on(getArticleListSuccess, (state, { payload }) => ({
    ...state,
    articles: payload,
    loading: false,
  })),
  on(getArticleListFailure, (state, { error }) => ({ ...state, error }))
);

export const articleFeature = createFeature({
  name: Features.Article,
  reducer: _articleReducer,
});
