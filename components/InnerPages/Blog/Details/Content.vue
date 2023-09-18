<template>
  <section class="blog section-padding pb-0">
    <Post />
    <RecentPosts />
    <Comments />
    <CommentsForm />
  </section>
</template>
  
<script setup>
//= Components
import Post from './Post';
import RecentPosts from './RecentPosts';
import Comments from './Comments';
import CommentsForm from './CommentsForm';
</script>