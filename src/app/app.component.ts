import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNewsCardComponent } from './components/dialog-news-card/dialog-news-card.component';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  // imports: [MatGridListModule],

})
export class AppComponent implements OnInit {
  newsArticles: any[] = [];

  constructor(
    private dialog: MatDialog,
    private newsService: NewsService) { }

  ngOnInit(): void {
    this.fetchNews();
  }

  title = 'news-of-the-world';

  fetchNews(): void {
    this.newsService.getNews().subscribe((response) => {
      this.newsArticles = response.articles;
    });
  }

  openDialog(article: any): void {
    this.dialog.open(DialogNewsCardComponent,{
      data: article
    });
  }
}
