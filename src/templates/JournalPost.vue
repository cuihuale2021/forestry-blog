<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <!-- 文章详情头部 -->
        <div class="journal-header">
          <h1 class="journal-title" v-html="$page.post.title"></h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name" v-text="$page.post.author"></span>
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div v-text="$page.post.date"></div>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>{{$page.post.timeToRead}} min read</span>
            </div>
          </div>
        </div>
        <!-- 文章详情内容 -->
        <JournalContent :content="$page.post.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query JournalPost ($path: String!){
    post: strapiJournals(path: $path){
        title 
        author
        date (format: "D. MMMM YYYY")
        timeToRead
        content
    }
}
</page-query>
<script>
import JournalContent from "@/components/JournalContent.vue";
export default {
  components: {
    JournalContent
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style scoped>
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem 0;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
</style>