<template>
  <div>

    <h2>6. PropsSetting</h2>
    
    <h6>props in `/assets/index.esm.js`</h6>
    
    <markdown-it-vue
      class="md-body"
      style="height: 500px; overflow-y: scroll;"
      :content="getIntexEsmJs"
      :options="options"
    />
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: 'LocalSetting',
  components: {
    MarkdownItVue,
  },
  computed: {
    ...mapGetters({
      getIntexEsmJs: 'datepicker/getIntexEsmJs',
    }),
  },
  data() {
    return {
      options: {
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        }
      },
    }
  }
}
</script>