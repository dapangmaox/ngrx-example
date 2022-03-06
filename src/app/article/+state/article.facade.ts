import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticleState } from './article.reducer';
import {
  selectArticles,
  selectError,
  selectLoading,
} from './article.selectors';
import * as ArticleActions from './article.actions';

@Injectable()
export class ArticleFacade {
  articles$ = this.store.select(selectArticles);
  isLoading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  constructor(private store: Store<ArticleState>) {}

  loadArticles() {
    this.store.dispatch(ArticleActions.getArticleList());
  }
}
