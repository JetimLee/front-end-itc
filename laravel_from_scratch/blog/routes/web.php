<?php

use App\Models\Post;
use Illuminate\Support\Facades\Route;
use Spatie\YamlFrontMatter\YamlFrontMatter;
use Illuminate\Support\Facades\File;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    //a view is something you can see with your eyes generally, which means that it is the HTML
    //returning json 
    // ['foo'=>'bar']
    // $document = YamlFrontMatter::parseFile(resource_path('posts/my-fourth-post.html'));


    // $files = File::files(resource_path("posts"));

    // $posts = collect($files)->map(function ($file) {
    //     $document = YamlFrontMatter::parseFile($file);
    //     return  new Post($document->title, $document->excerpt, $document->date, $document->body(), $document->slug);
    // });
    //these two are functionally identical
    // $posts = array_map(function ($file) {
    //     $document = YamlFrontMatter::parseFile($file);
    //     return  new Post($document->title, $document->excerpt, $document->date, $document->body(), $document->slug);
    // }, $files);

    // ddd($posts);

    return view('posts', ['posts' => Post::all()]);
});

//wrapping this in braces makes the route have a wild card which will be matched and then passed to the function
Route::get('posts/{post}', function ($slug) {
    //all of the magic happens inside of the class method
    $post = Post::findOrFail($slug);


    return view('post', ['post' => Post::find($slug)]);
});
