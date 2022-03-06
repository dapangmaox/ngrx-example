import { Component, OnInit } from '@angular/core';
import { ArticleFacade } from './+state/article.facade';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author'];

  articles$ = this.articleFacade.articles$;
  isLoading$ = this.articleFacade.isLoading$;

  constructor(private articleFacade: ArticleFacade) {}

  ngOnInit(): void {
    this.articleFacade.loadArticles();
  }
}
