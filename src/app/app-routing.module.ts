import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {HomeComponent} from './home/home.component';
import {NewPostComponent} from './new-post/new-post.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PostComponent} from './post/post.component';
import {PostsTableComponent} from './posts-table/posts-table.component';
import {UserListComponent} from './admin/user-list/user-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'admin', component: PostsTableComponent},
  {path: 'admin/post/:id', component: EditPostComponent},
  {path: 'admin/newPost', component: NewPostComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'users', component: UserListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
