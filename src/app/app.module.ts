import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {BlogComponent} from './blog/blog.component';
import {PostComponent} from './post/post.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PostCardComponent} from './post-card/post-card.component';
import {SearchWidgetComponent} from './search-widget/search-widget.component';
import {LatestPostsComponent} from './latest-posts/latest-posts.component';
import {CategoriesComponent} from './categories/categories.component';
import {TagsComponent} from './tags/tags.component';
import {PostDataComponent} from './post-data/post-data.component';
import {PagingComponent} from './paging/paging.component';
import {FooterPostsComponent} from './footer-posts/footer-posts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostsTableComponent} from './posts-table/posts-table.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {NewPostComponent} from './new-post/new-post.component';
import {UserListComponent} from './admin/user-list/user-list.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    PageNotFoundComponent,
    PostCardComponent,
    SearchWidgetComponent,
    LatestPostsComponent,
    CategoriesComponent,
    TagsComponent,
    PostDataComponent,
    PagingComponent,
    FooterPostsComponent,
    PostsTableComponent,
    EditPostComponent,
    NewPostComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
