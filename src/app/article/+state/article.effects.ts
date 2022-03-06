import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ArticleService } from '../article.service';
import * as ArticleActions from './article.actions';

@Injectable()
export class ArticleEffects {
  getArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.getArticleList),
      exhaustMap(() =>
        this.articleService.getArticles().pipe(
          map((articles) => ArticleActions.getArticleListSuccess({ payload: articles })),
          catchError((error) => of(ArticleActions.getArticleListFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private articleService: ArticleService) {}
}
