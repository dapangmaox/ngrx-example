import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleService } from './article.service';
import { ArticleFacade } from './+state/article.facade';
import { SharedModule } from '../shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';
import { StoreModule } from '@ngrx/store';
import { Features } from '../core/models/features';
import { articleFeature } from './+state/article.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './+state/article.effects';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ArticleRoutingModule,
    StoreModule.forFeature(Features.Article, articleFeature.reducer),
    EffectsModule.forFeature([ArticleEffects]),
  ],
  providers: [ArticleService, ArticleFacade],
})
export class ArticleModule {}
