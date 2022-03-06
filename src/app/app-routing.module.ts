import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'article', loadChildren: () => import('./article/article.module').then((m) => m.ArticleModule) },
  { path: 'category', loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule) },
  { path: 'tag', loadChildren: () => import('./tag/tag.module').then((m) => m.TagModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
