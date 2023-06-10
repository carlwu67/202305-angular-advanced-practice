import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { Article } from 'src/app/interfaces/article';
import { map, shareReplay, switchMap } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export default class PostComponent implements OnInit {
  route = inject(ActivatedRoute);
  postService = inject(PostService);

  article?: Article;
  article$ = this.route.paramMap.pipe(
    // 取得路由參數
    map((params) => params.get('id') || ''),
    // 呼叫 API
    switchMap((id) => this.postService.getArticle(id)),
    // 將結果的 article 儲存起來
    map(result => result.article),
    // 避免畫面重複訂閱
    shareReplay(1)
  );

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // 取得路由參數
      const id = params.get('id') || '';
      console.log(id);
      // 呼叫 API
      this.postService.getArticle(id).subscribe((data) => {
        // 將結果的 article 儲存起來
        this.article = data.article;
      });
    });
  }
}
