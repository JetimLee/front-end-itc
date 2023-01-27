<x-layout>
    <x-slot name="banner">
        <h1>My Blog</h1>
    </x-slot>

    <x-slot name="content">
        @foreach ($posts as $post)
            <article class="{{ $loop->even ? 'mb-6' : '' }}">
                <h1>
                    <a href="/posts/{{ $post->slug }}">
                        {{ $post->title }}
                    </a>
                </h1>
                <div>
                    <?= $post->excerpt ?>
                </div>
            </article>
        @endforeach
    </x-slot>
</x-layout>
