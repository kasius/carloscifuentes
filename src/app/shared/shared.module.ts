import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MdListModule } from '@angular/material';

// Services
import { ArticleService } from '../services/article.service';

// Components
import { SidebarKasiusComponent } from './sidebar-kasius/sidebar-kasius.component';
import { WidgetKasiusComponent } from './widget-kasius/widget-kasius.component';
import { WidgetPagesComponent } from './widget-pages/widget-pages.component';
import { WidgetSharedComponent } from './widget-shared/widget-shared.component';
import { WidgetContentBlogComponent } from './widget-content-blog/widget-content-blog.component';
import { WidgetArticleComponent } from './widget-article/widget-article.component';
import { WidgetContentArticleComponent } from './widget-content-article/widget-content-article.component';
import { WidgetTitleBigComponent } from './widget-title-big/widget-title-big.component';
import { WidgetContentMyComponent } from './widget-content-my/widget-content-my.component';
import { WidgetContentTechnologiesComponent } from './widget-content-technologies/widget-content-technologies.component';
import { WidgetContactComponent } from './widget-contact/widget-contact.component';
import { WidgetContentWorksComponent } from './widget-content-works/widget-content-works.component';
import { WidgetCommentComponent } from './widget-comment/widget-comment.component';
import { WidgetTitleSecondComponent } from './widget-title-second/widget-title-second.component';
import { WidgetWorkComponent } from './widget-work/widget-work.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    MdListModule
  ],
  exports: [
    SidebarKasiusComponent,
    WidgetKasiusComponent,
    WidgetPagesComponent,
    WidgetSharedComponent,
    WidgetContentBlogComponent,
    WidgetArticleComponent,
    WidgetContentArticleComponent,
    WidgetTitleBigComponent,
    WidgetContentMyComponent,
    WidgetContentTechnologiesComponent,
    WidgetContactComponent,
    WidgetContentWorksComponent,
    WidgetCommentComponent,
    WidgetTitleSecondComponent,
    WidgetWorkComponent
  ],
  declarations: [
    SidebarKasiusComponent,
    WidgetKasiusComponent,
    WidgetPagesComponent,
    WidgetSharedComponent,
    WidgetContentBlogComponent,
    WidgetArticleComponent,
    WidgetContentArticleComponent,
    WidgetTitleBigComponent,
    WidgetContentMyComponent,
    WidgetContentTechnologiesComponent,
    WidgetContactComponent,
    WidgetContentWorksComponent,
    WidgetCommentComponent,
    WidgetTitleSecondComponent,
    WidgetWorkComponent],
  providers: [ArticleService]
})
export class SharedModule { }
